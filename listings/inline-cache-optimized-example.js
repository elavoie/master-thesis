var codeCache0 = function (rcv) {
    return rcv.get("bar").call(rcv);
};

function foo(obj) {
    codeCache0(obj);
}
