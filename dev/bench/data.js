window.BENCHMARK_DATA = {
  "lastUpdate": 1773488931830,
  "repoUrl": "https://github.com/miikka/floatbungler",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "miikka.koskinen@iki.fi",
            "name": "Miikka Koskinen",
            "username": "miikka"
          },
          "committer": {
            "email": "miikka.koskinen@iki.fi",
            "name": "Miikka Koskinen",
            "username": "miikka"
          },
          "distinct": true,
          "id": "05523aa4f80738f594b3c08f76c1db9c068c4308",
          "message": "chore: push benchmark results to GH Pages",
          "timestamp": "2026-03-14T13:39:32+02:00",
          "tree_id": "f6467993a9c71d947d8bc628781a51b37914008f",
          "url": "https://github.com/miikka/floatbungler/commit/05523aa4f80738f594b3c08f76c1db9c068c4308"
        },
        "date": 1773488520321,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-gorilla]",
            "value": 659298.3211166345,
            "unit": "iter/sec",
            "range": "stddev: 3.796509394308593e-7",
            "extra": "mean: 1.5167640625966239 usec\nrounds: 61084"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-chimp]",
            "value": 540785.7987869412,
            "unit": "iter/sec",
            "range": "stddev: 0.000003853462351953776",
            "extra": "mean: 1.849160984336388 usec\nrounds: 141784"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-chimp128]",
            "value": 221465.33042410298,
            "unit": "iter/sec",
            "range": "stddev: 7.058368597061383e-7",
            "extra": "mean: 4.515379441490974 usec\nrounds: 22346"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-patas]",
            "value": 398670.17067765916,
            "unit": "iter/sec",
            "range": "stddev: 5.12757321932247e-7",
            "extra": "mean: 2.5083391574047313 usec\nrounds: 73774"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-gorilla]",
            "value": 93202.47512085261,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010624072986950608",
            "extra": "mean: 10.729328794147714 usec\nrounds: 66899"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-chimp]",
            "value": 82099.51147779232,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011388909426884656",
            "extra": "mean: 12.180340442957414 usec\nrounds: 52370"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-chimp128]",
            "value": 41606.2529389953,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023127894018827753",
            "extra": "mean: 24.034848835492078 usec\nrounds: 27050"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-patas]",
            "value": 56010.74257512148,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016679603428371223",
            "extra": "mean: 17.853717948102588 usec\nrounds: 41347"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-gorilla]",
            "value": 9885.503689452127,
            "unit": "iter/sec",
            "range": "stddev: 0.0000045415646616827495",
            "extra": "mean: 101.15822434692974 usec\nrounds: 9570"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-chimp]",
            "value": 8957.18222771082,
            "unit": "iter/sec",
            "range": "stddev: 0.000005295412065671695",
            "extra": "mean: 111.64225250506813 usec\nrounds: 8483"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-chimp128]",
            "value": 4756.407894555006,
            "unit": "iter/sec",
            "range": "stddev: 0.00001451253182166313",
            "extra": "mean: 210.24269199972738 usec\nrounds: 4500"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-patas]",
            "value": 5814.462126830769,
            "unit": "iter/sec",
            "range": "stddev: 0.000005916133436858255",
            "extra": "mean: 171.98495375617142 usec\nrounds: 5817"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-gorilla]",
            "value": 180828.57575540143,
            "unit": "iter/sec",
            "range": "stddev: 7.966610545207985e-7",
            "extra": "mean: 5.530099409468637 usec\nrounds: 80103"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-chimp]",
            "value": 150725.3581774305,
            "unit": "iter/sec",
            "range": "stddev: 9.50315867719347e-7",
            "extra": "mean: 6.634583669874731 usec\nrounds: 74047"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-chimp128]",
            "value": 104731.14319380278,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011504773774059425",
            "extra": "mean: 9.548258230596424 usec\nrounds: 34384"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-patas]",
            "value": 142947.9206508521,
            "unit": "iter/sec",
            "range": "stddev: 9.419297005401065e-7",
            "extra": "mean: 6.9955547128417725 usec\nrounds: 81480"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-gorilla]",
            "value": 19320.1907047019,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027831549235177353",
            "extra": "mean: 51.75932346033379 usec\nrounds: 16172"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-chimp]",
            "value": 16954.018393480917,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036821652299207007",
            "extra": "mean: 58.98306683355466 usec\nrounds: 14379"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-chimp128]",
            "value": 13940.018306865348,
            "unit": "iter/sec",
            "range": "stddev: 0.0000040743245194942825",
            "extra": "mean: 71.73591726974333 usec\nrounds: 11193"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-patas]",
            "value": 17081.592719391,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031710544320368263",
            "extra": "mean: 58.54255024268325 usec\nrounds: 15246"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-gorilla]",
            "value": 1835.885063894622,
            "unit": "iter/sec",
            "range": "stddev: 0.000017703240733103468",
            "extra": "mean: 544.6964081066237 usec\nrounds: 1801"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-chimp]",
            "value": 1714.5596739595708,
            "unit": "iter/sec",
            "range": "stddev: 0.00001329368838043408",
            "extra": "mean: 583.2401258397845 usec\nrounds: 1637"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-chimp128]",
            "value": 1418.7106142376479,
            "unit": "iter/sec",
            "range": "stddev: 0.000012764574978671849",
            "extra": "mean: 704.86538266816 usec\nrounds: 1027"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-patas]",
            "value": 1716.0980806999862,
            "unit": "iter/sec",
            "range": "stddev: 0.000012593356097355482",
            "extra": "mean: 582.7172766209877 usec\nrounds: 1681"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-gorilla]",
            "value": 85150.25245050025,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013436110386297302",
            "extra": "mean: 11.743946391483952 usec\nrounds: 30816"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-chimp]",
            "value": 82242.90618472322,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012654838929052762",
            "extra": "mean: 12.159103397366955 usec\nrounds: 47419"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-chimp128]",
            "value": 5484.799089207955,
            "unit": "iter/sec",
            "range": "stddev: 0.000004638606248515908",
            "extra": "mean: 182.3220839515577 usec\nrounds: 4312"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-patas]",
            "value": 9556.448022503335,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030186849033219864",
            "extra": "mean: 104.64138952518967 usec\nrounds: 8993"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-gorilla]",
            "value": 8570.849464720215,
            "unit": "iter/sec",
            "range": "stddev: 0.0000050921354112153485",
            "extra": "mean: 116.67454948500182 usec\nrounds: 6699"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-chimp]",
            "value": 8459.926752794187,
            "unit": "iter/sec",
            "range": "stddev: 0.000004566015030472211",
            "extra": "mean: 118.20433311313424 usec\nrounds: 7571"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-chimp128]",
            "value": 452.9269715505391,
            "unit": "iter/sec",
            "range": "stddev: 0.000009204667542161954",
            "extra": "mean: 2.207861449665107 msec\nrounds: 447"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-patas]",
            "value": 738.4374229161616,
            "unit": "iter/sec",
            "range": "stddev: 0.000009249975059484687",
            "extra": "mean: 1.3542108904108654 msec\nrounds: 730"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-gorilla]",
            "value": 845.8255174541341,
            "unit": "iter/sec",
            "range": "stddev: 0.000018671592524967152",
            "extra": "mean: 1.1822769346211244 msec\nrounds: 673"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-chimp]",
            "value": 837.9257946988612,
            "unit": "iter/sec",
            "range": "stddev: 0.00001802061388147055",
            "extra": "mean: 1.1934231006212024 msec\nrounds: 805"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-chimp128]",
            "value": 44.25501597341112,
            "unit": "iter/sec",
            "range": "stddev: 0.0001042405509853838",
            "extra": "mean: 22.596308644444065 msec\nrounds: 45"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-patas]",
            "value": 90.68656835695317,
            "unit": "iter/sec",
            "range": "stddev: 0.00006216398979873044",
            "extra": "mean: 11.026991296703173 msec\nrounds: 91"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-gorilla]",
            "value": 92296.73726070939,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010899132121837282",
            "extra": "mean: 10.834619182423676 usec\nrounds: 53695"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-chimp]",
            "value": 88738.09969015545,
            "unit": "iter/sec",
            "range": "stddev: 0.000001135354958031651",
            "extra": "mean: 11.26911668710142 usec\nrounds: 47306"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-chimp128]",
            "value": 5494.685728565851,
            "unit": "iter/sec",
            "range": "stddev: 0.000004376850683087853",
            "extra": "mean: 181.99403012281226 usec\nrounds: 5212"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-patas]",
            "value": 9498.336725816678,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036010582085283564",
            "extra": "mean: 105.28159075282929 usec\nrounds: 9019"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-gorilla]",
            "value": 9167.978710206271,
            "unit": "iter/sec",
            "range": "stddev: 0.000005442260405818372",
            "extra": "mean: 109.07529692305546 usec\nrounds: 6500"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-chimp]",
            "value": 9057.72505576167,
            "unit": "iter/sec",
            "range": "stddev: 0.000004650262503415041",
            "extra": "mean: 110.40299786577143 usec\nrounds: 7965"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-chimp128]",
            "value": 452.9136526888946,
            "unit": "iter/sec",
            "range": "stddev: 0.00001648998740171545",
            "extra": "mean: 2.2079263763923183 msec\nrounds: 449"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-patas]",
            "value": 733.4114866121217,
            "unit": "iter/sec",
            "range": "stddev: 0.000008567868698469325",
            "extra": "mean: 1.363491052777673 msec\nrounds: 720"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-gorilla]",
            "value": 879.4464256074812,
            "unit": "iter/sec",
            "range": "stddev: 0.00004335398038467632",
            "extra": "mean: 1.1370789292926466 msec\nrounds: 693"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-chimp]",
            "value": 881.6689614397351,
            "unit": "iter/sec",
            "range": "stddev: 0.00003405165197557629",
            "extra": "mean: 1.1342125488539763 msec\nrounds: 829"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-chimp128]",
            "value": 44.246410403027376,
            "unit": "iter/sec",
            "range": "stddev: 0.00006097286500031248",
            "extra": "mean: 22.60070344444437 msec\nrounds: 45"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-patas]",
            "value": 90.93999751681667,
            "unit": "iter/sec",
            "range": "stddev: 0.00002793251345337776",
            "extra": "mean: 10.996261571428782 msec\nrounds: 91"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-gorilla]",
            "value": 90333.52945636061,
            "unit": "iter/sec",
            "range": "stddev: 0.000001022071062189028",
            "extra": "mean: 11.070086666801743 usec\nrounds: 55823"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-chimp]",
            "value": 86524.92515853196,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011528038529347601",
            "extra": "mean: 11.557363362843581 usec\nrounds: 47531"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-chimp128]",
            "value": 5469.872663087235,
            "unit": "iter/sec",
            "range": "stddev: 0.000004185078933497383",
            "extra": "mean: 182.81961237386335 usec\nrounds: 4752"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-patas]",
            "value": 9522.958873556443,
            "unit": "iter/sec",
            "range": "stddev: 0.00000302948494195553",
            "extra": "mean: 105.00937925677925 usec\nrounds: 9015"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-gorilla]",
            "value": 9223.070526141713,
            "unit": "iter/sec",
            "range": "stddev: 0.000008351013394221945",
            "extra": "mean: 108.42376160581415 usec\nrounds: 8444"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-chimp]",
            "value": 9081.219967762656,
            "unit": "iter/sec",
            "range": "stddev: 0.000008052095307557633",
            "extra": "mean: 110.11736347648129 usec\nrounds: 7962"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-chimp128]",
            "value": 455.35140826184823,
            "unit": "iter/sec",
            "range": "stddev: 0.000012211395421551416",
            "extra": "mean: 2.196106088300387 msec\nrounds: 453"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-patas]",
            "value": 739.0498721129875,
            "unit": "iter/sec",
            "range": "stddev: 0.000007806495652638527",
            "extra": "mean: 1.353088658470288 msec\nrounds: 732"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-gorilla]",
            "value": 933.1192298906619,
            "unit": "iter/sec",
            "range": "stddev: 0.000015469324427732506",
            "extra": "mean: 1.0716744098363238 msec\nrounds: 915"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-chimp]",
            "value": 904.0386604401998,
            "unit": "iter/sec",
            "range": "stddev: 0.000014271209960883699",
            "extra": "mean: 1.1061473847955507 msec\nrounds: 855"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-chimp128]",
            "value": 44.72561346014142,
            "unit": "iter/sec",
            "range": "stddev: 0.00004504941887218339",
            "extra": "mean: 22.358553022222498 msec\nrounds: 45"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-patas]",
            "value": 91.5430911305264,
            "unit": "iter/sec",
            "range": "stddev: 0.000020817446955139085",
            "extra": "mean: 10.923817271738764 msec\nrounds: 92"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-gorilla]",
            "value": 322347.3574840503,
            "unit": "iter/sec",
            "range": "stddev: 6.222323982085572e-7",
            "extra": "mean: 3.1022435170714244 usec\nrounds: 123671"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-chimp]",
            "value": 306414.34857937496,
            "unit": "iter/sec",
            "range": "stddev: 6.552091635063331e-7",
            "extra": "mean: 3.263554740945676 usec\nrounds: 156446"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-chimp128]",
            "value": 259542.26817133918,
            "unit": "iter/sec",
            "range": "stddev: 6.304971336217208e-7",
            "extra": "mean: 3.8529369687862975 usec\nrounds: 141184"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-patas]",
            "value": 209973.59639909366,
            "unit": "iter/sec",
            "range": "stddev: 7.24316302296384e-7",
            "extra": "mean: 4.762503558301278 usec\nrounds: 113818"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-gorilla]",
            "value": 30103.462675877206,
            "unit": "iter/sec",
            "range": "stddev: 0.000002004556808016557",
            "extra": "mean: 33.218769905872975 usec\nrounds: 19027"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-chimp]",
            "value": 27955.484667718792,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021148331462673717",
            "extra": "mean: 35.77115588894569 usec\nrounds: 23799"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-chimp128]",
            "value": 22528.768079230133,
            "unit": "iter/sec",
            "range": "stddev: 0.000002773082771280004",
            "extra": "mean: 44.38769117260018 usec\nrounds: 18703"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-patas]",
            "value": 19297.609313960173,
            "unit": "iter/sec",
            "range": "stddev: 0.000003035470515289008",
            "extra": "mean: 51.819890419098975 usec\nrounds: 11982"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-gorilla]",
            "value": 2999.064370921537,
            "unit": "iter/sec",
            "range": "stddev: 0.000008326197256373693",
            "extra": "mean: 333.437324552232 usec\nrounds: 1898"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-chimp]",
            "value": 2824.433928080048,
            "unit": "iter/sec",
            "range": "stddev: 0.000008335459465295572",
            "extra": "mean: 354.05324587633925 usec\nrounds: 2607"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-chimp128]",
            "value": 2258.802770450233,
            "unit": "iter/sec",
            "range": "stddev: 0.000012617956994189661",
            "extra": "mean: 442.71240193347046 usec\nrounds: 2172"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-patas]",
            "value": 1943.2783260386655,
            "unit": "iter/sec",
            "range": "stddev: 0.000014520144410365683",
            "extra": "mean: 514.594325784758 usec\nrounds: 1943"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-gorilla]",
            "value": 194345.1798793799,
            "unit": "iter/sec",
            "range": "stddev: 7.649153962849818e-7",
            "extra": "mean: 5.145483930296851 usec\nrounds: 88645"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-chimp]",
            "value": 151748.05455540182,
            "unit": "iter/sec",
            "range": "stddev: 8.220299636217899e-7",
            "extra": "mean: 6.589870314514703 usec\nrounds: 85237"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-chimp128]",
            "value": 172526.91412067306,
            "unit": "iter/sec",
            "range": "stddev: 8.371720357713422e-7",
            "extra": "mean: 5.796197104067804 usec\nrounds: 68649"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-patas]",
            "value": 173381.02695307956,
            "unit": "iter/sec",
            "range": "stddev: 8.013796805278372e-7",
            "extra": "mean: 5.767643770333765 usec\nrounds: 94877"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-gorilla]",
            "value": 18212.22833642072,
            "unit": "iter/sec",
            "range": "stddev: 0.000002631603174730887",
            "extra": "mean: 54.90816288527446 usec\nrounds: 12782"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-chimp]",
            "value": 15177.85377495512,
            "unit": "iter/sec",
            "range": "stddev: 0.000002935190804191771",
            "extra": "mean: 65.8854680528082 usec\nrounds: 13804"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-chimp128]",
            "value": 16273.247772826717,
            "unit": "iter/sec",
            "range": "stddev: 0.000002930198132085687",
            "extra": "mean: 61.450548406803776 usec\nrounds: 14781"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-patas]",
            "value": 16297.645646079303,
            "unit": "iter/sec",
            "range": "stddev: 0.000003187330585721724",
            "extra": "mean: 61.358555813278976 usec\nrounds: 13796"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-gorilla]",
            "value": 1648.22128170668,
            "unit": "iter/sec",
            "range": "stddev: 0.000013149787563546587",
            "extra": "mean: 606.7146511811401 usec\nrounds: 1270"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-chimp]",
            "value": 1536.1915037560339,
            "unit": "iter/sec",
            "range": "stddev: 0.000010266856944268904",
            "extra": "mean: 650.9605069126931 usec\nrounds: 1519"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-chimp128]",
            "value": 1648.0960637611781,
            "unit": "iter/sec",
            "range": "stddev: 0.000009288523495488184",
            "extra": "mean: 606.7607477429833 usec\nrounds: 1661"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-patas]",
            "value": 1674.7299509243408,
            "unit": "iter/sec",
            "range": "stddev: 0.000014295751094558873",
            "extra": "mean: 597.1111936274059 usec\nrounds: 1632"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-gorilla]",
            "value": 49105.845925419664,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015787884891068035",
            "extra": "mean: 20.364174186486206 usec\nrounds: 32758"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-chimp]",
            "value": 53681.020168178875,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014615846688532828",
            "extra": "mean: 18.62855804280675 usec\nrounds: 40427"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-chimp128]",
            "value": 89188.1032487024,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011864389231922337",
            "extra": "mean: 11.21225772916691 usec\nrounds: 60420"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-patas]",
            "value": 84006.77162965748,
            "unit": "iter/sec",
            "range": "stddev: 0.000001157594523052111",
            "extra": "mean: 11.903802284040674 usec\nrounds: 46147"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-gorilla]",
            "value": 4810.1776313508,
            "unit": "iter/sec",
            "range": "stddev: 0.000005748887922987919",
            "extra": "mean: 207.89253051330223 usec\nrounds: 4326"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-chimp]",
            "value": 5228.536082244027,
            "unit": "iter/sec",
            "range": "stddev: 0.000005777717193273331",
            "extra": "mean: 191.25812354933805 usec\nrounds: 4136"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-chimp128]",
            "value": 8481.154148356187,
            "unit": "iter/sec",
            "range": "stddev: 0.000004346414724452221",
            "extra": "mean: 117.90848067462841 usec\nrounds: 8124"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-patas]",
            "value": 8526.490304515584,
            "unit": "iter/sec",
            "range": "stddev: 0.000004696782269482959",
            "extra": "mean: 117.28155012038249 usec\nrounds: 6235"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-gorilla]",
            "value": 477.74913178260516,
            "unit": "iter/sec",
            "range": "stddev: 0.000040769421122841516",
            "extra": "mean: 2.093148754177202 msec\nrounds: 419"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-chimp]",
            "value": 523.2258112894424,
            "unit": "iter/sec",
            "range": "stddev: 0.000018837125049833",
            "extra": "mean: 1.9112206974950092 msec\nrounds: 519"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-chimp128]",
            "value": 851.88645534386,
            "unit": "iter/sec",
            "range": "stddev: 0.000013501937080021354",
            "extra": "mean: 1.1738653593175803 msec\nrounds: 821"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-patas]",
            "value": 799.7562432082027,
            "unit": "iter/sec",
            "range": "stddev: 0.000012780029779512408",
            "extra": "mean: 1.2503809860721118 msec\nrounds: 718"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-gorilla]",
            "value": 53809.76553476609,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013059051413201166",
            "extra": "mean: 18.5839873127473 usec\nrounds: 39252"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-chimp]",
            "value": 58522.149016188734,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014445364663177354",
            "extra": "mean: 17.087547480926826 usec\nrounds: 36204"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-chimp128]",
            "value": 96161.06785601686,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010279337353539033",
            "extra": "mean: 10.399218959353822 usec\nrounds: 51932"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-patas]",
            "value": 87339.36714976633,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010958266175549447",
            "extra": "mean: 11.449590632884217 usec\nrounds: 48382"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-gorilla]",
            "value": 5180.086373706325,
            "unit": "iter/sec",
            "range": "stddev: 0.000020302720072549828",
            "extra": "mean: 193.04697409601403 usec\nrounds: 4285"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-chimp]",
            "value": 5831.3917486683185,
            "unit": "iter/sec",
            "range": "stddev: 0.00000485223641706492",
            "extra": "mean: 171.48564924117204 usec\nrounds: 5337"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-chimp128]",
            "value": 9363.789233418585,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038121376928684115",
            "extra": "mean: 106.79437299069944 usec\nrounds: 8834"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-patas]",
            "value": 8649.293741609968,
            "unit": "iter/sec",
            "range": "stddev: 0.000004295474114444151",
            "extra": "mean: 115.61637630471563 usec\nrounds: 7377"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-gorilla]",
            "value": 528.3851378661471,
            "unit": "iter/sec",
            "range": "stddev: 0.000047020845985580255",
            "extra": "mean: 1.892558908902022 msec\nrounds: 483"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-chimp]",
            "value": 584.2963360309273,
            "unit": "iter/sec",
            "range": "stddev: 0.000022094698633449075",
            "extra": "mean: 1.7114603298608897 msec\nrounds: 576"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-chimp128]",
            "value": 940.5792049159804,
            "unit": "iter/sec",
            "range": "stddev: 0.000013151053219192853",
            "extra": "mean: 1.0631746851019608 msec\nrounds: 886"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-patas]",
            "value": 835.319221823311,
            "unit": "iter/sec",
            "range": "stddev: 0.00001397866301971863",
            "extra": "mean: 1.1971471191782568 msec\nrounds: 730"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-gorilla]",
            "value": 52733.74581661389,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014265244424888436",
            "extra": "mean: 18.963189216210534 usec\nrounds: 42026"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-chimp]",
            "value": 57141.380842861196,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013606426392258886",
            "extra": "mean: 17.500452128554613 usec\nrounds: 23020"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-chimp128]",
            "value": 95023.88410757974,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010605699596394246",
            "extra": "mean: 10.523670016138956 usec\nrounds: 66676"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-patas]",
            "value": 88017.8459916659,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012494509960260126",
            "extra": "mean: 11.361332338156586 usec\nrounds: 52925"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-gorilla]",
            "value": 5358.194422149221,
            "unit": "iter/sec",
            "range": "stddev: 0.0000049935623102816645",
            "extra": "mean: 186.6300326591902 usec\nrounds: 4746"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-chimp]",
            "value": 5857.169553824139,
            "unit": "iter/sec",
            "range": "stddev: 0.000006772516761353231",
            "extra": "mean: 170.7309291306244 usec\nrounds: 4981"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-chimp128]",
            "value": 9405.97791260118,
            "unit": "iter/sec",
            "range": "stddev: 0.000003968548135258418",
            "extra": "mean: 106.31536766212271 usec\nrounds: 8807"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-patas]",
            "value": 9082.869091500506,
            "unit": "iter/sec",
            "range": "stddev: 0.000004255060204419505",
            "extra": "mean: 110.09737010696013 usec\nrounds: 8149"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-gorilla]",
            "value": 550.9869930130508,
            "unit": "iter/sec",
            "range": "stddev: 0.00003788936142170839",
            "extra": "mean: 1.8149248760511372 msec\nrounds: 476"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-chimp]",
            "value": 607.0231593757313,
            "unit": "iter/sec",
            "range": "stddev: 0.000014940515935841314",
            "extra": "mean: 1.6473836039936431 msec\nrounds: 601"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-chimp128]",
            "value": 948.7610232440771,
            "unit": "iter/sec",
            "range": "stddev: 0.00001119157076603914",
            "extra": "mean: 1.054006199138243 msec\nrounds: 929"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-patas]",
            "value": 913.0507704078019,
            "unit": "iter/sec",
            "range": "stddev: 0.00001087194772846922",
            "extra": "mean: 1.0952293480387334 msec\nrounds: 816"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "miikka.koskinen@iki.fi",
            "name": "Miikka Koskinen",
            "username": "miikka"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a8ad0a272b68afb85a4e7bf6454ea2d5967b205",
          "message": "Merge pull request #2 from miikka/benchmark\n\nchore: set up a basic benchmark",
          "timestamp": "2026-03-14T13:46:40+02:00",
          "tree_id": "665ede6b976a90ea3df819e2162fe7dcb9a32160",
          "url": "https://github.com/miikka/floatbungler/commit/5a8ad0a272b68afb85a4e7bf6454ea2d5967b205"
        },
        "date": 1773488930998,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-gorilla]",
            "value": 716116.9673417343,
            "unit": "iter/sec",
            "range": "stddev: 2.187685491598486e-7",
            "extra": "mean: 1.396419922449338 usec\nrounds: 54260"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-chimp]",
            "value": 620186.8963323904,
            "unit": "iter/sec",
            "range": "stddev: 2.3734423314149279e-7",
            "extra": "mean: 1.612417169588259 usec\nrounds: 138524"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-chimp128]",
            "value": 210766.1123907294,
            "unit": "iter/sec",
            "range": "stddev: 4.869372299372238e-7",
            "extra": "mean: 4.744595744813792 usec\nrounds: 21197"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-patas]",
            "value": 461487.9707803865,
            "unit": "iter/sec",
            "range": "stddev: 3.291799815294064e-7",
            "extra": "mean: 2.1669037186580997 usec\nrounds: 97724"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-gorilla]",
            "value": 104863.1940087171,
            "unit": "iter/sec",
            "range": "stddev: 6.110617172337505e-7",
            "extra": "mean: 9.536234419074358 usec\nrounds: 58549"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-chimp]",
            "value": 91774.29473299999,
            "unit": "iter/sec",
            "range": "stddev: 9.687791278186594e-7",
            "extra": "mean: 10.896297300996011 usec\nrounds: 43128"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-chimp128]",
            "value": 42773.60148033663,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016527135971121679",
            "extra": "mean: 23.378905806183006 usec\nrounds: 20479"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-patas]",
            "value": 64865.774377540845,
            "unit": "iter/sec",
            "range": "stddev: 0.000001587832239875599",
            "extra": "mean: 15.416450502535591 usec\nrounds: 39103"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-gorilla]",
            "value": 10886.179774256207,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028440875484522937",
            "extra": "mean: 91.8595890143955 usec\nrounds: 6263"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-chimp]",
            "value": 9787.945191563549,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034068040645802397",
            "extra": "mean: 102.16648953673366 usec\nrounds: 7550"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-chimp128]",
            "value": 4850.6295731540185,
            "unit": "iter/sec",
            "range": "stddev: 0.00000436643677276032",
            "extra": "mean: 206.15880576297468 usec\nrounds: 3887"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-patas]",
            "value": 6911.436017549061,
            "unit": "iter/sec",
            "range": "stddev: 0.000005328876556245606",
            "extra": "mean: 144.68773167556876 usec\nrounds: 6153"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-gorilla]",
            "value": 175247.60881507437,
            "unit": "iter/sec",
            "range": "stddev: 4.330671328011735e-7",
            "extra": "mean: 5.706211952114136 usec\nrounds: 63972"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-chimp]",
            "value": 145207.5106493458,
            "unit": "iter/sec",
            "range": "stddev: 5.783977610312664e-7",
            "extra": "mean: 6.886696118734856 usec\nrounds: 56838"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-chimp128]",
            "value": 96539.39104405028,
            "unit": "iter/sec",
            "range": "stddev: 8.586427991463983e-7",
            "extra": "mean: 10.358466002170104 usec\nrounds: 27796"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-patas]",
            "value": 145736.41882800203,
            "unit": "iter/sec",
            "range": "stddev: 5.347502667203912e-7",
            "extra": "mean: 6.861702847111942 usec\nrounds: 69301"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-gorilla]",
            "value": 18664.09882302381,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019979812211590814",
            "extra": "mean: 53.57879903456212 usec\nrounds: 14082"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-chimp]",
            "value": 16173.35895268525,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024938976052707952",
            "extra": "mean: 61.830075182618195 usec\nrounds: 12729"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-chimp128]",
            "value": 12810.016632425175,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024382356610846456",
            "extra": "mean: 78.06391113254014 usec\nrounds: 9396"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-patas]",
            "value": 16706.678034401102,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021007069638855476",
            "extra": "mean: 59.85630404445918 usec\nrounds: 12041"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-gorilla]",
            "value": 1758.7327738586741,
            "unit": "iter/sec",
            "range": "stddev: 0.00004685110482091897",
            "extra": "mean: 568.5912122999742 usec\nrounds: 1691"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-chimp]",
            "value": 1642.3273177654203,
            "unit": "iter/sec",
            "range": "stddev: 0.00003393526704183593",
            "extra": "mean: 608.8920212084262 usec\nrounds: 1556"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-chimp128]",
            "value": 1324.2636771788057,
            "unit": "iter/sec",
            "range": "stddev: 0.0000677151476169509",
            "extra": "mean: 755.1366221343376 usec\nrounds: 1265"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-patas]",
            "value": 1733.1334739497079,
            "unit": "iter/sec",
            "range": "stddev: 0.000017892238025357983",
            "extra": "mean: 576.989605838643 usec\nrounds: 1644"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-gorilla]",
            "value": 92069.93629161971,
            "unit": "iter/sec",
            "range": "stddev: 0.000001028288163344492",
            "extra": "mean: 10.861308699428532 usec\nrounds: 26657"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-chimp]",
            "value": 95110.89438786494,
            "unit": "iter/sec",
            "range": "stddev: 6.729871161707083e-7",
            "extra": "mean: 10.51404264922556 usec\nrounds: 42697"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-chimp128]",
            "value": 5726.203962290831,
            "unit": "iter/sec",
            "range": "stddev: 0.000002697542855921848",
            "extra": "mean: 174.63576334083965 usec\nrounds: 5041"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-patas]",
            "value": 16022.7109163638,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018126547167129149",
            "extra": "mean: 62.41141122871487 usec\nrounds: 12290"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-gorilla]",
            "value": 8889.506207599523,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028808249416806174",
            "extra": "mean: 112.49218760262669 usec\nrounds: 6711"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-chimp]",
            "value": 9205.688895374284,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030722666480173353",
            "extra": "mean: 108.62848086279394 usec\nrounds: 7002"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-chimp128]",
            "value": 467.9974230575532,
            "unit": "iter/sec",
            "range": "stddev: 0.0000062504365533411775",
            "extra": "mean: 2.1367639023880316 msec\nrounds: 461"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-patas]",
            "value": 1000.8387270427598,
            "unit": "iter/sec",
            "range": "stddev: 0.00001703301995783774",
            "extra": "mean: 999.1619758307734 usec\nrounds: 993"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-gorilla]",
            "value": 843.5478308948393,
            "unit": "iter/sec",
            "range": "stddev: 0.000010267614902727049",
            "extra": "mean: 1.185469232893641 msec\nrounds: 760"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-chimp]",
            "value": 863.0825844265497,
            "unit": "iter/sec",
            "range": "stddev: 0.000009776774290066687",
            "extra": "mean: 1.1586376762131299 msec\nrounds: 803"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-chimp128]",
            "value": 46.05621213998064,
            "unit": "iter/sec",
            "range": "stddev: 0.0001394950540480127",
            "extra": "mean: 21.712597574473925 msec\nrounds: 47"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-patas]",
            "value": 118.80073368007344,
            "unit": "iter/sec",
            "range": "stddev: 0.00022355877505337915",
            "extra": "mean: 8.417456433332879 msec\nrounds: 120"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-gorilla]",
            "value": 101396.91079549279,
            "unit": "iter/sec",
            "range": "stddev: 6.166680663210411e-7",
            "extra": "mean: 9.862233397000605 usec\nrounds: 27691"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-chimp]",
            "value": 99590.32397046676,
            "unit": "iter/sec",
            "range": "stddev: 7.057472195039242e-7",
            "extra": "mean: 10.041136127808434 usec\nrounds: 40102"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-chimp128]",
            "value": 5732.01090227645,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022555730463705552",
            "extra": "mean: 174.45884473158506 usec\nrounds: 5030"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-patas]",
            "value": 16055.766331678562,
            "unit": "iter/sec",
            "range": "stddev: 0.000001564694809857964",
            "extra": "mean: 62.282919378750954 usec\nrounds: 12875"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-gorilla]",
            "value": 9566.747155129207,
            "unit": "iter/sec",
            "range": "stddev: 0.000003152580365811497",
            "extra": "mean: 104.528737279719 usec\nrounds: 6977"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-chimp]",
            "value": 9748.134876996466,
            "unit": "iter/sec",
            "range": "stddev: 0.0000058042831052464185",
            "extra": "mean: 102.58372628386464 usec\nrounds: 7358"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-chimp128]",
            "value": 470.9634923319265,
            "unit": "iter/sec",
            "range": "stddev: 0.000007717330983620859",
            "extra": "mean: 2.1233068301082207 msec\nrounds: 465"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-patas]",
            "value": 991.9212430010065,
            "unit": "iter/sec",
            "range": "stddev: 0.000008725775899494247",
            "extra": "mean: 1.0081445548787238 msec\nrounds: 984"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-gorilla]",
            "value": 897.097964722448,
            "unit": "iter/sec",
            "range": "stddev: 0.000009442093326249273",
            "extra": "mean: 1.1147054606342672 msec\nrounds: 851"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-chimp]",
            "value": 914.7314453772293,
            "unit": "iter/sec",
            "range": "stddev: 0.000025764160985059524",
            "extra": "mean: 1.0932170365998586 msec\nrounds: 847"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-chimp128]",
            "value": 46.09272581136718,
            "unit": "iter/sec",
            "range": "stddev: 0.00004949713187749825",
            "extra": "mean: 21.695397319144544 msec\nrounds: 47"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-patas]",
            "value": 119.2240945997584,
            "unit": "iter/sec",
            "range": "stddev: 0.00003597923402151347",
            "extra": "mean: 8.38756631666655 msec\nrounds: 120"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-gorilla]",
            "value": 98882.25830243861,
            "unit": "iter/sec",
            "range": "stddev: 6.613007393638316e-7",
            "extra": "mean: 10.113037638576447 usec\nrounds: 44582"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-chimp]",
            "value": 98739.2355494218,
            "unit": "iter/sec",
            "range": "stddev: 6.53545451892851e-7",
            "extra": "mean: 10.127686268134731 usec\nrounds: 41153"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-chimp128]",
            "value": 5702.319296918891,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025110675655423895",
            "extra": "mean: 175.36724057881597 usec\nrounds: 5042"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-patas]",
            "value": 15952.122411667991,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016328154615769191",
            "extra": "mean: 62.687583143705176 usec\nrounds: 12731"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-gorilla]",
            "value": 9567.046498114702,
            "unit": "iter/sec",
            "range": "stddev: 0.000005872431299192917",
            "extra": "mean: 104.52546668368986 usec\nrounds: 7774"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-chimp]",
            "value": 9737.779178149804,
            "unit": "iter/sec",
            "range": "stddev: 0.000002822026950194419",
            "extra": "mean: 102.6928195541606 usec\nrounds: 7221"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-chimp128]",
            "value": 469.55990603514766,
            "unit": "iter/sec",
            "range": "stddev: 0.0000073203881811323206",
            "extra": "mean: 2.129653718614442 msec\nrounds: 462"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-patas]",
            "value": 998.175451458018,
            "unit": "iter/sec",
            "range": "stddev: 0.000008712659117618766",
            "extra": "mean: 1.0018278836043473 msec\nrounds: 988"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-gorilla]",
            "value": 918.1854937592343,
            "unit": "iter/sec",
            "range": "stddev: 0.000010672037464294515",
            "extra": "mean: 1.0891045510921773 msec\nrounds: 871"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-chimp]",
            "value": 925.96688231116,
            "unit": "iter/sec",
            "range": "stddev: 0.000009349994358853007",
            "extra": "mean: 1.0799522305852427 msec\nrounds: 837"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-chimp128]",
            "value": 46.22347001726394,
            "unit": "iter/sec",
            "range": "stddev: 0.0000480566106052988",
            "extra": "mean: 21.6340313616981 msec\nrounds: 47"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-patas]",
            "value": 119.94324180967763,
            "unit": "iter/sec",
            "range": "stddev: 0.000028403942702528675",
            "extra": "mean: 8.337276739499591 msec\nrounds: 119"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-gorilla]",
            "value": 360646.71799384634,
            "unit": "iter/sec",
            "range": "stddev: 4.3631487443820696e-7",
            "extra": "mean: 2.7727966181493517 usec\nrounds: 99473"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-chimp]",
            "value": 343440.6794666147,
            "unit": "iter/sec",
            "range": "stddev: 4.5165067642256416e-7",
            "extra": "mean: 2.9117109876240166 usec\nrounds: 109722"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-chimp128]",
            "value": 276497.6376323298,
            "unit": "iter/sec",
            "range": "stddev: 4.3245698321461767e-7",
            "extra": "mean: 3.616667428203278 usec\nrounds: 117731"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-patas]",
            "value": 238725.64858991635,
            "unit": "iter/sec",
            "range": "stddev: 4.733306923089554e-7",
            "extra": "mean: 4.188908924980252 usec\nrounds: 77310"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-gorilla]",
            "value": 36774.75049671083,
            "unit": "iter/sec",
            "range": "stddev: 0.000001300420775373458",
            "extra": "mean: 27.19257062231981 usec\nrounds: 20376"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-chimp]",
            "value": 33275.03507270953,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017319249070832565",
            "extra": "mean: 30.0525603598882 usec\nrounds: 17114"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-chimp128]",
            "value": 26069.62540233843,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013265514359488885",
            "extra": "mean: 38.35881738102384 usec\nrounds: 11461"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-patas]",
            "value": 23083.97864367317,
            "unit": "iter/sec",
            "range": "stddev: 0.00000217401431547985",
            "extra": "mean: 43.32008859634251 usec\nrounds: 10181"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-gorilla]",
            "value": 3760.7361816532057,
            "unit": "iter/sec",
            "range": "stddev: 0.000005930620756170986",
            "extra": "mean: 265.9053843974782 usec\nrounds: 2115"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-chimp]",
            "value": 3494.1852150319473,
            "unit": "iter/sec",
            "range": "stddev: 0.000013466855825983276",
            "extra": "mean: 286.18975196220583 usec\nrounds: 2931"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-chimp128]",
            "value": 2705.0448113086245,
            "unit": "iter/sec",
            "range": "stddev: 0.00000553473832553369",
            "extra": "mean: 369.67964294692337 usec\nrounds: 2403"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-patas]",
            "value": 2437.831239450508,
            "unit": "iter/sec",
            "range": "stddev: 0.000008151110852270868",
            "extra": "mean: 410.2006668129341 usec\nrounds: 2272"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-gorilla]",
            "value": 208221.20738373473,
            "unit": "iter/sec",
            "range": "stddev: 4.424470059335407e-7",
            "extra": "mean: 4.80258477301537 usec\nrounds: 82420"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-chimp]",
            "value": 166897.10762087672,
            "unit": "iter/sec",
            "range": "stddev: 5.807002013800192e-7",
            "extra": "mean: 5.991715580066246 usec\nrounds: 76605"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-chimp128]",
            "value": 182540.02452529492,
            "unit": "iter/sec",
            "range": "stddev: 4.848580640356217e-7",
            "extra": "mean: 5.4782506061372205 usec\nrounds: 101462"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-patas]",
            "value": 200561.32257403375,
            "unit": "iter/sec",
            "range": "stddev: 4.742412067463698e-7",
            "extra": "mean: 4.986006210798034 usec\nrounds: 79701"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-gorilla]",
            "value": 20799.652238491413,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016816488466891418",
            "extra": "mean: 48.077726903021016 usec\nrounds: 14244"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-chimp]",
            "value": 16940.06973387699,
            "unit": "iter/sec",
            "range": "stddev: 0.000001754434885338886",
            "extra": "mean: 59.031634208694314 usec\nrounds: 11307"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-chimp128]",
            "value": 17838.322140523152,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016860306607336888",
            "extra": "mean: 56.05908403954143 usec\nrounds: 11566"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-patas]",
            "value": 19575.594333609686,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017172276370240265",
            "extra": "mean: 51.08401732064309 usec\nrounds: 11489"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-gorilla]",
            "value": 1899.1566150226495,
            "unit": "iter/sec",
            "range": "stddev: 0.0000069684001592685614",
            "extra": "mean: 526.5495178701068 usec\nrounds: 1427"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-chimp]",
            "value": 1750.3220707962125,
            "unit": "iter/sec",
            "range": "stddev: 0.000006540417649591905",
            "extra": "mean: 571.3234248055303 usec\nrounds: 1669"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-chimp128]",
            "value": 1839.9398826338027,
            "unit": "iter/sec",
            "range": "stddev: 0.000007552392318054453",
            "extra": "mean: 543.4960182332364 usec\nrounds: 1755"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-patas]",
            "value": 2034.5766592071009,
            "unit": "iter/sec",
            "range": "stddev: 0.000007520681411526601",
            "extra": "mean: 491.5027386531172 usec\nrounds: 1917"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-gorilla]",
            "value": 52888.10209867553,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011332988428172388",
            "extra": "mean: 18.907844303701015 usec\nrounds: 35717"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-chimp]",
            "value": 55926.374639578724,
            "unit": "iter/sec",
            "range": "stddev: 9.420700202725565e-7",
            "extra": "mean: 17.88065123914373 usec\nrounds: 37487"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-chimp128]",
            "value": 85580.93698832011,
            "unit": "iter/sec",
            "range": "stddev: 7.518510065847235e-7",
            "extra": "mean: 11.684845190891958 usec\nrounds: 54325"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-patas]",
            "value": 100119.19222454967,
            "unit": "iter/sec",
            "range": "stddev: 8.637134167960406e-7",
            "extra": "mean: 9.988094967418201 usec\nrounds: 49796"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-gorilla]",
            "value": 5200.090435576167,
            "unit": "iter/sec",
            "range": "stddev: 0.000004151512050191349",
            "extra": "mean: 192.3043478549043 usec\nrounds: 4614"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-chimp]",
            "value": 5473.424428333665,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036254600932519244",
            "extra": "mean: 182.7009787188093 usec\nrounds: 4840"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-chimp128]",
            "value": 8279.27767345642,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034602850838647176",
            "extra": "mean: 120.78348370969924 usec\nrounds: 6998"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-patas]",
            "value": 10089.460468715273,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026539617226057185",
            "extra": "mean: 99.11332752635617 usec\nrounds: 7691"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-gorilla]",
            "value": 515.8385600648554,
            "unit": "iter/sec",
            "range": "stddev: 0.00006152762174523158",
            "extra": "mean: 1.938591019396208 msec\nrounds: 464"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-chimp]",
            "value": 548.7682389976844,
            "unit": "iter/sec",
            "range": "stddev: 0.000022244916559265008",
            "extra": "mean: 1.8222628952187219 msec\nrounds: 544"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-chimp128]",
            "value": 831.6274977205865,
            "unit": "iter/sec",
            "range": "stddev: 0.00001864494167820555",
            "extra": "mean: 1.2024614418605768 msec\nrounds: 817"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-patas]",
            "value": 968.2669715127713,
            "unit": "iter/sec",
            "range": "stddev: 0.000010809039488246397",
            "extra": "mean: 1.032773015522414 msec\nrounds: 902"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-gorilla]",
            "value": 58744.78644979405,
            "unit": "iter/sec",
            "range": "stddev: 8.604329874474553e-7",
            "extra": "mean: 17.022787219673443 usec\nrounds: 32456"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-chimp]",
            "value": 61954.681810880305,
            "unit": "iter/sec",
            "range": "stddev: 8.847987153887564e-7",
            "extra": "mean: 16.14083021284088 usec\nrounds: 38778"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-chimp128]",
            "value": 94665.34677356627,
            "unit": "iter/sec",
            "range": "stddev: 6.765829534091028e-7",
            "extra": "mean: 10.563527564019164 usec\nrounds: 59752"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-patas]",
            "value": 104272.82017238588,
            "unit": "iter/sec",
            "range": "stddev: 6.441798074845342e-7",
            "extra": "mean: 9.59022685247009 usec\nrounds: 51377"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-gorilla]",
            "value": 5784.675240408327,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033619496463576404",
            "extra": "mean: 172.87055166288164 usec\nrounds: 5081"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-chimp]",
            "value": 6147.261805875412,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028080450538228674",
            "extra": "mean: 162.67405416899973 usec\nrounds: 5649"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-chimp128]",
            "value": 9197.70449775785,
            "unit": "iter/sec",
            "range": "stddev: 0.00000267527039320247",
            "extra": "mean: 108.7227797157185 usec\nrounds: 7967"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-patas]",
            "value": 10228.421490173558,
            "unit": "iter/sec",
            "range": "stddev: 0.000003102238980037617",
            "extra": "mean: 97.76679627063666 usec\nrounds: 7937"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-gorilla]",
            "value": 575.5435133792118,
            "unit": "iter/sec",
            "range": "stddev: 0.00001484837676227047",
            "extra": "mean: 1.737488090394173 msec\nrounds: 531"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-chimp]",
            "value": 615.738806188597,
            "unit": "iter/sec",
            "range": "stddev: 0.000011289792871879481",
            "extra": "mean: 1.6240652529113233 msec\nrounds: 601"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-chimp128]",
            "value": 925.1325714982955,
            "unit": "iter/sec",
            "range": "stddev: 0.0000073031359646660415",
            "extra": "mean: 1.0809261621612274 msec\nrounds: 888"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-patas]",
            "value": 979.0368844310974,
            "unit": "iter/sec",
            "range": "stddev: 0.00001283037115600772",
            "extra": "mean: 1.0214119773241064 msec\nrounds: 882"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-gorilla]",
            "value": 56855.75211088252,
            "unit": "iter/sec",
            "range": "stddev: 9.19785279850853e-7",
            "extra": "mean: 17.588369916376397 usec\nrounds: 36711"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-chimp]",
            "value": 59692.67327772348,
            "unit": "iter/sec",
            "range": "stddev: 9.694316821826492e-7",
            "extra": "mean: 16.752474719090642 usec\nrounds: 40287"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-chimp128]",
            "value": 90738.07920633777,
            "unit": "iter/sec",
            "range": "stddev: 8.060686241028284e-7",
            "extra": "mean: 11.020731414492552 usec\nrounds: 59549"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-patas]",
            "value": 102036.87409903198,
            "unit": "iter/sec",
            "range": "stddev: 7.220921751904207e-7",
            "extra": "mean: 9.800378626156748 usec\nrounds: 51016"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-gorilla]",
            "value": 5837.302646580569,
            "unit": "iter/sec",
            "range": "stddev: 0.000003524486886465435",
            "extra": "mean: 171.31200154334803 usec\nrounds: 5184"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-chimp]",
            "value": 6183.110525885124,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032407532854770344",
            "extra": "mean: 161.73089512367207 usec\nrounds: 5578"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-chimp128]",
            "value": 9279.3225807503,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026358054921302176",
            "extra": "mean: 107.7664874022671 usec\nrounds: 8057"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-patas]",
            "value": 10767.868765401467,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027274208829506353",
            "extra": "mean: 92.86888815111932 usec\nrounds: 8136"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-gorilla]",
            "value": 601.3892791791743,
            "unit": "iter/sec",
            "range": "stddev: 0.000010275157693328433",
            "extra": "mean: 1.6628164728258583 msec\nrounds: 552"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-chimp]",
            "value": 640.293862787942,
            "unit": "iter/sec",
            "range": "stddev: 0.00001470844140711946",
            "extra": "mean: 1.5617828908211613 msec\nrounds: 632"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-chimp128]",
            "value": 956.4597269511623,
            "unit": "iter/sec",
            "range": "stddev: 0.000007344658362478",
            "extra": "mean: 1.0455223276233783 msec\nrounds: 934"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-patas]",
            "value": 1085.9375422753324,
            "unit": "iter/sec",
            "range": "stddev: 0.00001286859304107504",
            "extra": "mean: 920.8632735034926 usec\nrounds: 936"
          }
        ]
      }
    ]
  }
}