
var app = angular.module("app", ["angular++"]);

app.factory("filters", function () {
    return Filters;
});

app.factory("biquad", function () {
    return Biquad;
});

app.factory("data", function () {
    return {};
});

app.controller("common", function ($scope, $sce, data, biquad) {
    data.common = $scope;
    $scope.data = data;
    $scope.fs = 48000;
    $scope.miniDSP = true;
    $scope.result = "";
    $scope.children = ["low", "high"];
    $scope.graphView = false;

//    var graph = new AGraph("#graphCell", {
//        axes: {
//            x: {
//                label: "Frequency (Hz)",
//                legendValueFormatter: function (val) {
//                    return Math.round(val);
//                }
//            },
//            y: {
//                label: "Amplitude (dB)",
//                bounds: {
//                    min: null,
//                    max: null
//                }
//            }
//        },
//        graph: {
//            names: ["F", "A"]
//        }
//    });

    function showResult(biquads) {
        var end = ",<br>";
        var content = [];
        var index = -1;
        for (var i = 0; i < biquads.length; ++i) {
            content[++index] = "biquad";
            content[++index] = i + 1;
            content[++index] = end;
            content[++index] = "b0=";
            content[++index] = biquads[i].b0;
            content[++index] = end;
            content[++index] = "b1=";
            content[++index] = biquads[i].b1;
            content[++index] = end;
            content[++index] = "b2=";
            content[++index] = biquads[i].b2;
            content[++index] = end;
            content[++index] = "a1=";
            content[++index] = biquads[i].a1;
            content[++index] = end;
            content[++index] = "a2=";
            content[++index] = biquads[i].a2;
            if (i < biquads.length - 1) {
                content[++index] = end;
            }
        }
        $scope.result = $sce.trustAsHtml(content.join(""));

//        plotGraph(biquads);
    }

//    function plotGraph(biquads) {
//        var freqPoints = [10];
//        var index = -1;
//        var multi = Math.pow(2, 1 / 8);
//        for (var i = 0; i <= 20000; i += 100) {
//            freqPoints[++index] = i;
////            freqPoints[index] = freqPoints[index - 1] * multi;
////            ++index;
//        }
//
////        console.log(freqPoints);
//
//        var freqResponse = biquad.getFrequencies(freqPoints, biquads, $scope.fs, $scope.miniDSP);
//
//        graph.setData([freqPoints], [freqResponse]);
//    }

    function getFirstOrder(data) {
        var order = data.types[data.type].orders[data.order];
        return order ? order.onlyFirstOrder : false;
    }

    function getQ(data) {
        var order = data.types[data.type].orders[data.order];
        return order ? order.q : [];
    }

    function getOrder(data) {
        var order = data.types[data.type].orders[data.order];
        return order ? order.order : 0;
    }

    $scope.updateResult = function () {
        var request = {
            lowPass: true,
            fs: $scope.fs,
            miniDSP: $scope.miniDSP,
        };
        //Get low pass biquads.
        var data = $scope.data.low;
        request.f0 = data.freq;
        request.order = getOrder(data);
        request.q = getQ(data);
        request.onlyFirstOrder = getFirstOrder(data);
        var biquads = biquad.calc(request);

        //Get High pass biquads.
        data = $scope.data.high;
        request.f0 = data.freq;
        request.order = getOrder(data);
        request.q = getQ(data);
        request.onlyFirstOrder = getFirstOrder(data);
        biquads = biquads.concat(biquad.calc(request));
        showResult(biquads);
    };

    $scope.watchUpdate = function (expr) {
        $scope.$watch(expr, function (newValue, oldValue) {
            if (newValue !== oldValue) {
                $scope.updateResult();
            }
        });
    };

    $scope.watchUpdate("fs");
    $scope.watchUpdate("miniDSP");
});

app.controller("parent", function ($scope, filters, data) {
    $scope.types = filters.getAll();
    $scope.freq = 100;
    $scope.type = "0";
    $scope.order = "0";
    $scope.customQ = $scope.types[3].orders[0].q;

    $scope.watchUpdate = function (expr) {
        $scope.$watch(expr, function (newValue, oldValue) {
            if (newValue !== oldValue) {
                data.common.updateResult();
            }
        });
    };

    $scope.watchUpdate("type");
    $scope.watchUpdate("freq");
    $scope.watchUpdate("order");

    $scope.$watchCollection("customQ", function (newValue, oldValue) {
        if (newValue !== oldValue) {
            data.common.updateResult();
        }
    });

    $scope.disableQ = function (index) {
        var order = $scope.types[$scope.type].orders[$scope.order];
        var disable = order ? !order.editable[index] : true;
        //Clear custom text on hide.
        if (disable) {
            $scope.customQ[index] = null;
        }
        return disable;
    };

});

app.controller("child", function ($scope, $controller, data) {
    $controller("parent", {$scope: $scope});
    if (!data.low) {
        $scope.name = "Low pass";
        data.low = $scope;
    } else {
        data.high = $scope;
        $scope.name = "High pass";
        data.common.updateResult();
    }
});