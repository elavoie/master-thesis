codeCache1 = function ($this,dataCache,name) {
    if ($this === undefined || $this === null)
        throw new Error("TypeError: " + $this + " does not have a property '" + name + "'");
    return $this.get(name);
}

codeCache5 = function($this,dataCache) {
    return $this.get("foo").call0($this);
}
