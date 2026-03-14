// SPDX-FileCopyrightText: 2025 Miikka Koskinen
//
// SPDX-License-Identifier: ISC

use bytes::{BufMut, Bytes, BytesMut};

pub struct Bitwrite {
    buf: BytesMut,
    bitbuf: u8,
    bitcount: u8,
}

impl Bitwrite {
    pub fn new(buf: BytesMut) -> Self {
        Bitwrite {
            buf,
            bitbuf: 0,
            bitcount: 0,
        }
    }

    #[inline]
    pub fn put_bit(&mut self, value: u8) {
        self.bitbuf |= value << (7 - self.bitcount);
        self.bitcount += 1;
        if self.bitcount == 8 {
            self.buf.put_u8(self.bitbuf);
            self.bitcount = 0;
            self.bitbuf = 0;
        }
    }

    #[inline]
    pub fn put_u64_lowest_bits(&mut self, value: u64, count: u8) {
        if self.bitcount == 0 && count == 64 {
            self.buf.put_u64(value);
            return;
        }

        let free = 8 - self.bitcount;
        if count <= free {
            let mask = ((1u16 << count) - 1) as u8;
            self.bitbuf |= ((value as u8) & mask) << (free - count);
            self.bitcount += count;
            if self.bitcount == 8 {
                self.buf.put_u8(self.bitbuf);
                self.bitcount = 0;
                self.bitbuf = 0;
            }
            return;
        }

        let mut remaining = count;

        while self.bitcount != 0 {
            let bit = ((value >> (remaining - 1)) & 1) as u8;
            self.put_bit(bit);
            remaining -= 1;
        }

        while remaining >= 8 {
            let byte = ((value >> (remaining - 8)) & 0xFF) as u8;
            self.buf.put_u8(byte);
            remaining -= 8;
        }

        while remaining > 0 {
            let bit = ((value >> (remaining - 1)) & 1) as u8;
            self.put_bit(bit);
            remaining -= 1;
        }
    }

    pub fn put_f64(&mut self, value: f64) {
        self.put_u64_lowest_bits(value.to_bits(), 64);
    }

    pub fn into_bytes(mut self) -> Bytes {
        self.buf.put_u8(self.bitbuf);
        self.buf.split().into()
    }
}

pub struct Bitread<'a> {
    buf: &'a [u8],
    bytep: usize,
    bitp: u8,
}

impl<'a> Bitread<'a> {
    pub fn new(buf: &'a [u8]) -> Self {
        Bitread {
            buf,
            bytep: 0,
            bitp: 0,
        }
    }

    #[inline]
    pub fn read_bit(&mut self) -> u8 {
        let result = self.buf[self.bytep] >> (7 - self.bitp) & 1;
        self.bitp += 1;
        if self.bitp == 8 {
            self.bytep += 1;
            self.bitp = 0;
        }
        result
    }

    #[inline]
    pub fn read_u64_lowest_bits(&mut self, count: u8) -> u64 {
        if self.bitp == 0 && count == 64 {
            let mut bytes = [0u8; 8];
            bytes.copy_from_slice(&self.buf[self.bytep..self.bytep + 8]);
            self.bytep += 8;
            return u64::from_be_bytes(bytes);
        }

        let available = 8 - self.bitp;
        if count <= available {
            let byte = self.buf[self.bytep];
            let shift = available - count;
            let mask = ((1u16 << count) - 1) as u8;
            let bits = ((byte >> shift) & mask) as u64;
            self.bitp += count;
            if self.bitp == 8 {
                self.bytep += 1;
                self.bitp = 0;
            }
            return bits;
        }

        let mut bits: u64 = 0;
        let mut remaining = count;

        while self.bitp != 0 {
            bits = (bits << 1) | (self.read_bit() as u64);
            remaining -= 1;
        }

        while remaining >= 8 {
            bits = (bits << 8) | self.buf[self.bytep] as u64;
            self.bytep += 1;
            remaining -= 8;
        }

        while remaining > 0 {
            bits = (bits << 1) | (self.read_bit() as u64);
            remaining -= 1;
        }
        bits
    }

    pub fn read_f64(&mut self) -> f64 {
        f64::from_bits(self.read_u64_lowest_bits(64))
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn bitstream_write_read_bits() {
        let buf = BytesMut::with_capacity(1024);
        let mut stream = Bitwrite::new(buf);
        let write_bits = [1, 0, 1, 1, 0, 0, 1, 0];

        for bit in write_bits {
            stream.put_bit(bit);
        }

        let bytes = stream.into_bytes();
        let mut r = Bitread::new(&bytes);

        let mut read_bits: Vec<u8> = vec![];
        for _ in 0..8 {
            read_bits.push(r.read_bit());
        }

        assert_eq!(&read_bits[..], write_bits);
    }

    #[test]
    fn bitstream_write_read_f64() {
        let buf = BytesMut::with_capacity(1024);
        let mut stream = Bitwrite::new(buf);
        let value = 123.456;

        stream.put_f64(value);

        let bytes = stream.into_bytes();

        let mut r = Bitread::new(&bytes);
        assert_eq!(r.read_f64(), value)
    }
}
