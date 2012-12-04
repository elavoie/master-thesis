var fun = FunctionProxy(function ($this, x) { return x; });

fun.call1 = function ($this, arg0) {
    return this.proxiedObject($this, arg0);
};

// Also add a call1 method on all proxies 
// that might be called as a method!
