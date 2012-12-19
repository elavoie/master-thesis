var defaultCallFun = root.function.get("call");

function bind(rcv, msg) {
    return rcv.get(msg);
}

function send(rcv, msg, ..args) {
    var m = bind(rcv, msg);
    var callFn = bind(m, "call");

    if (callFn === defaultCallFn) {
        var memFn = m.get("memoize").call(rcv, ..args);

        if (memFn !== null) {
            // Store memFn in cache
        }

        return m.call(rcv, ..args);
    } else {
        return callFn.call(m, rcv, ..args);
    }

}
