var codeCache0 = function (rcv, dataCache) {
    return rcv.get("msg").call(rcv);
};
var dataCache0 = [0, "msg"];

function foo(obj) {
    codeCache0(obj, dataCache0);
}
