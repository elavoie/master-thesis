function bind(rcv, msg) {...}

function send(rcv, msg, ..args) {
    var m = bind(rcv, msg);
    var callFn = bind(m, "call");

    if (callFn === defaultCallFn) {
        var memFn = send(m, "memoize", rcv, args);

        if (memFn !== null) {
            // Store memFn in cache
        }

        return m.call(rcv, ..args);
    } else {
        return callFn.call(m, rcv, ..args);
    }

}
