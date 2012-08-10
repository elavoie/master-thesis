(function () {
    var flag = 0;

    function call() {
        return apply.__$call__(this, $arguments[0], $arguments_slice(1));
    };

    function apply(obj, args) {
        if (flag !== 0) {
            return this.__$apply__(obj, args);
        }

        try {
            flag++;
            before_apply(this);
            flag--;
            var r = this.__$apply__(obj, args);
        } finally {
            flag++;
            after_apply(this);
            flag--;
        }
        return r; 
    };

    root.function.call = call;
    root.function.apply = apply;
})();
