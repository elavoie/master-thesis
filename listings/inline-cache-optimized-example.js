var codeCache0 = function (rcv, x0) {
    return rcv.get("bar").call(rcv);
};

function foo(obj) {
    codeCache0(obj, "bar");
}
