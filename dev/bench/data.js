window.BENCHMARK_DATA = {
  "lastUpdate": 1773488520729,
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
      }
    ]
  }
}