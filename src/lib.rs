// SPDX-FileCopyrightText: 2025 Miikka Koskinen
//
// SPDX-License-Identifier: ISC

use pyo3::prelude::*;

mod bits;
mod bit_utils;
mod gorilla;
mod chimp;
mod chimp128;
mod patas;

/// Workaround to make `from floatbungler import <submodule>` work
/// See https://github.com/PyO3/pyo3/issues/759 for background
fn register_submodule(
    parent: &Bound<'_, PyModule>,
    submodule: &Bound<'_, PyModule>,
    name: &str,
) -> PyResult<()> {
    parent.add_submodule(submodule)?;
    parent
        .py()
        .import("sys")?
        .getattr("modules")?
        .set_item(format!("floatbungler.{}", name), submodule)?;
    Ok(())
}

/// Compression algorithms for floating-point data
#[pymodule]
fn floatbungler(m: &Bound<'_, PyModule>) -> PyResult<()> {
    let gorilla = PyModule::new(m.py(), "gorilla")?;
    gorilla.add_function(wrap_pyfunction!(gorilla::encode, &gorilla)?)?;
    gorilla.add_function(wrap_pyfunction!(gorilla::decode, &gorilla)?)?;
    register_submodule(m, &gorilla, "gorilla")?;

    let chimp = PyModule::new(m.py(), "chimp")?;
    chimp.add_function(wrap_pyfunction!(chimp::encode, &chimp)?)?;
    chimp.add_function(wrap_pyfunction!(chimp::decode, &chimp)?)?;
    register_submodule(m, &chimp, "chimp")?;

    let chimp128 = PyModule::new(m.py(), "chimp128")?;
    chimp128.add_function(wrap_pyfunction!(chimp128::encode, &chimp128)?)?;
    chimp128.add_function(wrap_pyfunction!(chimp128::decode, &chimp128)?)?;
    register_submodule(m, &chimp128, "chimp128")?;

    let patas = PyModule::new(m.py(), "patas")?;
    patas.add_function(wrap_pyfunction!(patas::encode, &patas)?)?;
    patas.add_function(wrap_pyfunction!(patas::decode, &patas)?)?;
    register_submodule(m, &patas, "patas")?;

    Ok(())
}
