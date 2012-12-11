function bind(rcv, msg) {
    return rcv.get(msg);
}

function send(rcv, msg, ..args) {
    var m = bind(rcv, msg);
    return m.call(rcv, ..args);
}
