window.BENCHMARK_DATA = {
  "lastUpdate": 1773490284209,
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
      }
    ]
  }
}