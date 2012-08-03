(function () {
    print("Retrieving original operation");
    var get = root.object.__get__;

    print("Replacing the semantic of the operation");
    root.object.__get__ = function (name) {
         @{["code",
            "if (name === \"__map__\")" +  
            "   return this.map;" + 

            "var offset;" + 
            "var obj = this;" + 

            "while (obj !== null) {" + 
            "    offset = send(obj.map, \"lookup\", name);" + 

            "    if (offset !== undefined)" + 
            "       return obj.values[offset];" + 
            "   else" + 
            "       obj = obj.prototype;" + 

            "}"
        ]}@

        throw "ReferenceError: property '" + name + "' not found";
    }

    print("Testing the semantic of the operation");
    try {
        {foo:0}.bar;        
        print("Should not be reached");
    } catch (e) {
        print(e);
    }

    print("Restauring the original behavior");
    root.object.__get__ = get;
    print({foo:0}.bar);
})();
