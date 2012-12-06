(function () {
    var o = {};
    o.foo = function () { return this.bar; };
    o.bar = 42;

    for (var i = 0; i < 2; ++i) {
        o.foo();
    }
})();
