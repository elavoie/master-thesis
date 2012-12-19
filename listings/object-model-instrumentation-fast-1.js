var instrumentationResults;

var instrumentationData__get__ = 0;
var instrumentationData__set__ = 0;
var instrumentationData__delete__ = 0;

(function () {
    root.object.set("__get__", clos(function ($this, $closure, name) {
        instrumentationData__get__++;
        return $this.get(name);
    }, (function () {
        var getLength = clos(new Function("$this", "dataCache", "name",
            "instrumentationData__get__++\n"+
            "return $this.getLength();"
        ));

        var get = clos(new Function ("$this", "dataCache", "name",
            "instrumentationData__get__++\n"+
            "return $this.get(name);"
        ));

        var getNum = clos(new Function ("$this", "dataCache", "name",
            "instrumentationData__get__++\n"+
            "return $this.getNum(dataCache, name);"
        ));
        
        
        return clos(function ($this, $closure, rcv, method, args, dataCache) {
            var name = args.get(0);
            if (rcv instanceof ArrayProxy && (typeof name) === "number") {
                if (options.verbose) print("Caching __get__ numerical at " + dataCache.get(0));
                return getNum;
            } else if (name === "length" && dataCache.get(2)[1] === "string") {
                if (options.verbose) print("Caching __get__ length at " + dataCache.get(0));
                return getLength;
            } else {
                if (options.verbose) print("Caching __get__ at " + dataCache.get(0));
                return get;
            }
        });
    })()));
 
