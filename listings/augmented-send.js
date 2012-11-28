function bind(rcv, msg) {...}

function send(rcv, msg, ..args) {
    var m = bind(rcv, msg);
    var callFn = bind(m, "call");
    return callFn.call(m, rcv, ..args);
}
