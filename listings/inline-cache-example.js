var initState = function (rcv, dataCache, ..args) {
    var dataCacheName = "dataCache" + dataCache[0];
    var codeCacheName = "codeCache" + dataCache[0];
    var msg = dataCache[1];

    var callFn = method.get("call");
    if (callFn === defaultCall) {
        var memMethod = method.get("__memoize__").call(method, rcv, args, dataCache);

        if (memMethod !== null) {       
            global[codeCacheName] = memMethod.unbox();
            // Track memoization sites for invalidation
            tracker.addCacheLink(msg, dataCache[0], dataCache);
            return method.call.apply(method, [rcv].concat(args));
        } 
       
        // Use a specialized version of a message send for a given message name,
        // also avoiding the call indirection introduced the function calls
        // reification
        global[codeCacheName] = memNamedMethod(msg, args.length);
        return method.call.apply(method, [rcv].concat(args));
    } else {
        return callFn.call.apply(callFn, [method, rcv].concat(args));
    }
};

var codeCache0 = initState;
var dataCache0 = [0, "bar"];

function foo(obj) {
    codeCache0(obj, dataCache0);
}
