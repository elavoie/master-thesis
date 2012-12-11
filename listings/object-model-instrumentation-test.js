// Language: Source JS
(function () {
    var o = {};

    o.foo = 2;
    o.foo;
    delete o.foo;

    startInstrumentation();
    o.foo = 2;
    o.foo; o.foo;
    delete o.foo; delete o.foo; delete o.foo;
    stopInstrumentation();

    o.foo = 2;
    o.foo;
    delete o.foo;

    var results = getInstrumentationResults();
    for (var p in results) {
        print(p + ": " + results[p]);
    }
})();
