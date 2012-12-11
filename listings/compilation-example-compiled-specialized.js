codeCache1 = function ($this,dataCache,name) {
    return $this.get(name);
}

codeCache5 = function($this,dataCache) {
    return $this.get("foo").call0($this);
}
