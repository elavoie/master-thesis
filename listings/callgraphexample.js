(function () {
    function a()  { b(); }
    function b()  { }
    function c(n) { if (n !== 0) c(n-1); }
    function d()  { }

    a();
    c(3);
})();
