var obj = root.create();

obj.set("foo", 42);

obj.get_foo = function () {
    return this.proxiedObject.foo;
};

root.get_foo = function () {
    return this.get("foo");
};

