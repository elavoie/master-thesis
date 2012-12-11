// Global functions    
function a()  { };           // Does not call any other
function b()  { a.call(); }; // Calling through "call"
function c()  { b(); };      // Calling a global function
function d()  { };           // Unused function

(function () {
    // Lexically scoped objects and functions

    // Creating an object with a single method
    var o = {m:c};

    // Direct recursive call closed-over itself
    function e(n) { if (n > 0) e(n-1); }; 
    
    // Method call
    o.m();

    // Direct call
    e(10);

    // Not called: d
})();

dynCallGraphResults();
