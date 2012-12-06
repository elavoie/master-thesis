(codeCache0 = initState);
(dataCache0 = [0, "__new__",[]]);
(codeCache1 = initState);
(dataCache1 = [1,"__get__",["this","string"]]);
(codeCache2 = initState);
(dataCache2 = [2,"__new__",[]]);
(codeCache3 = initState);
(dataCache3 = [3,"__set__",["get","string","icSend"]]);
(codeCache4 = initState);
(dataCache4 = [4,"__set__",["get","string","number"]]);
(codeCache5 = initState);
(dataCache5 = [5,"foo",["get"]]);
(codeCache6 = initState);
(dataCache6 = [6,"__new__",[]]);
(codeCache7 = initState);
(dataCache7 = [7,"call",[]]);

// (function () { 
(codeCache7((codeCache6(
    root.function, dataCache6, 
    (new FunctionProxy(function ($this,$closure) {
        var o = undefined;
        var i = undefined;
        // var o = {};
        (o = (codeCache0(root.object, dataCache0, (root.object.create()))));
        // o.foo = ...
        (codeCache3(o, dataCache3, "foo", 
        //     ... function () { return this.bar; };
            (codeCache2(
                root.function, dataCache2, 
                (new FunctionProxy(function ($this,$closure) {
                    return (codeCache1($this, dataCache1, "bar"));
                }))))));
        // o.bar = 42;
        (codeCache4(o, dataCache4, "bar", 42));
        // for ...
        for ((i = 0); (i < 2); (i = (i + 1))) {
            // o.foo(); 
            (codeCache5(o, dataCache5));
        }

        // Not part of the original code, 
        // added to inspect the runtime after execution!
        print(codeCache1);
        print(codeCache5);
    }))
// })();
)), dataCache7, root.global));
