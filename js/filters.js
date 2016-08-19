
function Filter(name, orders, editable) {
    this.name = name;
    this.orders = orders;
}

function FilterOrder(order, q, editable, onlyFirstOrder) {
    this.order = order;
    this.q = q;
    this.editable = editable ? editable : [false, false, false, false];
    this.slope = order * 6;
    this.onlyFirstOrder = onlyFirstOrder === true;
    while (this.q.length < 4) {
        this.q.push(null);
    }
    while (this.editable.length < 4) {
        this.editable.push(false);
    }
}

var Filters = {};

+function () {
    "use strict";

    //Off, no filter active
    var off = new Filter("Off", []);

    //ButterWorth
    var orders = [];
    orders.push(new FilterOrder(1, []));
    orders.push(new FilterOrder(2, [Math.sqrt(0.5)]));
    orders.push(new FilterOrder(3, [null, 1.0]));
    orders.push(new FilterOrder(4, [1 / 1.8478, 1 / 0.7654]));
    orders.push(new FilterOrder(5, [null, 1 / 0.6180, 1 / 1.6180]));
    orders.push(new FilterOrder(6, [1 / 1.9319, Math.sqrt(0.5), 1 / 0.5176]));
    orders.push(new FilterOrder(7, [null, 1 / 1.8019, 1 / 1.2470, 1 / 0.4450]));
    orders.push(new FilterOrder(8, [1 / 1.96161, 1 / 1.6629, 1 / 1.1111, 1 / 0.3902]));
    var bw = new Filter("Butterworth", orders);

    //Linkwitz-Riley
    orders = [];
    orders.push(new FilterOrder(2, [], [], true));
    orders.push(new FilterOrder(4, [Math.sqrt(0.5), Math.sqrt(0.5)]));
    orders.push(new FilterOrder(8, [1 / 1.8478, 1 / 0.7654, 1 / 1.8478, 1 / 0.7654]));
    var lr = new Filter("Linkwitz-Riley", orders);

    //Custom
    Filters.getCustom = function () {
        var orders = [];
        var q = [];
        orders.push(new FilterOrder(1, q, []));
        orders.push(new FilterOrder(2, q, [true]));
        orders.push(new FilterOrder(3, q, [false, true]));
        orders.push(new FilterOrder(4, q, [true, true]));
        orders.push(new FilterOrder(5, q, [false, true, true]));
        orders.push(new FilterOrder(6, q, [true, true, true]));
        orders.push(new FilterOrder(7, q, [false, true, true, true]));
        orders.push(new FilterOrder(8, q, [true, true, true, true]));
        return new Filter("Custom", orders);
    };

    Filters.getOff = function () {
        return off;
    };

    Filters.getBW = function () {
        return bw;
    };

    Filters.getLR = function () {
        return lr;
    };

    Filters.getAll = function () {
        return [off, bw, lr, Filters.getCustom()];
    };

}();