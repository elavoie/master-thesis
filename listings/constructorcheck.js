// Language: Source JS
(function () {
    print("Remembering the old behavior");
    var ctor = Function.prototype.__ctor__; 

    print("Replacing the constructor behavior");
    Function.prototype.__ctor__ = function () {
        var o = Object.create(this.prototype);
        var r = this.apply(o, arguments);

        if (r !== o)
            throw Error("--> Constructor did not return the 'this' object");
        
        return o;
    }

    print("Creating a new faulty constructor");
    function Foo()
    {
        this.foo = 42;
        // implicitly returns the undefined value
    }

    print("Calling the faulty constructor");
    try
    {
        new Foo();
    } catch(e)
    {
        print(e);
    }

    print("Restoring the old behavior");
    Function.prototype.__ctor__ = ctor;

    print("Testing the old behavior");
    new Foo();
})();
