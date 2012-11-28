function bind(rcv, msg) {
    var obj = rcv;
    while (obj !== null) {
        if (obj.has(msg))
            return obj.get(msg);
        obj = obj.getPrototype();
    }
    return null;
}

function send(rcv, msg, ..args) {
    var m = bind(rcv, msg);
    return m.call(rcv, ..args);
}
