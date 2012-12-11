// Language: Implementation JS
(function () {
    var flag = 0;
    var defaultCallFn  = root.function.get("call");
    var defaultApplyFn = root.function.get("apply");

    root.global.set(
        "startCallInstrumentation", 
        clos(function ($this, $closure, before, after) { 
            var applyFn = clos(function($this, $closure, rcv, args) {
                if (flag !== 0) {
                    return $this.call.apply($this, [rcv].concat(args.unbox()));
                }

                try {
                    flag++;
                    before.call(null, $this);
                    flag--;
                    var r = $this.call.apply($this, [rcv].concat(args.unbox()));
                } finally {
                    flag++;
                    after.call(null, $this);
                    flag--;
                }
                return r; 
            });

            root.function.set("call", clos(function($this, $closure) {
                return applyFn.call(
                    $this, 
                    arguments[2], 
                    new ArrayProxy(Array.prototype.slice.call(arguments, 3))
                );
            }));
            root.function.set("apply", applyFn); 
        })
    );

    root.global.set(
        "stopCallInstrumentation", 
        clos(function ($this, $closure) { 
            root.function.set("call", defaultCallFn);
            root.function.set("apply", defaultApplyFn);
        })
    );
})();
