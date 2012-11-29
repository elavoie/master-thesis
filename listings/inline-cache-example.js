function initState(rcv, dataCache, ..args) {
    // Update ("codeCache" + dataCache[0])
    return send(rcv, dataCache[1], ..args);
}

var codeCache0 = initState;
var dataCache0 = [0, "msg"];

function foo(obj) {
    codeCache0(obj, dataCache0);
}
