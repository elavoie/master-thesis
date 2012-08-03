
extend(root.function, obj(root.object, root.function.payload, 
{
    "__ctor__":bs_clos(function ($this, $closure)
    {
        var o = send(send($this, "__get__", "prototype"), "__new__"); 
        var r = $this.payload.code.apply(
            o, 
            [o, $closure].concat(Array.prototype.slice.call(arguments, 2))
        );

        if (send(r, "__type__") === "primitive")
            return o;
        else
            return r;
    })
}));
