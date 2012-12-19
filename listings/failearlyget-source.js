// Language: Source JS
(function () {
    print("Retrieving original operation");
    var get = Object.prototype.__get__;

    print("Replacing the semantic of the operation");
    Object.prototype.__get__ = function (name) {
        var obj = this;

        while (obj !== null) {
            if (obj.hasOwnProperty(name))
                return get.call(obj, name);

            obj = obj.getPrototype();
        }
        
        throw new Error("ReferenceError: property '" + name + "' not found");
    };

    print("Testing the semantic of the operation");
    try {
        ({}).bar;
        print("Should not be reached");
    } catch (e) {
        print(e);
    }

    print("Restauring the original behavior");
    Object.prototype.__get__ = get;
    print({}.bar);
})();