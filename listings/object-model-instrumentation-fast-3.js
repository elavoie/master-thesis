    root.object.set("__delete__", clos(function ($this, $closure, name) {
        instrumentationData__delete__++; 
        return $this.delete(name);
    }));

    instrumentationResults = function () {
        var total = instrumentationData__get__ + 
                    instrumentationData__set__ + 
                    instrumentationData__delete__;
        return "Instrumentation results:\n" +
               "     __get__: " + instrumentationData__get__ + " " + 
                    instrumentationData__get__ * 100 / total + "%\n" + 
               "     __set__: " + instrumentationData__set__ + " " + 
                    instrumentationData__set__ * 100 / total + "%\n" + 
               "  __delete__: " + instrumentationData__delete__ + " " + 
                    instrumentationData__delete__ * 100 / total + "%\n";
    }
})();


