(function () {
    print("Remembering the old behavior");
    var ctor = root["function"].__ctor__; 

    print("Replacing the constructor behavior");
    root["function"].__ctor__ = function ()
    {
        var o = this.prototype.__new__();
        var r = this.call(o);

        if (r !== o)
            throw "--> Constructor did not return the 'this' object";
        
        return o;
    }

    print("Creating a new faulty constructor");
    function Foo()
    {
        this.foo = 42;
    }

    print("Calling the faulty constructor");
    try
    {
        new Foo();
    } catch(e)
    {
        print(e);
    }

    print("Restauring the old behavior");
    root["function"].__ctor__ = ctor;

    print("Testing the old behavior");
    new Foo();
})();
