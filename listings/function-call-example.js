var fun = FunctionProxy(function ($this, x) { return x; });

fun.call1 = function ($this, arg0) {
    return this.proxiedObject($this, arg0);
};
