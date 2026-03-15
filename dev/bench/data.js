window.BENCHMARK_DATA = {
  "lastUpdate": 1773560719364,
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
      },
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
          "id": "9394abcb2912c903c9748f6104dac5efd99d4da6",
          "message": "chore: add test vectors",
          "timestamp": "2026-03-14T14:03:43+02:00",
          "tree_id": "6fba3ee8fcf5ef0433a4b9098c86af5a4465777a",
          "url": "https://github.com/miikka/floatbungler/commit/9394abcb2912c903c9748f6104dac5efd99d4da6"
        },
        "date": 1773489990984,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-gorilla]",
            "value": 662946.7730296156,
            "unit": "iter/sec",
            "range": "stddev: 4.5613104954406693e-7",
            "extra": "mean: 1.5084167246641493 usec\nrounds: 77562"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-chimp]",
            "value": 559700.0805840364,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010588543797249593",
            "extra": "mean: 1.7866711738839112 usec\nrounds: 170911"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-chimp128]",
            "value": 222403.32805018936,
            "unit": "iter/sec",
            "range": "stddev: 6.286247410981364e-7",
            "extra": "mean: 4.496335593387936 usec\nrounds: 27286"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-patas]",
            "value": 403775.20166252396,
            "unit": "iter/sec",
            "range": "stddev: 4.4444288372522167e-7",
            "extra": "mean: 2.476625597318881 usec\nrounds: 156962"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-gorilla]",
            "value": 94800.75591182365,
            "unit": "iter/sec",
            "range": "stddev: 9.199771334096434e-7",
            "extra": "mean: 10.5484390960988 usec\nrounds: 70488"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-chimp]",
            "value": 84260.01849721387,
            "unit": "iter/sec",
            "range": "stddev: 0.000001023772562712807",
            "extra": "mean: 11.868024928490444 usec\nrounds: 57003"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-chimp128]",
            "value": 42964.19616498219,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016498436539294418",
            "extra": "mean: 23.275193981519113 usec\nrounds: 27781"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-patas]",
            "value": 56963.00762031148,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015529467450864141",
            "extra": "mean: 17.555252817153335 usec\nrounds: 44902"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-gorilla]",
            "value": 9977.114998923009,
            "unit": "iter/sec",
            "range": "stddev: 0.000005309959650581815",
            "extra": "mean: 100.22937493533412 usec\nrounds: 9671"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-chimp]",
            "value": 9037.151538083788,
            "unit": "iter/sec",
            "range": "stddev: 0.000005349133877128942",
            "extra": "mean: 110.6543356925978 usec\nrounds: 8478"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-chimp128]",
            "value": 4803.195095450533,
            "unit": "iter/sec",
            "range": "stddev: 0.000005360097756738616",
            "extra": "mean: 208.19474956309296 usec\nrounds: 4576"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-patas]",
            "value": 5965.992975849909,
            "unit": "iter/sec",
            "range": "stddev: 0.000005650293977674744",
            "extra": "mean: 167.61669080871505 usec\nrounds: 5799"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-gorilla]",
            "value": 180777.86545833488,
            "unit": "iter/sec",
            "range": "stddev: 6.95220421851785e-7",
            "extra": "mean: 5.531650666770799 usec\nrounds: 81209"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-chimp]",
            "value": 151695.43473860575,
            "unit": "iter/sec",
            "range": "stddev: 7.396473128810167e-7",
            "extra": "mean: 6.592156195887844 usec\nrounds: 77979"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-chimp128]",
            "value": 104825.15877520738,
            "unit": "iter/sec",
            "range": "stddev: 9.949717966715726e-7",
            "extra": "mean: 9.539694589391969 usec\nrounds: 42546"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-patas]",
            "value": 142635.7013195946,
            "unit": "iter/sec",
            "range": "stddev: 7.364474257956389e-7",
            "extra": "mean: 7.010867480921657 usec\nrounds: 87859"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-gorilla]",
            "value": 19512.871155064673,
            "unit": "iter/sec",
            "range": "stddev: 0.000003890282058717715",
            "extra": "mean: 51.24822441829349 usec\nrounds: 16545"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-chimp]",
            "value": 17036.359635943172,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029969426711853676",
            "extra": "mean: 58.69798603512738 usec\nrounds: 14608"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-chimp128]",
            "value": 14039.09377598958,
            "unit": "iter/sec",
            "range": "stddev: 0.000003871531068226713",
            "extra": "mean: 71.2296688059919 usec\nrounds: 11374"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-patas]",
            "value": 17118.688248039405,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026390807336653848",
            "extra": "mean: 58.41569082342098 usec\nrounds: 12074"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-gorilla]",
            "value": 1869.8382110028713,
            "unit": "iter/sec",
            "range": "stddev: 0.000035043957149799214",
            "extra": "mean: 534.8056286985701 usec\nrounds: 1791"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-chimp]",
            "value": 1721.325202034247,
            "unit": "iter/sec",
            "range": "stddev: 0.00001315181940142735",
            "extra": "mean: 580.947748175771 usec\nrounds: 1644"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-chimp128]",
            "value": 1427.3300078455873,
            "unit": "iter/sec",
            "range": "stddev: 0.00000809405805322811",
            "extra": "mean: 700.6088252214361 usec\nrounds: 1356"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-patas]",
            "value": 1752.000359539635,
            "unit": "iter/sec",
            "range": "stddev: 0.00001774427016244194",
            "extra": "mean: 570.7761385749745 usec\nrounds: 1768"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-gorilla]",
            "value": 84140.69875798257,
            "unit": "iter/sec",
            "range": "stddev: 9.64368233722304e-7",
            "extra": "mean: 11.884854948451784 usec\nrounds: 52340"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-chimp]",
            "value": 82339.60974223504,
            "unit": "iter/sec",
            "range": "stddev: 0.000001112109407532798",
            "extra": "mean: 12.144823167495082 usec\nrounds: 46971"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-chimp128]",
            "value": 5516.024293983822,
            "unit": "iter/sec",
            "range": "stddev: 0.00000413188961544033",
            "extra": "mean: 181.28999197677084 usec\nrounds: 5235"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-patas]",
            "value": 9609.669362677712,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026558406695247785",
            "extra": "mean: 104.06185293781556 usec\nrounds: 9071"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-gorilla]",
            "value": 8510.43173847613,
            "unit": "iter/sec",
            "range": "stddev: 0.000012070686208342976",
            "extra": "mean: 117.50285187988113 usec\nrounds: 7872"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-chimp]",
            "value": 8457.235403263105,
            "unit": "iter/sec",
            "range": "stddev: 0.000004243939328971774",
            "extra": "mean: 118.24194932710094 usec\nrounds: 7657"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-chimp128]",
            "value": 454.08447596731594,
            "unit": "iter/sec",
            "range": "stddev: 0.000009730645877060776",
            "extra": "mean: 2.2022334013285625 msec\nrounds: 451"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-patas]",
            "value": 740.2545538275747,
            "unit": "iter/sec",
            "range": "stddev: 0.00001539867081947355",
            "extra": "mean: 1.3508866576090353 msec\nrounds: 736"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-gorilla]",
            "value": 850.0660877571617,
            "unit": "iter/sec",
            "range": "stddev: 0.000011141958455659298",
            "extra": "mean: 1.1763791244024664 msec\nrounds: 836"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-chimp]",
            "value": 841.2959430247049,
            "unit": "iter/sec",
            "range": "stddev: 0.000012642752096686326",
            "extra": "mean: 1.18864236573483 msec\nrounds: 823"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-chimp128]",
            "value": 44.64359305351913,
            "unit": "iter/sec",
            "range": "stddev: 0.000034705843974189615",
            "extra": "mean: 22.399630755553012 msec\nrounds: 45"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-patas]",
            "value": 91.24478000391645,
            "unit": "iter/sec",
            "range": "stddev: 0.000017612103491010636",
            "extra": "mean: 10.959531054347192 msec\nrounds: 92"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-gorilla]",
            "value": 92383.58682875031,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010293559474027561",
            "extra": "mean: 10.824433585304291 usec\nrounds: 59663"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-chimp]",
            "value": 88881.11441893091,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018304452160783923",
            "extra": "mean: 11.250984042421148 usec\nrounds: 51825"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-chimp128]",
            "value": 5515.554644112513,
            "unit": "iter/sec",
            "range": "stddev: 0.0000045609305020954874",
            "extra": "mean: 181.305428832517 usec\nrounds: 4925"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-patas]",
            "value": 9620.899275289561,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029861924841935747",
            "extra": "mean: 103.9403876276319 usec\nrounds: 9117"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-gorilla]",
            "value": 9213.783584460542,
            "unit": "iter/sec",
            "range": "stddev: 0.000004179727803395722",
            "extra": "mean: 108.53304625979546 usec\nrounds: 7847"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-chimp]",
            "value": 9032.74470720145,
            "unit": "iter/sec",
            "range": "stddev: 0.000008246424237387428",
            "extra": "mean: 110.70832093845624 usec\nrounds: 8014"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-chimp128]",
            "value": 456.10475478127614,
            "unit": "iter/sec",
            "range": "stddev: 0.000026158105006468967",
            "extra": "mean: 2.192478788079171 msec\nrounds: 453"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-patas]",
            "value": 737.5255924209092,
            "unit": "iter/sec",
            "range": "stddev: 0.0000131120833989176",
            "extra": "mean: 1.3558851520223525 msec\nrounds: 717"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-gorilla]",
            "value": 908.6808803419021,
            "unit": "iter/sec",
            "range": "stddev: 0.00001929822220046441",
            "extra": "mean: 1.100496358659751 msec\nrounds: 895"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-chimp]",
            "value": 903.594758931402,
            "unit": "iter/sec",
            "range": "stddev: 0.00002515623935899849",
            "extra": "mean: 1.1066907926542286 msec\nrounds: 844"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-chimp128]",
            "value": 44.720518093601754,
            "unit": "iter/sec",
            "range": "stddev: 0.000027981683902410966",
            "extra": "mean: 22.36110051111129 msec\nrounds: 45"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-patas]",
            "value": 91.645537696652,
            "unit": "iter/sec",
            "range": "stddev: 0.000018248336178448437",
            "extra": "mean: 10.911606010867805 msec\nrounds: 92"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-gorilla]",
            "value": 90272.50207811102,
            "unit": "iter/sec",
            "range": "stddev: 9.69167045608208e-7",
            "extra": "mean: 11.077570433737613 usec\nrounds: 56294"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-chimp]",
            "value": 86474.67681281369,
            "unit": "iter/sec",
            "range": "stddev: 9.81053576069732e-7",
            "extra": "mean: 11.564079067501314 usec\nrounds: 50615"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-chimp128]",
            "value": 5479.966322700757,
            "unit": "iter/sec",
            "range": "stddev: 0.0000044312825267029244",
            "extra": "mean: 182.482873271958 usec\nrounds: 5208"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-patas]",
            "value": 9567.01131375392,
            "unit": "iter/sec",
            "range": "stddev: 0.000002681093202460239",
            "extra": "mean: 104.52585109441229 usec\nrounds: 9046"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-gorilla]",
            "value": 9246.848903005184,
            "unit": "iter/sec",
            "range": "stddev: 0.0000044618792551491145",
            "extra": "mean: 108.14494867273159 usec\nrounds: 8475"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-chimp]",
            "value": 9081.768119324277,
            "unit": "iter/sec",
            "range": "stddev: 0.000004252674829541484",
            "extra": "mean: 110.11071708296427 usec\nrounds: 7048"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-chimp128]",
            "value": 455.5452636633014,
            "unit": "iter/sec",
            "range": "stddev: 0.00000798800293495958",
            "extra": "mean: 2.195171544444179 msec\nrounds: 450"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-patas]",
            "value": 741.6151193969603,
            "unit": "iter/sec",
            "range": "stddev: 0.000005700206518319265",
            "extra": "mean: 1.3484083237315116 msec\nrounds: 729"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-gorilla]",
            "value": 933.097819443608,
            "unit": "iter/sec",
            "range": "stddev: 0.000032846446434751915",
            "extra": "mean: 1.0716990000001123 msec\nrounds: 918"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-chimp]",
            "value": 905.1795672331181,
            "unit": "iter/sec",
            "range": "stddev: 0.000012766242361867557",
            "extra": "mean: 1.1047531740654748 msec\nrounds: 856"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-chimp128]",
            "value": 44.804602825832276,
            "unit": "iter/sec",
            "range": "stddev: 0.00003905585522337801",
            "extra": "mean: 22.31913546666786 msec\nrounds: 45"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-patas]",
            "value": 91.76651936245104,
            "unit": "iter/sec",
            "range": "stddev: 0.0000362541604462785",
            "extra": "mean: 10.897220543478292 msec\nrounds: 92"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-gorilla]",
            "value": 320036.1073047385,
            "unit": "iter/sec",
            "range": "stddev: 5.59085414205741e-7",
            "extra": "mean: 3.1246474293845843 usec\nrounds: 117151"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-chimp]",
            "value": 301650.32246140915,
            "unit": "iter/sec",
            "range": "stddev: 6.054571363795509e-7",
            "extra": "mean: 3.3150967379719356 usec\nrounds: 137495"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-chimp128]",
            "value": 249109.9988280608,
            "unit": "iter/sec",
            "range": "stddev: 8.098197918615648e-7",
            "extra": "mean: 4.014290894402091 usec\nrounds: 122474"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-patas]",
            "value": 206215.43377702427,
            "unit": "iter/sec",
            "range": "stddev: 6.68075376069727e-7",
            "extra": "mean: 4.849297560730957 usec\nrounds: 106180"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-gorilla]",
            "value": 30016.832600664657,
            "unit": "iter/sec",
            "range": "stddev: 0.000001819901657724924",
            "extra": "mean: 33.31464093176364 usec\nrounds: 14468"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-chimp]",
            "value": 28236.486076172256,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023632420518422017",
            "extra": "mean: 35.415171608193255 usec\nrounds: 23542"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-chimp128]",
            "value": 22586.34664441602,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024480352163865057",
            "extra": "mean: 44.27453522002985 usec\nrounds: 14452"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-patas]",
            "value": 19448.55571566771,
            "unit": "iter/sec",
            "range": "stddev: 0.000002660919522668929",
            "extra": "mean: 51.41769983435852 usec\nrounds: 16291"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-gorilla]",
            "value": 3019.1485958698986,
            "unit": "iter/sec",
            "range": "stddev: 0.000007122859354309289",
            "extra": "mean: 331.219205761508 usec\nrounds: 1701"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-chimp]",
            "value": 2851.6811052982202,
            "unit": "iter/sec",
            "range": "stddev: 0.000007505864396262882",
            "extra": "mean: 350.6703460432765 usec\nrounds: 2780"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-chimp128]",
            "value": 2270.839459522507,
            "unit": "iter/sec",
            "range": "stddev: 0.000008206207647903564",
            "extra": "mean: 440.3657844708545 usec\nrounds: 2241"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-patas]",
            "value": 1955.1737377421173,
            "unit": "iter/sec",
            "range": "stddev: 0.000009412773645626355",
            "extra": "mean: 511.46349845862017 usec\nrounds: 1946"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-gorilla]",
            "value": 195193.80925973094,
            "unit": "iter/sec",
            "range": "stddev: 8.031501168469256e-7",
            "extra": "mean: 5.123113298482581 usec\nrounds: 92499"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-chimp]",
            "value": 155306.0555686943,
            "unit": "iter/sec",
            "range": "stddev: 7.867371523052236e-7",
            "extra": "mean: 6.438898962041336 usec\nrounds: 96340"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-chimp128]",
            "value": 174508.20325111854,
            "unit": "iter/sec",
            "range": "stddev: 7.504043588249577e-7",
            "extra": "mean: 5.730389639970065 usec\nrounds: 70637"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-patas]",
            "value": 174085.72983956418,
            "unit": "iter/sec",
            "range": "stddev: 7.93148941429395e-7",
            "extra": "mean: 5.7442962207275166 usec\nrounds: 96526"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-gorilla]",
            "value": 18193.106071519822,
            "unit": "iter/sec",
            "range": "stddev: 0.000002700037566489199",
            "extra": "mean: 54.96587531941221 usec\nrounds: 12913"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-chimp]",
            "value": 15256.726011189796,
            "unit": "iter/sec",
            "range": "stddev: 0.000002632616746242866",
            "extra": "mean: 65.54486193607767 usec\nrounds: 14247"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-chimp128]",
            "value": 16160.786948610963,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024675853664452454",
            "extra": "mean: 61.878174817839 usec\nrounds: 14701"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-patas]",
            "value": 16178.422113122491,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030889660618985097",
            "extra": "mean: 61.810724989607564 usec\nrounds: 14414"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-gorilla]",
            "value": 1649.5840925736209,
            "unit": "iter/sec",
            "range": "stddev: 0.000007537714003309496",
            "extra": "mean: 606.2134113089297 usec\nrounds: 1291"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-chimp]",
            "value": 1526.8856140157282,
            "unit": "iter/sec",
            "range": "stddev: 0.000015131934568206457",
            "extra": "mean: 654.9279073826543 usec\nrounds: 1490"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-chimp128]",
            "value": 1638.5312044155999,
            "unit": "iter/sec",
            "range": "stddev: 0.000007073164368823716",
            "extra": "mean: 610.3026889601781 usec\nrounds: 1540"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-patas]",
            "value": 1659.4438268149552,
            "unit": "iter/sec",
            "range": "stddev: 0.000007917849606942646",
            "extra": "mean: 602.6115399876744 usec\nrounds: 1613"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-gorilla]",
            "value": 49094.60312013515,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012968824570856384",
            "extra": "mean: 20.368837640931464 usec\nrounds: 33777"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-chimp]",
            "value": 53594.0486306563,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012595870763979917",
            "extra": "mean: 18.658788159325407 usec\nrounds: 42565"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-chimp128]",
            "value": 88709.5583737401,
            "unit": "iter/sec",
            "range": "stddev: 9.606914743403124e-7",
            "extra": "mean: 11.272742400395277 usec\nrounds: 64313"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-patas]",
            "value": 86697.92006997416,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010033628445596413",
            "extra": "mean: 11.534302082367107 usec\nrounds: 53065"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-gorilla]",
            "value": 4772.26749941825,
            "unit": "iter/sec",
            "range": "stddev: 0.000007429486076751613",
            "extra": "mean: 209.54399562092905 usec\nrounds: 4339"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-chimp]",
            "value": 5212.636780703114,
            "unit": "iter/sec",
            "range": "stddev: 0.000004575179249076626",
            "extra": "mean: 191.84148868801742 usec\nrounds: 4862"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-chimp128]",
            "value": 8439.100447213114,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032509306401332402",
            "extra": "mean: 118.4960418773348 usec\nrounds: 7713"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-patas]",
            "value": 8443.884898175822,
            "unit": "iter/sec",
            "range": "stddev: 0.00000518517380187806",
            "extra": "mean: 118.42889997423288 usec\nrounds: 7668"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-gorilla]",
            "value": 476.68028973471627,
            "unit": "iter/sec",
            "range": "stddev: 0.000025888344713895642",
            "extra": "mean: 2.0978421418610016 msec\nrounds: 430"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-chimp]",
            "value": 520.7025762466733,
            "unit": "iter/sec",
            "range": "stddev: 0.00001635496881981531",
            "extra": "mean: 1.9204821439682456 msec\nrounds: 514"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-chimp128]",
            "value": 847.2329134760163,
            "unit": "iter/sec",
            "range": "stddev: 0.000009729366548114355",
            "extra": "mean: 1.1803129742649077 msec\nrounds: 816"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-patas]",
            "value": 819.9046441376772,
            "unit": "iter/sec",
            "range": "stddev: 0.00001672229821552499",
            "extra": "mean: 1.219654025806544 msec\nrounds: 775"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-gorilla]",
            "value": 54398.801517640015,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014025772371284484",
            "extra": "mean: 18.38275793035124 usec\nrounds: 24873"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-chimp]",
            "value": 59221.3896174693,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013658114604329693",
            "extra": "mean: 16.88579086811933 usec\nrounds: 46124"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-chimp128]",
            "value": 98143.5340208412,
            "unit": "iter/sec",
            "range": "stddev: 0.000001026221104525604",
            "extra": "mean: 10.189158256596363 usec\nrounds: 66765"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-patas]",
            "value": 88484.76888687683,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011966163530694267",
            "extra": "mean: 11.30138002935226 usec\nrounds: 52367"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-gorilla]",
            "value": 5269.030284545715,
            "unit": "iter/sec",
            "range": "stddev: 0.000005211461540303486",
            "extra": "mean: 189.78824299663668 usec\nrounds: 4712"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-chimp]",
            "value": 5802.917903017453,
            "unit": "iter/sec",
            "range": "stddev: 0.000005697822345143722",
            "extra": "mean: 172.32709762790392 usec\nrounds: 5480"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-chimp128]",
            "value": 9300.647706582498,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037212684363882516",
            "extra": "mean: 107.51939343883048 usec\nrounds: 8596"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-patas]",
            "value": 8499.701964252998,
            "unit": "iter/sec",
            "range": "stddev: 0.000005367962534893503",
            "extra": "mean: 117.6511840304139 usec\nrounds: 7602"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-gorilla]",
            "value": 527.6800244146852,
            "unit": "iter/sec",
            "range": "stddev: 0.000014743825941447",
            "extra": "mean: 1.895087844398171 msec\nrounds: 482"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-chimp]",
            "value": 582.0500797818378,
            "unit": "iter/sec",
            "range": "stddev: 0.00001290815619821293",
            "extra": "mean: 1.71806522279804 msec\nrounds: 579"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-chimp128]",
            "value": 932.559615425071,
            "unit": "iter/sec",
            "range": "stddev: 0.000010149566402248471",
            "extra": "mean: 1.0723175049181053 msec\nrounds: 915"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-patas]",
            "value": 826.5074301865471,
            "unit": "iter/sec",
            "range": "stddev: 0.000015276462454275402",
            "extra": "mean: 1.2099104780876497 msec\nrounds: 753"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-gorilla]",
            "value": 52502.018295411784,
            "unit": "iter/sec",
            "range": "stddev: 0.000001380158362994995",
            "extra": "mean: 19.046886814394927 usec\nrounds: 42152"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-chimp]",
            "value": 52969.27378265979,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013151741455700575",
            "extra": "mean: 18.87886936307901 usec\nrounds: 41711"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-chimp128]",
            "value": 93971.28422597087,
            "unit": "iter/sec",
            "range": "stddev: 0.000001002861656988335",
            "extra": "mean: 10.64154872668676 usec\nrounds: 65067"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-patas]",
            "value": 87434.488807451,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011115745761848156",
            "extra": "mean: 11.43713440358997 usec\nrounds: 54753"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-gorilla]",
            "value": 5332.023829507573,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043609890103151886",
            "extra": "mean: 187.5460485502655 usec\nrounds: 4449"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-chimp]",
            "value": 5771.855096670277,
            "unit": "iter/sec",
            "range": "stddev: 0.00001469790745776682",
            "extra": "mean: 173.2545227230132 usec\nrounds: 5303"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-chimp128]",
            "value": 9311.383099011598,
            "unit": "iter/sec",
            "range": "stddev: 0.000005701652788351189",
            "extra": "mean: 107.39543087923745 usec\nrounds: 8789"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-patas]",
            "value": 8983.758658341943,
            "unit": "iter/sec",
            "range": "stddev: 0.000004037764608469344",
            "extra": "mean: 111.31198399585698 usec\nrounds: 7873"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-gorilla]",
            "value": 552.0545960730218,
            "unit": "iter/sec",
            "range": "stddev: 0.000014237239268231673",
            "extra": "mean: 1.8114150432101959 msec\nrounds: 486"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-chimp]",
            "value": 604.6491454745504,
            "unit": "iter/sec",
            "range": "stddev: 0.000014189022058298619",
            "extra": "mean: 1.6538516716420129 msec\nrounds: 603"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-chimp128]",
            "value": 945.9200907966743,
            "unit": "iter/sec",
            "range": "stddev: 0.000009908648927044743",
            "extra": "mean: 1.05717175238109 msec\nrounds: 945"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-patas]",
            "value": 906.731144274432,
            "unit": "iter/sec",
            "range": "stddev: 0.000013632431884554537",
            "extra": "mean: 1.1028627463769338 msec\nrounds: 828"
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
            "email": "miikka.koskinen@iki.fi",
            "name": "Miikka Koskinen",
            "username": "miikka"
          },
          "distinct": true,
          "id": "87f85664b960f763df35ac3709e751437462d2d0",
          "message": "chore: add test vectors",
          "timestamp": "2026-03-14T14:08:56+02:00",
          "tree_id": "2097a1d0b5707e05c96d7d907f973a5ba21903c5",
          "url": "https://github.com/miikka/floatbungler/commit/87f85664b960f763df35ac3709e751437462d2d0"
        },
        "date": 1773490283260,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-gorilla]",
            "value": 660265.7901417989,
            "unit": "iter/sec",
            "range": "stddev: 3.765833661146714e-7",
            "extra": "mean: 1.5145415905695185 usec\nrounds: 74488"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-chimp]",
            "value": 551260.2763779534,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016977783681475461",
            "extra": "mean: 1.8140251399402176 usec\nrounds: 164718"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-chimp128]",
            "value": 220171.78610740724,
            "unit": "iter/sec",
            "range": "stddev: 6.784784801847914e-7",
            "extra": "mean: 4.541908015008636 usec\nrounds: 27124"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-patas]",
            "value": 402790.59075895447,
            "unit": "iter/sec",
            "range": "stddev: 4.823875265662671e-7",
            "extra": "mean: 2.482679642828198 usec\nrounds: 146371"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-gorilla]",
            "value": 94433.03598137363,
            "unit": "iter/sec",
            "range": "stddev: 9.759134899788986e-7",
            "extra": "mean: 10.589514459719842 usec\nrounds: 69123"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-chimp]",
            "value": 84129.51289621321,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012315299519421856",
            "extra": "mean: 11.886435159010784 usec\nrounds: 55451"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-chimp128]",
            "value": 42808.96384237366,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017245450056733705",
            "extra": "mean: 23.35959365150923 usec\nrounds: 27912"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-patas]",
            "value": 56238.16173559627,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014475597197065477",
            "extra": "mean: 17.781520041524477 usec\nrounds: 43285"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-gorilla]",
            "value": 9724.580744323095,
            "unit": "iter/sec",
            "range": "stddev: 0.000007189020764743802",
            "extra": "mean: 102.83219670768517 usec\nrounds: 9537"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-chimp]",
            "value": 9050.818359931965,
            "unit": "iter/sec",
            "range": "stddev: 0.000004738975603195791",
            "extra": "mean: 110.48724659275088 usec\nrounds: 8658"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-chimp128]",
            "value": 4786.041786503427,
            "unit": "iter/sec",
            "range": "stddev: 0.0000067466299502318265",
            "extra": "mean: 208.9409254260977 usec\nrounds: 4519"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-patas]",
            "value": 6071.062667311613,
            "unit": "iter/sec",
            "range": "stddev: 0.000007438785457961765",
            "extra": "mean: 164.71580920821228 usec\nrounds: 5886"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-gorilla]",
            "value": 180857.44259810867,
            "unit": "iter/sec",
            "range": "stddev: 7.797301874592584e-7",
            "extra": "mean: 5.529216744605553 usec\nrounds: 82761"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-chimp]",
            "value": 151307.5025843787,
            "unit": "iter/sec",
            "range": "stddev: 7.986232278158325e-7",
            "extra": "mean: 6.609057600711745 usec\nrounds: 77256"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-chimp128]",
            "value": 105000.4381608247,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010843097650619042",
            "extra": "mean: 9.523769781496934 usec\nrounds: 42603"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-patas]",
            "value": 143140.47646814783,
            "unit": "iter/sec",
            "range": "stddev: 8.550491836451366e-7",
            "extra": "mean: 6.986144133888809 usec\nrounds: 85823"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-gorilla]",
            "value": 19281.697809428035,
            "unit": "iter/sec",
            "range": "stddev: 0.000007350474255593625",
            "extra": "mean: 51.86265285783273 usec\nrounds: 16463"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-chimp]",
            "value": 16986.38464288594,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023072971385133197",
            "extra": "mean: 58.87067913647002 usec\nrounds: 14408"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-chimp128]",
            "value": 14052.179298681453,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036071116575073736",
            "extra": "mean: 71.16333906256322 usec\nrounds: 11287"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-patas]",
            "value": 17006.64703792707,
            "unit": "iter/sec",
            "range": "stddev: 0.000002513156991383718",
            "extra": "mean: 58.800538270116846 usec\nrounds: 15260"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-gorilla]",
            "value": 1850.8614290018966,
            "unit": "iter/sec",
            "range": "stddev: 0.000009972685759719172",
            "extra": "mean: 540.288961848032 usec\nrounds: 1861"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-chimp]",
            "value": 1720.373512471989,
            "unit": "iter/sec",
            "range": "stddev: 0.00004789954990327242",
            "extra": "mean: 581.269121356739 usec\nrounds: 1681"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-chimp128]",
            "value": 1432.2909487387421,
            "unit": "iter/sec",
            "range": "stddev: 0.000013508905657764027",
            "extra": "mean: 698.182168141597 usec\nrounds: 1356"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-patas]",
            "value": 1755.0616868168952,
            "unit": "iter/sec",
            "range": "stddev: 0.000011958169303134303",
            "extra": "mean: 569.7805424797752 usec\nrounds: 1742"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-gorilla]",
            "value": 85368.48590400205,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010295671148544614",
            "extra": "mean: 11.713924516882175 usec\nrounds: 52674"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-chimp]",
            "value": 82443.83726708686,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010035522046027923",
            "extra": "mean: 12.129469383628738 usec\nrounds: 48977"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-chimp128]",
            "value": 5529.944088348974,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035782200268483453",
            "extra": "mean: 180.8336547392762 usec\nrounds: 5254"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-patas]",
            "value": 9602.08327351993,
            "unit": "iter/sec",
            "range": "stddev: 0.000002928825706995093",
            "extra": "mean: 104.14406660664382 usec\nrounds: 7762"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-gorilla]",
            "value": 8577.993753315157,
            "unit": "iter/sec",
            "range": "stddev: 0.000003914196745386219",
            "extra": "mean: 116.57737563792554 usec\nrounds: 7840"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-chimp]",
            "value": 8452.384792327774,
            "unit": "iter/sec",
            "range": "stddev: 0.000008507540497005673",
            "extra": "mean: 118.30980540636291 usec\nrounds: 7621"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-chimp128]",
            "value": 453.9145673997983,
            "unit": "iter/sec",
            "range": "stddev: 0.000016179521496774426",
            "extra": "mean: 2.2030577377773852 msec\nrounds: 450"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-patas]",
            "value": 742.4243703186314,
            "unit": "iter/sec",
            "range": "stddev: 0.000007205799070564601",
            "extra": "mean: 1.346938543478608 msec\nrounds: 736"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-gorilla]",
            "value": 851.5935945768322,
            "unit": "iter/sec",
            "range": "stddev: 0.000016863408459920205",
            "extra": "mean: 1.174269048485402 msec\nrounds: 825"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-chimp]",
            "value": 841.3946111164767,
            "unit": "iter/sec",
            "range": "stddev: 0.000017205205911068946",
            "extra": "mean: 1.1885029768292241 msec\nrounds: 820"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-chimp128]",
            "value": 44.63164879867028,
            "unit": "iter/sec",
            "range": "stddev: 0.000026232141182726936",
            "extra": "mean: 22.40562531110868 msec\nrounds: 45"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-patas]",
            "value": 91.21454200128962,
            "unit": "iter/sec",
            "range": "stddev: 0.00006453292545253887",
            "extra": "mean: 10.963164184783844 msec\nrounds: 92"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-gorilla]",
            "value": 92177.50320879678,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010048531783725243",
            "extra": "mean: 10.848634050488872 usec\nrounds: 56199"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-chimp]",
            "value": 89020.2852179687,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011474105567144346",
            "extra": "mean: 11.233394698202455 usec\nrounds: 49757"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-chimp128]",
            "value": 5530.316306186596,
            "unit": "iter/sec",
            "range": "stddev: 0.000003852723374944945",
            "extra": "mean: 180.8214837334585 usec\nrounds: 5164"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-patas]",
            "value": 9635.341398275217,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028752206438003636",
            "extra": "mean: 103.78459451151424 usec\nrounds: 9110"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-gorilla]",
            "value": 9206.718459381804,
            "unit": "iter/sec",
            "range": "stddev: 0.000003325312558528111",
            "extra": "mean: 108.61633321490166 usec\nrounds: 8451"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-chimp]",
            "value": 9127.766926217624,
            "unit": "iter/sec",
            "range": "stddev: 0.000004666508903815937",
            "extra": "mean: 109.5558210549512 usec\nrounds: 8036"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-chimp128]",
            "value": 457.33600892646064,
            "unit": "iter/sec",
            "range": "stddev: 0.000006729409316478139",
            "extra": "mean: 2.1865761288890755 msec\nrounds: 450"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-patas]",
            "value": 738.4966003802392,
            "unit": "iter/sec",
            "range": "stddev: 0.00000535180728835044",
            "extra": "mean: 1.3541023743171154 msec\nrounds: 732"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-gorilla]",
            "value": 909.6678636668835,
            "unit": "iter/sec",
            "range": "stddev: 0.000013059684074726305",
            "extra": "mean: 1.0993023277407936 msec\nrounds: 894"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-chimp]",
            "value": 903.7898658605147,
            "unit": "iter/sec",
            "range": "stddev: 0.0000175626001276752",
            "extra": "mean: 1.1064518841975308 msec\nrounds: 829"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-chimp128]",
            "value": 44.72170723603317,
            "unit": "iter/sec",
            "range": "stddev: 0.000028126073381578847",
            "extra": "mean: 22.360505933330742 msec\nrounds: 45"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-patas]",
            "value": 91.49672992278339,
            "unit": "iter/sec",
            "range": "stddev: 0.000015817129249802248",
            "extra": "mean: 10.929352347826283 msec\nrounds: 92"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-gorilla]",
            "value": 90048.25250044871,
            "unit": "iter/sec",
            "range": "stddev: 9.80690432044508e-7",
            "extra": "mean: 11.105157204411237 usec\nrounds: 57104"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-chimp]",
            "value": 86514.90402098486,
            "unit": "iter/sec",
            "range": "stddev: 0.000001010386773923125",
            "extra": "mean: 11.558702067766754 usec\nrounds: 50488"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-chimp128]",
            "value": 5494.292775354189,
            "unit": "iter/sec",
            "range": "stddev: 0.000004025293485084445",
            "extra": "mean: 182.00704638196768 usec\nrounds: 5196"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-patas]",
            "value": 9596.184408958461,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027397417598685164",
            "extra": "mean: 104.20808494118307 usec\nrounds: 9018"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-gorilla]",
            "value": 9280.826368112253,
            "unit": "iter/sec",
            "range": "stddev: 0.0000049561546895514264",
            "extra": "mean: 107.74902582337643 usec\nrounds: 8442"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-chimp]",
            "value": 9139.003264135485,
            "unit": "iter/sec",
            "range": "stddev: 0.00000382353443378448",
            "extra": "mean: 109.42112297129114 usec\nrounds: 8010"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-chimp128]",
            "value": 456.00866105152977,
            "unit": "iter/sec",
            "range": "stddev: 0.00000913196566304511",
            "extra": "mean: 2.1929408044444973 msec\nrounds: 450"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-patas]",
            "value": 740.4971640392359,
            "unit": "iter/sec",
            "range": "stddev: 0.000013832700372569297",
            "extra": "mean: 1.3504440645595965 msec\nrounds: 728"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-gorilla]",
            "value": 935.862112279109,
            "unit": "iter/sec",
            "range": "stddev: 0.000014780606652635635",
            "extra": "mean: 1.0685334803913533 msec\nrounds: 918"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-chimp]",
            "value": 906.2522938174429,
            "unit": "iter/sec",
            "range": "stddev: 0.000016719214495933297",
            "extra": "mean: 1.1034454829213836 msec\nrounds: 849"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-chimp128]",
            "value": 44.816721211901644,
            "unit": "iter/sec",
            "range": "stddev: 0.0000303037053693731",
            "extra": "mean: 22.313100400000646 msec\nrounds: 45"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-patas]",
            "value": 91.88925075618329,
            "unit": "iter/sec",
            "range": "stddev: 0.00001830158636187721",
            "extra": "mean: 10.88266572826212 msec\nrounds: 92"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-gorilla]",
            "value": 324539.8974785605,
            "unit": "iter/sec",
            "range": "stddev: 5.808291785855855e-7",
            "extra": "mean: 3.0812852526585313 usec\nrounds: 112651"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-chimp]",
            "value": 302825.2364288456,
            "unit": "iter/sec",
            "range": "stddev: 5.975990142139709e-7",
            "extra": "mean: 3.3022346875471476 usec\nrounds: 136931"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-chimp128]",
            "value": 263024.38577093557,
            "unit": "iter/sec",
            "range": "stddev: 6.185623148097845e-7",
            "extra": "mean: 3.8019288480380165 usec\nrounds: 135063"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-patas]",
            "value": 210466.01345404182,
            "unit": "iter/sec",
            "range": "stddev: 7.502121212377625e-7",
            "extra": "mean: 4.751360961271612 usec\nrounds: 99911"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-gorilla]",
            "value": 30883.69033538291,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021884060917878375",
            "extra": "mean: 32.37955014897677 usec\nrounds: 18784"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-chimp]",
            "value": 28063.43233867555,
            "unit": "iter/sec",
            "range": "stddev: 0.000002016859203452412",
            "extra": "mean: 35.63355999835603 usec\nrounds: 23709"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-chimp128]",
            "value": 21537.746892933996,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022888297074702184",
            "extra": "mean: 46.43011197833676 usec\nrounds: 18066"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-patas]",
            "value": 19427.67696361409,
            "unit": "iter/sec",
            "range": "stddev: 0.000002730637320077068",
            "extra": "mean: 51.472957980148145 usec\nrounds: 16040"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-gorilla]",
            "value": 3057.6756702617613,
            "unit": "iter/sec",
            "range": "stddev: 0.000006984960993520669",
            "extra": "mean: 327.0458046697909 usec\nrounds: 1756"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-chimp]",
            "value": 2787.2824030767288,
            "unit": "iter/sec",
            "range": "stddev: 0.000008240374387995851",
            "extra": "mean: 358.7724009939412 usec\nrounds: 2616"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-chimp128]",
            "value": 2128.2052446683824,
            "unit": "iter/sec",
            "range": "stddev: 0.000008226331068223047",
            "extra": "mean: 469.87949235874584 usec\nrounds: 2094"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-patas]",
            "value": 1952.3404522469925,
            "unit": "iter/sec",
            "range": "stddev: 0.00000981315160889747",
            "extra": "mean: 512.205747132411 usec\nrounds: 1918"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-gorilla]",
            "value": 192202.55277951807,
            "unit": "iter/sec",
            "range": "stddev: 9.374875763162047e-7",
            "extra": "mean: 5.202844528017967 usec\nrounds: 82420"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-chimp]",
            "value": 154038.43690949774,
            "unit": "iter/sec",
            "range": "stddev: 8.473316220522662e-7",
            "extra": "mean: 6.491886181547858 usec\nrounds: 92507"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-chimp128]",
            "value": 174633.565712074,
            "unit": "iter/sec",
            "range": "stddev: 7.382389443734821e-7",
            "extra": "mean: 5.726276022152258 usec\nrounds: 36363"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-patas]",
            "value": 175745.54612786463,
            "unit": "iter/sec",
            "range": "stddev: 7.633974129619449e-7",
            "extra": "mean: 5.690044624359611 usec\nrounds: 95979"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-gorilla]",
            "value": 18416.04805802818,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026236855994088754",
            "extra": "mean: 54.30046646539164 usec\nrounds: 13240"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-chimp]",
            "value": 15112.57236688727,
            "unit": "iter/sec",
            "range": "stddev: 0.000003130064977513988",
            "extra": "mean: 66.1700718926628 usec\nrounds: 13854"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-chimp128]",
            "value": 15724.883285927795,
            "unit": "iter/sec",
            "range": "stddev: 0.000002580586870179116",
            "extra": "mean: 63.59347677288647 usec\nrounds: 14229"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-patas]",
            "value": 16423.42661804027,
            "unit": "iter/sec",
            "range": "stddev: 0.000002888201323713177",
            "extra": "mean: 60.888633246703385 usec\nrounds: 14233"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-gorilla]",
            "value": 1667.6027834137594,
            "unit": "iter/sec",
            "range": "stddev: 0.000006743599536815026",
            "extra": "mean: 599.663187148737 usec\nrounds: 1245"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-chimp]",
            "value": 1504.8814600013293,
            "unit": "iter/sec",
            "range": "stddev: 0.00000775906587650082",
            "extra": "mean: 664.5041663275703 usec\nrounds: 1473"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-chimp128]",
            "value": 1570.7261021725685,
            "unit": "iter/sec",
            "range": "stddev: 0.0000066090191770611034",
            "extra": "mean: 636.6482346074456 usec\nrounds: 1543"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-patas]",
            "value": 1635.9183613445744,
            "unit": "iter/sec",
            "range": "stddev: 0.000008256608606037234",
            "extra": "mean: 611.2774473526247 usec\nrounds: 1643"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-gorilla]",
            "value": 49012.000744293546,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013378181901625848",
            "extra": "mean: 20.403166261610526 usec\nrounds: 36629"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-chimp]",
            "value": 53727.56237880783,
            "unit": "iter/sec",
            "range": "stddev: 0.000001511500515444076",
            "extra": "mean: 18.61242080832682 usec\nrounds: 42877"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-chimp128]",
            "value": 88647.18129121843,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010268161302540232",
            "extra": "mean: 11.280674528328879 usec\nrounds: 62540"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-patas]",
            "value": 86791.82711433001,
            "unit": "iter/sec",
            "range": "stddev: 9.916796205463893e-7",
            "extra": "mean: 11.52182219510957 usec\nrounds: 50083"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-gorilla]",
            "value": 4785.175039415609,
            "unit": "iter/sec",
            "range": "stddev: 0.000005357846517222809",
            "extra": "mean: 208.97877125977095 usec\nrounds: 4057"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-chimp]",
            "value": 5187.2181083114765,
            "unit": "iter/sec",
            "range": "stddev: 0.000005514400825240458",
            "extra": "mean: 192.78156019653395 usec\nrounds: 4477"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-chimp128]",
            "value": 8323.217595175951,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036968139081464642",
            "extra": "mean: 120.1458436674285 usec\nrounds: 7951"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-patas]",
            "value": 8491.974337046031,
            "unit": "iter/sec",
            "range": "stddev: 0.000003370231225973539",
            "extra": "mean: 117.75824564583579 usec\nrounds: 7694"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-gorilla]",
            "value": 477.0517609452936,
            "unit": "iter/sec",
            "range": "stddev: 0.000014097614867388322",
            "extra": "mean: 2.096208591743729 msec\nrounds: 436"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-chimp]",
            "value": 518.0480719079795,
            "unit": "iter/sec",
            "range": "stddev: 0.000010149973354006011",
            "extra": "mean: 1.9303227909274592 msec\nrounds: 507"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-chimp128]",
            "value": 831.5820602671295,
            "unit": "iter/sec",
            "range": "stddev: 0.000010635530822349628",
            "extra": "mean: 1.2025271440785648 msec\nrounds: 819"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-patas]",
            "value": 822.9592418599645,
            "unit": "iter/sec",
            "range": "stddev: 0.000009737613030511362",
            "extra": "mean: 1.2151270064601338 msec\nrounds: 774"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-gorilla]",
            "value": 54431.43397037783,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012514997062366987",
            "extra": "mean: 18.37173719406714 usec\nrounds: 38869"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-chimp]",
            "value": 59389.487674831646,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011630154627211512",
            "extra": "mean: 16.83799674237272 usec\nrounds: 45125"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-chimp128]",
            "value": 98186.84390381628,
            "unit": "iter/sec",
            "range": "stddev: 9.785443199422905e-7",
            "extra": "mean: 10.184663853536211 usec\nrounds: 69080"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-patas]",
            "value": 89267.33301762765,
            "unit": "iter/sec",
            "range": "stddev: 0.000001035782180201283",
            "extra": "mean: 11.202306221050984 usec\nrounds: 54219"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-gorilla]",
            "value": 5284.18109503122,
            "unit": "iter/sec",
            "range": "stddev: 0.000004287211989522864",
            "extra": "mean: 189.24408191466267 usec\nrounds: 4700"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-chimp]",
            "value": 5780.0539809327975,
            "unit": "iter/sec",
            "range": "stddev: 0.000005939466733407936",
            "extra": "mean: 173.00876484870093 usec\nrounds: 5354"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-chimp128]",
            "value": 9145.082413879692,
            "unit": "iter/sec",
            "range": "stddev: 0.000003626261672566138",
            "extra": "mean: 109.34838580374937 usec\nrounds: 8608"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-patas]",
            "value": 8619.49659934811,
            "unit": "iter/sec",
            "range": "stddev: 0.000004017933688540969",
            "extra": "mean: 116.01605598123093 usec\nrounds: 7306"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-gorilla]",
            "value": 527.6711832621048,
            "unit": "iter/sec",
            "range": "stddev: 0.000014421667845603116",
            "extra": "mean: 1.8951195966736731 msec\nrounds: 481"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-chimp]",
            "value": 579.0911189747424,
            "unit": "iter/sec",
            "range": "stddev: 0.000011949837193424168",
            "extra": "mean: 1.7268439581157107 msec\nrounds: 573"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-chimp128]",
            "value": 912.8014502168837,
            "unit": "iter/sec",
            "range": "stddev: 0.000009866391734170796",
            "extra": "mean: 1.0955284961065712 msec\nrounds: 899"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-patas]",
            "value": 826.6915810398174,
            "unit": "iter/sec",
            "range": "stddev: 0.00001602493701078838",
            "extra": "mean: 1.2096409627665425 msec\nrounds: 752"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-gorilla]",
            "value": 52444.87407150596,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013494297935532859",
            "extra": "mean: 19.067640407269355 usec\nrounds: 39973"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-chimp]",
            "value": 56882.08988532344,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012789231201931006",
            "extra": "mean: 17.58022607847285 usec\nrounds: 45064"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-chimp128]",
            "value": 94562.19116947507,
            "unit": "iter/sec",
            "range": "stddev: 9.769106139852139e-7",
            "extra": "mean: 10.575051060394662 usec\nrounds: 66059"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-patas]",
            "value": 86483.53549803114,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015559877515611792",
            "extra": "mean: 11.562894535258282 usec\nrounds: 50927"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-gorilla]",
            "value": 5337.004320092603,
            "unit": "iter/sec",
            "range": "stddev: 0.000004959558573815131",
            "extra": "mean: 187.37103064264502 usec\nrounds: 4373"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-chimp]",
            "value": 5832.57819995055,
            "unit": "iter/sec",
            "range": "stddev: 0.000004620279669600343",
            "extra": "mean: 171.4507659766102 usec\nrounds: 5508"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-chimp128]",
            "value": 9209.882061373572,
            "unit": "iter/sec",
            "range": "stddev: 0.00000315125961337245",
            "extra": "mean: 108.57902341594794 usec\nrounds: 7986"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-patas]",
            "value": 9020.851099664833,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041407576960593136",
            "extra": "mean: 110.85428513914333 usec\nrounds: 7947"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-gorilla]",
            "value": 551.5599561873489,
            "unit": "iter/sec",
            "range": "stddev: 0.000016190722833401166",
            "extra": "mean: 1.81303952323241 msec\nrounds: 495"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-chimp]",
            "value": 600.5043482871516,
            "unit": "iter/sec",
            "range": "stddev: 0.00001549164559417304",
            "extra": "mean: 1.6652668758392004 msec\nrounds: 596"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-chimp128]",
            "value": 924.4761488553689,
            "unit": "iter/sec",
            "range": "stddev: 0.000010845165979342799",
            "extra": "mean: 1.0816936718574515 msec\nrounds: 899"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-patas]",
            "value": 908.3270940926205,
            "unit": "iter/sec",
            "range": "stddev: 0.000009500197436850466",
            "extra": "mean: 1.1009249933240808 msec\nrounds: 749"
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
            "email": "miikka.koskinen@iki.fi",
            "name": "Miikka Koskinen",
            "username": "miikka"
          },
          "distinct": true,
          "id": "77afbf96d17bc039467dd3f5375f8eb60fb744df",
          "message": "chore: add test vectors",
          "timestamp": "2026-03-14T14:10:00+02:00",
          "tree_id": "ee480277f7c2d2baf7ec5102f95b1b24466482b1",
          "url": "https://github.com/miikka/floatbungler/commit/77afbf96d17bc039467dd3f5375f8eb60fb744df"
        },
        "date": 1773490348055,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-gorilla]",
            "value": 664148.1509314118,
            "unit": "iter/sec",
            "range": "stddev: 3.837488703238716e-7",
            "extra": "mean: 1.5056881489432505 usec\nrounds: 78964"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-chimp]",
            "value": 552816.2423811178,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014737192022257916",
            "extra": "mean: 1.808919353911799 usec\nrounds: 177305"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-chimp128]",
            "value": 219234.15388511718,
            "unit": "iter/sec",
            "range": "stddev: 6.857607669366859e-7",
            "extra": "mean: 4.561333087380258 usec\nrounds: 27116"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-patas]",
            "value": 402827.10537430027,
            "unit": "iter/sec",
            "range": "stddev: 5.140630201959039e-7",
            "extra": "mean: 2.4824545981602117 usec\nrounds: 146349"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-gorilla]",
            "value": 92291.51070774702,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015216171966525274",
            "extra": "mean: 10.835232756852676 usec\nrounds: 65751"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-chimp]",
            "value": 81235.1069976601,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013131179356544311",
            "extra": "mean: 12.309948702705642 usec\nrounds: 57664"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-chimp128]",
            "value": 42251.33357521639,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016727997255183057",
            "extra": "mean: 23.66789200203081 usec\nrounds: 28445"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-patas]",
            "value": 56122.839894414275,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013646868821222619",
            "extra": "mean: 17.818057708436218 usec\nrounds: 44205"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-gorilla]",
            "value": 9147.527950341537,
            "unit": "iter/sec",
            "range": "stddev: 0.000007447844527516481",
            "extra": "mean: 109.31915217188961 usec\nrounds: 9601"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-chimp]",
            "value": 8258.121573936456,
            "unit": "iter/sec",
            "range": "stddev: 0.00001350398038750764",
            "extra": "mean: 121.09291332742187 usec\nrounds: 8607"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-chimp128]",
            "value": 4648.713810982381,
            "unit": "iter/sec",
            "range": "stddev: 0.000017859272077103322",
            "extra": "mean: 215.11326372416048 usec\nrounds: 2423"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-patas]",
            "value": 5581.7192977835775,
            "unit": "iter/sec",
            "range": "stddev: 0.0000061533950358925865",
            "extra": "mean: 179.1562682840547 usec\nrounds: 5893"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-gorilla]",
            "value": 188849.8318592034,
            "unit": "iter/sec",
            "range": "stddev: 7.619441444656747e-7",
            "extra": "mean: 5.295212551449598 usec\nrounds: 79096"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-chimp]",
            "value": 153625.3880961691,
            "unit": "iter/sec",
            "range": "stddev: 7.835849174249003e-7",
            "extra": "mean: 6.509340756711401 usec\nrounds: 74047"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-chimp128]",
            "value": 103621.69315770945,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010029420394046218",
            "extra": "mean: 9.650488903689565 usec\nrounds: 44205"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-patas]",
            "value": 139632.37223517694,
            "unit": "iter/sec",
            "range": "stddev: 7.628424667180107e-7",
            "extra": "mean: 7.161663044123765 usec\nrounds: 65881"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-gorilla]",
            "value": 19774.184268828947,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025732265575040086",
            "extra": "mean: 50.57098621136806 usec\nrounds: 16681"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-chimp]",
            "value": 17138.023270660688,
            "unit": "iter/sec",
            "range": "stddev: 0.0000050849815329496",
            "extra": "mean: 58.34978656563868 usec\nrounds: 14604"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-chimp128]",
            "value": 13971.935226999145,
            "unit": "iter/sec",
            "range": "stddev: 0.000004834039547305196",
            "extra": "mean: 71.57204666019464 usec\nrounds: 10137"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-patas]",
            "value": 16741.907062125712,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028227981200623715",
            "extra": "mean: 59.73035188220848 usec\nrounds: 15383"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-gorilla]",
            "value": 1897.952790225063,
            "unit": "iter/sec",
            "range": "stddev: 0.000014394381669634057",
            "extra": "mean: 526.8834952851582 usec\nrounds: 1803"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-chimp]",
            "value": 1692.4082020936023,
            "unit": "iter/sec",
            "range": "stddev: 0.000009701994559218279",
            "extra": "mean: 590.8739976342262 usec\nrounds: 1692"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-chimp128]",
            "value": 1416.2100548459266,
            "unit": "iter/sec",
            "range": "stddev: 0.000014310406493454198",
            "extra": "mean: 706.1099422209601 usec\nrounds: 1350"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-patas]",
            "value": 1769.3451039891975,
            "unit": "iter/sec",
            "range": "stddev: 0.00003007131180450941",
            "extra": "mean: 565.1808670594459 usec\nrounds: 1700"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-gorilla]",
            "value": 86705.65502935037,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010217250065754794",
            "extra": "mean: 11.533273114210303 usec\nrounds: 54014"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-chimp]",
            "value": 87126.4749755895,
            "unit": "iter/sec",
            "range": "stddev: 0.000001042001995328551",
            "extra": "mean: 11.477567527897499 usec\nrounds: 49809"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-chimp128]",
            "value": 40040.42740143295,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018544982379304554",
            "extra": "mean: 24.974758385426536 usec\nrounds: 25073"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-patas]",
            "value": 9539.338261670044,
            "unit": "iter/sec",
            "range": "stddev: 0.000002705129317610655",
            "extra": "mean: 104.82907436232698 usec\nrounds: 8983"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-gorilla]",
            "value": 8707.645171031969,
            "unit": "iter/sec",
            "range": "stddev: 0.000004038048846451181",
            "extra": "mean: 114.84161106228069 usec\nrounds: 8045"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-chimp]",
            "value": 8950.494769812462,
            "unit": "iter/sec",
            "range": "stddev: 0.000005380696075896226",
            "extra": "mean: 111.72566720811042 usec\nrounds: 8005"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-chimp128]",
            "value": 3318.5808995645957,
            "unit": "iter/sec",
            "range": "stddev: 0.000010103039932819068",
            "extra": "mean: 301.33362128709956 usec\nrounds: 2894"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-patas]",
            "value": 733.1725576096401,
            "unit": "iter/sec",
            "range": "stddev: 0.000005709061478355597",
            "extra": "mean: 1.3639353923178692 msec\nrounds: 729"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-gorilla]",
            "value": 860.3653733017268,
            "unit": "iter/sec",
            "range": "stddev: 0.000015010590524041855",
            "extra": "mean: 1.1622968927287407 msec\nrounds: 839"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-chimp]",
            "value": 880.6318276463536,
            "unit": "iter/sec",
            "range": "stddev: 0.000014481143461867785",
            "extra": "mean: 1.1355483286047918 msec\nrounds: 846"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-chimp128]",
            "value": 304.3212733206005,
            "unit": "iter/sec",
            "range": "stddev: 0.00015012607375215796",
            "extra": "mean: 3.286000972224201 msec\nrounds: 288"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-patas]",
            "value": 90.40404397597217,
            "unit": "iter/sec",
            "range": "stddev: 0.00005038740945353723",
            "extra": "mean: 11.061452076920173 msec\nrounds: 91"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-gorilla]",
            "value": 92921.84845438911,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013907390189520362",
            "extra": "mean: 10.761731677032364 usec\nrounds: 56555"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-chimp]",
            "value": 92301.7101216258,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011298068463655223",
            "extra": "mean: 10.834035454839372 usec\nrounds: 24369"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-chimp128]",
            "value": 41867.715604425575,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016436857626605348",
            "extra": "mean: 23.884751904025457 usec\nrounds: 26260"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-patas]",
            "value": 9553.682156507317,
            "unit": "iter/sec",
            "range": "stddev: 0.000002757225891114963",
            "extra": "mean: 104.67168402905975 usec\nrounds: 9004"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-gorilla]",
            "value": 9337.0193011884,
            "unit": "iter/sec",
            "range": "stddev: 0.00000396228569314752",
            "extra": "mean: 107.10056044038826 usec\nrounds: 7371"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-chimp]",
            "value": 9518.195310382416,
            "unit": "iter/sec",
            "range": "stddev: 0.0000050299472685496895",
            "extra": "mean: 105.06193321219237 usec\nrounds: 7097"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-chimp128]",
            "value": 3518.962612228203,
            "unit": "iter/sec",
            "range": "stddev: 0.000010954224853915322",
            "extra": "mean: 284.17465889664606 usec\nrounds: 3046"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-patas]",
            "value": 730.1517879855392,
            "unit": "iter/sec",
            "range": "stddev: 0.000007085732390884672",
            "extra": "mean: 1.3695782390110443 msec\nrounds: 728"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-gorilla]",
            "value": 917.2346097708374,
            "unit": "iter/sec",
            "range": "stddev: 0.000014779549327623403",
            "extra": "mean: 1.0902336101881729 msec\nrounds: 903"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-chimp]",
            "value": 937.7334258885522,
            "unit": "iter/sec",
            "range": "stddev: 0.000014145827143765447",
            "extra": "mean: 1.066401145989274 msec\nrounds: 911"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-chimp128]",
            "value": 309.8551397285214,
            "unit": "iter/sec",
            "range": "stddev: 0.00003110686003345572",
            "extra": "mean: 3.2273145472950584 msec\nrounds: 296"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-patas]",
            "value": 90.73581812873563,
            "unit": "iter/sec",
            "range": "stddev: 0.000014661462949827224",
            "extra": "mean: 11.021006043955031 msec\nrounds: 91"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-gorilla]",
            "value": 91881.01617118057,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011739425432920825",
            "extra": "mean: 10.883641057440332 usec\nrounds: 54485"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-chimp]",
            "value": 90623.90632019016,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010130221031077806",
            "extra": "mean: 11.034615926473359 usec\nrounds: 50131"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-chimp128]",
            "value": 40297.6417159628,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016192813068182676",
            "extra": "mean: 24.815347931486457 usec\nrounds: 25117"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-patas]",
            "value": 9498.814985720635,
            "unit": "iter/sec",
            "range": "stddev: 0.000002735355542798171",
            "extra": "mean: 105.27628988492549 usec\nrounds: 8976"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-gorilla]",
            "value": 9404.549092415993,
            "unit": "iter/sec",
            "range": "stddev: 0.000004292317424700334",
            "extra": "mean: 106.33152000944085 usec\nrounds: 8646"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-chimp]",
            "value": 9557.776284628135,
            "unit": "iter/sec",
            "range": "stddev: 0.000004577169413313823",
            "extra": "mean: 104.62684731471585 usec\nrounds: 8082"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-chimp128]",
            "value": 3446.1792791936114,
            "unit": "iter/sec",
            "range": "stddev: 0.000018487522651707054",
            "extra": "mean: 290.1764298907848 usec\nrounds: 3031"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-patas]",
            "value": 732.0504932679876,
            "unit": "iter/sec",
            "range": "stddev: 0.000010421923794152754",
            "extra": "mean: 1.366025990278135 msec\nrounds: 720"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-gorilla]",
            "value": 942.1251358999332,
            "unit": "iter/sec",
            "range": "stddev: 0.000015402550615581483",
            "extra": "mean: 1.061430124189165 msec\nrounds: 926"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-chimp]",
            "value": 946.3216171343352,
            "unit": "iter/sec",
            "range": "stddev: 0.000012415445735916434",
            "extra": "mean: 1.056723192087923 msec\nrounds: 885"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-chimp128]",
            "value": 310.14431265587194,
            "unit": "iter/sec",
            "range": "stddev: 0.000033412755924914615",
            "extra": "mean: 3.2243054577936885 msec\nrounds: 308"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-patas]",
            "value": 90.9118531399824,
            "unit": "iter/sec",
            "range": "stddev: 0.000011786960049936358",
            "extra": "mean: 10.999665780217244 msec\nrounds: 91"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-gorilla]",
            "value": 325958.42025916977,
            "unit": "iter/sec",
            "range": "stddev: 6.964221436841561e-7",
            "extra": "mean: 3.0678759554819885 usec\nrounds: 115394"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-chimp]",
            "value": 303811.0960091547,
            "unit": "iter/sec",
            "range": "stddev: 5.668303717554426e-7",
            "extra": "mean: 3.291519016704601 usec\nrounds: 139587"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-chimp128]",
            "value": 251085.87655826117,
            "unit": "iter/sec",
            "range": "stddev: 6.481147902479611e-7",
            "extra": "mean: 3.982701112891801 usec\nrounds: 133977"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-patas]",
            "value": 207820.9155741589,
            "unit": "iter/sec",
            "range": "stddev: 7.025695404084664e-7",
            "extra": "mean: 4.811835215128573 usec\nrounds: 101854"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-gorilla]",
            "value": 30075.831058484604,
            "unit": "iter/sec",
            "range": "stddev: 0.000002178684939538567",
            "extra": "mean: 33.24928904060634 usec\nrounds: 18423"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-chimp]",
            "value": 27589.371996430345,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021139648934900785",
            "extra": "mean: 36.24584133808429 usec\nrounds: 22967"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-chimp128]",
            "value": 22246.84759401356,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027126225514064837",
            "extra": "mean: 44.95018881996978 usec\nrounds: 18372"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-patas]",
            "value": 18915.186201955275,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030562058823064836",
            "extra": "mean: 52.86757366927899 usec\nrounds: 11986"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-gorilla]",
            "value": 2988.5812491927763,
            "unit": "iter/sec",
            "range": "stddev: 0.000009309227848080762",
            "extra": "mean: 334.6069310546945 usec\nrounds: 1900"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-chimp]",
            "value": 2807.7763918978208,
            "unit": "iter/sec",
            "range": "stddev: 0.000007453498041834006",
            "extra": "mean: 356.1537175416181 usec\nrounds: 2765"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-chimp128]",
            "value": 2257.4492361147772,
            "unit": "iter/sec",
            "range": "stddev: 0.000007299038463648992",
            "extra": "mean: 442.97784596966954 usec\nrounds: 2110"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-patas]",
            "value": 1925.705056004458,
            "unit": "iter/sec",
            "range": "stddev: 0.000012160268012462548",
            "extra": "mean: 519.2903227220302 usec\nrounds: 1822"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-gorilla]",
            "value": 188644.88995229948,
            "unit": "iter/sec",
            "range": "stddev: 7.208283083547132e-7",
            "extra": "mean: 5.3009652169897565 usec\nrounds: 88176"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-chimp]",
            "value": 151266.7512464336,
            "unit": "iter/sec",
            "range": "stddev: 8.784608046948033e-7",
            "extra": "mean: 6.610838084113193 usec\nrounds: 94617"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-chimp128]",
            "value": 170246.10124759935,
            "unit": "iter/sec",
            "range": "stddev: 7.675622979030235e-7",
            "extra": "mean: 5.873849636918491 usec\nrounds: 109927"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-patas]",
            "value": 175053.27222620376,
            "unit": "iter/sec",
            "range": "stddev: 7.875012836317858e-7",
            "extra": "mean: 5.712546742387086 usec\nrounds: 101225"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-gorilla]",
            "value": 17886.932159362128,
            "unit": "iter/sec",
            "range": "stddev: 0.000002370654112552633",
            "extra": "mean: 55.90673633077956 usec\nrounds: 12857"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-chimp]",
            "value": 14843.43430555042,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026999715567011986",
            "extra": "mean: 67.36985386367553 usec\nrounds: 12372"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-chimp128]",
            "value": 15880.825061867647,
            "unit": "iter/sec",
            "range": "stddev: 0.000003234392014961661",
            "extra": "mean: 62.9690205706728 usec\nrounds: 11375"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-patas]",
            "value": 16249.683962686686,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029308995334543697",
            "extra": "mean: 61.539658389433825 usec\nrounds: 14660"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-gorilla]",
            "value": 1603.5369992207466,
            "unit": "iter/sec",
            "range": "stddev: 0.000010492406016727104",
            "extra": "mean: 623.6214072303659 usec\nrounds: 1245"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-chimp]",
            "value": 1491.8023051582188,
            "unit": "iter/sec",
            "range": "stddev: 0.000024916966872069028",
            "extra": "mean: 670.3301077778809 usec\nrounds: 1466"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-chimp128]",
            "value": 1595.1995813394803,
            "unit": "iter/sec",
            "range": "stddev: 0.000007733489202148709",
            "extra": "mean: 626.8808064507549 usec\nrounds: 1581"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-patas]",
            "value": 1646.4800647751774,
            "unit": "iter/sec",
            "range": "stddev: 0.000008168918535056516",
            "extra": "mean: 607.3562756051634 usec\nrounds: 1611"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-gorilla]",
            "value": 48374.44254046985,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013427159750309632",
            "extra": "mean: 20.672072844320724 usec\nrounds: 36832"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-chimp]",
            "value": 51723.757225654226,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014143440184522732",
            "extra": "mean: 19.33347563359173 usec\nrounds: 42312"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-chimp128]",
            "value": 78320.10114747188,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010994743833853902",
            "extra": "mean: 12.768114256097066 usec\nrounds: 61047"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-patas]",
            "value": 87637.06146262321,
            "unit": "iter/sec",
            "range": "stddev: 0.000001078395013058633",
            "extra": "mean: 11.410697521236436 usec\nrounds: 48010"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-gorilla]",
            "value": 4713.18823396706,
            "unit": "iter/sec",
            "range": "stddev: 0.00000444264398434499",
            "extra": "mean: 212.1706051952664 usec\nrounds: 4273"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-chimp]",
            "value": 5029.139663268742,
            "unit": "iter/sec",
            "range": "stddev: 0.000004760987776979878",
            "extra": "mean: 198.84116706952608 usec\nrounds: 4549"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-chimp128]",
            "value": 7409.9555193813185,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037399308768881794",
            "extra": "mean: 134.95357662868847 usec\nrounds: 6264"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-patas]",
            "value": 8468.33781575394,
            "unit": "iter/sec",
            "range": "stddev: 0.000004242147048974999",
            "extra": "mean: 118.08692824460377 usec\nrounds: 7219"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-gorilla]",
            "value": 469.6959523771602,
            "unit": "iter/sec",
            "range": "stddev: 0.00002117638371543534",
            "extra": "mean: 2.1290368693597173 msec\nrounds: 421"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-chimp]",
            "value": 502.5673699321311,
            "unit": "iter/sec",
            "range": "stddev: 0.000016041585667152336",
            "extra": "mean: 1.9897829820010884 msec\nrounds: 500"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-chimp128]",
            "value": 741.8840314656513,
            "unit": "iter/sec",
            "range": "stddev: 0.000010853594331883707",
            "extra": "mean: 1.347919563687629 msec\nrounds: 738"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-patas]",
            "value": 820.334052506237,
            "unit": "iter/sec",
            "range": "stddev: 0.000011119491652454695",
            "extra": "mean: 1.2190155912031913 msec\nrounds: 773"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-gorilla]",
            "value": 53753.27923681604,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012975208913299044",
            "extra": "mean: 18.603516179810892 usec\nrounds: 41348"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-chimp]",
            "value": 57649.82104150455,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014105472996273253",
            "extra": "mean: 17.346107618964812 usec\nrounds: 45912"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-chimp128]",
            "value": 86108.12016868868,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010198773888645643",
            "extra": "mean: 11.61330659688037 usec\nrounds: 65454"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-patas]",
            "value": 65400.864713301904,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011763040896961175",
            "extra": "mean: 15.290317710380513 usec\nrounds: 44166"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-gorilla]",
            "value": 5230.826650540154,
            "unit": "iter/sec",
            "range": "stddev: 0.000004922716753888044",
            "extra": "mean: 191.17437200805273 usec\nrounds: 4637"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-chimp]",
            "value": 5608.8440772512995,
            "unit": "iter/sec",
            "range": "stddev: 0.0000053041271763826785",
            "extra": "mean: 178.28985549016465 usec\nrounds: 5273"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-chimp128]",
            "value": 8209.449788292592,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034445643112360866",
            "extra": "mean: 121.8108430879362 usec\nrounds: 7877"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-patas]",
            "value": 8586.410101676107,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037433653153648773",
            "extra": "mean: 116.4631071843162 usec\nrounds: 6988"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-gorilla]",
            "value": 522.3943396607143,
            "unit": "iter/sec",
            "range": "stddev: 0.0000147048424964298",
            "extra": "mean: 1.914262701715876 msec\nrounds: 466"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-chimp]",
            "value": 559.8350164583375,
            "unit": "iter/sec",
            "range": "stddev: 0.000017418891806080685",
            "extra": "mean: 1.7862405362320155 msec\nrounds: 552"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-chimp128]",
            "value": 820.6796984500083,
            "unit": "iter/sec",
            "range": "stddev: 0.000009729824051477303",
            "extra": "mean: 1.2185021779979062 msec\nrounds: 809"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-patas]",
            "value": 829.4155191019554,
            "unit": "iter/sec",
            "range": "stddev: 0.000014730526643643266",
            "extra": "mean: 1.205668301315056 msec\nrounds: 760"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-gorilla]",
            "value": 51773.66525822473,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014453928528444432",
            "extra": "mean: 19.314838828049567 usec\nrounds: 41676"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-chimp]",
            "value": 55219.26278887797,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013920597772681997",
            "extra": "mean: 18.10962243055182 usec\nrounds: 44323"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-chimp128]",
            "value": 82166.11729142284,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010331061033926274",
            "extra": "mean: 12.170466768598157 usec\nrounds: 62937"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-patas]",
            "value": 87934.35455296315,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010151875295702876",
            "extra": "mean: 11.372119634968113 usec\nrounds: 40774"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-gorilla]",
            "value": 5282.2377052490765,
            "unit": "iter/sec",
            "range": "stddev: 0.000004738237217393177",
            "extra": "mean: 189.31370676603174 usec\nrounds: 4730"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-chimp]",
            "value": 5643.125373246617,
            "unit": "iter/sec",
            "range": "stddev: 0.000004128421073890577",
            "extra": "mean: 177.20676643848472 usec\nrounds: 5429"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-chimp128]",
            "value": 8216.801502833903,
            "unit": "iter/sec",
            "range": "stddev: 0.000003818363125511746",
            "extra": "mean: 121.70185681802204 usec\nrounds: 7934"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-patas]",
            "value": 9018.315763138737,
            "unit": "iter/sec",
            "range": "stddev: 0.000003794035471519036",
            "extra": "mean: 110.88544981839934 usec\nrounds: 7672"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-gorilla]",
            "value": 547.9874692401621,
            "unit": "iter/sec",
            "range": "stddev: 0.00001900172509372232",
            "extra": "mean: 1.824859246118524 msec\nrounds: 451"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-chimp]",
            "value": 582.0868640910493,
            "unit": "iter/sec",
            "range": "stddev: 0.000010171859789345944",
            "extra": "mean: 1.7179566516443177 msec\nrounds: 577"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-chimp128]",
            "value": 849.7905370383268,
            "unit": "iter/sec",
            "range": "stddev: 0.000008754878878934193",
            "extra": "mean: 1.1767605738293818 msec\nrounds: 833"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-patas]",
            "value": 906.8872545152819,
            "unit": "iter/sec",
            "range": "stddev: 0.000013288460742514656",
            "extra": "mean: 1.1026729012025707 msec\nrounds: 830"
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
            "email": "miikka.koskinen@iki.fi",
            "name": "Miikka Koskinen",
            "username": "miikka"
          },
          "distinct": true,
          "id": "14a23ef062dcaa84d26d51c869ad25494d3a404e",
          "message": "refactor: replace `count_trailing` with a built-in",
          "timestamp": "2026-03-14T15:46:25+02:00",
          "tree_id": "bb4a9a233ec373f6d7cc5f9e456587083c4d1983",
          "url": "https://github.com/miikka/floatbungler/commit/14a23ef062dcaa84d26d51c869ad25494d3a404e"
        },
        "date": 1773496133801,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-gorilla]",
            "value": 664775.8328725959,
            "unit": "iter/sec",
            "range": "stddev: 3.360620229515736e-7",
            "extra": "mean: 1.50426647683453 usec\nrounds: 76547"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-chimp]",
            "value": 557309.0134205279,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010825328744071393",
            "extra": "mean: 1.794336671252491 usec\nrounds: 178254"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-chimp128]",
            "value": 223547.12977552126,
            "unit": "iter/sec",
            "range": "stddev: 6.817528870130906e-7",
            "extra": "mean: 4.473329633013707 usec\nrounds: 22340"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-patas]",
            "value": 410638.2608142386,
            "unit": "iter/sec",
            "range": "stddev: 4.659340096129848e-7",
            "extra": "mean: 2.4352333803896866 usec\nrounds: 138812"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-gorilla]",
            "value": 95577.00550653045,
            "unit": "iter/sec",
            "range": "stddev: 9.590205567659061e-7",
            "extra": "mean: 10.462767636423527 usec\nrounds: 68367"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-chimp]",
            "value": 84024.41418077562,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012004025382819932",
            "extra": "mean: 11.901302850485033 usec\nrounds: 55605"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-chimp128]",
            "value": 43127.78049596093,
            "unit": "iter/sec",
            "range": "stddev: 0.000002015658276447219",
            "extra": "mean: 23.186910814797287 usec\nrounds: 27897"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-patas]",
            "value": 58155.81168073996,
            "unit": "iter/sec",
            "range": "stddev: 0.000001427521395230954",
            "extra": "mean: 17.19518602009608 usec\nrounds: 44049"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-gorilla]",
            "value": 10123.116475471019,
            "unit": "iter/sec",
            "range": "stddev: 0.000004311661196289918",
            "extra": "mean: 98.78380856558019 usec\nrounds: 9690"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-chimp]",
            "value": 9032.476046864771,
            "unit": "iter/sec",
            "range": "stddev: 0.000004091263833506024",
            "extra": "mean: 110.71161382676527 usec\nrounds: 8592"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-chimp128]",
            "value": 4797.089288662525,
            "unit": "iter/sec",
            "range": "stddev: 0.000006437392813261749",
            "extra": "mean: 208.45974294524956 usec\nrounds: 4536"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-patas]",
            "value": 6148.0150999659045,
            "unit": "iter/sec",
            "range": "stddev: 0.000013625051162171004",
            "extra": "mean: 162.6541223045379 usec\nrounds: 5936"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-gorilla]",
            "value": 287651.7971685095,
            "unit": "iter/sec",
            "range": "stddev: 5.588080298327118e-7",
            "extra": "mean: 3.4764253512179146 usec\nrounds: 103853"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-chimp]",
            "value": 237331.19521951207,
            "unit": "iter/sec",
            "range": "stddev: 6.224379530376915e-7",
            "extra": "mean: 4.213521105285301 usec\nrounds: 98435"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-chimp128]",
            "value": 143525.20536928411,
            "unit": "iter/sec",
            "range": "stddev: 8.87688681575763e-7",
            "extra": "mean: 6.967417307831355 usec\nrounds: 49388"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-patas]",
            "value": 261988.89848502065,
            "unit": "iter/sec",
            "range": "stddev: 7.992915206167033e-7",
            "extra": "mean: 3.816955625916247 usec\nrounds: 112791"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-gorilla]",
            "value": 32225.406486732005,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020271421240999875",
            "extra": "mean: 31.03141617194882 usec\nrounds: 25600"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-chimp]",
            "value": 27692.11333342046,
            "unit": "iter/sec",
            "range": "stddev: 0.000002209209138804711",
            "extra": "mean: 36.111364559278385 usec\nrounds: 22161"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-chimp128]",
            "value": 21648.22206371249,
            "unit": "iter/sec",
            "range": "stddev: 0.000003097445441372312",
            "extra": "mean: 46.1931699082224 usec\nrounds: 16144"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-patas]",
            "value": 33815.63732984364,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018730554759006146",
            "extra": "mean: 29.57211748652924 usec\nrounds: 27850"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-gorilla]",
            "value": 2928.3474763221266,
            "unit": "iter/sec",
            "range": "stddev: 0.000021362023478718613",
            "extra": "mean: 341.4895288505704 usec\nrounds: 2201"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-chimp]",
            "value": 2883.1099004400094,
            "unit": "iter/sec",
            "range": "stddev: 0.000009863283661986202",
            "extra": "mean: 346.84768688400806 usec\nrounds: 2638"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-chimp128]",
            "value": 2265.699061835958,
            "unit": "iter/sec",
            "range": "stddev: 0.000010269165445878561",
            "extra": "mean: 441.364882408378 usec\nrounds: 2126"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-patas]",
            "value": 3539.4895028310802,
            "unit": "iter/sec",
            "range": "stddev: 0.00001331251872850311",
            "extra": "mean: 282.526618372549 usec\nrounds: 3244"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-gorilla]",
            "value": 79495.16339010479,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011475308146040497",
            "extra": "mean: 12.579381654865252 usec\nrounds: 54903"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-chimp]",
            "value": 90116.63527822052,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013972225389026976",
            "extra": "mean: 11.096730330783679 usec\nrounds: 53065"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-chimp128]",
            "value": 5610.0199471954065,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041908167811116885",
            "extra": "mean: 178.25248562617426 usec\nrounds: 4870"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-patas]",
            "value": 71849.54573029927,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013831016518783515",
            "extra": "mean: 13.917972477567043 usec\nrounds: 50795"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-gorilla]",
            "value": 8199.808620528107,
            "unit": "iter/sec",
            "range": "stddev: 0.000004592728524982793",
            "extra": "mean: 121.95406579325692 usec\nrounds: 7022"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-chimp]",
            "value": 9466.880210592924,
            "unit": "iter/sec",
            "range": "stddev: 0.000005067741043355988",
            "extra": "mean: 105.63142004068611 usec\nrounds: 8842"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-chimp128]",
            "value": 464.0428609639261,
            "unit": "iter/sec",
            "range": "stddev: 0.00001892123609268773",
            "extra": "mean: 2.154973352941504 msec\nrounds: 459"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-patas]",
            "value": 6416.003274181774,
            "unit": "iter/sec",
            "range": "stddev: 0.000005688483419634466",
            "extra": "mean: 155.86026958933073 usec\nrounds: 6113"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-gorilla]",
            "value": 810.5170139790823,
            "unit": "iter/sec",
            "range": "stddev: 0.000052335556223190946",
            "extra": "mean: 1.2337803929502802 msec\nrounds: 766"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-chimp]",
            "value": 946.4127079890307,
            "unit": "iter/sec",
            "range": "stddev: 0.00005363934073756281",
            "extra": "mean: 1.0566214840086343 msec\nrounds: 938"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-chimp128]",
            "value": 45.71814221279779,
            "unit": "iter/sec",
            "range": "stddev: 0.00003601379736364978",
            "extra": "mean: 21.873154760870225 msec\nrounds: 46"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-patas]",
            "value": 725.103870698366,
            "unit": "iter/sec",
            "range": "stddev: 0.00001748603135348875",
            "extra": "mean: 1.3791127594407608 msec\nrounds: 715"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-gorilla]",
            "value": 88585.74428099595,
            "unit": "iter/sec",
            "range": "stddev: 0.000001294061134735305",
            "extra": "mean: 11.28849803223392 usec\nrounds: 61237"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-chimp]",
            "value": 100497.82993704911,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011285996487575016",
            "extra": "mean: 9.950463613258023 usec\nrounds: 59060"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-chimp128]",
            "value": 5613.124900545924,
            "unit": "iter/sec",
            "range": "stddev: 0.000003921057856482632",
            "extra": "mean: 178.15388357076137 usec\nrounds: 5265"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-patas]",
            "value": 72944.15225255786,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014815967202117024",
            "extra": "mean: 13.709118128313486 usec\nrounds: 51825"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-gorilla]",
            "value": 9200.292145396248,
            "unit": "iter/sec",
            "range": "stddev: 0.0000042824060243655435",
            "extra": "mean: 108.69220066021403 usec\nrounds: 8786"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-chimp]",
            "value": 10615.331015983189,
            "unit": "iter/sec",
            "range": "stddev: 0.000004432115978858088",
            "extra": "mean: 94.20337420418917 usec\nrounds: 9738"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-chimp128]",
            "value": 467.67122398349153,
            "unit": "iter/sec",
            "range": "stddev: 0.000010165218883946719",
            "extra": "mean: 2.1382542878783135 msec\nrounds: 462"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-patas]",
            "value": 6403.944834971403,
            "unit": "iter/sec",
            "range": "stddev: 0.00000658352320997287",
            "extra": "mean: 156.15374987915015 usec\nrounds: 6205"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-gorilla]",
            "value": 907.6488168909397,
            "unit": "iter/sec",
            "range": "stddev: 0.00004890720028338652",
            "extra": "mean: 1.101747703947216 msec\nrounds: 912"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-chimp]",
            "value": 1066.1736270144588,
            "unit": "iter/sec",
            "range": "stddev: 0.00001961038191983282",
            "extra": "mean: 937.9335360228702 usec\nrounds: 1041"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-chimp128]",
            "value": 45.86935005502459,
            "unit": "iter/sec",
            "range": "stddev: 0.00004681858710987242",
            "extra": "mean: 21.801050130433637 msec\nrounds: 46"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-patas]",
            "value": 731.5626465415367,
            "unit": "iter/sec",
            "range": "stddev: 0.00001882438706578627",
            "extra": "mean: 1.366936932506739 msec\nrounds: 726"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-gorilla]",
            "value": 86096.57431579639,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010675824563911395",
            "extra": "mean: 11.614863982068181 usec\nrounds: 59698"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-chimp]",
            "value": 96302.45692561736,
            "unit": "iter/sec",
            "range": "stddev: 0.000001026898175703927",
            "extra": "mean: 10.383951063391722 usec\nrounds: 50310"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-chimp128]",
            "value": 5578.530242313441,
            "unit": "iter/sec",
            "range": "stddev: 0.0000039417695957724865",
            "extra": "mean: 179.25868581207075 usec\nrounds: 5258"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-patas]",
            "value": 72482.89837273509,
            "unit": "iter/sec",
            "range": "stddev: 0.000001224711385831303",
            "extra": "mean: 13.796357795429392 usec\nrounds: 26926"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-gorilla]",
            "value": 9290.553481033732,
            "unit": "iter/sec",
            "range": "stddev: 0.000004768508933962879",
            "extra": "mean: 107.63621371336565 usec\nrounds: 8984"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-chimp]",
            "value": 10627.177242238555,
            "unit": "iter/sec",
            "range": "stddev: 0.000003712912204111399",
            "extra": "mean: 94.09836471207247 usec\nrounds: 9635"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-chimp128]",
            "value": 467.0480367541969,
            "unit": "iter/sec",
            "range": "stddev: 0.000010125451178102229",
            "extra": "mean: 2.141107383620779 msec\nrounds: 464"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-patas]",
            "value": 6632.183841976913,
            "unit": "iter/sec",
            "range": "stddev: 0.000009105359616340656",
            "extra": "mean: 150.77989751591704 usec\nrounds: 6401"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-gorilla]",
            "value": 948.289185708906,
            "unit": "iter/sec",
            "range": "stddev: 0.000023246264977406527",
            "extra": "mean: 1.0545306379851174 msec\nrounds: 953"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-chimp]",
            "value": 1072.3289049593902,
            "unit": "iter/sec",
            "range": "stddev: 0.000009474241432408163",
            "extra": "mean: 932.5497012857923 usec\nrounds: 1011"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-chimp128]",
            "value": 45.9922144839248,
            "unit": "iter/sec",
            "range": "stddev: 0.00003271218909587747",
            "extra": "mean: 21.742810413043276 msec\nrounds: 46"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-patas]",
            "value": 763.3694583118877,
            "unit": "iter/sec",
            "range": "stddev: 0.00005911091501359561",
            "extra": "mean: 1.3099816728473734 msec\nrounds: 755"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-gorilla]",
            "value": 316218.1998748405,
            "unit": "iter/sec",
            "range": "stddev: 6.33351775033041e-7",
            "extra": "mean: 3.1623733244822754 usec\nrounds: 120410"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-chimp]",
            "value": 289662.1709497082,
            "unit": "iter/sec",
            "range": "stddev: 6.682500306921874e-7",
            "extra": "mean: 3.4522975393069957 usec\nrounds: 149634"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-chimp128]",
            "value": 247999.96429048965,
            "unit": "iter/sec",
            "range": "stddev: 7.090443314419232e-7",
            "extra": "mean: 4.032258645120895 usec\nrounds: 129467"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-patas]",
            "value": 204552.4739003151,
            "unit": "iter/sec",
            "range": "stddev: 7.43591947811139e-7",
            "extra": "mean: 4.8887211233990335 usec\nrounds: 108496"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-gorilla]",
            "value": 30184.83302985111,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018930561418131325",
            "extra": "mean: 33.1292208577419 usec\nrounds: 17183"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-chimp]",
            "value": 27766.237467025858,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027731945184524073",
            "extra": "mean: 36.014962458905806 usec\nrounds: 21976"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-chimp128]",
            "value": 22278.72027208958,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026759604257956276",
            "extra": "mean: 44.885881585073975 usec\nrounds: 19457"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-patas]",
            "value": 18912.520388548004,
            "unit": "iter/sec",
            "range": "stddev: 0.000003250198732244398",
            "extra": "mean: 52.87502561559825 usec\nrounds: 16123"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-gorilla]",
            "value": 2990.0771066943025,
            "unit": "iter/sec",
            "range": "stddev: 0.000008104255071750513",
            "extra": "mean: 334.4395359441269 usec\nrounds: 1864"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-chimp]",
            "value": 2809.817104330423,
            "unit": "iter/sec",
            "range": "stddev: 0.000008326362753138366",
            "extra": "mean: 355.8950504140729 usec\nrounds: 2658"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-chimp128]",
            "value": 2254.1214758921233,
            "unit": "iter/sec",
            "range": "stddev: 0.000009730874512076527",
            "extra": "mean: 443.63181429883934 usec\nrounds: 2154"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-patas]",
            "value": 1946.0195630095332,
            "unit": "iter/sec",
            "range": "stddev: 0.000012011979815972499",
            "extra": "mean: 513.8694486983948 usec\nrounds: 1959"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-gorilla]",
            "value": 191378.41806256436,
            "unit": "iter/sec",
            "range": "stddev: 8.246877658202302e-7",
            "extra": "mean: 5.225249587302397 usec\nrounds: 84804"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-chimp]",
            "value": 153916.31204280234,
            "unit": "iter/sec",
            "range": "stddev: 8.313065468502573e-7",
            "extra": "mean: 6.4970371673270835 usec\nrounds: 98339"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-chimp128]",
            "value": 173197.3887416845,
            "unit": "iter/sec",
            "range": "stddev: 7.576164023291956e-7",
            "extra": "mean: 5.77375910379025 usec\nrounds: 109927"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-patas]",
            "value": 171515.00852317514,
            "unit": "iter/sec",
            "range": "stddev: 8.255503794766815e-7",
            "extra": "mean: 5.830393553371628 usec\nrounds: 93197"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-gorilla]",
            "value": 18265.0496857839,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024697454886034645",
            "extra": "mean: 54.74937200846065 usec\nrounds: 12661"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-chimp]",
            "value": 15185.541176636863,
            "unit": "iter/sec",
            "range": "stddev: 0.000002890055151153865",
            "extra": "mean: 65.8521147431026 usec\nrounds: 10493"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-chimp128]",
            "value": 16428.45319788074,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027476328122062726",
            "extra": "mean: 60.870003277545294 usec\nrounds: 11899"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-patas]",
            "value": 16324.718351520782,
            "unit": "iter/sec",
            "range": "stddev: 0.000003056788480787848",
            "extra": "mean: 61.25679956413102 usec\nrounds: 14683"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-gorilla]",
            "value": 1656.1918294140091,
            "unit": "iter/sec",
            "range": "stddev: 0.000010426244950892548",
            "extra": "mean: 603.7947913037455 usec\nrounds: 1265"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-chimp]",
            "value": 1530.8129756038122,
            "unit": "iter/sec",
            "range": "stddev: 0.00002702504040487429",
            "extra": "mean: 653.2476637817635 usec\nrounds: 1502"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-chimp128]",
            "value": 1655.6576978822713,
            "unit": "iter/sec",
            "range": "stddev: 0.000010248218875414291",
            "extra": "mean: 603.9895814690959 usec\nrounds: 1565"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-patas]",
            "value": 1673.3388946414238,
            "unit": "iter/sec",
            "range": "stddev: 0.00000950424595334405",
            "extra": "mean: 597.6075756096542 usec\nrounds: 1640"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-gorilla]",
            "value": 48931.836403985755,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013460049376621527",
            "extra": "mean: 20.436592482323938 usec\nrounds: 37272"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-chimp]",
            "value": 53356.95506400809,
            "unit": "iter/sec",
            "range": "stddev: 0.000001429400361738647",
            "extra": "mean: 18.74169916181273 usec\nrounds: 42950"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-chimp128]",
            "value": 89144.56258781755,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010762205482081992",
            "extra": "mean: 11.217734104813022 usec\nrounds: 64029"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-patas]",
            "value": 86777.09549681426,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011039307351209554",
            "extra": "mean: 11.523778184494683 usec\nrounds: 51908"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-gorilla]",
            "value": 4792.52122341895,
            "unit": "iter/sec",
            "range": "stddev: 0.000005519250537738251",
            "extra": "mean: 208.65843955232546 usec\nrounds: 4020"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-chimp]",
            "value": 5226.156184453646,
            "unit": "iter/sec",
            "range": "stddev: 0.000005456400990070225",
            "extra": "mean: 191.34521906840834 usec\nrounds: 4510"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-chimp128]",
            "value": 8506.182163324784,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041735398988786735",
            "extra": "mean: 117.56155473739976 usec\nrounds: 8148"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-patas]",
            "value": 8491.262479070107,
            "unit": "iter/sec",
            "range": "stddev: 0.00000416454944307223",
            "extra": "mean: 117.76811781108806 usec\nrounds: 6816"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-gorilla]",
            "value": 476.9762179063432,
            "unit": "iter/sec",
            "range": "stddev: 0.000017147722601369684",
            "extra": "mean: 2.096540587263316 msec\nrounds: 424"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-chimp]",
            "value": 518.3916520316712,
            "unit": "iter/sec",
            "range": "stddev: 0.0001054613639948951",
            "extra": "mean: 1.9290434097092768 msec\nrounds: 515"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-chimp128]",
            "value": 851.7312572433431,
            "unit": "iter/sec",
            "range": "stddev: 0.000010675640633103127",
            "extra": "mean: 1.1740792550417063 msec\nrounds: 843"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-patas]",
            "value": 821.8627500778055,
            "unit": "iter/sec",
            "range": "stddev: 0.00001529901699170364",
            "extra": "mean: 1.2167481734697554 msec\nrounds: 784"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-gorilla]",
            "value": 54291.16761072244,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013072913594475",
            "extra": "mean: 18.41920231243104 usec\nrounds: 40823"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-chimp]",
            "value": 59301.374892427935,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013607428311640277",
            "extra": "mean: 16.863015432846026 usec\nrounds: 47237"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-chimp128]",
            "value": 98306.61467680344,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010068448129537938",
            "extra": "mean: 10.172255481359398 usec\nrounds: 69508"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-patas]",
            "value": 88364.75134782528,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011437268577482237",
            "extra": "mean: 11.316729631974582 usec\nrounds: 49784"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-gorilla]",
            "value": 5288.347037009342,
            "unit": "iter/sec",
            "range": "stddev: 0.00000444458366464947",
            "extra": "mean: 189.09500322155836 usec\nrounds: 4346"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-chimp]",
            "value": 5841.2854929262785,
            "unit": "iter/sec",
            "range": "stddev: 0.0000042244837767374535",
            "extra": "mean: 171.1951934571572 usec\nrounds: 4952"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-chimp128]",
            "value": 9404.534588287175,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035109935460276124",
            "extra": "mean: 106.33168399906195 usec\nrounds: 8962"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-patas]",
            "value": 8640.521880300494,
            "unit": "iter/sec",
            "range": "stddev: 0.000004031291864516528",
            "extra": "mean: 115.73375009672712 usec\nrounds: 7751"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-gorilla]",
            "value": 528.3355134156153,
            "unit": "iter/sec",
            "range": "stddev: 0.00001658493415956139",
            "extra": "mean: 1.8927366694226928 msec\nrounds: 484"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-chimp]",
            "value": 582.8749274538835,
            "unit": "iter/sec",
            "range": "stddev: 0.000034362832178024374",
            "extra": "mean: 1.7156339257346405 msec\nrounds: 579"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-chimp128]",
            "value": 938.3595638464717,
            "unit": "iter/sec",
            "range": "stddev: 0.000009286445638376155",
            "extra": "mean: 1.0656895698924358 msec\nrounds: 930"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-patas]",
            "value": 829.1779880951198,
            "unit": "iter/sec",
            "range": "stddev: 0.000018539711393285822",
            "extra": "mean: 1.2060136838621485 msec\nrounds: 756"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-gorilla]",
            "value": 52217.07829510771,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014129167375992943",
            "extra": "mean: 19.150822540251 usec\nrounds: 40674"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-chimp]",
            "value": 56602.78599181244,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013256580207291982",
            "extra": "mean: 17.666974910822404 usec\nrounds: 44880"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-chimp128]",
            "value": 94060.84407666196,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010265975813720932",
            "extra": "mean: 10.631416396656773 usec\nrounds: 64818"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-patas]",
            "value": 86854.50075082124,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011132884009753098",
            "extra": "mean: 11.513508123993732 usec\nrounds: 54160"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-gorilla]",
            "value": 5343.034030246308,
            "unit": "iter/sec",
            "range": "stddev: 0.00000464044920348894",
            "extra": "mean: 187.15957905922247 usec\nrounds: 4699"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-chimp]",
            "value": 5846.862032968707,
            "unit": "iter/sec",
            "range": "stddev: 0.000005474376564244472",
            "extra": "mean: 171.0319132487305 usec\nrounds: 5729"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-chimp128]",
            "value": 9403.290154256156,
            "unit": "iter/sec",
            "range": "stddev: 0.0000040523131576471945",
            "extra": "mean: 106.34575596365872 usec\nrounds: 8929"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-patas]",
            "value": 8950.113386778172,
            "unit": "iter/sec",
            "range": "stddev: 0.000005924999610487983",
            "extra": "mean: 111.73042807226112 usec\nrounds: 8300"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-gorilla]",
            "value": 544.0452941364117,
            "unit": "iter/sec",
            "range": "stddev: 0.00017178388589107665",
            "extra": "mean: 1.838082253036204 msec\nrounds: 494"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-chimp]",
            "value": 604.8861468978553,
            "unit": "iter/sec",
            "range": "stddev: 0.000035858274287732265",
            "extra": "mean: 1.6532036733333655 msec\nrounds: 600"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-chimp128]",
            "value": 949.7906155526647,
            "unit": "iter/sec",
            "range": "stddev: 0.000011617544243858441",
            "extra": "mean: 1.052863635021409 msec\nrounds: 948"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-patas]",
            "value": 909.9026716854631,
            "unit": "iter/sec",
            "range": "stddev: 0.0000109855518933313",
            "extra": "mean: 1.0990186435518918 msec\nrounds: 822"
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
          "id": "6e768554475eb468d43a0e9490ed86aa77f32ccf",
          "message": "Merge pull request #3 from miikka/refactor\n\npatas refactoring",
          "timestamp": "2026-03-14T17:11:48+02:00",
          "tree_id": "debcbfd0a3ba045c00ab073b5afde0df28f289c8",
          "url": "https://github.com/miikka/floatbungler/commit/6e768554475eb468d43a0e9490ed86aa77f32ccf"
        },
        "date": 1773501252643,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-gorilla]",
            "value": 723735.4838920257,
            "unit": "iter/sec",
            "range": "stddev: 1.9939926550036532e-7",
            "extra": "mean: 1.3817202862878977 usec\nrounds: 73207"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-chimp]",
            "value": 574086.887994018,
            "unit": "iter/sec",
            "range": "stddev: 4.062623538555251e-7",
            "extra": "mean: 1.741896602958854 usec\nrounds: 148215"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-chimp128]",
            "value": 209187.70517729176,
            "unit": "iter/sec",
            "range": "stddev: 4.147883740325399e-7",
            "extra": "mean: 4.780395669776459 usec\nrounds: 24710"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-patas]",
            "value": 548520.7500825417,
            "unit": "iter/sec",
            "range": "stddev: 2.3528418844072694e-7",
            "extra": "mean: 1.8230850881202205 usec\nrounds: 147929"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-gorilla]",
            "value": 105846.68949287136,
            "unit": "iter/sec",
            "range": "stddev: 5.608236484184591e-7",
            "extra": "mean: 9.447626607796257 usec\nrounds: 61110"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-chimp]",
            "value": 91136.6813576549,
            "unit": "iter/sec",
            "range": "stddev: 6.30688955506577e-7",
            "extra": "mean: 10.972530325913675 usec\nrounds: 52513"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-chimp128]",
            "value": 42954.21801098833,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010791798288277997",
            "extra": "mean: 23.280600749015733 usec\nrounds: 24030"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-patas]",
            "value": 70159.38101057625,
            "unit": "iter/sec",
            "range": "stddev: 7.547506241984138e-7",
            "extra": "mean: 14.253261439824474 usec\nrounds: 45062"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-gorilla]",
            "value": 10925.572409456521,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024613729977297596",
            "extra": "mean: 91.52838519787393 usec\nrounds: 8188"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-chimp]",
            "value": 9709.921746660219,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026254245016637745",
            "extra": "mean: 102.9874417210371 usec\nrounds: 7996"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-chimp128]",
            "value": 4886.45336748677,
            "unit": "iter/sec",
            "range": "stddev: 0.000005417256092639899",
            "extra": "mean: 204.64740473197764 usec\nrounds: 3973"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-patas]",
            "value": 7247.316475763991,
            "unit": "iter/sec",
            "range": "stddev: 0.000006542250065722476",
            "extra": "mean: 137.98210735575515 usec\nrounds: 6213"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-gorilla]",
            "value": 323771.72728054697,
            "unit": "iter/sec",
            "range": "stddev: 3.225777110724086e-7",
            "extra": "mean: 3.0885958091501418 usec\nrounds: 101123"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-chimp]",
            "value": 239051.38116699652,
            "unit": "iter/sec",
            "range": "stddev: 3.953376925453042e-7",
            "extra": "mean: 4.183201097262935 usec\nrounds: 79479"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-chimp128]",
            "value": 138791.01148335155,
            "unit": "iter/sec",
            "range": "stddev: 4.783252195280808e-7",
            "extra": "mean: 7.205077542935504 usec\nrounds: 42570"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-patas]",
            "value": 385259.7510824782,
            "unit": "iter/sec",
            "range": "stddev: 2.890871866451112e-7",
            "extra": "mean: 2.595651368175014 usec\nrounds: 115741"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-gorilla]",
            "value": 38400.85049067949,
            "unit": "iter/sec",
            "range": "stddev: 0.000001208376951035837",
            "extra": "mean: 26.041089903535244 usec\nrounds: 27396"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-chimp]",
            "value": 30386.108623250366,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013019108092775815",
            "extra": "mean: 32.90977506855997 usec\nrounds: 22149"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-chimp128]",
            "value": 22085.897629733954,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014278030219149097",
            "extra": "mean: 45.27776125583925 usec\nrounds: 14970"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-patas]",
            "value": 45756.6430894377,
            "unit": "iter/sec",
            "range": "stddev: 0.000001049965084926754",
            "extra": "mean: 21.85475009705938 usec\nrounds: 33605"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-gorilla]",
            "value": 3478.47914843994,
            "unit": "iter/sec",
            "range": "stddev: 0.000011596683534387464",
            "extra": "mean: 287.48195901892615 usec\nrounds: 3343"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-chimp]",
            "value": 3130.382150614259,
            "unit": "iter/sec",
            "range": "stddev: 0.000022748253837205354",
            "extra": "mean: 319.4498153536223 usec\nrounds: 3022"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-chimp128]",
            "value": 2375.1470794817046,
            "unit": "iter/sec",
            "range": "stddev: 0.000006559347060459075",
            "extra": "mean: 421.0265581608597 usec\nrounds: 2175"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-patas]",
            "value": 4761.569475683019,
            "unit": "iter/sec",
            "range": "stddev: 0.000005635014676247518",
            "extra": "mean: 210.0147871635446 usec\nrounds: 4534"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-gorilla]",
            "value": 89152.3990980245,
            "unit": "iter/sec",
            "range": "stddev: 6.71840132066869e-7",
            "extra": "mean: 11.21674806418259 usec\nrounds: 49330"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-chimp]",
            "value": 93664.33546428551,
            "unit": "iter/sec",
            "range": "stddev: 7.058298202733697e-7",
            "extra": "mean: 10.67642230143514 usec\nrounds: 48939"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-chimp128]",
            "value": 50753.84408783862,
            "unit": "iter/sec",
            "range": "stddev: 9.078226171515935e-7",
            "extra": "mean: 19.702941086971087 usec\nrounds: 23068"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-patas]",
            "value": 108643.36051092357,
            "unit": "iter/sec",
            "range": "stddev: 6.521923293423117e-7",
            "extra": "mean: 9.204428096638772 usec\nrounds: 57459"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-gorilla]",
            "value": 9215.072784827378,
            "unit": "iter/sec",
            "range": "stddev: 0.000003724964721071446",
            "extra": "mean: 108.51786234900939 usec\nrounds: 7381"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-chimp]",
            "value": 9888.218297448311,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027122521374330936",
            "extra": "mean: 101.13045342638253 usec\nrounds: 8449"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-chimp128]",
            "value": 4397.869358495676,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033435472256060474",
            "extra": "mean: 227.38283438734464 usec\nrounds: 3955"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-patas]",
            "value": 6995.3547952725285,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024798271851279746",
            "extra": "mean: 142.95200590480434 usec\nrounds: 6605"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-gorilla]",
            "value": 921.538753129048,
            "unit": "iter/sec",
            "range": "stddev: 0.00002722905923212253",
            "extra": "mean: 1.0851415598145384 msec\nrounds: 861"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-chimp]",
            "value": 982.3919596429506,
            "unit": "iter/sec",
            "range": "stddev: 0.000051165239332471277",
            "extra": "mean: 1.0179236405430772 msec\nrounds: 957"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-chimp128]",
            "value": 435.2804976070344,
            "unit": "iter/sec",
            "range": "stddev: 0.000010452690047157546",
            "extra": "mean: 2.2973691803274567 msec\nrounds: 427"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-patas]",
            "value": 818.7504423959288,
            "unit": "iter/sec",
            "range": "stddev: 0.00000671363942650616",
            "extra": "mean: 1.2213733858557392 msec\nrounds: 806"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-gorilla]",
            "value": 95827.88430435819,
            "unit": "iter/sec",
            "range": "stddev: 6.011694028258407e-7",
            "extra": "mean: 10.435375958253527 usec\nrounds: 53232"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-chimp]",
            "value": 102811.93730046652,
            "unit": "iter/sec",
            "range": "stddev: 6.458640541002048e-7",
            "extra": "mean: 9.72649700275089 usec\nrounds: 51881"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-chimp128]",
            "value": 52803.49998633605,
            "unit": "iter/sec",
            "range": "stddev: 8.201404601924986e-7",
            "extra": "mean: 18.93813857526054 usec\nrounds: 25690"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-patas]",
            "value": 107338.77752161438,
            "unit": "iter/sec",
            "range": "stddev: 6.788795811965501e-7",
            "extra": "mean: 9.316297642747367 usec\nrounds: 58204"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-gorilla]",
            "value": 10087.716525207818,
            "unit": "iter/sec",
            "range": "stddev: 0.000003527200616390635",
            "extra": "mean: 99.13046203282352 usec\nrounds: 9337"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-chimp]",
            "value": 11153.269979747414,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022978786306064208",
            "extra": "mean: 89.65980396922542 usec\nrounds: 9473"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-chimp128]",
            "value": 4602.929114749848,
            "unit": "iter/sec",
            "range": "stddev: 0.000002905213414826974",
            "extra": "mean: 217.25296546400241 usec\nrounds: 3880"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-patas]",
            "value": 7002.112168679226,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022636722195642346",
            "extra": "mean: 142.81405037654875 usec\nrounds: 6630"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-gorilla]",
            "value": 993.1404518637008,
            "unit": "iter/sec",
            "range": "stddev: 0.000012889741671952553",
            "extra": "mean: 1.0069069265313146 msec\nrounds: 980"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-chimp]",
            "value": 1120.2642921573747,
            "unit": "iter/sec",
            "range": "stddev: 0.00001985585871308953",
            "extra": "mean: 892.6465004737651 usec\nrounds: 1059"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-chimp128]",
            "value": 454.42659045031786,
            "unit": "iter/sec",
            "range": "stddev: 0.000010466734571376758",
            "extra": "mean: 2.2005754527019237 msec\nrounds: 444"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-patas]",
            "value": 824.7988159442986,
            "unit": "iter/sec",
            "range": "stddev: 0.000006614039664658129",
            "extra": "mean: 1.2124168714465435 msec\nrounds: 809"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-gorilla]",
            "value": 93158.10071118744,
            "unit": "iter/sec",
            "range": "stddev: 5.984647206940986e-7",
            "extra": "mean: 10.734439542732211 usec\nrounds: 53608"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-chimp]",
            "value": 97417.064388092,
            "unit": "iter/sec",
            "range": "stddev: 7.044225699004958e-7",
            "extra": "mean: 10.265142008551813 usec\nrounds: 49673"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-chimp128]",
            "value": 51591.54824559794,
            "unit": "iter/sec",
            "range": "stddev: 8.795312394782552e-7",
            "extra": "mean: 19.38301977757229 usec\nrounds: 24927"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-patas]",
            "value": 108786.10154105627,
            "unit": "iter/sec",
            "range": "stddev: 5.176572322956109e-7",
            "extra": "mean: 9.192350730783348 usec\nrounds: 31748"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-gorilla]",
            "value": 10047.730151717577,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028367043672931112",
            "extra": "mean: 99.52496582813365 usec\nrounds: 6321"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-chimp]",
            "value": 11041.729117704544,
            "unit": "iter/sec",
            "range": "stddev: 0.0000039486269693730355",
            "extra": "mean: 90.56552550239424 usec\nrounds: 9058"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-chimp128]",
            "value": 4596.234259289452,
            "unit": "iter/sec",
            "range": "stddev: 0.000007441020564524678",
            "extra": "mean: 217.5694152183169 usec\nrounds: 4087"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-patas]",
            "value": 7177.419779991125,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024123591902702433",
            "extra": "mean: 139.32583444370263 usec\nrounds: 6759"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-gorilla]",
            "value": 1066.21030947684,
            "unit": "iter/sec",
            "range": "stddev: 0.000007980314608826285",
            "extra": "mean: 937.9012668623252 usec\nrounds: 1023"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-chimp]",
            "value": 1118.4284653568147,
            "unit": "iter/sec",
            "range": "stddev: 0.000021625320205256428",
            "extra": "mean: 894.1117210218428 usec\nrounds: 1018"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-chimp128]",
            "value": 455.7294311736008,
            "unit": "iter/sec",
            "range": "stddev: 0.0000185450412890379",
            "extra": "mean: 2.194284440714715 msec\nrounds: 447"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-patas]",
            "value": 853.8110696062718,
            "unit": "iter/sec",
            "range": "stddev: 0.000005401373810958283",
            "extra": "mean: 1.1712192961624894 msec\nrounds: 834"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-gorilla]",
            "value": 364090.8584095535,
            "unit": "iter/sec",
            "range": "stddev: 3.369773222396104e-7",
            "extra": "mean: 2.746567173832016 usec\nrounds: 117248"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-chimp]",
            "value": 350260.2382716077,
            "unit": "iter/sec",
            "range": "stddev: 3.396705777520558e-7",
            "extra": "mean: 2.8550200414828546 usec\nrounds: 122745"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-chimp128]",
            "value": 269252.7368426931,
            "unit": "iter/sec",
            "range": "stddev: 3.798978663021452e-7",
            "extra": "mean: 3.7139826756310192 usec\nrounds: 122775"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-patas]",
            "value": 265236.5617767237,
            "unit": "iter/sec",
            "range": "stddev: 3.763055558348889e-7",
            "extra": "mean: 3.7702192838776143 usec\nrounds: 122444"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-gorilla]",
            "value": 37120.60781682815,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012830733020172329",
            "extra": "mean: 26.939214059600143 usec\nrounds: 20527"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-chimp]",
            "value": 34009.83120508048,
            "unit": "iter/sec",
            "range": "stddev: 0.000001158509427478089",
            "extra": "mean: 29.40326266160995 usec\nrounds: 16645"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-chimp128]",
            "value": 25632.299927346125,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014778247797779035",
            "extra": "mean: 39.013276328478746 usec\nrounds: 14718"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-patas]",
            "value": 23717.437918417178,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017676862430862068",
            "extra": "mean: 42.16307020344197 usec\nrounds: 13290"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-gorilla]",
            "value": 3854.782843514672,
            "unit": "iter/sec",
            "range": "stddev: 0.000006457535399611337",
            "extra": "mean: 259.41798555070636 usec\nrounds: 2353"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-chimp]",
            "value": 3616.250295407215,
            "unit": "iter/sec",
            "range": "stddev: 0.000005906563376815903",
            "extra": "mean: 276.52953150672136 usec\nrounds: 2920"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-chimp128]",
            "value": 2706.04592451055,
            "unit": "iter/sec",
            "range": "stddev: 0.000005222922833666654",
            "extra": "mean: 369.54287839031144 usec\nrounds: 2360"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-patas]",
            "value": 2471.5464297840335,
            "unit": "iter/sec",
            "range": "stddev: 0.000007878038917169117",
            "extra": "mean: 404.60498251185237 usec\nrounds: 2230"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-gorilla]",
            "value": 211999.04171963743,
            "unit": "iter/sec",
            "range": "stddev: 4.4723557018100856e-7",
            "extra": "mean: 4.717002453824631 usec\nrounds: 82727"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-chimp]",
            "value": 164101.6210816214,
            "unit": "iter/sec",
            "range": "stddev: 5.296608053249377e-7",
            "extra": "mean: 6.093785018142001 usec\nrounds: 79002"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-chimp128]",
            "value": 174841.56471394273,
            "unit": "iter/sec",
            "range": "stddev: 5.863160551185911e-7",
            "extra": "mean: 5.719463799332236 usec\nrounds: 97857"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-patas]",
            "value": 216771.3290745135,
            "unit": "iter/sec",
            "range": "stddev: 4.0485855217674425e-7",
            "extra": "mean: 4.613156196760032 usec\nrounds: 112512"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-gorilla]",
            "value": 20615.302448347502,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014196990103779772",
            "extra": "mean: 48.5076560242345 usec\nrounds: 14658"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-chimp]",
            "value": 17020.511341293433,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017031464801865983",
            "extra": "mean: 58.75264144232269 usec\nrounds: 12065"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-chimp128]",
            "value": 17456.057555096595,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014868318735096972",
            "extra": "mean: 57.286703875929476 usec\nrounds: 12049"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-patas]",
            "value": 19944.835597379577,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014261568684822352",
            "extra": "mean: 50.13829244756389 usec\nrounds: 12433"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-gorilla]",
            "value": 1847.1437539425315,
            "unit": "iter/sec",
            "range": "stddev: 0.000006184024463598922",
            "extra": "mean: 541.3763806231142 usec\nrounds: 1445"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-chimp]",
            "value": 1739.9027653319545,
            "unit": "iter/sec",
            "range": "stddev: 0.0000069550690136570425",
            "extra": "mean: 574.7447615609777 usec\nrounds: 1665"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-chimp128]",
            "value": 1791.8509918276782,
            "unit": "iter/sec",
            "range": "stddev: 0.000020549108661013305",
            "extra": "mean: 558.0821198642224 usec\nrounds: 1752"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-patas]",
            "value": 2064.690878401,
            "unit": "iter/sec",
            "range": "stddev: 0.000006499667554970196",
            "extra": "mean: 484.33400392336205 usec\nrounds: 2039"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-gorilla]",
            "value": 49627.81936044353,
            "unit": "iter/sec",
            "range": "stddev: 8.910179774909249e-7",
            "extra": "mean: 20.14998871373064 usec\nrounds: 33137"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-chimp]",
            "value": 53550.181680819434,
            "unit": "iter/sec",
            "range": "stddev: 7.826087453227035e-7",
            "extra": "mean: 18.67407296506296 usec\nrounds: 37607"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-chimp128]",
            "value": 80301.01190273053,
            "unit": "iter/sec",
            "range": "stddev: 6.248676653130879e-7",
            "extra": "mean: 12.453143195895347 usec\nrounds: 59478"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-patas]",
            "value": 105131.63407375923,
            "unit": "iter/sec",
            "range": "stddev: 6.012505220047675e-7",
            "extra": "mean: 9.511884874712504 usec\nrounds: 59179"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-gorilla]",
            "value": 4879.082788910094,
            "unit": "iter/sec",
            "range": "stddev: 0.000004006138137150154",
            "extra": "mean: 204.95655500516386 usec\nrounds: 4045"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-chimp]",
            "value": 5226.989575911376,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031684279212737674",
            "extra": "mean: 191.31471097790364 usec\nrounds: 4837"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-chimp128]",
            "value": 7737.97213931722,
            "unit": "iter/sec",
            "range": "stddev: 0.000008954109662478794",
            "extra": "mean: 129.2328250859065 usec\nrounds: 6426"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-patas]",
            "value": 10186.475465593134,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028547860774974675",
            "extra": "mean: 98.169381880681 usec\nrounds: 8157"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-gorilla]",
            "value": 484.95860439009545,
            "unit": "iter/sec",
            "range": "stddev: 0.000012097162225757619",
            "extra": "mean: 2.0620316681619504 msec\nrounds: 446"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-chimp]",
            "value": 521.6004244311426,
            "unit": "iter/sec",
            "range": "stddev: 0.000020202724760236198",
            "extra": "mean: 1.917176354084834 msec\nrounds: 514"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-chimp128]",
            "value": 780.7845366173523,
            "unit": "iter/sec",
            "range": "stddev: 0.00000944739862606985",
            "extra": "mean: 1.2807630698378971 msec\nrounds: 673"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-patas]",
            "value": 973.5597470578804,
            "unit": "iter/sec",
            "range": "stddev: 0.00004926064910545881",
            "extra": "mean: 1.0271583259497146 msec\nrounds: 948"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-gorilla]",
            "value": 55333.09304229549,
            "unit": "iter/sec",
            "range": "stddev: 8.344788726064194e-7",
            "extra": "mean: 18.07236763785499 usec\nrounds: 38372"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-chimp]",
            "value": 59219.20554664796,
            "unit": "iter/sec",
            "range": "stddev: 7.297980760007675e-7",
            "extra": "mean: 16.88641363505431 usec\nrounds: 40954"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-chimp128]",
            "value": 88982.08361182845,
            "unit": "iter/sec",
            "range": "stddev: 7.47814518106391e-7",
            "extra": "mean: 11.238217396238507 usec\nrounds: 61634"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-patas]",
            "value": 108340.90042994729,
            "unit": "iter/sec",
            "range": "stddev: 7.366333216000771e-7",
            "extra": "mean: 9.230124505441001 usec\nrounds: 60391"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-gorilla]",
            "value": 5448.320019051421,
            "unit": "iter/sec",
            "range": "stddev: 0.000002706395705085204",
            "extra": "mean: 183.54281622651544 usec\nrounds: 4881"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-chimp]",
            "value": 5876.958561366655,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025893310125369013",
            "extra": "mean: 170.15604067275495 usec\nrounds: 5409"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-chimp128]",
            "value": 8659.92785513085,
            "unit": "iter/sec",
            "range": "stddev: 0.000002712963016554838",
            "extra": "mean: 115.47440310458454 usec\nrounds: 6765"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-patas]",
            "value": 10339.215767554308,
            "unit": "iter/sec",
            "range": "stddev: 0.000002287126657853647",
            "extra": "mean: 96.71913445680467 usec\nrounds: 8129"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-gorilla]",
            "value": 543.7211886800935,
            "unit": "iter/sec",
            "range": "stddev: 0.000009027825004199222",
            "extra": "mean: 1.8391779110678816 msec\nrounds: 506"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-chimp]",
            "value": 586.9815652118045,
            "unit": "iter/sec",
            "range": "stddev: 0.000021710028108293004",
            "extra": "mean: 1.7036310154632592 msec\nrounds: 582"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-chimp128]",
            "value": 867.7014032694692,
            "unit": "iter/sec",
            "range": "stddev: 0.00001483179687644797",
            "extra": "mean: 1.1524701887446929 msec\nrounds: 853"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-patas]",
            "value": 986.147603102142,
            "unit": "iter/sec",
            "range": "stddev: 0.000011960792453541319",
            "extra": "mean: 1.0140469812574529 msec\nrounds: 907"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-gorilla]",
            "value": 53133.49355856776,
            "unit": "iter/sec",
            "range": "stddev: 8.562284137923178e-7",
            "extra": "mean: 18.820520410496332 usec\nrounds: 38681"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-chimp]",
            "value": 57080.82974845375,
            "unit": "iter/sec",
            "range": "stddev: 8.174313961357046e-7",
            "extra": "mean: 17.51901653158938 usec\nrounds: 40347"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-chimp128]",
            "value": 85289.27704977176,
            "unit": "iter/sec",
            "range": "stddev: 7.060685273132532e-7",
            "extra": "mean: 11.724803335083212 usec\nrounds: 60687"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-patas]",
            "value": 105776.20542323923,
            "unit": "iter/sec",
            "range": "stddev: 6.526155690787564e-7",
            "extra": "mean: 9.45392204228474 usec\nrounds: 57621"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-gorilla]",
            "value": 5490.397069681387,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036608286398697817",
            "extra": "mean: 182.13618929714877 usec\nrounds: 4765"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-chimp]",
            "value": 5914.219849633621,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027435918972904057",
            "extra": "mean: 169.0840086139085 usec\nrounds: 5224"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-chimp128]",
            "value": 8727.309529450604,
            "unit": "iter/sec",
            "range": "stddev: 0.000001939954544788195",
            "extra": "mean: 114.58285014705459 usec\nrounds: 7454"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-patas]",
            "value": 10888.782047308005,
            "unit": "iter/sec",
            "range": "stddev: 0.000002655261284003848",
            "extra": "mean: 91.83763580309945 usec\nrounds: 8435"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-gorilla]",
            "value": 568.4758150980177,
            "unit": "iter/sec",
            "range": "stddev: 0.000011662038155536215",
            "extra": "mean: 1.7590897861285058 msec\nrounds: 519"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-chimp]",
            "value": 611.2560598056741,
            "unit": "iter/sec",
            "range": "stddev: 0.000031408173538739946",
            "extra": "mean: 1.6359756013182307 msec\nrounds: 607"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-chimp128]",
            "value": 896.8322631719152,
            "unit": "iter/sec",
            "range": "stddev: 0.00000781533254596936",
            "extra": "mean: 1.1150357107617888 msec\nrounds: 892"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-patas]",
            "value": 1099.059203685964,
            "unit": "iter/sec",
            "range": "stddev: 0.000008961728737708703",
            "extra": "mean: 909.8690922620505 usec\nrounds: 1008"
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
            "email": "miikka.koskinen@iki.fi",
            "name": "Miikka Koskinen",
            "username": "miikka"
          },
          "distinct": true,
          "id": "eac78e8cff6be6ba43551c326926dc98c13e7103",
          "message": "chore: release v0.1.1",
          "timestamp": "2026-03-14T17:19:45+02:00",
          "tree_id": "06028f806cdd8fb6cccf03df9fae1aa0c52224e1",
          "url": "https://github.com/miikka/floatbungler/commit/eac78e8cff6be6ba43551c326926dc98c13e7103"
        },
        "date": 1773501777409,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-gorilla]",
            "value": 705673.4132058341,
            "unit": "iter/sec",
            "range": "stddev: 2.345571990640514e-7",
            "extra": "mean: 1.4170861212654406 usec\nrounds: 79783"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-chimp]",
            "value": 619599.7070661887,
            "unit": "iter/sec",
            "range": "stddev: 2.762162766535996e-7",
            "extra": "mean: 1.6139452433491468 usec\nrounds: 141243"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-chimp128]",
            "value": 207475.95800655015,
            "unit": "iter/sec",
            "range": "stddev: 4.979413417152672e-7",
            "extra": "mean: 4.819835558818962 usec\nrounds: 24416"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-patas]",
            "value": 537243.4115234378,
            "unit": "iter/sec",
            "range": "stddev: 2.661085860879053e-7",
            "extra": "mean: 1.861353677961994 usec\nrounds: 146263"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-gorilla]",
            "value": 103319.3117478896,
            "unit": "iter/sec",
            "range": "stddev: 6.964682493556194e-7",
            "extra": "mean: 9.678732688813387 usec\nrounds: 61550"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-chimp]",
            "value": 91185.77049873184,
            "unit": "iter/sec",
            "range": "stddev: 6.766609536462072e-7",
            "extra": "mean: 10.966623350667497 usec\nrounds: 53883"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-chimp128]",
            "value": 42165.604097350006,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012413755870503031",
            "extra": "mean: 23.716012646024144 usec\nrounds: 24514"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-patas]",
            "value": 68645.09224212755,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010623069543077616",
            "extra": "mean: 14.56768382614685 usec\nrounds: 46699"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-gorilla]",
            "value": 10811.418925185051,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030522084968723653",
            "extra": "mean: 92.49479711405075 usec\nrounds: 8108"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-chimp]",
            "value": 9794.78595261802,
            "unit": "iter/sec",
            "range": "stddev: 0.000003238873654896817",
            "extra": "mean: 102.09513559943726 usec\nrounds: 8090"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-chimp128]",
            "value": 4771.498013815282,
            "unit": "iter/sec",
            "range": "stddev: 0.000012968076184238207",
            "extra": "mean: 209.57778817147647 usec\nrounds: 4244"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-patas]",
            "value": 7077.312646740749,
            "unit": "iter/sec",
            "range": "stddev: 0.000007376678485796114",
            "extra": "mean: 141.29656974537093 usec\nrounds: 6366"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-gorilla]",
            "value": 325734.2020217928,
            "unit": "iter/sec",
            "range": "stddev: 4.0813500200466294e-7",
            "extra": "mean: 3.0699877194139296 usec\nrounds: 96656"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-chimp]",
            "value": 235907.98564021848,
            "unit": "iter/sec",
            "range": "stddev: 7.404953061486498e-7",
            "extra": "mean: 4.238940861989693 usec\nrounds: 87727"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-chimp128]",
            "value": 135342.9777438954,
            "unit": "iter/sec",
            "range": "stddev: 0.000001149993489077941",
            "extra": "mean: 7.388636016951419 usec\nrounds: 32801"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-patas]",
            "value": 381908.74785453937,
            "unit": "iter/sec",
            "range": "stddev: 3.5168139135995364e-7",
            "extra": "mean: 2.6184265367518575 usec\nrounds: 121537"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-gorilla]",
            "value": 38919.62291456221,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016585792683512096",
            "extra": "mean: 25.69397967177731 usec\nrounds: 28384"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-chimp]",
            "value": 29584.103560510066,
            "unit": "iter/sec",
            "range": "stddev: 0.00000253217696939709",
            "extra": "mean: 33.801936839311104 usec\nrounds: 21659"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-chimp128]",
            "value": 22023.62217383795,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018594909708607026",
            "extra": "mean: 45.40579165891742 usec\nrounds: 15657"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-patas]",
            "value": 46089.37122722385,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016134044095786886",
            "extra": "mean: 21.696976404167668 usec\nrounds: 36532"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-gorilla]",
            "value": 3588.6639872990017,
            "unit": "iter/sec",
            "range": "stddev: 0.000006442149425808028",
            "extra": "mean: 278.6552331283173 usec\nrounds: 3423"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-chimp]",
            "value": 3093.197870834162,
            "unit": "iter/sec",
            "range": "stddev: 0.00002934187855325973",
            "extra": "mean: 323.2900195066809 usec\nrounds: 2922"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-chimp128]",
            "value": 2353.8028559940362,
            "unit": "iter/sec",
            "range": "stddev: 0.000034962961236485694",
            "extra": "mean: 424.8444161130432 usec\nrounds: 2110"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-patas]",
            "value": 4782.825217458855,
            "unit": "iter/sec",
            "range": "stddev: 0.000006447877863738868",
            "extra": "mean: 209.08144340079107 usec\nrounds: 4364"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-gorilla]",
            "value": 90366.09618346163,
            "unit": "iter/sec",
            "range": "stddev: 7.348553287910892e-7",
            "extra": "mean: 11.066097156280778 usec\nrounds: 50990"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-chimp]",
            "value": 95178.24868909104,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016257611972168086",
            "extra": "mean: 10.506602230795366 usec\nrounds: 50386"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-chimp128]",
            "value": 5739.349372898458,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026185167267956035",
            "extra": "mean: 174.2357774423105 usec\nrounds: 5293"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-patas]",
            "value": 103939.23851870638,
            "unit": "iter/sec",
            "range": "stddev: 7.830420692863453e-7",
            "extra": "mean: 9.621005639944398 usec\nrounds: 58157"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-gorilla]",
            "value": 9264.954436695849,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028946706077957762",
            "extra": "mean: 107.93361228408037 usec\nrounds: 8385"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-chimp]",
            "value": 9799.624714717396,
            "unit": "iter/sec",
            "range": "stddev: 0.000003806366511404939",
            "extra": "mean: 102.04472406970517 usec\nrounds: 8600"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-chimp128]",
            "value": 471.7818262366057,
            "unit": "iter/sec",
            "range": "stddev: 0.000007152492231299771",
            "extra": "mean: 2.1196238269222456 msec\nrounds: 468"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-patas]",
            "value": 6989.722580657979,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025165306399810855",
            "extra": "mean: 143.0671945074342 usec\nrounds: 6627"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-gorilla]",
            "value": 928.8140432159032,
            "unit": "iter/sec",
            "range": "stddev: 0.000008553531098480345",
            "extra": "mean: 1.076641774856918 msec\nrounds: 875"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-chimp]",
            "value": 1012.4299936469816,
            "unit": "iter/sec",
            "range": "stddev: 0.00002585555494456386",
            "extra": "mean: 987.722614180753 usec\nrounds: 959"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-chimp128]",
            "value": 46.463379882702554,
            "unit": "iter/sec",
            "range": "stddev: 0.00006067409817814419",
            "extra": "mean: 21.52232580850799 msec\nrounds: 47"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-patas]",
            "value": 819.2141721902728,
            "unit": "iter/sec",
            "range": "stddev: 0.000014649837012224584",
            "extra": "mean: 1.220682007156167 msec\nrounds: 559"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-gorilla]",
            "value": 100005.02521818035,
            "unit": "iter/sec",
            "range": "stddev: 6.723916272761279e-7",
            "extra": "mean: 9.999497503433513 usec\nrounds: 56076"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-chimp]",
            "value": 106268.43037664796,
            "unit": "iter/sec",
            "range": "stddev: 6.703819392350443e-7",
            "extra": "mean: 9.410132402028456 usec\nrounds: 52318"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-chimp128]",
            "value": 5745.856928464371,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026125041266740234",
            "extra": "mean: 174.03844412590664 usec\nrounds: 5235"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-patas]",
            "value": 103845.6649087439,
            "unit": "iter/sec",
            "range": "stddev: 6.583700911850298e-7",
            "extra": "mean: 9.629674968895106 usec\nrounds: 58056"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-gorilla]",
            "value": 10144.263204551195,
            "unit": "iter/sec",
            "range": "stddev: 0.000002468916989404079",
            "extra": "mean: 98.57788385768154 usec\nrounds: 8326"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-chimp]",
            "value": 10736.278579344658,
            "unit": "iter/sec",
            "range": "stddev: 0.000004975277854009652",
            "extra": "mean: 93.1421434913102 usec\nrounds: 9011"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-chimp128]",
            "value": 475.74555540806494,
            "unit": "iter/sec",
            "range": "stddev: 0.000006926259512995097",
            "extra": "mean: 2.1019639356215576 msec\nrounds: 466"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-patas]",
            "value": 7006.771034252501,
            "unit": "iter/sec",
            "range": "stddev: 0.000002872707193751145",
            "extra": "mean: 142.71909201992102 usec\nrounds: 6466"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-gorilla]",
            "value": 1014.9156061231554,
            "unit": "iter/sec",
            "range": "stddev: 0.000008456524904384767",
            "extra": "mean: 985.3035995966886 usec\nrounds: 989"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-chimp]",
            "value": 1133.1876978454927,
            "unit": "iter/sec",
            "range": "stddev: 0.00001594863806949641",
            "extra": "mean: 882.4663397787323 usec\nrounds: 1086"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-chimp128]",
            "value": 46.64119511610907,
            "unit": "iter/sec",
            "range": "stddev: 0.00004755142723164923",
            "extra": "mean: 21.440273936175732 msec\nrounds: 47"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-patas]",
            "value": 825.8292908843796,
            "unit": "iter/sec",
            "range": "stddev: 0.000008074161048873962",
            "extra": "mean: 1.2109040101121882 msec\nrounds: 791"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-gorilla]",
            "value": 96548.58816614246,
            "unit": "iter/sec",
            "range": "stddev: 8.74705658546259e-7",
            "extra": "mean: 10.357479265043036 usec\nrounds: 55341"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-chimp]",
            "value": 102425.81514725213,
            "unit": "iter/sec",
            "range": "stddev: 6.181363094113292e-7",
            "extra": "mean: 9.763163696206403 usec\nrounds: 48254"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-chimp128]",
            "value": 5719.947964974557,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026872043431989355",
            "extra": "mean: 174.826765229926 usec\nrounds: 4826"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-patas]",
            "value": 103631.67714645858,
            "unit": "iter/sec",
            "range": "stddev: 6.474714874892051e-7",
            "extra": "mean: 9.649559165068219 usec\nrounds: 59748"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-gorilla]",
            "value": 10284.544335611085,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027240404568629787",
            "extra": "mean: 97.23328203636765 usec\nrounds: 8428"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-chimp]",
            "value": 11317.88578360068,
            "unit": "iter/sec",
            "range": "stddev: 0.00000441149074333212",
            "extra": "mean: 88.35572465742443 usec\nrounds: 9421"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-chimp128]",
            "value": 475.4404041111311,
            "unit": "iter/sec",
            "range": "stddev: 0.000016953086888741582",
            "extra": "mean: 2.103313036403731 msec\nrounds: 467"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-patas]",
            "value": 7178.492239549426,
            "unit": "iter/sec",
            "range": "stddev: 0.000004020108619696261",
            "extra": "mean: 139.30501930343624 usec\nrounds: 6631"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-gorilla]",
            "value": 1066.004285208236,
            "unit": "iter/sec",
            "range": "stddev: 0.000005961479615353764",
            "extra": "mean: 938.0825329465326 usec\nrounds: 1032"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-chimp]",
            "value": 1155.6821031808881,
            "unit": "iter/sec",
            "range": "stddev: 0.000006173529530013929",
            "extra": "mean: 865.2898554434735 usec\nrounds: 1093"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-chimp128]",
            "value": 46.64579052507641,
            "unit": "iter/sec",
            "range": "stddev: 0.0002487890657005858",
            "extra": "mean: 21.43816170212418 msec\nrounds: 47"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-patas]",
            "value": 855.5700220685145,
            "unit": "iter/sec",
            "range": "stddev: 0.000009121292762359422",
            "extra": "mean: 1.1688114055028442 msec\nrounds: 836"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-gorilla]",
            "value": 375285.100434816,
            "unit": "iter/sec",
            "range": "stddev: 4.533289735933622e-7",
            "extra": "mean: 2.6646408259783603 usec\nrounds: 109518"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-chimp]",
            "value": 352569.9421905357,
            "unit": "iter/sec",
            "range": "stddev: 3.991011604037585e-7",
            "extra": "mean: 2.8363166575884122 usec\nrounds: 125173"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-chimp128]",
            "value": 278782.71297420294,
            "unit": "iter/sec",
            "range": "stddev: 4.4776097889238127e-7",
            "extra": "mean: 3.5870229876575404 usec\nrounds: 60380"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-patas]",
            "value": 264501.3437752023,
            "unit": "iter/sec",
            "range": "stddev: 5.088230494070929e-7",
            "extra": "mean: 3.7806991288856837 usec\nrounds: 115581"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-gorilla]",
            "value": 36642.292362588756,
            "unit": "iter/sec",
            "range": "stddev: 0.000004681168889345905",
            "extra": "mean: 27.29086898015653 usec\nrounds: 19913"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-chimp]",
            "value": 34421.05837820539,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013193892162861416",
            "extra": "mean: 29.05198291732879 usec\nrounds: 14225"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-chimp128]",
            "value": 25960.451647887505,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017369155464923192",
            "extra": "mean: 38.5201310656463 usec\nrounds: 15641"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-patas]",
            "value": 23443.506385763107,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018420019159884387",
            "extra": "mean: 42.65573517651289 usec\nrounds: 12986"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-gorilla]",
            "value": 3849.186482039146,
            "unit": "iter/sec",
            "range": "stddev: 0.000006268667409188879",
            "extra": "mean: 259.79515533117006 usec\nrounds: 2176"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-chimp]",
            "value": 3579.218982942283,
            "unit": "iter/sec",
            "range": "stddev: 0.000013852937597211639",
            "extra": "mean: 279.39056111564145 usec\nrounds: 2798"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-chimp128]",
            "value": 2694.8488651822,
            "unit": "iter/sec",
            "range": "stddev: 0.0000094280632723681",
            "extra": "mean: 371.0783238793577 usec\nrounds: 2433"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-patas]",
            "value": 2473.089361636213,
            "unit": "iter/sec",
            "range": "stddev: 0.000007861055819214219",
            "extra": "mean: 404.35255414239987 usec\nrounds: 2281"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-gorilla]",
            "value": 211160.5487780875,
            "unit": "iter/sec",
            "range": "stddev: 4.461443736098906e-7",
            "extra": "mean: 4.735733098756616 usec\nrounds: 76133"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-chimp]",
            "value": 168340.38909308586,
            "unit": "iter/sec",
            "range": "stddev: 5.601859802853045e-7",
            "extra": "mean: 5.940345067439744 usec\nrounds: 82210"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-chimp128]",
            "value": 179979.92229746224,
            "unit": "iter/sec",
            "range": "stddev: 5.899885717802108e-7",
            "extra": "mean: 5.556175306861438 usec\nrounds: 97201"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-patas]",
            "value": 214710.4167313736,
            "unit": "iter/sec",
            "range": "stddev: 4.7309272358124755e-7",
            "extra": "mean: 4.657435886080506 usec\nrounds: 102240"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-gorilla]",
            "value": 21255.13850010027,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016892075364592162",
            "extra": "mean: 47.04744690302925 usec\nrounds: 14869"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-chimp]",
            "value": 17240.936694729284,
            "unit": "iter/sec",
            "range": "stddev: 0.000002685821721953371",
            "extra": "mean: 58.00148899715579 usec\nrounds: 11724"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-chimp128]",
            "value": 17845.788645598765,
            "unit": "iter/sec",
            "range": "stddev: 0.000001817787657418115",
            "extra": "mean: 56.03562946189134 usec\nrounds: 12355"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-patas]",
            "value": 19757.030949902215,
            "unit": "iter/sec",
            "range": "stddev: 0.000002128903747590802",
            "extra": "mean: 50.614892619022264 usec\nrounds: 10663"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-gorilla]",
            "value": 1926.110997711705,
            "unit": "iter/sec",
            "range": "stddev: 0.000007255908879368344",
            "extra": "mean: 519.1808785620555 usec\nrounds: 1474"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-chimp]",
            "value": 1764.4270641177725,
            "unit": "iter/sec",
            "range": "stddev: 0.000006738522400814342",
            "extra": "mean: 566.7562124479246 usec\nrounds: 1671"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-chimp128]",
            "value": 1831.7917999911158,
            "unit": "iter/sec",
            "range": "stddev: 0.000014133845218569318",
            "extra": "mean: 545.9135694377767 usec\nrounds: 1793"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-patas]",
            "value": 2054.6865810059394,
            "unit": "iter/sec",
            "range": "stddev: 0.000006827886713613084",
            "extra": "mean: 486.6922328905351 usec\nrounds: 1958"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-gorilla]",
            "value": 53024.51579229733,
            "unit": "iter/sec",
            "range": "stddev: 9.023064497282752e-7",
            "extra": "mean: 18.859200976339068 usec\nrounds: 35024"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-chimp]",
            "value": 56455.75080353297,
            "unit": "iter/sec",
            "range": "stddev: 8.960811689801951e-7",
            "extra": "mean: 17.712987353228517 usec\nrounds: 40959"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-chimp128]",
            "value": 83559.53635712386,
            "unit": "iter/sec",
            "range": "stddev: 7.024176444676767e-7",
            "extra": "mean: 11.967514943191103 usec\nrounds: 60898"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-patas]",
            "value": 104886.26942852752,
            "unit": "iter/sec",
            "range": "stddev: 6.717032183311669e-7",
            "extra": "mean: 9.534136407448722 usec\nrounds: 59095"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-gorilla]",
            "value": 5218.208580085236,
            "unit": "iter/sec",
            "range": "stddev: 0.000005249602914328493",
            "extra": "mean: 191.63664783665385 usec\nrounds: 4691"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-chimp]",
            "value": 5507.697989034775,
            "unit": "iter/sec",
            "range": "stddev: 0.00000913470393755408",
            "extra": "mean: 181.56405852152585 usec\nrounds: 5058"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-chimp128]",
            "value": 8039.204719490347,
            "unit": "iter/sec",
            "range": "stddev: 0.000004184544468537028",
            "extra": "mean: 124.39041359098464 usec\nrounds: 7343"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-patas]",
            "value": 10140.223364017855,
            "unit": "iter/sec",
            "range": "stddev: 0.000004345991706089112",
            "extra": "mean: 98.617157048873 usec\nrounds: 8214"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-gorilla]",
            "value": 519.0189869369002,
            "unit": "iter/sec",
            "range": "stddev: 0.000014468894076876353",
            "extra": "mean: 1.9267117873696886 msec\nrounds: 475"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-chimp]",
            "value": 552.4624423516989,
            "unit": "iter/sec",
            "range": "stddev: 0.000011706141729059825",
            "extra": "mean: 1.8100777959552181 msec\nrounds: 544"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-chimp128]",
            "value": 807.471693823163,
            "unit": "iter/sec",
            "range": "stddev: 0.00001682331697329068",
            "extra": "mean: 1.2384335050375164 msec\nrounds: 794"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-patas]",
            "value": 969.551996417639,
            "unit": "iter/sec",
            "range": "stddev: 0.00004380565363263964",
            "extra": "mean: 1.0314041987380378 msec\nrounds: 951"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-gorilla]",
            "value": 58904.423089893215,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011640693405772207",
            "extra": "mean: 16.976653832495973 usec\nrounds: 42361"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-chimp]",
            "value": 62454.67557032935,
            "unit": "iter/sec",
            "range": "stddev: 8.708012153814929e-7",
            "extra": "mean: 16.01161147453106 usec\nrounds: 45109"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-chimp128]",
            "value": 91566.84910677728,
            "unit": "iter/sec",
            "range": "stddev: 6.914679079904133e-7",
            "extra": "mean: 10.9209829731488 usec\nrounds: 62783"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-patas]",
            "value": 107979.56482952184,
            "unit": "iter/sec",
            "range": "stddev: 6.135642740177158e-7",
            "extra": "mean: 9.261011577318358 usec\nrounds: 59859"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-gorilla]",
            "value": 5803.389307739878,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035908082447522697",
            "extra": "mean: 172.31309963409103 usec\nrounds: 5189"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-chimp]",
            "value": 6209.072297474068,
            "unit": "iter/sec",
            "range": "stddev: 0.000004010109001048309",
            "extra": "mean: 161.0546555250795 usec\nrounds: 5475"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-chimp128]",
            "value": 9024.963192443694,
            "unit": "iter/sec",
            "range": "stddev: 0.000002614934670612395",
            "extra": "mean: 110.80377600179769 usec\nrounds: 8009"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-patas]",
            "value": 10331.479214749173,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028688609736437852",
            "extra": "mean: 96.7915609385735 usec\nrounds: 7967"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-gorilla]",
            "value": 576.2655317229571,
            "unit": "iter/sec",
            "range": "stddev: 0.000041109175680742003",
            "extra": "mean: 1.7353111455584256 msec\nrounds: 529"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-chimp]",
            "value": 622.2288895578009,
            "unit": "iter/sec",
            "range": "stddev: 0.000010834109758662945",
            "extra": "mean: 1.607125636211892 msec\nrounds: 602"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-chimp128]",
            "value": 901.4310626137838,
            "unit": "iter/sec",
            "range": "stddev: 0.000012977870986665974",
            "extra": "mean: 1.1093471719294945 msec\nrounds: 855"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-patas]",
            "value": 985.3968555928046,
            "unit": "iter/sec",
            "range": "stddev: 0.000009813724589467866",
            "extra": "mean: 1.014819556531272 msec\nrounds: 911"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-gorilla]",
            "value": 56662.095491076085,
            "unit": "iter/sec",
            "range": "stddev: 0.000004107789083793057",
            "extra": "mean: 17.648482487865166 usec\nrounds: 39230"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-chimp]",
            "value": 60145.30717758663,
            "unit": "iter/sec",
            "range": "stddev: 9.210950324706623e-7",
            "extra": "mean: 16.626401076436 usec\nrounds: 39202"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-chimp128]",
            "value": 88282.55822726001,
            "unit": "iter/sec",
            "range": "stddev: 7.301605359851796e-7",
            "extra": "mean: 11.327265771181725 usec\nrounds: 62614"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-patas]",
            "value": 105894.29625299628,
            "unit": "iter/sec",
            "range": "stddev: 6.261041208675626e-7",
            "extra": "mean: 9.443379250671445 usec\nrounds: 31172"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-gorilla]",
            "value": 5841.408100830735,
            "unit": "iter/sec",
            "range": "stddev: 0.000006270987231741105",
            "extra": "mean: 171.19160016534116 usec\nrounds: 4832"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-chimp]",
            "value": 6235.370584110241,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031937801219783396",
            "extra": "mean: 160.37539172865303 usec\nrounds: 6045"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-chimp128]",
            "value": 9045.382285058029,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026164191460479262",
            "extra": "mean: 110.55364698647278 usec\nrounds: 8113"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-patas]",
            "value": 10823.983996222003,
            "unit": "iter/sec",
            "range": "stddev: 0.000002381959908889054",
            "extra": "mean: 92.38742410826175 usec\nrounds: 8387"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-gorilla]",
            "value": 601.8430226864116,
            "unit": "iter/sec",
            "range": "stddev: 0.000012615484119265457",
            "extra": "mean: 1.6615628366618895 msec\nrounds: 551"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-chimp]",
            "value": 647.1673098441344,
            "unit": "iter/sec",
            "range": "stddev: 0.000010542020680724916",
            "extra": "mean: 1.545195476948369 msec\nrounds: 629"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-chimp128]",
            "value": 924.5742175640634,
            "unit": "iter/sec",
            "range": "stddev: 0.000022420930280647694",
            "extra": "mean: 1.0815789376375406 msec\nrounds: 898"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-patas]",
            "value": 1095.2904992940935,
            "unit": "iter/sec",
            "range": "stddev: 0.00001062789777413722",
            "extra": "mean: 912.9997937939685 usec\nrounds: 999"
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
            "email": "miikka.koskinen@iki.fi",
            "name": "Miikka Koskinen",
            "username": "miikka"
          },
          "distinct": true,
          "id": "1d60df8581135af16b6292f86e5c153b8c2b8e62",
          "message": "chore: update dependencies",
          "timestamp": "2026-03-14T17:31:22+02:00",
          "tree_id": "0c403fc5152d41b0548207162da1e93e9faedaad",
          "url": "https://github.com/miikka/floatbungler/commit/1d60df8581135af16b6292f86e5c153b8c2b8e62"
        },
        "date": 1773502598097,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-gorilla]",
            "value": 599150.3191147608,
            "unit": "iter/sec",
            "range": "stddev: 3.554779799385328e-7",
            "extra": "mean: 1.6690302384842104 usec\nrounds: 122625"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-chimp]",
            "value": 513034.8970714984,
            "unit": "iter/sec",
            "range": "stddev: 0.000001113652755946654",
            "extra": "mean: 1.9491851445353754 usec\nrounds: 183824"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-chimp128]",
            "value": 220535.17758392863,
            "unit": "iter/sec",
            "range": "stddev: 6.867517757124463e-7",
            "extra": "mean: 4.534423990564643 usec\nrounds: 25352"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-patas]",
            "value": 443133.8380389924,
            "unit": "iter/sec",
            "range": "stddev: 4.81060441754038e-7",
            "extra": "mean: 2.256654568347379 usec\nrounds: 189036"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-gorilla]",
            "value": 81108.4595862127,
            "unit": "iter/sec",
            "range": "stddev: 0.000001072154820996642",
            "extra": "mean: 12.329170164267131 usec\nrounds: 61993"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-chimp]",
            "value": 77042.54640723679,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011766124234819805",
            "extra": "mean: 12.979840966238722 usec\nrounds: 55636"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-chimp128]",
            "value": 41923.90806623645,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033444540900103664",
            "extra": "mean: 23.852738118308995 usec\nrounds: 27711"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-patas]",
            "value": 57385.52440474841,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014786040857220734",
            "extra": "mean: 17.425997416122843 usec\nrounds: 46445"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-gorilla]",
            "value": 8441.038871814606,
            "unit": "iter/sec",
            "range": "stddev: 0.00000455811893467385",
            "extra": "mean: 118.46883010325787 usec\nrounds: 8358"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-chimp]",
            "value": 8257.050192907458,
            "unit": "iter/sec",
            "range": "stddev: 0.0000045535475636645485",
            "extra": "mean: 121.10862555479777 usec\nrounds: 7889"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-chimp128]",
            "value": 4668.126945637432,
            "unit": "iter/sec",
            "range": "stddev: 0.000008029605398979163",
            "extra": "mean: 214.21868163515637 usec\nrounds: 4476"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-patas]",
            "value": 5860.118256069253,
            "unit": "iter/sec",
            "range": "stddev: 0.00002992723189545824",
            "extra": "mean: 170.64502051034756 usec\nrounds: 5851"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-gorilla]",
            "value": 280666.00987713627,
            "unit": "iter/sec",
            "range": "stddev: 6.337891664389597e-7",
            "extra": "mean: 3.56295370585757 usec\nrounds: 109927"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-chimp]",
            "value": 227151.50469383126,
            "unit": "iter/sec",
            "range": "stddev: 7.130989726646309e-7",
            "extra": "mean: 4.402348121566976 usec\nrounds: 99020"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-chimp128]",
            "value": 140898.98221377237,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011735652253219911",
            "extra": "mean: 7.097283346467307 usec\nrounds: 47599"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-patas]",
            "value": 288979.986215207,
            "unit": "iter/sec",
            "range": "stddev: 5.713134784407752e-7",
            "extra": "mean: 3.4604472548326837 usec\nrounds: 129955"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-gorilla]",
            "value": 30730.1278467745,
            "unit": "iter/sec",
            "range": "stddev: 0.000002479225168237236",
            "extra": "mean: 32.54135501766102 usec\nrounds: 25041"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-chimp]",
            "value": 26428.2814744355,
            "unit": "iter/sec",
            "range": "stddev: 0.000010667371165770539",
            "extra": "mean: 37.83825297030062 usec\nrounds: 21884"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-chimp128]",
            "value": 20956.075863460333,
            "unit": "iter/sec",
            "range": "stddev: 0.0000067536324472647136",
            "extra": "mean: 47.71885760079878 usec\nrounds: 15892"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-patas]",
            "value": 35654.883397072044,
            "unit": "iter/sec",
            "range": "stddev: 0.00000344373744210245",
            "extra": "mean: 28.046649006349558 usec\nrounds: 25593"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-gorilla]",
            "value": 2699.012650647362,
            "unit": "iter/sec",
            "range": "stddev: 0.00005432378627392486",
            "extra": "mean: 370.5058587851185 usec\nrounds: 2783"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-chimp]",
            "value": 2735.0106804964553,
            "unit": "iter/sec",
            "range": "stddev: 0.00003749227197639901",
            "extra": "mean: 365.629285154558 usec\nrounds: 2553"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-chimp128]",
            "value": 2111.8367022017064,
            "unit": "iter/sec",
            "range": "stddev: 0.00007937017876733962",
            "extra": "mean: 473.521460706429 usec\nrounds: 2036"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-patas]",
            "value": 3465.8539334225693,
            "unit": "iter/sec",
            "range": "stddev: 0.000008140606967047312",
            "extra": "mean: 288.5291819013529 usec\nrounds: 3293"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-gorilla]",
            "value": 86114.19611269755,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012234013860028231",
            "extra": "mean: 11.612487198873705 usec\nrounds: 55854"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-chimp]",
            "value": 86658.57094594023,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011156505239370289",
            "extra": "mean: 11.539539471794717 usec\nrounds: 53519"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-chimp128]",
            "value": 49603.17120250804,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017376729974032365",
            "extra": "mean: 20.160001382118043 usec\nrounds: 30403"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-patas]",
            "value": 5885.978623167773,
            "unit": "iter/sec",
            "range": "stddev: 0.0000124946967275425",
            "extra": "mean: 169.8952823348533 usec\nrounds: 5327"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-gorilla]",
            "value": 8851.982124787248,
            "unit": "iter/sec",
            "range": "stddev: 0.00001026516480634036",
            "extra": "mean: 112.96904872862409 usec\nrounds: 8414"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-chimp]",
            "value": 8895.429462234457,
            "unit": "iter/sec",
            "range": "stddev: 0.000018376587173906243",
            "extra": "mean: 112.41728173389488 usec\nrounds: 8398"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-chimp128]",
            "value": 4900.56094694271,
            "unit": "iter/sec",
            "range": "stddev: 0.000005969360427440838",
            "extra": "mean: 204.05827227265996 usec\nrounds: 4602"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-patas]",
            "value": 493.34456763279803,
            "unit": "iter/sec",
            "range": "stddev: 0.000014637572835569441",
            "extra": "mean: 2.026980868155239 msec\nrounds: 493"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-gorilla]",
            "value": 882.7873922094212,
            "unit": "iter/sec",
            "range": "stddev: 0.0000555170522515654",
            "extra": "mean: 1.1327755797431833 msec\nrounds: 859"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-chimp]",
            "value": 906.8563850809157,
            "unit": "iter/sec",
            "range": "stddev: 0.00001825293787373301",
            "extra": "mean: 1.1027104362404345 msec\nrounds: 894"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-chimp128]",
            "value": 487.35867122231195,
            "unit": "iter/sec",
            "range": "stddev: 0.00002629005334952295",
            "extra": "mean: 2.051876901034645 msec\nrounds: 485"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-patas]",
            "value": 62.04775215489584,
            "unit": "iter/sec",
            "range": "stddev: 0.00002363726844040694",
            "extra": "mean: 16.11661930159215 msec\nrounds: 63"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-gorilla]",
            "value": 94272.02474133794,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010950167049058218",
            "extra": "mean: 10.607600746284849 usec\nrounds: 55451"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-chimp]",
            "value": 94445.25535933665,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016235138089877583",
            "extra": "mean: 10.588144382640415 usec\nrounds: 53663"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-chimp128]",
            "value": 52057.76696418617,
            "unit": "iter/sec",
            "range": "stddev: 0.000002227229393300749",
            "extra": "mean: 19.209429414979773 usec\nrounds: 28965"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-patas]",
            "value": 5879.569897681033,
            "unit": "iter/sec",
            "range": "stddev: 0.000004503301017458623",
            "extra": "mean: 170.0804680278418 usec\nrounds: 5630"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-gorilla]",
            "value": 9917.889088658982,
            "unit": "iter/sec",
            "range": "stddev: 0.000004159204466113979",
            "extra": "mean: 100.82790713434083 usec\nrounds: 9433"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-chimp]",
            "value": 9816.421243736031,
            "unit": "iter/sec",
            "range": "stddev: 0.000020570883542574544",
            "extra": "mean: 101.87011897417413 usec\nrounds: 9313"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-chimp128]",
            "value": 5148.184724476634,
            "unit": "iter/sec",
            "range": "stddev: 0.000006353111924089107",
            "extra": "mean: 194.24322426613395 usec\nrounds: 4731"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-patas]",
            "value": 491.01989201624224,
            "unit": "iter/sec",
            "range": "stddev: 0.000020851460050315975",
            "extra": "mean: 2.036577369388777 msec\nrounds: 490"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-gorilla]",
            "value": 976.1091664838094,
            "unit": "iter/sec",
            "range": "stddev: 0.00012418531739867827",
            "extra": "mean: 1.0244755754136101 msec\nrounds: 968"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-chimp]",
            "value": 1002.0330778769362,
            "unit": "iter/sec",
            "range": "stddev: 0.000050960168828748345",
            "extra": "mean: 997.9710471422322 usec\nrounds: 997"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-chimp128]",
            "value": 511.6292986385408,
            "unit": "iter/sec",
            "range": "stddev: 0.000036090629704996936",
            "extra": "mean: 1.9545401380668126 msec\nrounds: 507"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-patas]",
            "value": 62.21392297707101,
            "unit": "iter/sec",
            "range": "stddev: 0.00002515019837594658",
            "extra": "mean: 16.073572476189145 msec\nrounds: 63"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-gorilla]",
            "value": 91388.70281323526,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024704490941545324",
            "extra": "mean: 10.942271519529394 usec\nrounds: 44402"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-chimp]",
            "value": 91568.49172385306,
            "unit": "iter/sec",
            "range": "stddev: 0.000001295571790534652",
            "extra": "mean: 10.920787065224815 usec\nrounds: 54040"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-chimp128]",
            "value": 51475.634231917276,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015219950426020797",
            "extra": "mean: 19.426666906028203 usec\nrounds: 30580"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-patas]",
            "value": 5926.339749581262,
            "unit": "iter/sec",
            "range": "stddev: 0.000004074398483611794",
            "extra": "mean: 168.73821654768562 usec\nrounds: 5874"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-gorilla]",
            "value": 10007.287144296854,
            "unit": "iter/sec",
            "range": "stddev: 0.000004596919691489253",
            "extra": "mean: 99.9271816208351 usec\nrounds: 8281"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-chimp]",
            "value": 10101.229538293454,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037655348300033645",
            "extra": "mean: 98.99784934190738 usec\nrounds: 9266"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-chimp128]",
            "value": 5156.646294024436,
            "unit": "iter/sec",
            "range": "stddev: 0.000008684014020012473",
            "extra": "mean: 193.92448948046098 usec\nrounds: 4848"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-patas]",
            "value": 492.9413672544276,
            "unit": "iter/sec",
            "range": "stddev: 0.00002122198695497238",
            "extra": "mean: 2.0286388329909797 msec\nrounds: 491"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-gorilla]",
            "value": 1032.586802744755,
            "unit": "iter/sec",
            "range": "stddev: 0.00001073401510118613",
            "extra": "mean: 968.4415850966379 usec\nrounds: 993"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-chimp]",
            "value": 1029.0336396064479,
            "unit": "iter/sec",
            "range": "stddev: 0.0000173155686187029",
            "extra": "mean: 971.7855291712798 usec\nrounds: 977"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-chimp128]",
            "value": 519.3576504523004,
            "unit": "iter/sec",
            "range": "stddev: 0.00002593278875499967",
            "extra": "mean: 1.925455414258586 msec\nrounds: 519"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-patas]",
            "value": 62.277200042351716,
            "unit": "iter/sec",
            "range": "stddev: 0.00006295590442260386",
            "extra": "mean: 16.05724084127013 msec\nrounds: 63"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-gorilla]",
            "value": 364339.6878088847,
            "unit": "iter/sec",
            "range": "stddev: 7.342108891703316e-7",
            "extra": "mean: 2.7446913785701885 usec\nrounds: 130976"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-chimp]",
            "value": 350517.3873357811,
            "unit": "iter/sec",
            "range": "stddev: 5.597706244298505e-7",
            "extra": "mean: 2.852925521329535 usec\nrounds: 179501"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-chimp128]",
            "value": 248663.50223887523,
            "unit": "iter/sec",
            "range": "stddev: 7.127479353926152e-7",
            "extra": "mean: 4.021498897089303 usec\nrounds: 136912"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-patas]",
            "value": 426266.67825495696,
            "unit": "iter/sec",
            "range": "stddev: 3.515895591108766e-7",
            "extra": "mean: 2.3459492637186243 usec\nrounds: 189036"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-gorilla]",
            "value": 31412.638679847485,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019223384869024165",
            "extra": "mean: 31.83432026172133 usec\nrounds: 18335"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-chimp]",
            "value": 29679.72143350727,
            "unit": "iter/sec",
            "range": "stddev: 0.000001972810434070298",
            "extra": "mean: 33.693038603490336 usec\nrounds: 26448"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-chimp128]",
            "value": 21907.059340503136,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024833188307142333",
            "extra": "mean: 45.647386281149004 usec\nrounds: 18748"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-patas]",
            "value": 29251.631629581712,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022156443779195576",
            "extra": "mean: 34.186127210378096 usec\nrounds: 21264"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-gorilla]",
            "value": 3094.282540599935,
            "unit": "iter/sec",
            "range": "stddev: 0.000009061688568093538",
            "extra": "mean: 323.1766934270052 usec\nrounds: 1856"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-chimp]",
            "value": 2980.668982146553,
            "unit": "iter/sec",
            "range": "stddev: 0.00000710454515995881",
            "extra": "mean: 335.4951542723278 usec\nrounds: 2891"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-chimp128]",
            "value": 2253.7270374991035,
            "unit": "iter/sec",
            "range": "stddev: 0.000007992317023462917",
            "extra": "mean: 443.70945698449424 usec\nrounds: 2162"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-patas]",
            "value": 3048.803027664222,
            "unit": "iter/sec",
            "range": "stddev: 0.000007662982379851365",
            "extra": "mean: 327.9975750896998 usec\nrounds: 2770"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-gorilla]",
            "value": 250691.56891316807,
            "unit": "iter/sec",
            "range": "stddev: 6.659641942569603e-7",
            "extra": "mean: 3.988965422073566 usec\nrounds: 109087"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-chimp]",
            "value": 210839.47750321176,
            "unit": "iter/sec",
            "range": "stddev: 7.027225512107755e-7",
            "extra": "mean: 4.742944783596169 usec\nrounds: 130124"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-chimp128]",
            "value": 169430.12268215785,
            "unit": "iter/sec",
            "range": "stddev: 7.976655429762083e-7",
            "extra": "mean: 5.902138204054473 usec\nrounds: 111907"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-patas]",
            "value": 404599.00901035324,
            "unit": "iter/sec",
            "range": "stddev: 5.579925677299331e-7",
            "extra": "mean: 2.4715829197060915 usec\nrounds: 100513"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-gorilla]",
            "value": 22187.489545181732,
            "unit": "iter/sec",
            "range": "stddev: 0.000002151120084922385",
            "extra": "mean: 45.07044377254305 usec\nrounds: 15704"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-chimp]",
            "value": 19312.5608980093,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034708004532486475",
            "extra": "mean: 51.7797719981858 usec\nrounds: 15149"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-chimp128]",
            "value": 15789.789623184352,
            "unit": "iter/sec",
            "range": "stddev: 0.000002581972604457684",
            "extra": "mean: 63.332066092361806 usec\nrounds: 14525"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-patas]",
            "value": 29216.508070183205,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024173235149387002",
            "extra": "mean: 34.22722515633366 usec\nrounds: 24836"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-gorilla]",
            "value": 2070.850360135345,
            "unit": "iter/sec",
            "range": "stddev: 0.000010411851090594992",
            "extra": "mean: 482.89341386049875 usec\nrounds: 1486"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-chimp]",
            "value": 1966.32179990215,
            "unit": "iter/sec",
            "range": "stddev: 0.000011225914674558905",
            "extra": "mean: 508.56375596800234 usec\nrounds: 1885"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-chimp128]",
            "value": 1601.2603653557424,
            "unit": "iter/sec",
            "range": "stddev: 0.000009512250358409483",
            "extra": "mean: 624.508057300123 usec\nrounds: 1466"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-patas]",
            "value": 3100.8349154283933,
            "unit": "iter/sec",
            "range": "stddev: 0.00000718912594113931",
            "extra": "mean: 322.49378869685677 usec\nrounds: 2778"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-gorilla]",
            "value": 78286.42303992575,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013087352645151037",
            "extra": "mean: 12.773606982784282 usec\nrounds: 60898"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-chimp]",
            "value": 83571.69673098545,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011242689424514857",
            "extra": "mean: 11.9657735706739 usec\nrounds: 65972"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-chimp128]",
            "value": 78175.43269187197,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010989838173665743",
            "extra": "mean: 12.7917424383373 usec\nrounds: 60898"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-patas]",
            "value": 370465.64599095454,
            "unit": "iter/sec",
            "range": "stddev: 5.652063505947455e-7",
            "extra": "mean: 2.699305619351319 usec\nrounds: 153328"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-gorilla]",
            "value": 7522.659603722105,
            "unit": "iter/sec",
            "range": "stddev: 0.000003924017226723622",
            "extra": "mean: 132.93170935252928 usec\nrounds: 6458"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-chimp]",
            "value": 7996.771202106244,
            "unit": "iter/sec",
            "range": "stddev: 0.000004107071176366656",
            "extra": "mean: 125.0504703369046 usec\nrounds: 7029"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-chimp128]",
            "value": 7425.780997948328,
            "unit": "iter/sec",
            "range": "stddev: 0.000004119623625258099",
            "extra": "mean: 134.66596985236842 usec\nrounds: 7198"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-patas]",
            "value": 28307.702067572223,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031824270667454012",
            "extra": "mean: 35.326074776855386 usec\nrounds: 21865"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-gorilla]",
            "value": 750.8052718610948,
            "unit": "iter/sec",
            "range": "stddev: 0.000011077813887253666",
            "extra": "mean: 1.331903274361942 msec\nrounds: 667"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-chimp]",
            "value": 804.0601117666956,
            "unit": "iter/sec",
            "range": "stddev: 0.000012924802594520875",
            "extra": "mean: 1.2436881090927165 msec\nrounds: 770"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-chimp128]",
            "value": 744.6482117851061,
            "unit": "iter/sec",
            "range": "stddev: 0.00000920067569115908",
            "extra": "mean: 1.3429160027159033 msec\nrounds: 736"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-patas]",
            "value": 2663.0291117419733,
            "unit": "iter/sec",
            "range": "stddev: 0.000008254844521285788",
            "extra": "mean: 375.5122298854133 usec\nrounds: 2436"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-gorilla]",
            "value": 86832.1739178513,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010568369562756468",
            "extra": "mean: 11.516468549388883 usec\nrounds: 65929"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-chimp]",
            "value": 92547.23619296432,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010344659770796846",
            "extra": "mean: 10.80529296320599 usec\nrounds: 71043"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-chimp128]",
            "value": 85777.02829486494,
            "unit": "iter/sec",
            "range": "stddev: 0.00000112647665020253",
            "extra": "mean: 11.658132950962411 usec\nrounds: 67852"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-patas]",
            "value": 369880.1329105174,
            "unit": "iter/sec",
            "range": "stddev: 5.111622314608218e-7",
            "extra": "mean: 2.7035785678219253 usec\nrounds: 157679"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-gorilla]",
            "value": 8288.807811310502,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033221210864794304",
            "extra": "mean: 120.64461171791785 usec\nrounds: 6315"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-chimp]",
            "value": 8938.718829398025,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036900085186662033",
            "extra": "mean: 111.8728555048805 usec\nrounds: 8720"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-chimp128]",
            "value": 8178.739783851285,
            "unit": "iter/sec",
            "range": "stddev: 0.000003612064064919203",
            "extra": "mean: 122.26822547582145 usec\nrounds: 7890"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-patas]",
            "value": 28908.106748487164,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020730339169422057",
            "extra": "mean: 34.59237260677172 usec\nrounds: 20786"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-gorilla]",
            "value": 825.1246507431453,
            "unit": "iter/sec",
            "range": "stddev: 0.00001085854281748159",
            "extra": "mean: 1.211938098200501 msec\nrounds: 723"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-chimp]",
            "value": 889.6685303052767,
            "unit": "iter/sec",
            "range": "stddev: 0.000011186625865216643",
            "extra": "mean: 1.1240141310346952 msec\nrounds: 870"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-chimp128]",
            "value": 819.553509094345,
            "unit": "iter/sec",
            "range": "stddev: 0.000010832627218599296",
            "extra": "mean: 1.22017658261882 msec\nrounds: 817"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-patas]",
            "value": 2638.6675030442725,
            "unit": "iter/sec",
            "range": "stddev: 0.000009085152055545355",
            "extra": "mean: 378.9791623409482 usec\nrounds: 2119"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-gorilla]",
            "value": 84618.3293150045,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010351346134381",
            "extra": "mean: 11.817770548002065 usec\nrounds: 57232"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-chimp]",
            "value": 88768.09363176466,
            "unit": "iter/sec",
            "range": "stddev: 9.998959879156173e-7",
            "extra": "mean: 11.26530895378113 usec\nrounds: 68363"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-chimp128]",
            "value": 82214.25867094919,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011995765372359116",
            "extra": "mean: 12.163340230340784 usec\nrounds: 64521"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-patas]",
            "value": 369148.3303663999,
            "unit": "iter/sec",
            "range": "stddev: 5.504990931673814e-7",
            "extra": "mean: 2.708938163169925 usec\nrounds: 160746"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-gorilla]",
            "value": 8340.509708738851,
            "unit": "iter/sec",
            "range": "stddev: 0.00000338331793592337",
            "extra": "mean: 119.89674911021808 usec\nrounds: 7027"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-chimp]",
            "value": 8896.14349048513,
            "unit": "iter/sec",
            "range": "stddev: 0.000003992592013269783",
            "extra": "mean: 112.40825882243804 usec\nrounds: 7793"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-chimp128]",
            "value": 8244.773490766478,
            "unit": "iter/sec",
            "range": "stddev: 0.000003957666391411217",
            "extra": "mean: 121.28895974157741 usec\nrounds: 7601"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-patas]",
            "value": 28777.455678073395,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019965556777899206",
            "extra": "mean: 34.749423687304535 usec\nrounds: 15502"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-gorilla]",
            "value": 855.473516841371,
            "unit": "iter/sec",
            "range": "stddev: 0.000011044811986354303",
            "extra": "mean: 1.1689432581060581 msec\nrounds: 740"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-chimp]",
            "value": 906.7488692677855,
            "unit": "iter/sec",
            "range": "stddev: 0.000014601392109043386",
            "extra": "mean: 1.1028411877783937 msec\nrounds: 900"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-chimp128]",
            "value": 845.2849906772332,
            "unit": "iter/sec",
            "range": "stddev: 0.000034605062617827866",
            "extra": "mean: 1.183032954600094 msec\nrounds: 837"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-patas]",
            "value": 2798.827975862059,
            "unit": "iter/sec",
            "range": "stddev: 0.000006697578432955193",
            "extra": "mean: 357.2924126185329 usec\nrounds: 2346"
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
            "email": "miikka.koskinen@iki.fi",
            "name": "Miikka Koskinen",
            "username": "miikka"
          },
          "distinct": true,
          "id": "1406b57a806c1e82a0559e497fb4a5ff4bc67716",
          "message": "fix: fix the xor case in patas\n\nIt should match the DuckDB implementation a bit more closely now.",
          "timestamp": "2026-03-14T19:43:54+02:00",
          "tree_id": "3b73a4a8ad92fcf61e8c3530e738241d1be1be6b",
          "url": "https://github.com/miikka/floatbungler/commit/1406b57a806c1e82a0559e497fb4a5ff4bc67716"
        },
        "date": 1773510380072,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-gorilla]",
            "value": 617322.8877820855,
            "unit": "iter/sec",
            "range": "stddev: 3.6229425824521385e-7",
            "extra": "mean: 1.6198978197500422 usec\nrounds: 76835"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-chimp]",
            "value": 524762.4699376245,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010622885227776659",
            "extra": "mean: 1.905624081918176 usec\nrounds: 156691"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-chimp128]",
            "value": 217448.57895634772,
            "unit": "iter/sec",
            "range": "stddev: 7.034139654866443e-7",
            "extra": "mean: 4.5987883884987255 usec\nrounds: 26095"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-patas]",
            "value": 371215.63175935124,
            "unit": "iter/sec",
            "range": "stddev: 5.028880198888686e-7",
            "extra": "mean: 2.6938520753034236 usec\nrounds: 172385"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-gorilla]",
            "value": 84693.5226213673,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010333971929318738",
            "extra": "mean: 11.807278396845312 usec\nrounds: 63176"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-chimp]",
            "value": 79096.86179928169,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011010245833539815",
            "extra": "mean: 12.642726617114427 usec\nrounds: 56013"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-chimp128]",
            "value": 9373.327822626754,
            "unit": "iter/sec",
            "range": "stddev: 0.000005084542981995471",
            "extra": "mean: 106.68569572335335 usec\nrounds: 8581"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-patas]",
            "value": 46944.84697698863,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017274825236932639",
            "extra": "mean: 21.301592494063915 usec\nrounds: 39862"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-gorilla]",
            "value": 8857.67955582589,
            "unit": "iter/sec",
            "range": "stddev: 0.000004485565283298256",
            "extra": "mean: 112.89638484858916 usec\nrounds: 8580"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-chimp]",
            "value": 8479.674670787197,
            "unit": "iter/sec",
            "range": "stddev: 0.000004472256858185819",
            "extra": "mean: 117.9290525667262 usec\nrounds: 8066"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-chimp128]",
            "value": 879.0094703625629,
            "unit": "iter/sec",
            "range": "stddev: 0.000018753080235391453",
            "extra": "mean: 1.1376441707590845 msec\nrounds: 855"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-patas]",
            "value": 4879.571186678122,
            "unit": "iter/sec",
            "range": "stddev: 0.000007168763579885671",
            "extra": "mean: 204.93604084107488 usec\nrounds: 4799"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-gorilla]",
            "value": 281513.7246248942,
            "unit": "iter/sec",
            "range": "stddev: 6.349733838275125e-7",
            "extra": "mean: 3.5522246786811555 usec\nrounds: 104625"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-chimp]",
            "value": 228115.09683892922,
            "unit": "iter/sec",
            "range": "stddev: 7.202793664550449e-7",
            "extra": "mean: 4.383751947404403 usec\nrounds: 101031"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-chimp128]",
            "value": 110043.78628803245,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010631673832761778",
            "extra": "mean: 9.087291829295705 usec\nrounds: 48196"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-patas]",
            "value": 291950.0612511455,
            "unit": "iter/sec",
            "range": "stddev: 5.680976743316378e-7",
            "extra": "mean: 3.425243330021998 usec\nrounds: 138832"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-gorilla]",
            "value": 32513.76384176216,
            "unit": "iter/sec",
            "range": "stddev: 0.00000215948717177456",
            "extra": "mean: 30.75620542939278 usec\nrounds: 25712"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-chimp]",
            "value": 27932.395194537807,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028590289071420783",
            "extra": "mean: 35.80072503755605 usec\nrounds: 21923"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-chimp128]",
            "value": 7270.097925212224,
            "unit": "iter/sec",
            "range": "stddev: 0.000004986457097081085",
            "extra": "mean: 137.54972908027352 usec\nrounds: 6489"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-patas]",
            "value": 35989.86919557355,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015948574794024425",
            "extra": "mean: 27.78559695690674 usec\nrounds: 30101"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-gorilla]",
            "value": 2963.346004467922,
            "unit": "iter/sec",
            "range": "stddev: 0.000009221580625171383",
            "extra": "mean: 337.4563748182869 usec\nrounds: 2065"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-chimp]",
            "value": 2747.174378367601,
            "unit": "iter/sec",
            "range": "stddev: 0.0000480350749903597",
            "extra": "mean: 364.01038386001915 usec\nrounds: 2751"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-chimp128]",
            "value": 630.4707736057862,
            "unit": "iter/sec",
            "range": "stddev: 0.00001541044505069074",
            "extra": "mean: 1.586116346489471 msec\nrounds: 684"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-patas]",
            "value": 3611.9877663034968,
            "unit": "iter/sec",
            "range": "stddev: 0.000008149281992925238",
            "extra": "mean: 276.8558657172304 usec\nrounds: 3582"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-gorilla]",
            "value": 87695.53388987249,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010128025081156192",
            "extra": "mean: 11.403089252592885 usec\nrounds: 56906"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-chimp]",
            "value": 84332.08140593949,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012575623962582879",
            "extra": "mean: 11.857883540030477 usec\nrounds: 55298"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-chimp128]",
            "value": 46820.7302621098,
            "unit": "iter/sec",
            "range": "stddev: 0.000001738641042526147",
            "extra": "mean: 21.358060722287817 usec\nrounds: 29462"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-patas]",
            "value": 95459.87371849579,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010782274318643251",
            "extra": "mean: 10.475605728841915 usec\nrounds: 69508"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-gorilla]",
            "value": 9058.682853635513,
            "unit": "iter/sec",
            "range": "stddev: 0.000003858455741275542",
            "extra": "mean: 110.3913246724021 usec\nrounds: 8544"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-chimp]",
            "value": 8870.59610116723,
            "unit": "iter/sec",
            "range": "stddev: 0.0000044695325687002605",
            "extra": "mean: 112.73199552715694 usec\nrounds: 8273"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-chimp128]",
            "value": 4756.277792358715,
            "unit": "iter/sec",
            "range": "stddev: 0.000006598001480068927",
            "extra": "mean: 210.24844293295237 usec\nrounds: 4486"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-patas]",
            "value": 7806.853552634357,
            "unit": "iter/sec",
            "range": "stddev: 0.000003990354024519408",
            "extra": "mean: 128.09257830416948 usec\nrounds: 7688"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-gorilla]",
            "value": 908.4397952596958,
            "unit": "iter/sec",
            "range": "stddev: 0.000014008873095997407",
            "extra": "mean: 1.1007884124166203 msec\nrounds: 902"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-chimp]",
            "value": 889.4951725671582,
            "unit": "iter/sec",
            "range": "stddev: 0.00003903104050130208",
            "extra": "mean: 1.1242331952335565 msec\nrounds: 881"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-chimp128]",
            "value": 472.79923862398033,
            "unit": "iter/sec",
            "range": "stddev: 0.00014143804179795653",
            "extra": "mean: 2.11506262766067 msec\nrounds: 470"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-patas]",
            "value": 909.3974371501929,
            "unit": "iter/sec",
            "range": "stddev: 0.000010190071231088777",
            "extra": "mean: 1.0996292260661424 msec\nrounds: 867"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-gorilla]",
            "value": 95834.55526472344,
            "unit": "iter/sec",
            "range": "stddev: 9.661116471921729e-7",
            "extra": "mean: 10.434649560773812 usec\nrounds: 65241"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-chimp]",
            "value": 93845.38613136335,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012630200857434503",
            "extra": "mean: 10.655824875612053 usec\nrounds: 57068"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-chimp128]",
            "value": 48335.54350978086,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031793437048267142",
            "extra": "mean: 20.68870912349722 usec\nrounds: 30274"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-patas]",
            "value": 97089.69095836449,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011715855801385453",
            "extra": "mean: 10.299754692069579 usec\nrounds: 70438"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-gorilla]",
            "value": 10089.223399103017,
            "unit": "iter/sec",
            "range": "stddev: 0.000004568186654386299",
            "extra": "mean: 99.11565642296165 usec\nrounds: 9599"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-chimp]",
            "value": 10007.844987470782,
            "unit": "iter/sec",
            "range": "stddev: 0.000003861265986326904",
            "extra": "mean: 99.92161162087739 usec\nrounds: 9156"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-chimp128]",
            "value": 5022.933760685759,
            "unit": "iter/sec",
            "range": "stddev: 0.00000538728492374411",
            "extra": "mean: 199.0868380202319 usec\nrounds: 4303"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-patas]",
            "value": 7776.326304046733,
            "unit": "iter/sec",
            "range": "stddev: 0.0000065387535271646315",
            "extra": "mean: 128.59542679936266 usec\nrounds: 7739"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-gorilla]",
            "value": 1012.1346735703356,
            "unit": "iter/sec",
            "range": "stddev: 0.000016349440454891573",
            "extra": "mean: 988.0108113206613 usec\nrounds: 1007"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-chimp]",
            "value": 1005.7833276495504,
            "unit": "iter/sec",
            "range": "stddev: 0.00002151484545434026",
            "extra": "mean: 994.2499269071543 usec\nrounds: 944"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-chimp128]",
            "value": 501.4449317317784,
            "unit": "iter/sec",
            "range": "stddev: 0.000022393961170922107",
            "extra": "mean: 1.994236927565353 msec\nrounds: 497"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-patas]",
            "value": 915.2005317983305,
            "unit": "iter/sec",
            "range": "stddev: 0.000012491384534890705",
            "extra": "mean: 1.0926567077436484 msec\nrounds: 917"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-gorilla]",
            "value": 93377.47327865542,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011690264812728047",
            "extra": "mean: 10.709221023959575 usec\nrounds: 60093"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-chimp]",
            "value": 90379.62778360838,
            "unit": "iter/sec",
            "range": "stddev: 0.000001084998140718909",
            "extra": "mean: 11.064440344833598 usec\nrounds: 54069"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-chimp128]",
            "value": 48728.57794896741,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016030717396443018",
            "extra": "mean: 20.521838356277964 usec\nrounds: 30029"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-patas]",
            "value": 96421.1144642037,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010291966115866738",
            "extra": "mean: 10.371172388504693 usec\nrounds: 69123"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-gorilla]",
            "value": 10186.858874660145,
            "unit": "iter/sec",
            "range": "stddev: 0.00000397147106508941",
            "extra": "mean: 98.16568701933275 usec\nrounds: 9630"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-chimp]",
            "value": 10019.714205359207,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034293982924711175",
            "extra": "mean: 99.80324583161601 usec\nrounds: 9177"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-chimp128]",
            "value": 5053.05534328176,
            "unit": "iter/sec",
            "range": "stddev: 0.000005119803530020732",
            "extra": "mean: 197.90006878304632 usec\nrounds: 4725"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-patas]",
            "value": 7845.807213566346,
            "unit": "iter/sec",
            "range": "stddev: 0.000004886014581154626",
            "extra": "mean: 127.45661125484698 usec\nrounds: 7339"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-gorilla]",
            "value": 1054.3558913175268,
            "unit": "iter/sec",
            "range": "stddev: 0.000012099289111504321",
            "extra": "mean: 948.4463531098561 usec\nrounds: 1045"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-chimp]",
            "value": 1014.1387551739409,
            "unit": "iter/sec",
            "range": "stddev: 0.000009930675050678965",
            "extra": "mean: 986.0583622292238 usec\nrounds: 969"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-chimp128]",
            "value": 506.9179522972519,
            "unit": "iter/sec",
            "range": "stddev: 0.00002216540018977963",
            "extra": "mean: 1.9727058303384164 msec\nrounds: 501"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-patas]",
            "value": 930.5064973809907,
            "unit": "iter/sec",
            "range": "stddev: 0.000011270009326569379",
            "extra": "mean: 1.0746835221619688 msec\nrounds: 925"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-gorilla]",
            "value": 364396.5212098036,
            "unit": "iter/sec",
            "range": "stddev: 6.07627516107319e-7",
            "extra": "mean: 2.7442633005386012 usec\nrounds: 134337"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-chimp]",
            "value": 341976.10708772216,
            "unit": "iter/sec",
            "range": "stddev: 5.729800366875732e-7",
            "extra": "mean: 2.924180898238849 usec\nrounds: 163346"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-chimp128]",
            "value": 250726.8201147961,
            "unit": "iter/sec",
            "range": "stddev: 7.915888184601171e-7",
            "extra": "mean: 3.9884045892742814 usec\nrounds: 80232"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-patas]",
            "value": 408836.6911270692,
            "unit": "iter/sec",
            "range": "stddev: 3.528820107434289e-7",
            "extra": "mean: 2.4459644197863675 usec\nrounds: 177936"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-gorilla]",
            "value": 31151.13454537336,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026523670848247063",
            "extra": "mean: 32.10155952886546 usec\nrounds: 19100"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-chimp]",
            "value": 29935.2499666883,
            "unit": "iter/sec",
            "range": "stddev: 0.000002292607811872887",
            "extra": "mean: 33.40543343091478 usec\nrounds: 21932"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-chimp128]",
            "value": 21866.189049981527,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026445331049796204",
            "extra": "mean: 45.73270622119883 usec\nrounds: 18759"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-patas]",
            "value": 29220.59323079454,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022125263545510907",
            "extra": "mean: 34.222440047730984 usec\nrounds: 23502"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-gorilla]",
            "value": 3074.75241642221,
            "unit": "iter/sec",
            "range": "stddev: 0.000008475632214582963",
            "extra": "mean: 325.2294378757177 usec\nrounds: 1996"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-chimp]",
            "value": 3013.9834800782346,
            "unit": "iter/sec",
            "range": "stddev: 0.000007044758681653776",
            "extra": "mean: 331.7868218620902 usec\nrounds: 2964"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-chimp128]",
            "value": 2244.8767639778653,
            "unit": "iter/sec",
            "range": "stddev: 0.000009012038408653832",
            "extra": "mean: 445.45875125368804 usec\nrounds: 2195"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-patas]",
            "value": 3019.4759432348724,
            "unit": "iter/sec",
            "range": "stddev: 0.000007417987601603764",
            "extra": "mean: 331.18329763166264 usec\nrounds: 2997"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-gorilla]",
            "value": 251427.70828775738,
            "unit": "iter/sec",
            "range": "stddev: 6.136791497022116e-7",
            "extra": "mean: 3.977286381083769 usec\nrounds: 118681"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-chimp]",
            "value": 206875.6139817345,
            "unit": "iter/sec",
            "range": "stddev: 7.669445395204917e-7",
            "extra": "mean: 4.833822511764446 usec\nrounds: 124611"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-chimp128]",
            "value": 131226.1512787386,
            "unit": "iter/sec",
            "range": "stddev: 9.285169776366402e-7",
            "extra": "mean: 7.620432286213221 usec\nrounds: 91067"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-patas]",
            "value": 412441.06258506596,
            "unit": "iter/sec",
            "range": "stddev: 3.520541405982032e-7",
            "extra": "mean: 2.4245888460578535 usec\nrounds: 172118"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-gorilla]",
            "value": 22586.943744265955,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022545887833370412",
            "extra": "mean: 44.27336479526432 usec\nrounds: 15214"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-chimp]",
            "value": 19522.500245645486,
            "unit": "iter/sec",
            "range": "stddev: 0.000002462180873793206",
            "extra": "mean: 51.22294723612828 usec\nrounds: 17910"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-chimp128]",
            "value": 14179.412466356405,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031415647475790676",
            "extra": "mean: 70.52478389867755 usec\nrounds: 12943"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-patas]",
            "value": 28937.63732701969,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024936302884022067",
            "extra": "mean: 34.5570714256716 usec\nrounds: 25509"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-gorilla]",
            "value": 2091.8896143275965,
            "unit": "iter/sec",
            "range": "stddev: 0.000008286654699739563",
            "extra": "mean: 478.0366961769317 usec\nrounds: 1491"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-chimp]",
            "value": 1976.5187564241435,
            "unit": "iter/sec",
            "range": "stddev: 0.000010605878676141327",
            "extra": "mean: 505.9400507836157 usec\nrounds: 1851"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-chimp128]",
            "value": 1497.7550897809297,
            "unit": "iter/sec",
            "range": "stddev: 0.000012185574033163022",
            "extra": "mean: 667.665900001225 usec\nrounds: 1500"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-patas]",
            "value": 3118.1867612815017,
            "unit": "iter/sec",
            "range": "stddev: 0.000009439051239122729",
            "extra": "mean: 320.69920006620237 usec\nrounds: 2979"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-gorilla]",
            "value": 75143.3082441381,
            "unit": "iter/sec",
            "range": "stddev: 0.000004443392922432656",
            "extra": "mean: 13.307904900207927 usec\nrounds: 52040"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-chimp]",
            "value": 82350.61401282069,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011759079654290874",
            "extra": "mean: 12.143200290459472 usec\nrounds: 61271"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-chimp128]",
            "value": 78202.55658618316,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011547213575529454",
            "extra": "mean: 12.787305730829269 usec\nrounds: 61649"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-patas]",
            "value": 359389.7476146606,
            "unit": "iter/sec",
            "range": "stddev: 5.452173977758169e-7",
            "extra": "mean: 2.7824945108679193 usec\nrounds: 83529"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-gorilla]",
            "value": 7404.985603706311,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038672762941551205",
            "extra": "mean: 135.04415180759898 usec\nrounds: 6225"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-chimp]",
            "value": 7905.458005367779,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035641219322574004",
            "extra": "mean: 126.49488484044863 usec\nrounds: 7355"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-chimp128]",
            "value": 7456.173235069163,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037790289821830972",
            "extra": "mean: 134.1170555556069 usec\nrounds: 6912"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-patas]",
            "value": 28724.891854979353,
            "unit": "iter/sec",
            "range": "stddev: 0.000003892777801522713",
            "extra": "mean: 34.81301183129271 usec\nrounds: 22567"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-gorilla]",
            "value": 739.0493887092492,
            "unit": "iter/sec",
            "range": "stddev: 0.000011443644932489148",
            "extra": "mean: 1.3530895435100776 msec\nrounds: 655"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-chimp]",
            "value": 790.713330215642,
            "unit": "iter/sec",
            "range": "stddev: 0.000010451559660806113",
            "extra": "mean: 1.264680841699332 msec\nrounds: 777"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-chimp128]",
            "value": 743.3950442650228,
            "unit": "iter/sec",
            "range": "stddev: 0.000010284955538615098",
            "extra": "mean: 1.3451798040820633 msec\nrounds: 735"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-patas]",
            "value": 2652.955021545038,
            "unit": "iter/sec",
            "range": "stddev: 0.000007156711266416225",
            "extra": "mean: 376.93816588628636 usec\nrounds: 2562"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-gorilla]",
            "value": 85029.57471517778,
            "unit": "iter/sec",
            "range": "stddev: 9.47442580126042e-7",
            "extra": "mean: 11.76061391991768 usec\nrounds: 59770"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-chimp]",
            "value": 92452.86279611078,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010594056436041177",
            "extra": "mean: 10.816322715774971 usec\nrounds: 68503"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-chimp128]",
            "value": 85624.686318151,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011303070553949245",
            "extra": "mean: 11.678874901618377 usec\nrounds: 49633"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-patas]",
            "value": 351128.8900195844,
            "unit": "iter/sec",
            "range": "stddev: 5.646330610459914e-7",
            "extra": "mean: 2.847957056294127 usec\nrounds: 159185"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-gorilla]",
            "value": 8100.97109209106,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036879461210531575",
            "extra": "mean: 123.44199092085333 usec\nrounds: 6939"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-chimp]",
            "value": 8725.558518991596,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036709874499353473",
            "extra": "mean: 114.60584417873676 usec\nrounds: 8452"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-chimp128]",
            "value": 8208.493940775948,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036301741176716726",
            "extra": "mean: 121.82502749164117 usec\nrounds: 7857"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-patas]",
            "value": 28823.957407431495,
            "unit": "iter/sec",
            "range": "stddev: 0.000002031816868269518",
            "extra": "mean: 34.69336239520589 usec\nrounds: 22779"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-gorilla]",
            "value": 808.0045181203795,
            "unit": "iter/sec",
            "range": "stddev: 0.000010130128690509874",
            "extra": "mean: 1.2376168419531242 msec\nrounds: 696"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-chimp]",
            "value": 871.1732009907689,
            "unit": "iter/sec",
            "range": "stddev: 0.000009497055353817191",
            "extra": "mean: 1.147877366822945 msec\nrounds: 856"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-chimp128]",
            "value": 821.6096221033594,
            "unit": "iter/sec",
            "range": "stddev: 0.000011299869439968935",
            "extra": "mean: 1.2171230388465422 msec\nrounds: 798"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-patas]",
            "value": 2648.0159082610426,
            "unit": "iter/sec",
            "range": "stddev: 0.000006776380415219047",
            "extra": "mean: 377.64123579480383 usec\nrounds: 2112"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-gorilla]",
            "value": 82609.34732877022,
            "unit": "iter/sec",
            "range": "stddev: 9.952111858789543e-7",
            "extra": "mean: 12.105167663656527 usec\nrounds: 60347"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-chimp]",
            "value": 88103.40718561145,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010466557668609373",
            "extra": "mean: 11.350298835699448 usec\nrounds: 51878"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-chimp128]",
            "value": 82579.1459722057,
            "unit": "iter/sec",
            "range": "stddev: 0.000001124577741811562",
            "extra": "mean: 12.109594840525205 usec\nrounds: 46905"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-patas]",
            "value": 355015.03011464205,
            "unit": "iter/sec",
            "range": "stddev: 5.563704627368625e-7",
            "extra": "mean: 2.8167821505390305 usec\nrounds: 153799"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-gorilla]",
            "value": 8132.452657140683,
            "unit": "iter/sec",
            "range": "stddev: 0.000005148665418129545",
            "extra": "mean: 122.96413421133808 usec\nrounds: 6907"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-chimp]",
            "value": 8769.92059872011,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038315231278304025",
            "extra": "mean: 114.02611788137979 usec\nrounds: 8042"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-chimp128]",
            "value": 8274.07984881445,
            "unit": "iter/sec",
            "range": "stddev: 0.000003438818540313389",
            "extra": "mean: 120.85936059020327 usec\nrounds: 6983"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-patas]",
            "value": 28740.29786836307,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020958476942247897",
            "extra": "mean: 34.79435058676919 usec\nrounds: 20189"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-gorilla]",
            "value": 772.154059220838,
            "unit": "iter/sec",
            "range": "stddev: 0.00001220088880758786",
            "extra": "mean: 1.2950783435744362 msec\nrounds: 716"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-chimp]",
            "value": 897.3177923666086,
            "unit": "iter/sec",
            "range": "stddev: 0.000009806904832430387",
            "extra": "mean: 1.114432376697418 msec\nrounds: 884"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-chimp128]",
            "value": 852.5757351203066,
            "unit": "iter/sec",
            "range": "stddev: 0.000010599251416282182",
            "extra": "mean: 1.1729163273206342 msec\nrounds: 776"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-patas]",
            "value": 2819.358119206209,
            "unit": "iter/sec",
            "range": "stddev: 0.000008433467906082348",
            "extra": "mean: 354.6906628099981 usec\nrounds: 2506"
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
            "email": "miikka.koskinen@iki.fi",
            "name": "Miikka Koskinen",
            "username": "miikka"
          },
          "distinct": true,
          "id": "bca5ccd2de66de9d2685bf30c78c81d7c89faf93",
          "message": "fix: make chimp128 work again",
          "timestamp": "2026-03-15T06:59:27+02:00",
          "tree_id": "bf57ebab1c844dca33a0cb5f4bdc7477c40088a5",
          "url": "https://github.com/miikka/floatbungler/commit/bca5ccd2de66de9d2685bf30c78c81d7c89faf93"
        },
        "date": 1773550926837,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-gorilla]",
            "value": 612947.5086915141,
            "unit": "iter/sec",
            "range": "stddev: 3.461253099221806e-7",
            "extra": "mean: 1.6314610726369436 usec\nrounds: 79096"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-chimp]",
            "value": 523747.71911582845,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014776149792008434",
            "extra": "mean: 1.909316190795376 usec\nrounds: 179534"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-chimp128]",
            "value": 220012.08009262374,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011506029352006039",
            "extra": "mean: 4.545204970468013 usec\nrounds: 24706"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-patas]",
            "value": 333124.7071157539,
            "unit": "iter/sec",
            "range": "stddev: 5.887459350953795e-7",
            "extra": "mean: 3.001878811866455 usec\nrounds: 165536"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-gorilla]",
            "value": 81635.89336429209,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010459187161090554",
            "extra": "mean: 12.24951377132114 usec\nrounds: 62267"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-chimp]",
            "value": 76031.89081658819,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015257089556832844",
            "extra": "mean: 13.152375789421061 usec\nrounds: 53836"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-chimp128]",
            "value": 42012.13133727282,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021918245804260315",
            "extra": "mean: 23.80264862003819 usec\nrounds: 27429"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-patas]",
            "value": 44611.760797537536,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025742219931236587",
            "extra": "mean: 22.415613778131746 usec\nrounds: 39265"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-gorilla]",
            "value": 8437.880008151938,
            "unit": "iter/sec",
            "range": "stddev: 0.000006815715389557742",
            "extra": "mean: 118.5131809214978 usec\nrounds: 7401"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-chimp]",
            "value": 8198.490325334742,
            "unit": "iter/sec",
            "range": "stddev: 0.000004435160902279306",
            "extra": "mean: 121.97367567902451 usec\nrounds: 8026"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-chimp128]",
            "value": 4693.120202823404,
            "unit": "iter/sec",
            "range": "stddev: 0.000006424289393790091",
            "extra": "mean: 213.07785796715692 usec\nrounds: 4506"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-patas]",
            "value": 4459.282185398161,
            "unit": "iter/sec",
            "range": "stddev: 0.000025220614065187315",
            "extra": "mean: 224.251338763553 usec\nrounds: 4788"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-gorilla]",
            "value": 280753.76028860454,
            "unit": "iter/sec",
            "range": "stddev: 6.107637127039548e-7",
            "extra": "mean: 3.561840094223624 usec\nrounds: 101441"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-chimp]",
            "value": 232524.10294293112,
            "unit": "iter/sec",
            "range": "stddev: 6.651306526619527e-7",
            "extra": "mean: 4.300629428706718 usec\nrounds: 101751"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-chimp128]",
            "value": 141877.57346393334,
            "unit": "iter/sec",
            "range": "stddev: 8.952029710340094e-7",
            "extra": "mean: 7.048330300448857 usec\nrounds: 51986"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-patas]",
            "value": 295028.63727240544,
            "unit": "iter/sec",
            "range": "stddev: 5.490311910466173e-7",
            "extra": "mean: 3.3895014709256217 usec\nrounds: 132909"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-gorilla]",
            "value": 31021.517536807005,
            "unit": "iter/sec",
            "range": "stddev: 0.000004556524665250001",
            "extra": "mean: 32.23568926998819 usec\nrounds: 25424"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-chimp]",
            "value": 27825.256057906463,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027482966927306594",
            "extra": "mean: 35.93857314085176 usec\nrounds: 15935"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-chimp128]",
            "value": 21085.918770650544,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028071978996195814",
            "extra": "mean: 47.42501433667184 usec\nrounds: 15973"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-patas]",
            "value": 33983.7526028303,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023377242950482227",
            "extra": "mean: 29.425826267247373 usec\nrounds: 28941"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-gorilla]",
            "value": 2807.4845183560365,
            "unit": "iter/sec",
            "range": "stddev: 0.000009433034451505086",
            "extra": "mean: 356.19074422735 usec\nrounds: 2815"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-chimp]",
            "value": 2738.045884734581,
            "unit": "iter/sec",
            "range": "stddev: 0.00001421327186860687",
            "extra": "mean: 365.2239743589752 usec\nrounds: 2652"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-chimp128]",
            "value": 2176.4550164705524,
            "unit": "iter/sec",
            "range": "stddev: 0.000022479500020231155",
            "extra": "mean: 459.46274672915115 usec\nrounds: 2140"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-patas]",
            "value": 3464.6780306223463,
            "unit": "iter/sec",
            "range": "stddev: 0.00000843892668771319",
            "extra": "mean: 288.6271079625757 usec\nrounds: 3529"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-gorilla]",
            "value": 86403.20694827037,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011166667424014306",
            "extra": "mean: 11.573644489824323 usec\nrounds: 55298"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-chimp]",
            "value": 86800.21115489543,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010866689732567098",
            "extra": "mean: 11.520709301219265 usec\nrounds: 54541"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-chimp128]",
            "value": 49578.251618187904,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017807220490305584",
            "extra": "mean: 20.17013443114536 usec\nrounds: 29331"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-patas]",
            "value": 96241.74745039942,
            "unit": "iter/sec",
            "range": "stddev: 9.50371390944123e-7",
            "extra": "mean: 10.390501279243448 usec\nrounds: 68790"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-gorilla]",
            "value": 8892.410019916671,
            "unit": "iter/sec",
            "range": "stddev: 0.0000062737271266797136",
            "extra": "mean: 112.45545333157847 usec\nrounds: 7414"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-chimp]",
            "value": 9093.725333391403,
            "unit": "iter/sec",
            "range": "stddev: 0.000004197915933247807",
            "extra": "mean: 109.9659340191509 usec\nrounds: 8457"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-chimp128]",
            "value": 4872.772976657868,
            "unit": "iter/sec",
            "range": "stddev: 0.000008357117742995019",
            "extra": "mean: 205.22195570988387 usec\nrounds: 4606"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-patas]",
            "value": 7807.246061453668,
            "unit": "iter/sec",
            "range": "stddev: 0.000004453888743635501",
            "extra": "mean: 128.08613845761192 usec\nrounds: 7728"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-gorilla]",
            "value": 887.7706998164974,
            "unit": "iter/sec",
            "range": "stddev: 0.000014541923096912079",
            "extra": "mean: 1.1264169905660328 msec\nrounds: 848"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-chimp]",
            "value": 912.2042852741394,
            "unit": "iter/sec",
            "range": "stddev: 0.000014548495786300071",
            "extra": "mean: 1.096245672316126 msec\nrounds: 885"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-chimp128]",
            "value": 488.51650881289277,
            "unit": "iter/sec",
            "range": "stddev: 0.00001883638479520245",
            "extra": "mean: 2.0470137282157053 msec\nrounds: 482"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-patas]",
            "value": 913.101682602912,
            "unit": "iter/sec",
            "range": "stddev: 0.000014015936372919924",
            "extra": "mean: 1.0951682808746703 msec\nrounds: 915"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-gorilla]",
            "value": 95148.18972503745,
            "unit": "iter/sec",
            "range": "stddev: 9.120732204681323e-7",
            "extra": "mean: 10.509921448740485 usec\nrounds: 63780"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-chimp]",
            "value": 95510.15887760674,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010166035402712874",
            "extra": "mean: 10.470090425474723 usec\nrounds: 56389"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-chimp128]",
            "value": 52372.25856980094,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015217690892612847",
            "extra": "mean: 19.094078187733977 usec\nrounds: 31143"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-patas]",
            "value": 96886.00716279702,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013011052486873347",
            "extra": "mean: 10.321407902791426 usec\nrounds: 66989"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-gorilla]",
            "value": 9916.285613630778,
            "unit": "iter/sec",
            "range": "stddev: 0.000006875365169611001",
            "extra": "mean: 100.84421112532446 usec\nrounds: 9492"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-chimp]",
            "value": 9990.230667625874,
            "unit": "iter/sec",
            "range": "stddev: 0.000010920270144082274",
            "extra": "mean: 100.09778885692583 usec\nrounds: 9387"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-chimp128]",
            "value": 5166.870463726482,
            "unit": "iter/sec",
            "range": "stddev: 0.000005068868924208244",
            "extra": "mean: 193.54075296069527 usec\nrounds: 4813"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-patas]",
            "value": 7844.469459585492,
            "unit": "iter/sec",
            "range": "stddev: 0.0000061444326332480656",
            "extra": "mean: 127.47834702550307 usec\nrounds: 7766"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-gorilla]",
            "value": 995.1329516056975,
            "unit": "iter/sec",
            "range": "stddev: 0.000047028848582876545",
            "extra": "mean: 1.0048908524096698 msec\nrounds: 996"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-chimp]",
            "value": 1014.9712215514992,
            "unit": "iter/sec",
            "range": "stddev: 0.000018279557580062155",
            "extra": "mean: 985.2496098080358 usec\nrounds: 938"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-chimp128]",
            "value": 513.5612370303255,
            "unit": "iter/sec",
            "range": "stddev: 0.00001885322369553403",
            "extra": "mean: 1.9471874586612357 msec\nrounds: 508"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-patas]",
            "value": 921.6392790479223,
            "unit": "iter/sec",
            "range": "stddev: 0.000011420560088550463",
            "extra": "mean: 1.0850232002188822 msec\nrounds: 914"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-gorilla]",
            "value": 92350.91249375531,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010420188610913322",
            "extra": "mean: 10.828263338141017 usec\nrounds: 61309"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-chimp]",
            "value": 91784.1882743965,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010823683410121598",
            "extra": "mean: 10.895122774419669 usec\nrounds: 54930"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-chimp128]",
            "value": 51481.114990525,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015473366639580335",
            "extra": "mean: 19.424598713218394 usec\nrounds: 31085"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-patas]",
            "value": 96939.07422534635,
            "unit": "iter/sec",
            "range": "stddev: 9.627885863402707e-7",
            "extra": "mean: 10.315757685857218 usec\nrounds: 67169"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-gorilla]",
            "value": 10017.313111585556,
            "unit": "iter/sec",
            "range": "stddev: 0.000005849107230958297",
            "extra": "mean: 99.82716810992429 usec\nrounds: 9470"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-chimp]",
            "value": 10099.46238896171,
            "unit": "iter/sec",
            "range": "stddev: 0.000004219871020568048",
            "extra": "mean: 99.0151714504089 usec\nrounds: 9163"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-chimp128]",
            "value": 5180.801441945783,
            "unit": "iter/sec",
            "range": "stddev: 0.000005489788114604806",
            "extra": "mean: 193.02032923007067 usec\nrounds: 4793"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-patas]",
            "value": 7858.824353368596,
            "unit": "iter/sec",
            "range": "stddev: 0.000003467695387738158",
            "extra": "mean: 127.24549564100657 usec\nrounds: 7800"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-gorilla]",
            "value": 1038.234518786277,
            "unit": "iter/sec",
            "range": "stddev: 0.0000142715647915769",
            "extra": "mean: 963.1735238094625 usec\nrounds: 1029"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-chimp]",
            "value": 1040.8786273510623,
            "unit": "iter/sec",
            "range": "stddev: 0.000017710982533593746",
            "extra": "mean: 960.726806875558 usec\nrounds: 989"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-chimp128]",
            "value": 518.8106733153902,
            "unit": "iter/sec",
            "range": "stddev: 0.00001856398901664475",
            "extra": "mean: 1.9274854035088247 msec\nrounds: 513"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-patas]",
            "value": 941.8430567421119,
            "unit": "iter/sec",
            "range": "stddev: 0.000028752821778632127",
            "extra": "mean: 1.0617480193133835 msec\nrounds: 932"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-gorilla]",
            "value": 357432.5665371073,
            "unit": "iter/sec",
            "range": "stddev: 5.612625360400913e-7",
            "extra": "mean: 2.797730519320723 usec\nrounds: 134518"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-chimp]",
            "value": 349916.0649909599,
            "unit": "iter/sec",
            "range": "stddev: 5.753567518271399e-7",
            "extra": "mean: 2.857828205246407 usec\nrounds: 179534"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-chimp128]",
            "value": 249732.7923645682,
            "unit": "iter/sec",
            "range": "stddev: 6.63884018472463e-7",
            "extra": "mean: 4.004279896651165 usec\nrounds: 145075"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-patas]",
            "value": 406164.4436999116,
            "unit": "iter/sec",
            "range": "stddev: 3.901308586512714e-7",
            "extra": "mean: 2.462056971040121 usec\nrounds: 173281"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-gorilla]",
            "value": 31852.737435752028,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017836725364416037",
            "extra": "mean: 31.394475969829323 usec\nrounds: 18352"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-chimp]",
            "value": 30212.07444734203,
            "unit": "iter/sec",
            "range": "stddev: 0.000001983816995791786",
            "extra": "mean: 33.09934912754649 usec\nrounds: 26191"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-chimp128]",
            "value": 22193.222569565947,
            "unit": "iter/sec",
            "range": "stddev: 0.0000052377446211928845",
            "extra": "mean: 45.058801031055395 usec\nrounds: 19591"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-patas]",
            "value": 29820.222756677744,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019260477232234717",
            "extra": "mean: 33.53429007421035 usec\nrounds: 21429"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-gorilla]",
            "value": 3118.646214543565,
            "unit": "iter/sec",
            "range": "stddev: 0.00000850554146243531",
            "extra": "mean: 320.65195318936065 usec\nrounds: 1944"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-chimp]",
            "value": 3000.301256835361,
            "unit": "iter/sec",
            "range": "stddev: 0.0000069593947677686316",
            "extra": "mean: 333.29986371261055 usec\nrounds: 2979"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-chimp128]",
            "value": 2253.869140464768,
            "unit": "iter/sec",
            "range": "stddev: 0.000007088383343046638",
            "extra": "mean: 443.6814817890408 usec\nrounds: 2169"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-patas]",
            "value": 3039.4973417140704,
            "unit": "iter/sec",
            "range": "stddev: 0.000017416743309725227",
            "extra": "mean: 329.0017682450309 usec\nrounds: 2809"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-gorilla]",
            "value": 252826.27005040066,
            "unit": "iter/sec",
            "range": "stddev: 6.153154691348448e-7",
            "extra": "mean: 3.9552851837771876 usec\nrounds: 106633"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-chimp]",
            "value": 212013.95250435994,
            "unit": "iter/sec",
            "range": "stddev: 7.065958330192618e-7",
            "extra": "mean: 4.7166707105252215 usec\nrounds: 130651"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-chimp128]",
            "value": 168016.49045179092,
            "unit": "iter/sec",
            "range": "stddev: 7.384159826447819e-7",
            "extra": "mean: 5.951796739183353 usec\nrounds: 108378"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-patas]",
            "value": 405027.9899079533,
            "unit": "iter/sec",
            "range": "stddev: 3.6437074019978766e-7",
            "extra": "mean: 2.468965170104071 usec\nrounds: 176960"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-gorilla]",
            "value": 22347.385170136266,
            "unit": "iter/sec",
            "range": "stddev: 0.000002467235952118397",
            "extra": "mean: 44.747964577812944 usec\nrounds: 14426"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-chimp]",
            "value": 19500.764832876008,
            "unit": "iter/sec",
            "range": "stddev: 0.000002848363125279576",
            "extra": "mean: 51.280039966130815 usec\nrounds: 15363"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-chimp128]",
            "value": 15809.393083581852,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038448605493718925",
            "extra": "mean: 63.25353507962972 usec\nrounds: 14239"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-patas]",
            "value": 29806.53096807348,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022621856950944827",
            "extra": "mean: 33.549694228795865 usec\nrounds: 16617"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-gorilla]",
            "value": 2086.6105394686933,
            "unit": "iter/sec",
            "range": "stddev: 0.000008215976668712136",
            "extra": "mean: 479.2461176078534 usec\nrounds: 1505"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-chimp]",
            "value": 1969.8360672727354,
            "unit": "iter/sec",
            "range": "stddev: 0.000008631885090832903",
            "extra": "mean: 507.65645761807656 usec\nrounds: 1864"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-chimp128]",
            "value": 1616.6259518863912,
            "unit": "iter/sec",
            "range": "stddev: 0.000008990231960297679",
            "extra": "mean: 618.5722794027465 usec\nrounds: 1607"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-patas]",
            "value": 3131.392334110957,
            "unit": "iter/sec",
            "range": "stddev: 0.000008119818667910265",
            "extra": "mean: 319.34676121761436 usec\nrounds: 3187"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-gorilla]",
            "value": 79055.07185405829,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010555475653762056",
            "extra": "mean: 12.649409791772456 usec\nrounds: 56680"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-chimp]",
            "value": 84547.63582679596,
            "unit": "iter/sec",
            "range": "stddev: 0.00000102826932693944",
            "extra": "mean: 11.827651834624886 usec\nrounds: 62657"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-chimp128]",
            "value": 78366.8485894465,
            "unit": "iter/sec",
            "range": "stddev: 0.000001071239942684615",
            "extra": "mean: 12.760497812523598 usec\nrounds: 59659"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-patas]",
            "value": 359961.84652749344,
            "unit": "iter/sec",
            "range": "stddev: 5.617969386823659e-7",
            "extra": "mean: 2.7780722030595015 usec\nrounds: 157431"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-gorilla]",
            "value": 7552.679758008218,
            "unit": "iter/sec",
            "range": "stddev: 0.000004113711486185841",
            "extra": "mean: 132.40333656933953 usec\nrounds: 6489"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-chimp]",
            "value": 8018.906775180445,
            "unit": "iter/sec",
            "range": "stddev: 0.000004155470054278316",
            "extra": "mean: 124.70527816773347 usec\nrounds: 7837"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-chimp128]",
            "value": 7453.536225391411,
            "unit": "iter/sec",
            "range": "stddev: 0.000003972643914784721",
            "extra": "mean: 134.16450524428578 usec\nrounds: 7151"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-patas]",
            "value": 28463.309339064363,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022640267309990885",
            "extra": "mean: 35.132949162294125 usec\nrounds: 22562"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-gorilla]",
            "value": 750.0543741486983,
            "unit": "iter/sec",
            "range": "stddev: 0.00001140530623558959",
            "extra": "mean: 1.3332366751876976 msec\nrounds: 665"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-chimp]",
            "value": 804.8968953940309,
            "unit": "iter/sec",
            "range": "stddev: 0.000012147394635494014",
            "extra": "mean: 1.2423951511335596 msec\nrounds: 794"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-chimp128]",
            "value": 744.8048197811842,
            "unit": "iter/sec",
            "range": "stddev: 0.000011675731300766484",
            "extra": "mean: 1.342633631578525 msec\nrounds: 741"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-patas]",
            "value": 2643.560802352124,
            "unit": "iter/sec",
            "range": "stddev: 0.000008058493240780549",
            "extra": "mean: 378.2776621253591 usec\nrounds: 2569"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-gorilla]",
            "value": 87277.01516656717,
            "unit": "iter/sec",
            "range": "stddev: 9.914039675147811e-7",
            "extra": "mean: 11.457770388818997 usec\nrounds: 50285"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-chimp]",
            "value": 93478.21283985852,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010036584342188289",
            "extra": "mean: 10.697679915138538 usec\nrounds: 68838"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-chimp128]",
            "value": 85381.83729743684,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010251813480521455",
            "extra": "mean: 11.71209277819113 usec\nrounds: 66147"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-patas]",
            "value": 356153.5828709243,
            "unit": "iter/sec",
            "range": "stddev: 5.231184591026183e-7",
            "extra": "mean: 2.8077774535892166 usec\nrounds: 164177"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-gorilla]",
            "value": 8300.404624485656,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033210677548537906",
            "extra": "mean: 120.47605451065178 usec\nrounds: 6806"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-chimp]",
            "value": 8934.195816634416,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037132554594911923",
            "extra": "mean: 111.92949209128797 usec\nrounds: 8029"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-chimp128]",
            "value": 8162.383452388412,
            "unit": "iter/sec",
            "range": "stddev: 0.000004748283276911346",
            "extra": "mean: 122.51323474730754 usec\nrounds: 7425"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-patas]",
            "value": 28365.198445910744,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020123351585565528",
            "extra": "mean: 35.25446867247864 usec\nrounds: 21770"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-gorilla]",
            "value": 827.6244682959186,
            "unit": "iter/sec",
            "range": "stddev: 0.000009045363873222058",
            "extra": "mean: 1.2082774716158442 msec\nrounds: 687"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-chimp]",
            "value": 890.4771670201374,
            "unit": "iter/sec",
            "range": "stddev: 0.000011479298305318977",
            "extra": "mean: 1.1229934208716055 msec\nrounds: 872"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-chimp128]",
            "value": 819.4519263594951,
            "unit": "iter/sec",
            "range": "stddev: 0.000009411641262874819",
            "extra": "mean: 1.220327840880928 msec\nrounds: 817"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-patas]",
            "value": 2656.829783497971,
            "unit": "iter/sec",
            "range": "stddev: 0.000007670131324620389",
            "extra": "mean: 376.388433391997 usec\nrounds: 2282"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-gorilla]",
            "value": 85186.5312922627,
            "unit": "iter/sec",
            "range": "stddev: 9.986005140850828e-7",
            "extra": "mean: 11.738944934489048 usec\nrounds: 60310"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-chimp]",
            "value": 89627.78772817698,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010091209288278996",
            "extra": "mean: 11.157254076523662 usec\nrounds: 56361"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-chimp128]",
            "value": 82719.24057515338,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010796608919493805",
            "extra": "mean: 12.089085840814318 usec\nrounds: 61882"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-patas]",
            "value": 363703.62226975773,
            "unit": "iter/sec",
            "range": "stddev: 5.333548638146603e-7",
            "extra": "mean: 2.7494914506468766 usec\nrounds: 159719"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-gorilla]",
            "value": 8382.666105614118,
            "unit": "iter/sec",
            "range": "stddev: 0.000004214009726883504",
            "extra": "mean: 119.29378880190283 usec\nrounds: 6894"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-chimp]",
            "value": 8933.543115633107,
            "unit": "iter/sec",
            "range": "stddev: 0.000003791792066757226",
            "extra": "mean: 111.93766986472214 usec\nrounds: 6879"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-chimp128]",
            "value": 8198.046156678593,
            "unit": "iter/sec",
            "range": "stddev: 0.000009010094694303184",
            "extra": "mean: 121.98028419068406 usec\nrounds: 7970"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-patas]",
            "value": 28261.473687898222,
            "unit": "iter/sec",
            "range": "stddev: 0.000002451952468330694",
            "extra": "mean: 35.38385899629174 usec\nrounds: 23971"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-gorilla]",
            "value": 856.133300014739,
            "unit": "iter/sec",
            "range": "stddev: 0.0000073864416300335905",
            "extra": "mean: 1.1680424064602841 msec\nrounds: 743"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-chimp]",
            "value": 911.1222736861278,
            "unit": "iter/sec",
            "range": "stddev: 0.0000093240595741002",
            "extra": "mean: 1.0975475288890697 msec\nrounds: 900"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-chimp128]",
            "value": 851.8644595714131,
            "unit": "iter/sec",
            "range": "stddev: 0.00001024297518325045",
            "extra": "mean: 1.1738956693921898 msec\nrounds: 856"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-patas]",
            "value": 2823.4118962819684,
            "unit": "iter/sec",
            "range": "stddev: 0.000008571885304369645",
            "extra": "mean: 354.18140772051635 usec\nrounds: 2487"
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
            "email": "miikka.koskinen@iki.fi",
            "name": "Miikka Koskinen",
            "username": "miikka"
          },
          "distinct": true,
          "id": "44c9359005f1dfdef87fe847b826a842e5cf0c6b",
          "message": "chore: add `cargo test` to `just test`",
          "timestamp": "2026-03-15T08:07:50+02:00",
          "tree_id": "5923565cee5f63992621bdf9b3729c406ed15b7b",
          "url": "https://github.com/miikka/floatbungler/commit/44c9359005f1dfdef87fe847b826a842e5cf0c6b"
        },
        "date": 1773555010620,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-gorilla]",
            "value": 696002.8048193672,
            "unit": "iter/sec",
            "range": "stddev: 2.2342633535523104e-7",
            "extra": "mean: 1.4367758191140174 usec\nrounds: 77888"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-chimp]",
            "value": 577841.6449269464,
            "unit": "iter/sec",
            "range": "stddev: 0.000001168539543621485",
            "extra": "mean: 1.73057793390164 usec\nrounds: 144321"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-chimp128]",
            "value": 204757.08063610867,
            "unit": "iter/sec",
            "range": "stddev: 3.982353760455908e-7",
            "extra": "mean: 4.883835991865822 usec\nrounds: 26456"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-patas]",
            "value": 447470.23763950117,
            "unit": "iter/sec",
            "range": "stddev: 3.1770797485606307e-7",
            "extra": "mean: 2.2347855027749075 usec\nrounds: 134067"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-gorilla]",
            "value": 101970.77051938354,
            "unit": "iter/sec",
            "range": "stddev: 6.186234973093211e-7",
            "extra": "mean: 9.80673182036916 usec\nrounds: 60191"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-chimp]",
            "value": 90775.16298121594,
            "unit": "iter/sec",
            "range": "stddev: 7.636152285319852e-7",
            "extra": "mean: 11.01622918822993 usec\nrounds: 51185"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-chimp128]",
            "value": 40813.98528521602,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015679097664700195",
            "extra": "mean: 24.501405413164306 usec\nrounds: 17513"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-patas]",
            "value": 54765.93604877974,
            "unit": "iter/sec",
            "range": "stddev: 0.000001072168276821184",
            "extra": "mean: 18.25952539383797 usec\nrounds: 38533"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-gorilla]",
            "value": 10584.70935420105,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027522073824479326",
            "extra": "mean: 94.4759054345788 usec\nrounds: 8354"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-chimp]",
            "value": 9628.415865138522,
            "unit": "iter/sec",
            "range": "stddev: 0.000003207578985306922",
            "extra": "mean: 103.85924476119553 usec\nrounds: 7015"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-chimp128]",
            "value": 4623.183142483755,
            "unit": "iter/sec",
            "range": "stddev: 0.000004534938467582708",
            "extra": "mean: 216.30118668903975 usec\nrounds: 4162"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-patas]",
            "value": 5638.993212457788,
            "unit": "iter/sec",
            "range": "stddev: 0.000003235258370112221",
            "extra": "mean: 177.33662062064164 usec\nrounds: 4995"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-gorilla]",
            "value": 304666.25952245237,
            "unit": "iter/sec",
            "range": "stddev: 3.7802859047803477e-7",
            "extra": "mean: 3.2822800974661424 usec\nrounds: 93546"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-chimp]",
            "value": 239281.61937469995,
            "unit": "iter/sec",
            "range": "stddev: 4.0346199243249467e-7",
            "extra": "mean: 4.179175996105505 usec\nrounds: 83928"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-chimp128]",
            "value": 134470.01054579197,
            "unit": "iter/sec",
            "range": "stddev: 5.435269691774821e-7",
            "extra": "mean: 7.436602376553419 usec\nrounds: 38544"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-patas]",
            "value": 353242.8189718384,
            "unit": "iter/sec",
            "range": "stddev: 4.1024947881347617e-7",
            "extra": "mean: 2.8309138821579922 usec\nrounds: 121566"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-gorilla]",
            "value": 35882.173118820436,
            "unit": "iter/sec",
            "range": "stddev: 0.000001255719964057306",
            "extra": "mean: 27.86899212287378 usec\nrounds: 25517"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-chimp]",
            "value": 29554.363913377867,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015346067497033543",
            "extra": "mean: 33.83595068839723 usec\nrounds: 16487"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-chimp128]",
            "value": 20752.850009568665,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017117417748779755",
            "extra": "mean: 48.186152723068055 usec\nrounds: 14176"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-patas]",
            "value": 42359.7824486474,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012015779152678798",
            "extra": "mean: 23.607297823408235 usec\nrounds: 33493"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-gorilla]",
            "value": 3330.8439760032297,
            "unit": "iter/sec",
            "range": "stddev: 0.000006943123558121458",
            "extra": "mean: 300.22420960105353 usec\nrounds: 2333"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-chimp]",
            "value": 3026.3516870665635,
            "unit": "iter/sec",
            "range": "stddev: 0.000005601075215129501",
            "extra": "mean: 330.4308630994893 usec\nrounds: 2878"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-chimp128]",
            "value": 2201.032228458535,
            "unit": "iter/sec",
            "range": "stddev: 0.000031505420276340026",
            "extra": "mean: 454.3322842211799 usec\nrounds: 2009"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-patas]",
            "value": 4379.453203418501,
            "unit": "iter/sec",
            "range": "stddev: 0.000013080947726571329",
            "extra": "mean: 228.33900798835407 usec\nrounds: 4131"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-gorilla]",
            "value": 89622.08020010268,
            "unit": "iter/sec",
            "range": "stddev: 7.466200819772234e-7",
            "extra": "mean: 11.157964619514093 usec\nrounds: 50621"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-chimp]",
            "value": 94086.75998518761,
            "unit": "iter/sec",
            "range": "stddev: 9.372631883632565e-7",
            "extra": "mean: 10.628488005724007 usec\nrounds: 47022"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-chimp128]",
            "value": 49910.42875574083,
            "unit": "iter/sec",
            "range": "stddev: 0.000001006509078382747",
            "extra": "mean: 20.035892796953327 usec\nrounds: 24337"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-patas]",
            "value": 105841.12532863287,
            "unit": "iter/sec",
            "range": "stddev: 5.782199708501431e-7",
            "extra": "mean: 9.448123278121205 usec\nrounds: 58583"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-gorilla]",
            "value": 9230.271936950754,
            "unit": "iter/sec",
            "range": "stddev: 0.00000246182080504851",
            "extra": "mean: 108.33916994328044 usec\nrounds: 8444"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-chimp]",
            "value": 9875.97312852158,
            "unit": "iter/sec",
            "range": "stddev: 0.000005576491649492554",
            "extra": "mean: 101.25584456199293 usec\nrounds: 8505"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-chimp128]",
            "value": 4313.470601131854,
            "unit": "iter/sec",
            "range": "stddev: 0.000005271985498478187",
            "extra": "mean: 231.83188028164608 usec\nrounds: 3692"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-patas]",
            "value": 6996.831208083119,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024935198078133866",
            "extra": "mean: 142.92184136795322 usec\nrounds: 6638"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-gorilla]",
            "value": 923.2993577076667,
            "unit": "iter/sec",
            "range": "stddev: 0.000008634118263175287",
            "extra": "mean: 1.083072344469905 msec\nrounds: 868"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-chimp]",
            "value": 996.8063993061038,
            "unit": "iter/sec",
            "range": "stddev: 0.000005377451742905914",
            "extra": "mean: 1.003203832455449 msec\nrounds: 949"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-chimp128]",
            "value": 426.6161522514263,
            "unit": "iter/sec",
            "range": "stddev: 0.000015442859002693638",
            "extra": "mean: 2.344027516826531 msec\nrounds: 416"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-patas]",
            "value": 818.2612137211534,
            "unit": "iter/sec",
            "range": "stddev: 0.00001829966303137211",
            "extra": "mean: 1.2221036305171609 msec\nrounds: 793"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-gorilla]",
            "value": 98994.56369906264,
            "unit": "iter/sec",
            "range": "stddev: 6.458324378923575e-7",
            "extra": "mean: 10.101564799456444 usec\nrounds: 57948"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-chimp]",
            "value": 103526.04054934187,
            "unit": "iter/sec",
            "range": "stddev: 6.594724988497482e-7",
            "extra": "mean: 9.65940544710958 usec\nrounds: 53790"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-chimp128]",
            "value": 51842.03081901473,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010586133125854174",
            "extra": "mean: 19.289367800638274 usec\nrounds: 26218"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-patas]",
            "value": 108397.47720853593,
            "unit": "iter/sec",
            "range": "stddev: 6.620377393019882e-7",
            "extra": "mean: 9.225306951343454 usec\nrounds: 60104"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-gorilla]",
            "value": 10102.072598363,
            "unit": "iter/sec",
            "range": "stddev: 0.000002656170574733115",
            "extra": "mean: 98.98958755870018 usec\nrounds: 9388"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-chimp]",
            "value": 11175.108133493692,
            "unit": "iter/sec",
            "range": "stddev: 0.000002336216814635413",
            "extra": "mean: 89.4845927264749 usec\nrounds: 9129"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-chimp128]",
            "value": 4488.661653848352,
            "unit": "iter/sec",
            "range": "stddev: 0.000009090291205189327",
            "extra": "mean: 222.78355490275158 usec\nrounds: 3916"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-patas]",
            "value": 6997.308656158884,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027661339439686864",
            "extra": "mean: 142.91208936736282 usec\nrounds: 6132"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-gorilla]",
            "value": 1010.4846895431447,
            "unit": "iter/sec",
            "range": "stddev: 0.000014383028715914672",
            "extra": "mean: 989.6240985621614 usec\nrounds: 974"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-chimp]",
            "value": 1125.9667961697755,
            "unit": "iter/sec",
            "range": "stddev: 0.000007155453897839071",
            "extra": "mean: 888.1256564596049 usec\nrounds: 1045"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-chimp128]",
            "value": 444.64834484268823,
            "unit": "iter/sec",
            "range": "stddev: 0.000014798319030802516",
            "extra": "mean: 2.248968227586204 msec\nrounds: 435"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-patas]",
            "value": 820.9037969491317,
            "unit": "iter/sec",
            "range": "stddev: 0.000046515828029671614",
            "extra": "mean: 1.2181695391304983 msec\nrounds: 805"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-gorilla]",
            "value": 96054.28298971872,
            "unit": "iter/sec",
            "range": "stddev: 6.967209407218983e-7",
            "extra": "mean: 10.4107799139684 usec\nrounds: 53938"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-chimp]",
            "value": 99577.23469260683,
            "unit": "iter/sec",
            "range": "stddev: 6.358330625596063e-7",
            "extra": "mean: 10.042456020063042 usec\nrounds: 46237"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-chimp128]",
            "value": 50425.0088370765,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015599214160057154",
            "extra": "mean: 19.831429345525866 usec\nrounds: 24726"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-patas]",
            "value": 107692.48333298681,
            "unit": "iter/sec",
            "range": "stddev: 6.398535273882211e-7",
            "extra": "mean: 9.28569914121104 usec\nrounds: 57409"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-gorilla]",
            "value": 10229.664385592176,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024914905340784615",
            "extra": "mean: 97.75491768903343 usec\nrounds: 8395"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-chimp]",
            "value": 11214.386881216988,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022930103845010957",
            "extra": "mean: 89.17117008642738 usec\nrounds: 9260"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-chimp128]",
            "value": 4514.790971198249,
            "unit": "iter/sec",
            "range": "stddev: 0.000003561597253203736",
            "extra": "mean: 221.49419682537254 usec\nrounds: 3780"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-patas]",
            "value": 7167.780311387481,
            "unit": "iter/sec",
            "range": "stddev: 0.000003100743547168778",
            "extra": "mean: 139.5132044450771 usec\nrounds: 6794"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-gorilla]",
            "value": 1063.7813010609448,
            "unit": "iter/sec",
            "range": "stddev: 0.000008669292054101685",
            "extra": "mean: 940.0428443352655 usec\nrounds: 1015"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-chimp]",
            "value": 1132.0257850354478,
            "unit": "iter/sec",
            "range": "stddev: 0.000006666686893777368",
            "extra": "mean: 883.3721044337221 usec\nrounds: 1015"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-chimp128]",
            "value": 447.17308274363876,
            "unit": "iter/sec",
            "range": "stddev: 0.000017678758818892716",
            "extra": "mean: 2.2362705596331547 msec\nrounds: 436"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-patas]",
            "value": 854.3111575576528,
            "unit": "iter/sec",
            "range": "stddev: 0.0000054666778668858724",
            "extra": "mean: 1.1705336997574158 msec\nrounds: 826"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-gorilla]",
            "value": 416161.26244727476,
            "unit": "iter/sec",
            "range": "stddev: 4.051085730631319e-7",
            "extra": "mean: 2.4029146637036987 usec\nrounds: 129183"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-chimp]",
            "value": 402398.59408525965,
            "unit": "iter/sec",
            "range": "stddev: 3.708336018038044e-7",
            "extra": "mean: 2.4850981457159897 usec\nrounds: 144530"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-chimp128]",
            "value": 284306.5721630079,
            "unit": "iter/sec",
            "range": "stddev: 4.0184638663078224e-7",
            "extra": "mean: 3.5173298752539828 usec\nrounds: 116347"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-patas]",
            "value": 508802.0422403326,
            "unit": "iter/sec",
            "range": "stddev: 1.8285980111381087e-7",
            "extra": "mean: 1.96540091623227 usec\nrounds: 169895"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-gorilla]",
            "value": 39624.36814999017,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013763231133881454",
            "extra": "mean: 25.236995482544952 usec\nrounds: 20808"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-chimp]",
            "value": 37059.44965367862,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010593795099883384",
            "extra": "mean: 26.983671083759265 usec\nrounds: 18111"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-chimp128]",
            "value": 25953.662456783186,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014962503598258154",
            "extra": "mean: 38.53020750597928 usec\nrounds: 10978"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-patas]",
            "value": 37070.966289627955,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012276308005331397",
            "extra": "mean: 26.975288213077654 usec\nrounds: 13778"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-gorilla]",
            "value": 4081.7684138013683,
            "unit": "iter/sec",
            "range": "stddev: 0.000006052801931763868",
            "extra": "mean: 244.99185123261213 usec\nrounds: 2272"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-chimp]",
            "value": 3921.884301181775,
            "unit": "iter/sec",
            "range": "stddev: 0.000006840525563906572",
            "extra": "mean: 254.97947496785451 usec\nrounds: 3116"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-chimp128]",
            "value": 2704.1266051592006,
            "unit": "iter/sec",
            "range": "stddev: 0.000019129904878271694",
            "extra": "mean: 369.8051703984943 usec\nrounds: 2412"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-patas]",
            "value": 3932.156333363465,
            "unit": "iter/sec",
            "range": "stddev: 0.000004899878732969819",
            "extra": "mean: 254.3133881822613 usec\nrounds: 3537"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-gorilla]",
            "value": 286537.61489353894,
            "unit": "iter/sec",
            "range": "stddev: 5.511852710687819e-7",
            "extra": "mean: 3.489943197759718 usec\nrounds: 110559"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-chimp]",
            "value": 229409.47304195954,
            "unit": "iter/sec",
            "range": "stddev: 5.024847162817223e-7",
            "extra": "mean: 4.359017902530544 usec\nrounds: 109314"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-chimp128]",
            "value": 186343.97440551934,
            "unit": "iter/sec",
            "range": "stddev: 5.225427608143854e-7",
            "extra": "mean: 5.366419832947283 usec\nrounds: 71114"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-patas]",
            "value": 484533.4972837316,
            "unit": "iter/sec",
            "range": "stddev: 3.1890363432245473e-7",
            "extra": "mean: 2.063840798636102 usec\nrounds: 185771"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-gorilla]",
            "value": 27114.336564917136,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013386349733193048",
            "extra": "mean: 36.88085812484478 usec\nrounds: 14548"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-chimp]",
            "value": 22921.31947285701,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015207108239854338",
            "extra": "mean: 43.62750587653477 usec\nrounds: 18123"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-chimp128]",
            "value": 18135.405762726696,
            "unit": "iter/sec",
            "range": "stddev: 0.00000174404836859667",
            "extra": "mean: 55.14075687544186 usec\nrounds: 11163"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-patas]",
            "value": 37581.38516554378,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011936225230672592",
            "extra": "mean: 26.608918101210453 usec\nrounds: 20562"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-gorilla]",
            "value": 2506.0155581515314,
            "unit": "iter/sec",
            "range": "stddev: 0.000004993233069381184",
            "extra": "mean: 399.03982110055716 usec\nrounds: 1744"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-chimp]",
            "value": 2330.827060902835,
            "unit": "iter/sec",
            "range": "stddev: 0.000006763628230794987",
            "extra": "mean: 429.032259309987 usec\nrounds: 2202"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-chimp128]",
            "value": 1859.9743675612679,
            "unit": "iter/sec",
            "range": "stddev: 0.000005266443263438158",
            "extra": "mean: 537.6418177800829 usec\nrounds: 1811"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-patas]",
            "value": 4019.0814006996034,
            "unit": "iter/sec",
            "range": "stddev: 0.000005386260210913236",
            "extra": "mean: 248.81307450651025 usec\nrounds: 3597"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-gorilla]",
            "value": 83750.38189194488,
            "unit": "iter/sec",
            "range": "stddev: 7.035698042591525e-7",
            "extra": "mean: 11.940244061098188 usec\nrounds: 56408"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-chimp]",
            "value": 87115.7478253633,
            "unit": "iter/sec",
            "range": "stddev: 7.509311650254771e-7",
            "extra": "mean: 11.47898083828255 usec\nrounds: 56780"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-chimp128]",
            "value": 83190.20112776772,
            "unit": "iter/sec",
            "range": "stddev: 6.964949331543953e-7",
            "extra": "mean: 12.020646499750006 usec\nrounds: 48082"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-patas]",
            "value": 427065.6406013021,
            "unit": "iter/sec",
            "range": "stddev: 3.4100902990804836e-7",
            "extra": "mean: 2.3415604181877403 usec\nrounds: 154465"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-gorilla]",
            "value": 8106.424607137457,
            "unit": "iter/sec",
            "range": "stddev: 0.000002406058615126192",
            "extra": "mean: 123.35894657177602 usec\nrounds: 7000"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-chimp]",
            "value": 8380.956419233904,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025668251746580436",
            "extra": "mean: 119.31812432588801 usec\nrounds: 7971"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-chimp128]",
            "value": 7966.950307596681,
            "unit": "iter/sec",
            "range": "stddev: 0.000002817140646447669",
            "extra": "mean: 125.51854365734847 usec\nrounds: 7032"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-patas]",
            "value": 35090.528899586694,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012994200308339048",
            "extra": "mean: 28.49771808403202 usec\nrounds: 14969"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-gorilla]",
            "value": 803.4132670873132,
            "unit": "iter/sec",
            "range": "stddev: 0.00001636684737869973",
            "extra": "mean: 1.2446894281760998 msec\nrounds: 724"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-chimp]",
            "value": 841.7097189801028,
            "unit": "iter/sec",
            "range": "stddev: 0.000007189981284396856",
            "extra": "mean: 1.1880580412112824 msec\nrounds: 825"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-chimp128]",
            "value": 801.1705318870982,
            "unit": "iter/sec",
            "range": "stddev: 0.000008762881977638989",
            "extra": "mean: 1.248173716080862 msec\nrounds: 796"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-patas]",
            "value": 3278.338749282674,
            "unit": "iter/sec",
            "range": "stddev: 0.00000574698185306857",
            "extra": "mean: 305.032541319535 usec\nrounds: 2880"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-gorilla]",
            "value": 92517.92037628345,
            "unit": "iter/sec",
            "range": "stddev: 6.725303346832607e-7",
            "extra": "mean: 10.808716797057896 usec\nrounds: 60695"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-chimp]",
            "value": 96282.17293427269,
            "unit": "iter/sec",
            "range": "stddev: 6.549384115628153e-7",
            "extra": "mean: 10.386138674733203 usec\nrounds: 61107"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-chimp128]",
            "value": 91319.92572514559,
            "unit": "iter/sec",
            "range": "stddev: 6.843243627416765e-7",
            "extra": "mean: 10.950512629738625 usec\nrounds: 63184"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-patas]",
            "value": 436847.3269167326,
            "unit": "iter/sec",
            "range": "stddev: 3.7803064303563384e-7",
            "extra": "mean: 2.2891292641252896 usec\nrounds: 169320"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-gorilla]",
            "value": 8891.225201531057,
            "unit": "iter/sec",
            "range": "stddev: 0.000005345651831730334",
            "extra": "mean: 112.47043881284229 usec\nrounds: 7379"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-chimp]",
            "value": 9331.382407079904,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020725061160152087",
            "extra": "mean: 107.16525766228168 usec\nrounds: 7863"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-chimp128]",
            "value": 8875.382246409674,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025254558578420508",
            "extra": "mean: 112.67120358726254 usec\nrounds: 7638"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-patas]",
            "value": 34408.50584756625,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012858057184318238",
            "extra": "mean: 29.062581340501044 usec\nrounds: 20826"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-gorilla]",
            "value": 883.220187467462,
            "unit": "iter/sec",
            "range": "stddev: 0.000007642885022936444",
            "extra": "mean: 1.1322204974360828 msec\nrounds: 780"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-chimp]",
            "value": 936.9915226763203,
            "unit": "iter/sec",
            "range": "stddev: 0.00000692005983791116",
            "extra": "mean: 1.06724551481929 msec\nrounds: 911"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-chimp128]",
            "value": 892.6708048835637,
            "unit": "iter/sec",
            "range": "stddev: 0.000010468864490731075",
            "extra": "mean: 1.1202337911459261 msec\nrounds: 881"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-patas]",
            "value": 3245.4436373018034,
            "unit": "iter/sec",
            "range": "stddev: 0.000005518790704949459",
            "extra": "mean: 308.1242849225322 usec\nrounds: 2706"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-gorilla]",
            "value": 89281.66388347319,
            "unit": "iter/sec",
            "range": "stddev: 6.69101481035935e-7",
            "extra": "mean: 11.200508105507078 usec\nrounds: 57677"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-chimp]",
            "value": 92965.06045429297,
            "unit": "iter/sec",
            "range": "stddev: 7.706548251297922e-7",
            "extra": "mean: 10.75672941117118 usec\nrounds: 62279"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-chimp128]",
            "value": 88042.73234502847,
            "unit": "iter/sec",
            "range": "stddev: 7.224120636263057e-7",
            "extra": "mean: 11.358120918841147 usec\nrounds: 62819"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-patas]",
            "value": 434806.0020937072,
            "unit": "iter/sec",
            "range": "stddev: 3.5756467036465137e-7",
            "extra": "mean: 2.2998762555823347 usec\nrounds: 146843"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-gorilla]",
            "value": 8975.621583674083,
            "unit": "iter/sec",
            "range": "stddev: 0.000002621821297142639",
            "extra": "mean: 111.41289666432883 usec\nrounds: 7345"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-chimp]",
            "value": 9383.69133031666,
            "unit": "iter/sec",
            "range": "stddev: 0.000002194272627014306",
            "extra": "mean: 106.56787023345686 usec\nrounds: 8785"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-chimp128]",
            "value": 8912.222076413598,
            "unit": "iter/sec",
            "range": "stddev: 0.000002326329002841511",
            "extra": "mean: 112.20546250149253 usec\nrounds: 7827"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-patas]",
            "value": 35423.31591112512,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010865709281735118",
            "extra": "mean: 28.229994123332133 usec\nrounds: 21781"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-gorilla]",
            "value": 922.2832898521717,
            "unit": "iter/sec",
            "range": "stddev: 0.00000664868692511756",
            "extra": "mean: 1.0842655515967174 msec\nrounds: 814"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-chimp]",
            "value": 969.9135906257029,
            "unit": "iter/sec",
            "range": "stddev: 0.000005877187881045947",
            "extra": "mean: 1.0310196801705687 msec\nrounds: 938"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-chimp128]",
            "value": 923.5130138370332,
            "unit": "iter/sec",
            "range": "stddev: 0.000007728856281724227",
            "extra": "mean: 1.0828217740486157 msec\nrounds: 894"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-patas]",
            "value": 3587.592879617621,
            "unit": "iter/sec",
            "range": "stddev: 0.000005884191038208591",
            "extra": "mean: 278.73842812024526 usec\nrounds: 3165"
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
            "email": "miikka.koskinen@iki.fi",
            "name": "Miikka Koskinen",
            "username": "miikka"
          },
          "distinct": true,
          "id": "4f9018e02c5a5541af2d5c0f1f04f0c8965e0f4d",
          "message": "chore(release): prepare for v0.1.2",
          "timestamp": "2026-03-15T09:15:32+02:00",
          "tree_id": "ad134031f435e08e8de731ee685e5d30230a219a",
          "url": "https://github.com/miikka/floatbungler/commit/4f9018e02c5a5541af2d5c0f1f04f0c8965e0f4d"
        },
        "date": 1773559073921,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-gorilla]",
            "value": 605144.2555630226,
            "unit": "iter/sec",
            "range": "stddev: 3.5265086653826756e-7",
            "extra": "mean: 1.6524985419709655 usec\nrounds: 77496"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-chimp]",
            "value": 512841.03106528515,
            "unit": "iter/sec",
            "range": "stddev: 0.000001360033721856491",
            "extra": "mean: 1.9499219824957785 usec\nrounds: 175717"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-chimp128]",
            "value": 215354.2311548098,
            "unit": "iter/sec",
            "range": "stddev: 6.883661474006672e-7",
            "extra": "mean: 4.643512201444229 usec\nrounds: 25939"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-patas]",
            "value": 370391.01746066817,
            "unit": "iter/sec",
            "range": "stddev: 4.5508154264896224e-7",
            "extra": "mean: 2.6998494911021704 usec\nrounds: 159439"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-gorilla]",
            "value": 82084.6431465721,
            "unit": "iter/sec",
            "range": "stddev: 9.690028207170325e-7",
            "extra": "mean: 12.182546718444991 usec\nrounds: 59698"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-chimp]",
            "value": 76568.13573217184,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010973171898313227",
            "extra": "mean: 13.060263129533494 usec\nrounds: 53810"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-chimp128]",
            "value": 40880.39684092528,
            "unit": "iter/sec",
            "range": "stddev: 0.00000196289590840496",
            "extra": "mean: 24.4616020703327 usec\nrounds: 27819"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-patas]",
            "value": 46224.94800058238,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014687338654436097",
            "extra": "mean: 21.63333964134262 usec\nrounds: 38944"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-gorilla]",
            "value": 8636.588496872553,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038573472071804605",
            "extra": "mean: 115.7864590123885 usec\nrounds: 8344"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-chimp]",
            "value": 8172.397542038297,
            "unit": "iter/sec",
            "range": "stddev: 0.000004313053651780447",
            "extra": "mean: 122.36311252066034 usec\nrounds: 7723"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-chimp128]",
            "value": 4586.09798819797,
            "unit": "iter/sec",
            "range": "stddev: 0.000006237995937438221",
            "extra": "mean: 218.05029080787983 usec\nrounds: 4319"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-patas]",
            "value": 4837.718095912997,
            "unit": "iter/sec",
            "range": "stddev: 0.0000062757366326386686",
            "extra": "mean: 206.70902689530843 usec\nrounds: 4722"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-gorilla]",
            "value": 277468.75924159714,
            "unit": "iter/sec",
            "range": "stddev: 7.094570375667773e-7",
            "extra": "mean: 3.6040093404868028 usec\nrounds: 106633"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-chimp]",
            "value": 220925.47636085583,
            "unit": "iter/sec",
            "range": "stddev: 6.66940991682365e-7",
            "extra": "mean: 4.52641323432802 usec\nrounds: 82089"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-chimp128]",
            "value": 136973.42749282185,
            "unit": "iter/sec",
            "range": "stddev: 8.542424319685415e-7",
            "extra": "mean: 7.3006861133879815 usec\nrounds: 51611"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-patas]",
            "value": 287545.99613622366,
            "unit": "iter/sec",
            "range": "stddev: 5.46762158743425e-7",
            "extra": "mean: 3.4777044835854865 usec\nrounds: 141383"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-gorilla]",
            "value": 31468.81074319861,
            "unit": "iter/sec",
            "range": "stddev: 0.000001768683409220749",
            "extra": "mean: 31.77749576113648 usec\nrounds: 25244"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-chimp]",
            "value": 26948.230864897112,
            "unit": "iter/sec",
            "range": "stddev: 0.000002063809130276864",
            "extra": "mean: 37.10818736166479 usec\nrounds: 21237"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-chimp128]",
            "value": 20971.51484868564,
            "unit": "iter/sec",
            "range": "stddev: 0.000002855092960389131",
            "extra": "mean: 47.68372753304817 usec\nrounds: 15734"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-patas]",
            "value": 34246.834486106774,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021094513261150585",
            "extra": "mean: 29.199779045437882 usec\nrounds: 30065"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-gorilla]",
            "value": 2794.471990891283,
            "unit": "iter/sec",
            "range": "stddev: 0.00004125512987419275",
            "extra": "mean: 357.84935517677343 usec\nrounds: 2762"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-chimp]",
            "value": 2776.5462346206823,
            "unit": "iter/sec",
            "range": "stddev: 0.000008343242331293227",
            "extra": "mean: 360.15967878763416 usec\nrounds: 2640"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-chimp128]",
            "value": 2177.2959226657913,
            "unit": "iter/sec",
            "range": "stddev: 0.000009586215018171333",
            "extra": "mean: 459.2852949339295 usec\nrounds: 2092"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-patas]",
            "value": 3482.7400394763313,
            "unit": "iter/sec",
            "range": "stddev: 0.000007105235334990913",
            "extra": "mean: 287.13024476853036 usec\nrounds: 3489"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-gorilla]",
            "value": 84189.01950991349,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011517148369923488",
            "extra": "mean: 11.878033570425977 usec\nrounds: 53291"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-chimp]",
            "value": 86117.68351285574,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011973569511814628",
            "extra": "mean: 11.612016942498446 usec\nrounds: 53121"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-chimp128]",
            "value": 49115.24870212942,
            "unit": "iter/sec",
            "range": "stddev: 0.000002231385522917798",
            "extra": "mean: 20.36027560533648 usec\nrounds: 30609"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-patas]",
            "value": 96308.08858262475,
            "unit": "iter/sec",
            "range": "stddev: 9.40155857833936e-7",
            "extra": "mean: 10.383343857375788 usec\nrounds: 68130"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-gorilla]",
            "value": 8733.685665681443,
            "unit": "iter/sec",
            "range": "stddev: 0.0000048008666058751705",
            "extra": "mean: 114.49919750712431 usec\nrounds: 8344"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-chimp]",
            "value": 9028.584150285795,
            "unit": "iter/sec",
            "range": "stddev: 0.000004208970003886923",
            "extra": "mean: 110.75933760537032 usec\nrounds: 8427"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-chimp128]",
            "value": 4864.893607884213,
            "unit": "iter/sec",
            "range": "stddev: 0.000006056766937107247",
            "extra": "mean: 205.5543410814505 usec\nrounds: 4216"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-patas]",
            "value": 7765.481846260096,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036456867315657925",
            "extra": "mean: 128.77500969004342 usec\nrounds: 6811"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-gorilla]",
            "value": 866.1322237145766,
            "unit": "iter/sec",
            "range": "stddev: 0.00006850767353804354",
            "extra": "mean: 1.1545581293711777 msec\nrounds: 858"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-chimp]",
            "value": 908.6918524815094,
            "unit": "iter/sec",
            "range": "stddev: 0.000014727221222366595",
            "extra": "mean: 1.1004830705471178 msec\nrounds: 893"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-chimp128]",
            "value": 486.5928260908107,
            "unit": "iter/sec",
            "range": "stddev: 0.000026864018319362146",
            "extra": "mean: 2.0551063360999375 msec\nrounds: 482"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-patas]",
            "value": 900.9205761157772,
            "unit": "iter/sec",
            "range": "stddev: 0.000010127230556105782",
            "extra": "mean: 1.1099757586971688 msec\nrounds: 920"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-gorilla]",
            "value": 93224.09646712123,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010091063870621834",
            "extra": "mean: 10.726840354550234 usec\nrounds: 62501"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-chimp]",
            "value": 93648.02978812276,
            "unit": "iter/sec",
            "range": "stddev: 0.00000152310787331839",
            "extra": "mean: 10.678281243743033 usec\nrounds: 55667"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-chimp128]",
            "value": 51692.69172610234,
            "unit": "iter/sec",
            "range": "stddev: 0.000002049878514240503",
            "extra": "mean: 19.345094376175574 usec\nrounds: 31597"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-patas]",
            "value": 97658.68805010126,
            "unit": "iter/sec",
            "range": "stddev: 9.131663527846294e-7",
            "extra": "mean: 10.23974435829996 usec\nrounds: 70943"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-gorilla]",
            "value": 9673.21329679686,
            "unit": "iter/sec",
            "range": "stddev: 0.000004081905503319817",
            "extra": "mean: 103.37826421455372 usec\nrounds: 8020"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-chimp]",
            "value": 10005.605452210231,
            "unit": "iter/sec",
            "range": "stddev: 0.00000422918637999639",
            "extra": "mean: 99.94397688138909 usec\nrounds: 7786"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-chimp128]",
            "value": 5122.787854379202,
            "unit": "iter/sec",
            "range": "stddev: 0.000009817587513366264",
            "extra": "mean: 195.20620967060987 usec\nrounds: 4798"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-patas]",
            "value": 7808.721286305722,
            "unit": "iter/sec",
            "range": "stddev: 0.000006416647025656045",
            "extra": "mean: 128.0619404042139 usec\nrounds: 7769"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-gorilla]",
            "value": 963.2760974747505,
            "unit": "iter/sec",
            "range": "stddev: 0.00007219654034420205",
            "extra": "mean: 1.0381239632349666 msec\nrounds: 952"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-chimp]",
            "value": 1002.9688226275299,
            "unit": "iter/sec",
            "range": "stddev: 0.00007748899509379858",
            "extra": "mean: 997.0399651907901 usec\nrounds: 948"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-chimp128]",
            "value": 511.9747375068939,
            "unit": "iter/sec",
            "range": "stddev: 0.00002319480281275129",
            "extra": "mean: 1.953221373518522 msec\nrounds: 506"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-patas]",
            "value": 907.0299548544497,
            "unit": "iter/sec",
            "range": "stddev: 0.000011101914093715073",
            "extra": "mean: 1.1024994209375027 msec\nrounds: 917"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-gorilla]",
            "value": 89706.89859799221,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014334380790889315",
            "extra": "mean: 11.147414698632574 usec\nrounds: 61271"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-chimp]",
            "value": 91274.24128179748,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010546361852635138",
            "extra": "mean: 10.955993563535943 usec\nrounds: 54843"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-chimp128]",
            "value": 50999.42957557531,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019074079554672504",
            "extra": "mean: 19.608062449367488 usec\nrounds: 30921"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-patas]",
            "value": 97115.73301575179,
            "unit": "iter/sec",
            "range": "stddev: 9.388076402182981e-7",
            "extra": "mean: 10.296992762622756 usec\nrounds: 66322"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-gorilla]",
            "value": 9783.422206751835,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043209619126555685",
            "extra": "mean: 102.21372224024736 usec\nrounds: 9231"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-chimp]",
            "value": 10080.269301656248,
            "unit": "iter/sec",
            "range": "stddev: 0.000004062355079136227",
            "extra": "mean: 99.20369883726163 usec\nrounds: 9201"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-chimp128]",
            "value": 5157.750336697776,
            "unit": "iter/sec",
            "range": "stddev: 0.000005176847182183105",
            "extra": "mean: 193.88297895788517 usec\nrounds: 4800"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-patas]",
            "value": 7856.504744173974,
            "unit": "iter/sec",
            "range": "stddev: 0.000004017991821479505",
            "extra": "mean: 127.28306448762147 usec\nrounds: 5691"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-gorilla]",
            "value": 1011.0232082140263,
            "unit": "iter/sec",
            "range": "stddev: 0.00003197740824054848",
            "extra": "mean: 989.0969780669043 usec\nrounds: 1003"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-chimp]",
            "value": 1039.2025487233227,
            "unit": "iter/sec",
            "range": "stddev: 0.000010361153046183633",
            "extra": "mean: 962.2763158428704 usec\nrounds: 991"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-chimp128]",
            "value": 518.299915613478,
            "unit": "iter/sec",
            "range": "stddev: 0.00002099869057410969",
            "extra": "mean: 1.9293848404670584 msec\nrounds: 514"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-patas]",
            "value": 943.0386730877119,
            "unit": "iter/sec",
            "range": "stddev: 0.000012680388776158167",
            "extra": "mean: 1.0604018992410824 msec\nrounds: 923"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-gorilla]",
            "value": 340702.60515401646,
            "unit": "iter/sec",
            "range": "stddev: 6.109521513338827e-7",
            "extra": "mean: 2.935111105322909 usec\nrounds: 133441"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-chimp]",
            "value": 329418.24675112654,
            "unit": "iter/sec",
            "range": "stddev: 5.594644711568899e-7",
            "extra": "mean: 3.0356545512049116 usec\nrounds: 167197"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-chimp128]",
            "value": 246756.97888372836,
            "unit": "iter/sec",
            "range": "stddev: 6.988032542305946e-7",
            "extra": "mean: 4.052570284025073 usec\nrounds: 130805"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-patas]",
            "value": 398415.1328275237,
            "unit": "iter/sec",
            "range": "stddev: 3.961959666130645e-7",
            "extra": "mean: 2.5099448228862986 usec\nrounds: 175408"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-gorilla]",
            "value": 31654.684305404182,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022443987104237755",
            "extra": "mean: 31.59090106070895 usec\nrounds: 18668"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-chimp]",
            "value": 29811.989444536866,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019801602257527295",
            "extra": "mean: 33.54355139097411 usec\nrounds: 25987"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-chimp128]",
            "value": 21492.855106570376,
            "unit": "iter/sec",
            "range": "stddev: 0.000002280874306156979",
            "extra": "mean: 46.52708981852762 usec\nrounds: 19005"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-patas]",
            "value": 27705.55948034898,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022894357192749784",
            "extra": "mean: 36.09383888130037 usec\nrounds: 23132"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-gorilla]",
            "value": 3163.3666354767756,
            "unit": "iter/sec",
            "range": "stddev: 0.00000732165504975976",
            "extra": "mean: 316.1189059735032 usec\nrounds: 1925"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-chimp]",
            "value": 3030.5289672606245,
            "unit": "iter/sec",
            "range": "stddev: 0.000006888231069522449",
            "extra": "mean: 329.9753972996756 usec\nrounds: 2814"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-chimp128]",
            "value": 2274.8065780077873,
            "unit": "iter/sec",
            "range": "stddev: 0.000007292925640509814",
            "extra": "mean: 439.5978144549645 usec\nrounds: 2269"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-patas]",
            "value": 3012.800970198798,
            "unit": "iter/sec",
            "range": "stddev: 0.00001230141627561172",
            "extra": "mean: 331.91704659269794 usec\nrounds: 2876"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-gorilla]",
            "value": 246888.7129065456,
            "unit": "iter/sec",
            "range": "stddev: 6.34149065164556e-7",
            "extra": "mean: 4.0504079276338905 usec\nrounds: 118977"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-chimp]",
            "value": 210538.39656476886,
            "unit": "iter/sec",
            "range": "stddev: 7.117667047261299e-7",
            "extra": "mean: 4.7497274431477186 usec\nrounds: 74157"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-chimp128]",
            "value": 168050.43507951763,
            "unit": "iter/sec",
            "range": "stddev: 7.774152681115125e-7",
            "extra": "mean: 5.950594531497778 usec\nrounds: 108366"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-patas]",
            "value": 397872.37117770757,
            "unit": "iter/sec",
            "range": "stddev: 3.5470794292903927e-7",
            "extra": "mean: 2.5133687896950136 usec\nrounds: 174186"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-gorilla]",
            "value": 22243.992197621727,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022282291355545436",
            "extra": "mean: 44.95595894458719 usec\nrounds: 12203"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-chimp]",
            "value": 19610.124400971345,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024587224523148836",
            "extra": "mean: 50.99406712333081 usec\nrounds: 15628"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-chimp128]",
            "value": 15897.67257209739,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026234070671451332",
            "extra": "mean: 62.90228934234928 usec\nrounds: 14412"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-patas]",
            "value": 29309.171806795046,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025407169803167758",
            "extra": "mean: 34.11901252590698 usec\nrounds: 25148"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-gorilla]",
            "value": 2112.6948947337723,
            "unit": "iter/sec",
            "range": "stddev: 0.000012420695913188901",
            "extra": "mean: 473.32911273305905 usec\nrounds: 1508"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-chimp]",
            "value": 2007.3313845621217,
            "unit": "iter/sec",
            "range": "stddev: 0.000010718146490397166",
            "extra": "mean: 498.1738479708669 usec\nrounds: 1947"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-chimp128]",
            "value": 1627.3543262255976,
            "unit": "iter/sec",
            "range": "stddev: 0.000009609618586498341",
            "extra": "mean: 614.4943260877603 usec\nrounds: 1610"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-patas]",
            "value": 3055.649883637543,
            "unit": "iter/sec",
            "range": "stddev: 0.000007644089647614796",
            "extra": "mean: 327.26262434542014 usec\nrounds: 3056"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-gorilla]",
            "value": 78667.48971173991,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010487729795224761",
            "extra": "mean: 12.711731411085887 usec\nrounds: 58852"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-chimp]",
            "value": 83470.32715657905,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010382272933511691",
            "extra": "mean: 11.980305266135295 usec\nrounds: 62267"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-chimp128]",
            "value": 78020.6391664735,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012589521635368122",
            "extra": "mean: 12.817121349983932 usec\nrounds: 61615"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-patas]",
            "value": 351187.5345286382,
            "unit": "iter/sec",
            "range": "stddev: 5.500147832819127e-7",
            "extra": "mean: 2.847481478356554 usec\nrounds: 154036"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-gorilla]",
            "value": 7543.883254616447,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041843944035214236",
            "extra": "mean: 132.55772474846484 usec\nrounds: 6158"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-chimp]",
            "value": 8037.278894153999,
            "unit": "iter/sec",
            "range": "stddev: 0.000003432208414074173",
            "extra": "mean: 124.4202189782615 usec\nrounds: 7398"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-chimp128]",
            "value": 7438.828203223568,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037009142027109453",
            "extra": "mean: 134.42977478182067 usec\nrounds: 7233"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-patas]",
            "value": 28054.809803814143,
            "unit": "iter/sec",
            "range": "stddev: 0.000002019062134265153",
            "extra": "mean: 35.64451183212252 usec\nrounds: 23031"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-gorilla]",
            "value": 751.8894131143408,
            "unit": "iter/sec",
            "range": "stddev: 0.000011981899707425243",
            "extra": "mean: 1.3299828173640327 msec\nrounds: 668"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-chimp]",
            "value": 806.0076172179256,
            "unit": "iter/sec",
            "range": "stddev: 0.000021870617608184405",
            "extra": "mean: 1.240683063829685 msec\nrounds: 752"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-chimp128]",
            "value": 746.3931278994154,
            "unit": "iter/sec",
            "range": "stddev: 0.00001236344193964627",
            "extra": "mean: 1.3397765368155439 msec\nrounds: 747"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-patas]",
            "value": 2607.260990768024,
            "unit": "iter/sec",
            "range": "stddev: 0.00000823530478321769",
            "extra": "mean: 383.5442648591267 usec\nrounds: 2507"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-gorilla]",
            "value": 86803.27465951027,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010053747381272652",
            "extra": "mean: 11.520302706580424 usec\nrounds: 58783"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-chimp]",
            "value": 92515.44230967997,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010043327167415229",
            "extra": "mean: 10.809006313266787 usec\nrounds: 68743"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-chimp128]",
            "value": 84889.63719799688,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011483205943707972",
            "extra": "mean: 11.780000869453554 usec\nrounds: 49461"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-patas]",
            "value": 350156.29484487337,
            "unit": "iter/sec",
            "range": "stddev: 5.79607865888509e-7",
            "extra": "mean: 2.855867550354967 usec\nrounds: 154036"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-gorilla]",
            "value": 8301.616111779134,
            "unit": "iter/sec",
            "range": "stddev: 0.000003862671471223363",
            "extra": "mean: 120.4584729690287 usec\nrounds: 6252"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-chimp]",
            "value": 8942.6754557688,
            "unit": "iter/sec",
            "range": "stddev: 0.000004647886877613879",
            "extra": "mean: 111.82335811537402 usec\nrounds: 7492"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-chimp128]",
            "value": 8218.24466961127,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036042889030510185",
            "extra": "mean: 121.68048533499075 usec\nrounds: 7910"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-patas]",
            "value": 28485.610482455995,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021667875725759604",
            "extra": "mean: 35.105443873702136 usec\nrounds: 22779"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-gorilla]",
            "value": 829.4310846928911,
            "unit": "iter/sec",
            "range": "stddev: 0.00001036987932741984",
            "extra": "mean: 1.205645675035515 msec\nrounds: 717"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-chimp]",
            "value": 894.5073064484027,
            "unit": "iter/sec",
            "range": "stddev: 0.000011962026576496839",
            "extra": "mean: 1.1179338534085885 msec\nrounds: 880"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-chimp128]",
            "value": 822.5437948663773,
            "unit": "iter/sec",
            "range": "stddev: 0.000006596708318558819",
            "extra": "mean: 1.2157407377469192 msec\nrounds: 816"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-patas]",
            "value": 2588.8666840755172,
            "unit": "iter/sec",
            "range": "stddev: 0.000015315529887481798",
            "extra": "mean: 386.2694074403833 usec\nrounds: 2285"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-gorilla]",
            "value": 84088.64544946855,
            "unit": "iter/sec",
            "range": "stddev: 9.988515799647935e-7",
            "extra": "mean: 11.892212018100954 usec\nrounds: 42619"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-chimp]",
            "value": 88881.4980179349,
            "unit": "iter/sec",
            "range": "stddev: 9.951418068569573e-7",
            "extra": "mean: 11.250935484888156 usec\nrounds: 67395"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-chimp128]",
            "value": 81946.81815396108,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010843139888106078",
            "extra": "mean: 12.203036341462427 usec\nrounds: 63096"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-patas]",
            "value": 348860.20397057233,
            "unit": "iter/sec",
            "range": "stddev: 5.296188089367428e-7",
            "extra": "mean: 2.866477714048329 usec\nrounds: 157431"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-gorilla]",
            "value": 8366.857341877643,
            "unit": "iter/sec",
            "range": "stddev: 0.000003293198937728795",
            "extra": "mean: 119.51918852432419 usec\nrounds: 6832"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-chimp]",
            "value": 8934.168703346042,
            "unit": "iter/sec",
            "range": "stddev: 0.00000331863078554001",
            "extra": "mean: 111.92983177332191 usec\nrounds: 7478"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-chimp128]",
            "value": 8258.785381284037,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035450471072749357",
            "extra": "mean: 121.08318037494816 usec\nrounds: 7939"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-patas]",
            "value": 28289.925903942043,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024679471340840593",
            "extra": "mean: 35.348272151559634 usec\nrounds: 19750"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-gorilla]",
            "value": 856.1609987894183,
            "unit": "iter/sec",
            "range": "stddev: 0.000019264118770336042",
            "extra": "mean: 1.16800461760576 msec\nrounds: 727"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-chimp]",
            "value": 915.9430501264792,
            "unit": "iter/sec",
            "range": "stddev: 0.000006925429358217895",
            "extra": "mean: 1.0917709347343305 msec\nrounds: 904"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-chimp128]",
            "value": 850.1843939426193,
            "unit": "iter/sec",
            "range": "stddev: 0.00004925999525853701",
            "extra": "mean: 1.1762154270588645 msec\nrounds: 850"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-patas]",
            "value": 2792.7763895718967,
            "unit": "iter/sec",
            "range": "stddev: 0.000007190016881741679",
            "extra": "mean: 358.0666192015786 usec\nrounds: 2479"
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
            "email": "miikka.koskinen@iki.fi",
            "name": "Miikka Koskinen",
            "username": "miikka"
          },
          "distinct": true,
          "id": "cb9dfc37c414211298c9ce343d7842f2d07bb0dd",
          "message": "chore: add a script for showing compression ratios for benchmark data",
          "timestamp": "2026-03-15T09:41:58+02:00",
          "tree_id": "c715f7a8e050aa2e2ba95988699337665969c42f",
          "url": "https://github.com/miikka/floatbungler/commit/cb9dfc37c414211298c9ce343d7842f2d07bb0dd"
        },
        "date": 1773560718822,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-gorilla]",
            "value": 641564.1933394788,
            "unit": "iter/sec",
            "range": "stddev: 3.6250254602278767e-7",
            "extra": "mean: 1.5586904792718967 usec\nrounds: 78040"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-chimp]",
            "value": 530499.691626999,
            "unit": "iter/sec",
            "range": "stddev: 0.000001427734840759913",
            "extra": "mean: 1.8850152333417618 usec\nrounds: 172385"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-chimp128]",
            "value": 221819.08418644426,
            "unit": "iter/sec",
            "range": "stddev: 6.992090805423764e-7",
            "extra": "mean: 4.508178381799989 usec\nrounds: 27116"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=100-patas]",
            "value": 338469.0860638697,
            "unit": "iter/sec",
            "range": "stddev: 5.738495061716666e-7",
            "extra": "mean: 2.954479570436451 usec\nrounds: 154751"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-gorilla]",
            "value": 91427.84763536676,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010354831178451353",
            "extra": "mean: 10.937586587274891 usec\nrounds: 67354"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-chimp]",
            "value": 80104.51540100484,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012721522969833",
            "extra": "mean: 12.483690775657022 usec\nrounds: 35146"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-chimp128]",
            "value": 42342.76607287166,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016900836733686515",
            "extra": "mean: 23.616784937455563 usec\nrounds: 28229"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=1000-patas]",
            "value": 44473.653411952735,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024656468636478375",
            "extra": "mean: 22.485222671885108 usec\nrounds: 37809"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-gorilla]",
            "value": 9652.250399452634,
            "unit": "iter/sec",
            "range": "stddev: 0.00000415199457640547",
            "extra": "mean: 103.60278262742837 usec\nrounds: 9233"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-chimp]",
            "value": 8631.490935826969,
            "unit": "iter/sec",
            "range": "stddev: 0.000004636653088735589",
            "extra": "mean: 115.854839845718 usec\nrounds: 8292"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-chimp128]",
            "value": 4747.125691228794,
            "unit": "iter/sec",
            "range": "stddev: 0.000007306733001364626",
            "extra": "mean: 210.65378611054848 usec\nrounds: 4507"
          },
          {
            "name": "bench/test_bench.py::test_encode[constant-n=10000-patas]",
            "value": 4497.103516788864,
            "unit": "iter/sec",
            "range": "stddev: 0.00002212254939419124",
            "extra": "mean: 222.36535055658345 usec\nrounds: 4761"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-gorilla]",
            "value": 282588.74361797556,
            "unit": "iter/sec",
            "range": "stddev: 7.68614057512207e-7",
            "extra": "mean: 3.5387113697347905 usec\nrounds: 110425"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-chimp]",
            "value": 228864.19749752517,
            "unit": "iter/sec",
            "range": "stddev: 6.750468925777659e-7",
            "extra": "mean: 4.369403388272705 usec\nrounds: 97571"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-chimp128]",
            "value": 142306.4255138419,
            "unit": "iter/sec",
            "range": "stddev: 9.201341931371675e-7",
            "extra": "mean: 7.027089580735281 usec\nrounds: 53181"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=100-patas]",
            "value": 294802.42578282586,
            "unit": "iter/sec",
            "range": "stddev: 6.256547654934578e-7",
            "extra": "mean: 3.392102345645815 usec\nrounds: 127470"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-gorilla]",
            "value": 32308.566307930563,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022583958139100613",
            "extra": "mean: 30.951543639203102 usec\nrounds: 25940"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-chimp]",
            "value": 27463.067801584617,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025259437124642",
            "extra": "mean: 36.41253800284832 usec\nrounds: 22301"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-chimp128]",
            "value": 21524.734812755014,
            "unit": "iter/sec",
            "range": "stddev: 0.000003309955706706847",
            "extra": "mean: 46.45817979636271 usec\nrounds: 16007"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=1000-patas]",
            "value": 34234.66444783135,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020885356241290853",
            "extra": "mean: 29.210159238565183 usec\nrounds: 30627"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-gorilla]",
            "value": 2941.480013322314,
            "unit": "iter/sec",
            "range": "stddev: 0.000009102216891167581",
            "extra": "mean: 339.9649140809663 usec\nrounds: 2933"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-chimp]",
            "value": 2775.5656910523862,
            "unit": "iter/sec",
            "range": "stddev: 0.000011340793958676847",
            "extra": "mean: 360.28691492466135 usec\nrounds: 2727"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-chimp128]",
            "value": 2168.50605687746,
            "unit": "iter/sec",
            "range": "stddev: 0.000010923180372588432",
            "extra": "mean: 461.1469711271869 usec\nrounds: 2182"
          },
          {
            "name": "bench/test_bench.py::test_encode[monotonic-n=10000-patas]",
            "value": 3545.961680997988,
            "unit": "iter/sec",
            "range": "stddev: 0.000012434114870955058",
            "extra": "mean: 282.010943704997 usec\nrounds: 3606"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-gorilla]",
            "value": 90666.420691062,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011498618829310696",
            "extra": "mean: 11.029441687208692 usec\nrounds: 56780"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-chimp]",
            "value": 85395.49106740799,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011206510816806607",
            "extra": "mean: 11.710220147462325 usec\nrounds: 55054"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-chimp128]",
            "value": 49147.57337764292,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015782772497649497",
            "extra": "mean: 20.346884520953722 usec\nrounds: 30932"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=100-patas]",
            "value": 94636.97579574384,
            "unit": "iter/sec",
            "range": "stddev: 0.000002022945426996336",
            "extra": "mean: 10.566694377029886 usec\nrounds: 66016"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-gorilla]",
            "value": 9405.45541922473,
            "unit": "iter/sec",
            "range": "stddev: 0.000007747741896984802",
            "extra": "mean: 106.32127371057462 usec\nrounds: 6379"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-chimp]",
            "value": 9019.492857028437,
            "unit": "iter/sec",
            "range": "stddev: 0.000004501299770076981",
            "extra": "mean: 110.87097865161569 usec\nrounds: 8291"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-chimp128]",
            "value": 4856.249373720188,
            "unit": "iter/sec",
            "range": "stddev: 0.000005717579969519195",
            "extra": "mean: 205.9202324764344 usec\nrounds: 4551"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=1000-patas]",
            "value": 7894.0993029352985,
            "unit": "iter/sec",
            "range": "stddev: 0.000004239261475368334",
            "extra": "mean: 126.67689645456647 usec\nrounds: 7813"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-gorilla]",
            "value": 914.4483553992761,
            "unit": "iter/sec",
            "range": "stddev: 0.000029984678502035612",
            "extra": "mean: 1.0935554688196354 msec\nrounds: 898"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-chimp]",
            "value": 883.7925087526658,
            "unit": "iter/sec",
            "range": "stddev: 0.00003868676100437772",
            "extra": "mean: 1.1314873005784387 msec\nrounds: 865"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-chimp128]",
            "value": 477.62376421465893,
            "unit": "iter/sec",
            "range": "stddev: 0.00002055145106472756",
            "extra": "mean: 2.0936981677288755 msec\nrounds: 471"
          },
          {
            "name": "bench/test_bench.py::test_encode[random-n=10000-patas]",
            "value": 918.3836572583509,
            "unit": "iter/sec",
            "range": "stddev: 0.00001764651199872169",
            "extra": "mean: 1.088869550428737 msec\nrounds: 932"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-gorilla]",
            "value": 99877.49001649841,
            "unit": "iter/sec",
            "range": "stddev: 9.087936484434562e-7",
            "extra": "mean: 10.01226602545592 usec\nrounds: 64148"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-chimp]",
            "value": 96690.62659297582,
            "unit": "iter/sec",
            "range": "stddev: 9.96868696165931e-7",
            "extra": "mean: 10.342264139103696 usec\nrounds: 57235"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-chimp128]",
            "value": 51875.362661296356,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015435250653396243",
            "extra": "mean: 19.27697366723354 usec\nrounds: 30912"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=100-patas]",
            "value": 98229.65448757987,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011223699692438778",
            "extra": "mean: 10.180225159261244 usec\nrounds: 68134"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-gorilla]",
            "value": 10440.934186599585,
            "unit": "iter/sec",
            "range": "stddev: 0.000004407201598347329",
            "extra": "mean: 95.77687035739099 usec\nrounds: 8454"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-chimp]",
            "value": 10185.678274277701,
            "unit": "iter/sec",
            "range": "stddev: 0.000004452797609230765",
            "extra": "mean: 98.17706519607435 usec\nrounds: 9295"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-chimp128]",
            "value": 5116.682660055868,
            "unit": "iter/sec",
            "range": "stddev: 0.0000064737111498168515",
            "extra": "mean: 195.43912852103304 usec\nrounds: 4793"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=1000-patas]",
            "value": 7885.1260984731325,
            "unit": "iter/sec",
            "range": "stddev: 0.000004433350301967578",
            "extra": "mean: 126.82105365361741 usec\nrounds: 7828"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-gorilla]",
            "value": 1047.2166592257793,
            "unit": "iter/sec",
            "range": "stddev: 0.00001704338615769186",
            "extra": "mean: 954.912234436103 usec\nrounds: 1028"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-chimp]",
            "value": 1021.8609783631465,
            "unit": "iter/sec",
            "range": "stddev: 0.00001419851871225981",
            "extra": "mean: 978.6067001030178 usec\nrounds: 967"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-chimp128]",
            "value": 489.6035975978015,
            "unit": "iter/sec",
            "range": "stddev: 0.00037422275394646565",
            "extra": "mean: 2.0424686520001387 msec\nrounds: 500"
          },
          {
            "name": "bench/test_bench.py::test_encode[sine-n=10000-patas]",
            "value": 925.0294268784469,
            "unit": "iter/sec",
            "range": "stddev: 0.000015984438478553134",
            "extra": "mean: 1.0810466899140114 msec\nrounds: 932"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-gorilla]",
            "value": 96954.04358681844,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010045238253286691",
            "extra": "mean: 10.314164969350044 usec\nrounds: 28181"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-chimp]",
            "value": 92107.82529605077,
            "unit": "iter/sec",
            "range": "stddev: 0.00000101802433051782",
            "extra": "mean: 10.856840846972817 usec\nrounds: 53037"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-chimp128]",
            "value": 50776.89024011224,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015762619110311702",
            "extra": "mean: 19.693998495599672 usec\nrounds: 31242"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=100-patas]",
            "value": 97946.66659782112,
            "unit": "iter/sec",
            "range": "stddev: 9.132454163492807e-7",
            "extra": "mean: 10.20963790535211 usec\nrounds: 67811"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-gorilla]",
            "value": 10350.120739838592,
            "unit": "iter/sec",
            "range": "stddev: 0.00001194007023413586",
            "extra": "mean: 96.6172303817583 usec\nrounds: 7149"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-chimp]",
            "value": 10177.44369793571,
            "unit": "iter/sec",
            "range": "stddev: 0.000005975690672224918",
            "extra": "mean: 98.25650032363528 usec\nrounds: 9270"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-chimp128]",
            "value": 5134.6762245257505,
            "unit": "iter/sec",
            "range": "stddev: 0.000005602827110097144",
            "extra": "mean: 194.75424666963536 usec\nrounds: 4804"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=1000-patas]",
            "value": 7818.693776225061,
            "unit": "iter/sec",
            "range": "stddev: 0.000017337762780243052",
            "extra": "mean: 127.89860155935271 usec\nrounds: 7823"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-gorilla]",
            "value": 1091.927713367277,
            "unit": "iter/sec",
            "range": "stddev: 0.000012833562155333531",
            "extra": "mean: 915.8115393153719 usec\nrounds: 1081"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-chimp]",
            "value": 1020.4193032576484,
            "unit": "iter/sec",
            "range": "stddev: 0.000013269967264082464",
            "extra": "mean: 979.9893012681547 usec\nrounds: 946"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-chimp128]",
            "value": 515.0909359309028,
            "unit": "iter/sec",
            "range": "stddev: 0.000024613991294603826",
            "extra": "mean: 1.9414047699999628 msec\nrounds: 500"
          },
          {
            "name": "bench/test_bench.py::test_encode[walk-n=10000-patas]",
            "value": 949.8710317388748,
            "unit": "iter/sec",
            "range": "stddev: 0.000044675330803042384",
            "extra": "mean: 1.0527744994700565 msec\nrounds: 943"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-gorilla]",
            "value": 366046.53978896764,
            "unit": "iter/sec",
            "range": "stddev: 5.439151038714523e-7",
            "extra": "mean: 2.731893055392677 usec\nrounds: 125392"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-chimp]",
            "value": 335509.51286691776,
            "unit": "iter/sec",
            "range": "stddev: 7.210587995302179e-7",
            "extra": "mean: 2.980541420286515 usec\nrounds: 158932"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-chimp128]",
            "value": 256917.54632850233,
            "unit": "iter/sec",
            "range": "stddev: 6.10921361103005e-7",
            "extra": "mean: 3.892299355534754 usec\nrounds: 139199"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=100-patas]",
            "value": 412518.31605863204,
            "unit": "iter/sec",
            "range": "stddev: 3.3551683731768674e-7",
            "extra": "mean: 2.4241347864366536 usec\nrounds: 174795"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-gorilla]",
            "value": 31320.80566024405,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018725728516171359",
            "extra": "mean: 31.92765891297983 usec\nrounds: 16723"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-chimp]",
            "value": 30035.59376128453,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019083768323393053",
            "extra": "mean: 33.29383157688683 usec\nrounds: 25620"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-chimp128]",
            "value": 22237.7444257432,
            "unit": "iter/sec",
            "range": "stddev: 0.00000225303720773128",
            "extra": "mean: 44.968589478093136 usec\nrounds: 19122"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=1000-patas]",
            "value": 28525.986938717455,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022796919251745004",
            "extra": "mean: 35.05575467549311 usec\nrounds: 23153"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-gorilla]",
            "value": 3081.59798447129,
            "unit": "iter/sec",
            "range": "stddev: 0.000006755081939173808",
            "extra": "mean: 324.50696198503977 usec\nrounds: 1894"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-chimp]",
            "value": 2975.646385360276,
            "unit": "iter/sec",
            "range": "stddev: 0.000007128288320163499",
            "extra": "mean: 336.0614369099254 usec\nrounds: 2964"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-chimp128]",
            "value": 2285.0202898047523,
            "unit": "iter/sec",
            "range": "stddev: 0.000015773946288789392",
            "extra": "mean: 437.6328754986446 usec\nrounds: 2257"
          },
          {
            "name": "bench/test_bench.py::test_decode[constant-n=10000-patas]",
            "value": 3021.5846310753986,
            "unit": "iter/sec",
            "range": "stddev: 0.00001932365274169288",
            "extra": "mean: 330.9521731463449 usec\nrounds: 2778"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-gorilla]",
            "value": 259021.62248137878,
            "unit": "iter/sec",
            "range": "stddev: 7.882071836640335e-7",
            "extra": "mean: 3.8606815539960975 usec\nrounds: 118400"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-chimp]",
            "value": 209345.5359618328,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019220019237886333",
            "extra": "mean: 4.776791611082248 usec\nrounds: 117703"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-chimp128]",
            "value": 177380.42548008793,
            "unit": "iter/sec",
            "range": "stddev: 8.202706887270333e-7",
            "extra": "mean: 5.637600638816013 usec\nrounds: 113033"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=100-patas]",
            "value": 411245.73536773276,
            "unit": "iter/sec",
            "range": "stddev: 5.042583933639682e-7",
            "extra": "mean: 2.4316361581374397 usec\nrounds: 197278"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-gorilla]",
            "value": 22987.480717454935,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023166223925006688",
            "extra": "mean: 43.501939698884726 usec\nrounds: 15008"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-chimp]",
            "value": 19788.572762861608,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023777036366080733",
            "extra": "mean: 50.534215477973206 usec\nrounds: 17793"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-chimp128]",
            "value": 16423.204707425324,
            "unit": "iter/sec",
            "range": "stddev: 0.000002791220897722096",
            "extra": "mean: 60.88945597492772 usec\nrounds: 14753"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=1000-patas]",
            "value": 29490.499270568813,
            "unit": "iter/sec",
            "range": "stddev: 0.000001983384190305941",
            "extra": "mean: 33.90922584338844 usec\nrounds: 21785"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-gorilla]",
            "value": 2140.8434161068158,
            "unit": "iter/sec",
            "range": "stddev: 0.000007189827064915999",
            "extra": "mean: 467.1056241088982 usec\nrounds: 1543"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-chimp]",
            "value": 2003.0839807146867,
            "unit": "iter/sec",
            "range": "stddev: 0.000011799903626020723",
            "extra": "mean: 499.23019185806015 usec\nrounds: 1965"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-chimp128]",
            "value": 1657.3153388104206,
            "unit": "iter/sec",
            "range": "stddev: 0.000008663562551935277",
            "extra": "mean: 603.3854732303238 usec\nrounds: 1625"
          },
          {
            "name": "bench/test_bench.py::test_decode[monotonic-n=10000-patas]",
            "value": 3122.7694307996585,
            "unit": "iter/sec",
            "range": "stddev: 0.00000844665002257052",
            "extra": "mean: 320.2285734377534 usec\nrounds: 3057"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-gorilla]",
            "value": 81285.97619697978,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010684789033217324",
            "extra": "mean: 12.302245070868146 usec\nrounds: 57363"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-chimp]",
            "value": 88419.28816329631,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010027008860093705",
            "extra": "mean: 11.30974949892335 usec\nrounds: 64355"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-chimp128]",
            "value": 88368.34293439744,
            "unit": "iter/sec",
            "range": "stddev: 9.684236820189228e-7",
            "extra": "mean: 11.316269682032809 usec\nrounds: 67079"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=100-patas]",
            "value": 373286.2757420254,
            "unit": "iter/sec",
            "range": "stddev: 5.889529142360919e-7",
            "extra": "mean: 2.6789090973467515 usec\nrounds: 141184"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-gorilla]",
            "value": 7758.355727419651,
            "unit": "iter/sec",
            "range": "stddev: 0.00000384796352444946",
            "extra": "mean: 128.89329068346157 usec\nrounds: 6526"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-chimp]",
            "value": 8442.589708417117,
            "unit": "iter/sec",
            "range": "stddev: 0.000003697742817217432",
            "extra": "mean: 118.44706832111207 usec\nrounds: 8138"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-chimp128]",
            "value": 8414.315911947417,
            "unit": "iter/sec",
            "range": "stddev: 0.000004617905997597038",
            "extra": "mean: 118.84507433101106 usec\nrounds: 8072"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=1000-patas]",
            "value": 28973.31883627175,
            "unit": "iter/sec",
            "range": "stddev: 0.000002177099217718375",
            "extra": "mean: 34.51451335799675 usec\nrounds: 22758"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-gorilla]",
            "value": 771.8299584136327,
            "unit": "iter/sec",
            "range": "stddev: 0.000011243060687426764",
            "extra": "mean: 1.2956221627563311 msec\nrounds: 682"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-chimp]",
            "value": 847.1809158188581,
            "unit": "iter/sec",
            "range": "stddev: 0.000012721672276040286",
            "extra": "mean: 1.180385418660466 msec\nrounds: 836"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-chimp128]",
            "value": 847.0422391678616,
            "unit": "iter/sec",
            "range": "stddev: 0.000011864208760567982",
            "extra": "mean: 1.180578669822186 msec\nrounds: 845"
          },
          {
            "name": "bench/test_bench.py::test_decode[random-n=10000-patas]",
            "value": 2703.552291340691,
            "unit": "iter/sec",
            "range": "stddev: 0.000008072649350254389",
            "extra": "mean: 369.88372786534865 usec\nrounds: 2609"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-gorilla]",
            "value": 89845.32853951631,
            "unit": "iter/sec",
            "range": "stddev: 0.000001145639353769553",
            "extra": "mean: 11.130239226184965 usec\nrounds: 58614"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-chimp]",
            "value": 97384.86232473364,
            "unit": "iter/sec",
            "range": "stddev: 9.65864807433777e-7",
            "extra": "mean: 10.268536363130657 usec\nrounds: 68696"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-chimp128]",
            "value": 97366.54386052223,
            "unit": "iter/sec",
            "range": "stddev: 9.53863249460568e-7",
            "extra": "mean: 10.270468277404424 usec\nrounds: 70943"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=100-patas]",
            "value": 375123.59547271807,
            "unit": "iter/sec",
            "range": "stddev: 5.377185425530329e-7",
            "extra": "mean: 2.665788055107101 usec\nrounds: 150558"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-gorilla]",
            "value": 8495.539338807952,
            "unit": "iter/sec",
            "range": "stddev: 0.000003694874157394464",
            "extra": "mean: 117.70883049554739 usec\nrounds: 6460"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-chimp]",
            "value": 9331.18031941771,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033201344784316794",
            "extra": "mean: 107.16757856656687 usec\nrounds: 8986"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-chimp128]",
            "value": 9207.92083276859,
            "unit": "iter/sec",
            "range": "stddev: 0.000003986950403740089",
            "extra": "mean: 108.60215005772646 usec\nrounds: 8630"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=1000-patas]",
            "value": 28926.884306929776,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020022660090631265",
            "extra": "mean: 34.56991736093881 usec\nrounds: 22568"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-gorilla]",
            "value": 844.5516663234913,
            "unit": "iter/sec",
            "range": "stddev: 0.00001003874885547836",
            "extra": "mean: 1.1840601823133066 msec\nrounds: 735"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-chimp]",
            "value": 931.6594359296454,
            "unit": "iter/sec",
            "range": "stddev: 0.000009846047221510092",
            "extra": "mean: 1.0733535897719555 msec\nrounds: 919"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-chimp128]",
            "value": 926.8822089029223,
            "unit": "iter/sec",
            "range": "stddev: 0.000011764070777175802",
            "extra": "mean: 1.0788857423249298 msec\nrounds: 912"
          },
          {
            "name": "bench/test_bench.py::test_decode[sine-n=10000-patas]",
            "value": 2667.2024676422607,
            "unit": "iter/sec",
            "range": "stddev: 0.0000072863135406119",
            "extra": "mean: 374.9246681238919 usec\nrounds: 2516"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-gorilla]",
            "value": 87128.03309879942,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013090245014075096",
            "extra": "mean: 11.477362272898358 usec\nrounds: 49609"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-chimp]",
            "value": 93556.00812671028,
            "unit": "iter/sec",
            "range": "stddev: 9.304132425490704e-7",
            "extra": "mean: 10.688784397957864 usec\nrounds: 44443"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-chimp128]",
            "value": 92316.01614344468,
            "unit": "iter/sec",
            "range": "stddev: 9.503010089553984e-7",
            "extra": "mean: 10.832356526804148 usec\nrounds: 52285"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=100-patas]",
            "value": 373259.1694577272,
            "unit": "iter/sec",
            "range": "stddev: 5.116595394316142e-7",
            "extra": "mean: 2.6791036411853058 usec\nrounds: 148744"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-gorilla]",
            "value": 8552.719577220256,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032656336183303626",
            "extra": "mean: 116.92187391054541 usec\nrounds: 7114"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-chimp]",
            "value": 9342.014878414311,
            "unit": "iter/sec",
            "range": "stddev: 0.000003569978051066665",
            "extra": "mean: 107.04328916351902 usec\nrounds: 8407"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-chimp128]",
            "value": 9240.77665789009,
            "unit": "iter/sec",
            "range": "stddev: 0.000004056598554833834",
            "extra": "mean: 108.2160122489451 usec\nrounds: 8817"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=1000-patas]",
            "value": 28428.43728901031,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020285848042712554",
            "extra": "mean: 35.17604537434683 usec\nrounds: 24375"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-gorilla]",
            "value": 875.3463182786858,
            "unit": "iter/sec",
            "range": "stddev: 0.000012227363139869088",
            "extra": "mean: 1.142404987738382 msec\nrounds: 734"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-chimp]",
            "value": 950.9844937980015,
            "unit": "iter/sec",
            "range": "stddev: 0.000010568102758996094",
            "extra": "mean: 1.0515418563832124 msec\nrounds: 940"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-chimp128]",
            "value": 942.517004435322,
            "unit": "iter/sec",
            "range": "stddev: 0.000010941407386673402",
            "extra": "mean: 1.0609888153679699 msec\nrounds: 937"
          },
          {
            "name": "bench/test_bench.py::test_decode[walk-n=10000-patas]",
            "value": 2840.3933866648335,
            "unit": "iter/sec",
            "range": "stddev: 0.000007596264999833293",
            "extra": "mean: 352.0639094200229 usec\nrounds: 2484"
          }
        ]
      }
    ]
  }
}