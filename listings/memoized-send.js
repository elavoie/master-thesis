var defaultCallFun = root.function.get("call");

function send(rcv, msg, ..args) {
    var m = rcv.get(msg);
    var callFn = m.get("call");

    if (callFn === defaultCallFn) {
        var memFn = m.get("__memoize__").call(m, rcv, ..args);

        if (memFn !== null) {
            ...Store memFn in cache
        }

        return m.call(rcv, ..args);
    } else {
        return callFn.call(m, rcv, ..args);
    }

}
