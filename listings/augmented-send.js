function send(rcv, msg, ..args) {
    var m = rcv.get(msg);
    var callFn = m.get("call");
    return callFn.call(m, rcv, ..args);
}
