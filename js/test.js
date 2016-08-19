
+function () {
    "use strict";

    var exp = [];

    function add(name, str) {
        var lines = str.split(",");
        var exprected = [{}, {}, {}, {}];
        for (var i = 0; i < lines.length; ++i) {
            var line = lines[i];
            if (line.indexOf("=") !== -1) {
                var index = Math.floor(i / 6);
                var parts = line.split("=");
                var id = parts[0].trim();
                var value = Number(parts[1].trim());
                exprected[index][id] = value;
            }
        }
        exp[name] = exprected;
    }

    add("bw6LP", "biquad1, \
    b0=0.006502518659224337, \
    b1=0.006502518659224337, \
    b2=0, \
    a1=0.9869949626815515, \
    a2=0, \
    biquad2, \
    b0=1, \
    b1=0, \
    b2=0, \
    a1=0, \
    a2=0, \
    biquad3, \
    b0=1, \
    b1=0, \
    b2=0, \
    a1=0, \
    a2=0, \
    biquad4, \
    b0=1, \
    b1=0, \
    b2=0, \
    a1=0, \
    a2=0,");

    add("bw12LP", "biquad1, \
    b0=0.000042443368140115214, \
    b1=0.00008488673628023043, \
    b2=0.000042443368140115214, \
    a1=1.9814885091390815, \
    a2=-0.9816582826116418, \
    biquad2, \
    b0=1, \
    b1=0, \
    b2=0, \
    a1=0, \
    a2=0, \
    biquad3, \
    b0=1, \
    b1=0, \
    b2=0, \
    a1=0, \
    a2=0, \
    biquad4, \
    b0=1, \
    b1=0, \
    b2=0, \
    a1=0, \
    a2=0, ");

    add("bw18LP", "biquad1, \
    b0=0.006502518659224337, \
    b1=0.006502518659224337, \
    b2=0, \
    a1=0.9869949626815515, \
    a2=0, \
    biquad2, \
    b0=0.00004255768157629896, \
    b1=0.00008511536315259792, \
    b2=0.00004255768157629896, \
    a1=1.9868252854168391, \
    a2=-0.9869955161431444, \
    biquad3, \
    b0=1, \
    b1=0, \
    b2=0, \
    a1=0, \
    a2=0, \
    biquad4, \
    b0=1, \
    b1=0, \
    b2=0, \
    a1=0, \
    a2=0,");

    add("bw24LP", "biquad1, \
    b0=0.000042324375459811486, \
    b1=0.00008464875091962297, \
    b2=0.000042324375459811486, \
    a1=1.975933280159253, \
    a2=-0.9761025776610925, \
    biquad2, \
    b0=0.0000426227085455773, \
    b1=0.0000852454170911546, \
    b2=0.0000426227085455773, \
    a1=1.9898610999163815, \
    a2=-0.9900315907505638, \
    biquad3, \
    b0=1, \
    b1=0, \
    b2=0, \
    a1=0, \
    a2=0, \
    biquad4, \
    b0=1, \
    b1=0, \
    b2=0, \
    a1=0, \
    a2=0,");

    add("bw30LP", "biquad1, \
    b0=0.006502518659224337, \
    b1=0.006502518659224337, \
    b2=0, \
    a1=0.9869949626815515, \
    a2=0, \
    biquad2, \
    b0=0.00004238734352157164, \
    b1=0.00008477468704314328, \
    b2=0.00004238734352157164, \
    a1=1.978872973597545, \
    a2=-0.9790425229716313, \
    biquad3, \
    b0=0.00004266364250969608, \
    b1=0.00008532728501939217, \
    b2=0.00004266364250969608, \
    a1=1.9917721211922406, \
    a2=-0.9919427757622793, \
    biquad4, \
    b0=1, \
    b1=0, \
    b2=0, \
    a1=0, \
    a2=0,");

    add("bw36LP", "biquad1, \
    b0=0.0000423013722789333, \
    b1=0.0000846027445578666, \
    b2=0.0000423013722789333, \
    a1=1.974859365892287, \
    a2=-0.9750285713814025, \
    biquad2, \
    b0=0.000042443368140115214, \
    b1=0.00008488673628023043, \
    b2=0.000042443368140115214, \
    a1=1.9814885091390815, \
    a2=-0.9816582826116418, \
    biquad3, \
    b0=0.000042691580895204234, \
    b1=0.00008538316179040847, \
    b2=0.000042691580895204234, \
    a1=1.9930764377975, \
    a2=-0.9932472041210808, \
    biquad4, \
    b0=1, \
    b1=0, \
    b2=0, \
    a1=0, \
    a2=0,");

    add("bw42LP", "biquad1, \
    b0=0.006502518659224337, \
    b1=0.006502518659224337, \
    b2=0, \
    a1=0.9869949626815515, \
    a2=0, \
    biquad2, \
    b0=0.00004233692022878061, \
    b1=0.00008467384045756122, \
    b2=0.00004233692022878061, \
    a1=1.9765189385707171, \
    a2=-0.9766882862516324, \
    biquad3, \
    b0=0.000042489446875525875, \
    b1=0.00008497889375105175, \
    b2=0.000042489446875525875, \
    a1=1.9836397164709425, \
    a2=-0.9838096742584447, \
    biquad4, \
    b0=0.0000427118059336175, \
    b1=0.000085423611867235, \
    b2=0.0000427118059336175, \
    a1=1.9940206531830578, \
    a2=-0.9941915004067923,");

    add("bw48LP", "biquad1, \
    b0=0.00004229324877274154, \
    b1=0.00008458649754548308, \
    b2=0.00004229324877274154, \
    a1=1.974480116203154, \
    a2=-0.9746492891982449, \
    biquad2, \
    b0=0.00004237502018629462, \
    b1=0.00008475004037258924, \
    b2=0.00004237502018629462, \
    a1=1.9782976529216487, \
    a2=-0.978467153002394, \
    biquad3, \
    b0=0.0000425269489579104, \
    b1=0.0000850538979158208, \
    b2=0.0000425269489579104, \
    a1=1.9853905187415917, \
    a2=-0.9855606265374234, \
    biquad4, \
    b0=0.000042727102784581776, \
    b1=0.00008545420556916355, \
    b2=0.000042727102784581776, \
    a1=1.9947347938307005, \
    a2=-0.9949057022418387,");

    add("bw6HP", "biquad5, \
    b0=0.9934974813407758, \
    b1=-0.9934974813407758, \
    b2=0, \
    a1=0.9869949626815515, \
    a2=0, \
    biquad6, \
    b0=1, \
    b1=0, \
    b2=0, \
    a1=0, \
    a2=0, \
    biquad7, \
    b0=1, \
    b1=0, \
    b2=0, \
    a1=0, \
    a2=0, \
    biquad8, \
    b0=1, \
    b1=0, \
    b2=0, \
    a1=0,  \
    a2=0");

    add("bw12HP", "biquad5, \
    b0=0.9907866979376808, \
    b1=-1.9815733958753616, \
    b2=0.9907866979376808, \
    a1=1.9814885091390815, \
    a2=-0.9816582826116418, \
    biquad6, \
    b0=1, \
    b1=0, \
    b2=0, \
    a1=0, \
    a2=0, \
    biquad7, \
    b0=1, \
    b1=0, \
    b2=0, \
    a1=0, \
    a2=0, \
    biquad8, \
    b0=1, \
    b1=0, \
    b2=0, \
    a1=0, \
    a2=0");

    add("bw18HP", "biquad5, \
    b0=0.9934974813407758, \
    b1=-0.9934974813407758, \
    b2=0, \
    a1=0.9869949626815515, \
    a2=0, \
    biquad6, \
    b0=0.9934552003899958, \
    b1=-1.9869104007799916, \
    b2=0.9934552003899958, \
    a1=1.9868252854168391, \
    a2=-0.9869955161431444, \
    biquad7, \
    b0=1, \
    b1=0, \
    b2=0, \
    a1=0, \
    a2=0, \
    biquad8, \
    b0=1, \
    b1=0, \
    b2=0, \
    a1=0, \
    a2=0");

    add("bw24HP", "biquad5, \
    b0=0.9880089644550863, \
    b1=-1.9760179289101727, \
    b2=0.9880089644550863, \
    a1=1.975933280159253, \
    a2=-0.9761025776610925, \
    biquad6, \
    b0=0.9949731726667363, \
    b1=-1.9899463453334727, \
    b2=0.9949731726667363, \
    a1=1.9898610999163815, \
    a2=-0.9900315907505638, \
    biquad7, \
    b0=1, \
    b1=0, \
    b2=0, \
    a1=0, \
    a2=0, \
    biquad8, \
    b0=1, \
    b1=0, \
    b2=0, \
    a1=0, \
    a2=0");

    add("bw30HP", "biquad5, \
    b0=0.9934974813407758, \
    b1=-0.9934974813407758, \
    b2=0, \
    a1=0.9869949626815515, \
    a2=0, \
    biquad6, \
    b0=0.9894788741422941, \
    b1=-1.9789577482845881, \
    b2=0.9894788741422941, \
    a1=1.978872973597545, \
    a2=-0.9790425229716313, \
    biquad7, \
    b0=0.9959287242386299, \
    b1=-1.9918574484772598, \
    b2=0.9959287242386299, \
    a1=1.9917721211922406, \
    a2=-0.9919427757622793, \
    biquad8, \
    b0=1, \
    b1=0, \
    b2=0, \
    a1=0, \
    a2=0");

    add("bw36HP", "biquad5, \
    b0=0.9874719843184224, \
    b1=-1.9749439686368448, \
    b2=0.9874719843184224, \
    a1=1.974859365892287, \
    a2=-0.9750285713814025, \
    biquad6, \
    b0=0.9907866979376808, \
    b1=-1.9815733958753616, \
    b2=0.9907866979376808, \
    a1=1.9814885091390815, \
    a2=-0.9816582826116418, \
    biquad7, \
    b0=0.9965809104796453, \
    b1=-1.9931618209592905, \
    b2=0.9965809104796453, \
    a1=1.9930764377975, \
    a2=-0.9932472041210808, \
    biquad8, \
    b0=1, \
    b1=0, \
    b2=0, \
    a1=0, \
    a2=0");

    add("bw42HP", "biquad5, \
    b0=0.9934974813407758, \
    b1=-0.9934974813407758, \
    b2=0, \
    a1=0.9869949626815515, \
    a2=0, \
    biquad6, \
    b0=0.9883018062055874, \
    b1=-1.9766036124111748, \
    b2=0.9883018062055874, \
    a1=1.9765189385707171, \
    a2=-0.9766882862516324, \
    biquad7, \
    b0=0.9918623476823468, \
    b1=-1.9837246953646936, \
    b2=0.9918623476823468, \
    a1=1.9836397164709425, \
    a2=-0.9838096742584447, \
    biquad8, \
    b0=0.9970530383974625, \
    b1=-1.994106076794925, \
    b2=0.9970530383974625, \
    a1=1.9940206531830578, \
    a2=-0.9941915004067923");

    add("bw48HP", "biquad5, \
    b0=0.9872823513503497, \
    b1=-1.9745647027006994, \
    b2=0.9872823513503497, \
    a1=1.974480116203154, \
    a2=-0.9746492891982449, \
    biquad6, \
    b0=0.9891912014810106, \
    b1=-1.9783824029620212, \
    b2=0.9891912014810106, \
    a1=1.9782976529216487, \
    a2=-0.978467153002394, \
    biquad7, \
    b0=0.9927377863197537, \
    b1=-1.9854755726395075, \
    b2=0.9927377863197537, \
    a1=1.9853905187415917, \
    a2=-0.9855606265374234, \
    biquad8, \
    b0=0.9974101240181348, \
    b1=-1.9948202480362696, \
    b2=0.9974101240181348, \
    a1=1.9947347938307005, \
    a2=-0.9949057022418387");


    add("lr12LP", "biquad1, \
    b0=0.006502518659224337, \
    b1=0.006502518659224337, \
    b2=0, \
    a1=0.9869949626815515, \
    a2=0, \
    biquad2, \
    b0=0.006502518659224337, \
    b1=0.006502518659224337, \
    b2=0, \
    a1=0.9869949626815515, \
    a2=0, \
    biquad3, \
    b0=1, \
    b1=0, \
    b2=0, \
    a1=0, \
    a2=0, \
    biquad4, \
    b0=1, \
    b1=0, \
    b2=0, \
    a1=0, \
    a2=0,");

    add("lr24LP", "biquad1, \
    b0=0.000042443368140115214, \
    b1=0.00008488673628023043, \
    b2=0.000042443368140115214, \
    a1=1.9814885091390815, \
    a2=-0.9816582826116418, \
    biquad2, \
    b0=0.000042443368140115214, \
    b1=0.00008488673628023043, \
    b2=0.000042443368140115214, \
    a1=1.9814885091390815, \
    a2=-0.9816582826116418, \
    biquad3, \
    b0=1, \
    b1=0, \
    b2=0, \
    a1=0, \
    a2=0, \
    biquad4, \
    b0=1, \
    b1=0, \
    b2=0, \
    a1=0, \
    a2=0,");

    add("lr48LP", "biquad1, \
    b0=0.000042324375459811486, \
    b1=0.00008464875091962297, \
    b2=0.000042324375459811486, \
    a1=1.975933280159253, \
    a2=-0.9761025776610925, \
    biquad2, \
    b0=0.000042324375459811486, \
    b1=0.00008464875091962297, \
    b2=0.000042324375459811486, \
    a1=1.975933280159253, \
    a2=-0.9761025776610925, \
    biquad3, \
    b0=0.0000426227085455773, \
    b1=0.0000852454170911546, \
    b2=0.0000426227085455773, \
    a1=1.9898610999163815, \
    a2=-0.9900315907505638, \
    biquad4, \
    b0=0.0000426227085455773, \
    b1=0.0000852454170911546, \
    b2=0.0000426227085455773, \
    a1=1.9898610999163815, \
    a2=-0.9900315907505638,");

    add("lr12HP", "biquad5, \
    b0=0.9934974813407758, \
    b1=-0.9934974813407758, \
    b2=0, \
    a1=0.9869949626815515, \
    a2=0, \
    biquad6, \
    b0=0.9934974813407758, \
    b1=-0.9934974813407758, \
    b2=0, \
    a1=0.9869949626815515, \
    a2=0, \
    biquad7, \
    b0=1, \
    b1=0, \
    b2=0, \
    a1=0, \
    a2=0, \
    biquad8, \
    b0=1, \
    b1=0, \
    b2=0, \
    a1=0, \
    a2=0");

    add("lr24HP", "biquad5, \
    b0=0.9907866979376808, \
    b1=-1.9815733958753616, \
    b2=0.9907866979376808, \
    a1=1.9814885091390815, \
    a2=-0.9816582826116418, \
    biquad6, \
    b0=0.9907866979376808, \
    b1=-1.9815733958753616, \
    b2=0.9907866979376808, \
    a1=1.9814885091390815, \
    a2=-0.9816582826116418, \
    biquad7, \
    b0=1, \
    b1=0, \
    b2=0, \
    a1=0, \
    a2=0, \
    biquad8, \
    b0=1, \
    b1=0, \
    b2=0, \
    a1=0, \
    a2=0");

    add("lr48HP", "biquad5, \
    b0=0.9880089644550863, \
    b1=-1.9760179289101727, \
    b2=0.9880089644550863, \
    a1=1.975933280159253, \
    a2=-0.9761025776610925, \
    biquad6, \
    b0=0.9880089644550863, \
    b1=-1.9760179289101727, \
    b2=0.9880089644550863, \
    a1=1.975933280159253, \
    a2=-0.9761025776610925, \
    biquad7, \
    b0=0.9949731726667363, \
    b1=-1.9899463453334727, \
    b2=0.9949731726667363, \
    a1=1.9898610999163815, \
    a2=-0.9900315907505638, \
    biquad8, \
    b0=0.9949731726667363, \
    b1=-1.9899463453334727, \
    b2=0.9949731726667363, \
    a1=1.9898610999163815, \
    a2=-0.9900315907505638");

    var fs = 48000;
    var freq = 100;
    var miniDSP = true;

    var bw = Filters.getBW();
    var lr = Filters.getLR();



    var precision = 5;

    function round(value) {
        var multiplier = Math.pow(10, precision);
        return (Math.round(value * multiplier) / multiplier);
    }

    function equals(a, b) {
        return a === b;
    }

    function attest(name, found, expected) {
        found = round(found);
        expected = round(expected);
        if (!equals(found, expected)) {
            console.error(name + " Expected: " + expected + ". Found: " + found);
        }
    }

    function test(lowPass, order, expected) {
        console.log(order.order + (lowPass ? " LP" : " HP"));
        var found = Biquad.calc({
            lowPass: lowPass,
            fs: fs,
            f0: freq,
            order: order.order,
            q: order.q,
            miniDSP: miniDSP,
            onlyFirstOrder: order.onlyFirstOrder
        });
        for (var i = 0; i < 4; ++i) {
            attest("b0", found[i].b0, expected[i].b0);
            attest("b1", found[i].b1, expected[i].b1);
            attest("b2", found[i].b2, expected[i].b2);
            attest("a1", found[i].a1, expected[i].a1);
            attest("a2", found[i].a2, expected[i].a2);
        }
    }

    function doTest() {
        console.log("Testing");
        
        console.log("Butterworth Low pass");
        for (var i = 0; i < 8; ++i) {
            test(true, bw.orders[i], exp["bw" + ((i + 1) * 6) + "LP"]);
        }

        console.log("Butterworth High pass");
        for (var i = 0; i < 8; ++i) {
            test(false, bw.orders[i], exp["bw" + ((i + 1) * 6) + "HP"]);
        }

        console.log("Linkwitz-Riley Low pass");
        for (var i = 0; i < 3; ++i) {
            test(true, lr.orders[i], exp["lr" + (6 * Math.pow(2, (i + 1))) + "LP"]);
        }
    }

//    doTest();

}();
