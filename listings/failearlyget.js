// Language: Implementation JS
(function () {
    print("Retrieving original operation");
    var get = root.object.get("__get__");

    print("Replacing the semantics of the operation");
    root.object.set("__get__", clos(function ($this, $closure, name) {
        var obj = $this;

        while (obj !== null) {
            if (obj.has(name))
                return obj.get(name);

            obj = obj.getPrototype();
        }
        
        throw new Error("ReferenceError: property '" + name + "' not found");
    }));

    print("Testing the semantics of the operation");
    try {
        send(root.object.create(), "__get__", "bar");        
        print("Should not be reached");
    } catch (e) {
        print(e);
    }

    print("Restoring the original behavior");
    root.object.set("__get__", get);
    print(send(root.object.create(), "__get__", "bar"));
})();
