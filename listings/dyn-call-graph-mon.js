var callgraph = {};
var callstack = ["global"];

function before_apply(fn) {
    if (fn.__id__ !== undefined && 
        fn.__id__ !== "undefined" &&
        fn.__id__ !== "call" && 
        fn.__id__ !== "apply") {
        var node = callgraph[callstack[callstack.length - 1]];
        if (node === undefined) {
            node = {};
            callgraph[callstack[callstack.length - 1]] = node;
        }
        node[fn.__id__] = true;
        callstack.push(fn.__id__);
    }
}

function after_apply(fn) {
    if (fn.__id__ !== undefined && 
        fn.__id__ !== "undefined" &&
        fn.__id__ !== "call" && 
        fn.__id__ !== "apply") {
        var id = callstack.pop();
    }

}

function dyn_call_graph_results() {
    var str = "digraph {";
    for (var caller in callgraph) {
        if (callgraph.hasOwnProperty(caller)) {
            var set = callgraph[caller];
            var callee = "";
            for (var callee in set) {
                if (set.hasOwnProperty(callee)) {
                    str += caller + " -> " + callee + ";";
                }
            }
        }
    }
    str += "}";

    print(str);
}
