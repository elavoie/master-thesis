// Language: Implementation JS
(function () {
    var results = {
        __get__:0,
        __set__:0,
        __delete__:0
    };

    var getFn = root.object.get("__get__");
    var setFn = root.object.get("__set__");
    var deleteFn = root.object.get("__delete__");

    root.global.set("startInstrumentation", clos(function ($this, $closure) {
        root.object.set("__get__", clos(function ($this, $closure, name) {
            results.__get__++; 
            return getFn.call($this, name);
        }));

        root.object.set("__set__", clos(function ($this, $closure, name, value) {
            results.__set__++; 
            return setFn.call($this, name, value);
        }));

        root.object.set("__delete__", clos(function ($this, $closure, name) {
            results.__delete__++; 
            return deleteFn.call($this, name);
        }));
    }));

    root.global.set("stopInstrumentation", clos(function ($this, $closure) {
        root.object.set("__get__", getFn);
        root.object.set("__set__", setFn);
        root.object.set("__delete__", deleteFn);
    }));

    root.global.set("getInstrumentationResults", clos(function ($this, $closure) {
        var obj = root.object.create();
        obj.set("getNb", results.__get__);
        obj.set("setNb", results.__set__);
        obj.set("deleteNb", results.__delete__);
        obj.set("totalNb", results.__get__ + results.__set__ + results.__delete__);
        return obj;
    }));
})();


