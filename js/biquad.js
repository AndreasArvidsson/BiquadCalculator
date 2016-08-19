
//http://dsp.stackexchange.com/questions/16885/how-do-i-manually-plot-the-frequency-response-of-a-bandpass-butterworth-filter-i/16911#16911
//http://www.earlevel.com/main/2003/03/02/the-bilinear-z-transform/
//http://www.musicdsp.org/files/Audio-EQ-Cookbook.txt

var Biquad = {};

+function () {
    "use strict";

    function miniDspTransform(coefficients) {
        //Neccesary for minidsp.
        coefficients.a1 *= -1;
        coefficients.a2 *= -1;
    }

    function normalize(coefficients) {
        coefficients.b0 /= coefficients.a0;
        coefficients.b1 /= coefficients.a0;
        coefficients.b2 /= coefficients.a0;
        coefficients.a1 /= coefficients.a0;
        coefficients.a2 /= coefficients.a0;
        coefficients.a0 = 1;
    }

    function getEmpty() {
        return {
            a0: 1,
            a1: 0,
            a2: 0,
            b0: 1,
            b1: 0,
            b2: 0
        };
    }

    function get1Order(w0, lowPass, isMiniDSP) {
        var coefficients = {};
        if (lowPass) {
            coefficients.a0 = Math.cos(w0) + Math.sin(w0) + 1;
            coefficients.a1 = Math.sin(w0) - Math.cos(w0) - 1;
            coefficients.b0 = Math.sin(w0);
            coefficients.b1 = Math.sin(w0);
        } else {
            coefficients.a0 = Math.cos(w0) + Math.sin(w0) + 1;
            coefficients.a1 = Math.sin(w0) - Math.cos(w0) - 1;
            coefficients.b0 = Math.cos(w0) + 1;
            coefficients.b1 = -(Math.cos(w0) + 1);
        }
        coefficients.b2 = 0;
        coefficients.a2 = 0;
        normalize(coefficients);
        if (isMiniDSP) {
            miniDspTransform(coefficients);
        }
        return coefficients;
    }

    function get2Order(w0, lowPass, q, isMiniDSP) {
        var alpha = Math.sin(w0) / (2 * q);
        var coefficients = {};
        if (lowPass) {
            coefficients.a0 = 1 + alpha;
            coefficients.a1 = -2 * Math.cos(w0);
            coefficients.a2 = 1 - alpha;
            coefficients.b0 = (1 - Math.cos(w0)) / 2;
            coefficients.b1 = 1 - Math.cos(w0);
            coefficients.b2 = (1 - Math.cos(w0)) / 2;
        } else {
            coefficients.a0 = 1 + alpha;
            coefficients.a1 = -2 * Math.cos(w0);
            coefficients.a2 = 1 - alpha;
            coefficients.b0 = (1 + Math.cos(w0)) / 2;
            coefficients.b1 = -(1 + Math.cos(w0));
            coefficients.b2 = (1 + Math.cos(w0)) / 2;
        }
        normalize(coefficients);
        if (isMiniDSP) {
            miniDspTransform(coefficients);
        }
        return coefficients;
    }

    Biquad.calc = function (request) {
        return calc(request.lowPass, request.fs, request.f0, request.order, request.q, request.miniDSP, request.onlyFirstOrder);
    };

    function calc(lowPass, fs, f0, order, qList, isMiniDSP, onlyFirstOrder) {
        var w0 = 2 * Math.PI * f0 / fs;

        var qIndex = 0;
        var coefficients = [];

        if (onlyFirstOrder) {
            while (order > 0) {
                coefficients.push(get1Order(w0, lowPass, isMiniDSP));
                --order;
            }
        } else {
            //Odd filter order. Add first order coefficients first.
            if (order % 2 !== 0) {
                coefficients.push(get1Order(w0, lowPass, isMiniDSP));
                --order;
                ++qIndex;
            }
            //Add all second order coefficients.
            while (order > 0) {
                var q = qList[qIndex++];
                coefficients.push(get2Order(w0, lowPass, q, isMiniDSP));
                order -= 2;
            }
        }

        //Each LP/HP filter consists of 4 biquad sections. Add default ones.
        while (coefficients.length < 4) {
            coefficients.push(getEmpty());
        }
        return coefficients;
    }

    function calcAmplitude(freq, fs, a0, a1, a2, b0, b1, b2) {

        var w = 2.0 * Math.PI * freq / fs;

        var numerator = b0 * b0 + b1 * b1 + b2 * b2 + 2 * b1 * (b0 + b2) * Math.cos(w) + 2 * b0 * b2 * Math.cos(2 * w);
        var denominator = a0 * a0 + a1 * a1 + a2 * a2 + 2 * a1 * (a0 + a2) * Math.cos(w) + 2 * a0 * a2 * Math.cos(2 * w);
//        console.log(numerator, denominator, numerator / denominator);
        var amplitude = Math.sqrt(numerator / denominator);
        console.log(freq, amplitude, 20 * Math.log10(amplitude));
    }

    Biquad.getFrequencies = function (x, biquads, fs, isMiniDSP) {
//        //BW1
//        var a0 = 1;
//        var a1 = 0.9869949626815512;
//        var a2 = 0;
//        var b0 = 0.006502518659224336;
//        var b1 = 0.006502518659224336;
//        var b2 = 0;
//
//        //BW2
////        var a1 = 1.981488509144573;
////        var a2 = -0.9816582826171341;
////        var b0 = 0.000042443368140232844;
////        var b1 = 0.00008488673628046569;
////        var b2 = 0.000042443368140232844;
//
//        calcAmplitude(0, fs, a0, a1, a2, b0, b1, b2);
//        calcAmplitude(100, fs, a0, a1, a2, b0, b1, b2);
//
//        return [];

        var coefficients = biquads[0];

        if (!isMiniDSP) {
            miniDspTransform(coefficients);
        }

        var a0 = coefficients.a0;
//        a0 = 1;
//        console.log(a0);
        var a1 = coefficients.a1;
        var a2 = coefficients.a2;
        var b0 = coefficients.b0;
        var b1 = coefficients.b1;
        var b2 = coefficients.b2;

        var frequencyResponse = [];
        for (var i = 0; i < x.length; ++i) {
            var w = 2.0 * Math.PI * x[i] / fs;

            var numerator = b0 * b0 + b1 * b1 + b2 * b2 + 2.0 * (b0 * b1 + b1 * b2) * Math.cos(w) + 2.0 * b0 * b2 * Math.cos(2.0 * w);
            var denominator = 1.0 + a1 * a1 + a2 * a2 + 2.0 * (a1 + a1 * a2) * Math.cos(w) + 2.0 * a2 * Math.cos(2.0 * w);

            var numerator2 = b0 * b0 + b1 * b1 + b2 * b2 + 2 * b1 * (b0 + b2) * Math.cos(w) + 2 * b0 * b2 * Math.cos(2 * w);
            var denominator2 = a0 * a0 + a1 * a1 + a2 * a2 + 2 * a1 * (a0 + a2) * Math.cos(w) + 2 * a0 * a2 * Math.cos(2 * w);

            if (numerator !== numerator2 || denominator !== denominator2) {
                console.log("DIFF!!!");
            }

            var amplitude = Math.sqrt(numerator / denominator);

//            var phi = 4 * Math.pow(Math.sin(w / 2), 2);
//            console.log(Math.round(freqPoints[i]), w, phi);

//            frequencyResponse[i] = amplitude;
            console.log(x[i], amplitude, 20 * Math.log10(amplitude));
            frequencyResponse[i] = 20 * Math.log10(amplitude);
        }
        return frequencyResponse;
    };

}();


this.process = function (buffer) {
    //y[n] = (b0/a0)*x[n] + (b1/a0)*x[n-1] + (b2/a0)*x[n-2]
    //       - (a1/a0)*y[n-1] - (a2/a0)*y[n-2]

    var len = buffer.length;
    var output = new Float32Array(len);

    for (var i = 0; i < buffer.length; i++) {
        output[i] = this.b0a0 * buffer[i] + this.b1a0 * this.x_1_l + this.b2a0 * this.x_2_l - this.a1a0 * this.y_1_l - this.a2a0 * this.y_2_l;
        this.y_2_l = this.y_1_l;
        this.y_1_l = output[i];
        this.x_2_l = this.x_1_l;
        this.x_1_l = buffer[i];
    }

    return output;
};