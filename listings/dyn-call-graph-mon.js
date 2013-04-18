// Language: Source JS
var callgraph = {};
var callstack = ["global"];

function beforeApply(fn) {
    if (fn.__id__ !== undefined) {
        var caller = callstack.length - 1; 
        var node = callgraph[callstack[caller]];
        if (node === undefined) {
            node = {};
            callgraph[callstack[caller]] = node;
        }
        callstack.push(fn.__id__);
    }
}

function afterApply(fn) {
    if (fn.__id__ !== undefined) {
        callstack.pop();
        var node = callgraph[callstack[callstack.length - 1]];
        node[fn.__id__] = true;
    }
}

function dynCallGraphResults() {
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

startCallInstrumentation(beforeApply, afterApply);
