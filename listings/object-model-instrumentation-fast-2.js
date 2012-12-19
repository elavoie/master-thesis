    root.object.set("__set__", clos(function ($this, $closure, name, value) {
        instrumentationData__set__++;
        return $this.set(name, value);    
    }, (function () {

        var ownedNames = {};
        function updateProperty(name) {
            if (!hasProp(ownedNames, name)) {
                ownedNames[name] = clos(new Function ("$this", "dataCache", "name", "value",
                    "if ($this.map === dataCache[3]) {\n" +
                    "   instrumentationData__set__++\n"+
                    "   if (tracker.hasCacheLink(name)) tracker.flushCaches(name);\n" + 
                    "   return $this.payload."+name+" = value;\n" +
                    "}\n" + 
                    "return bailout($this, dataCache, name, value);"
                ));
            }
            return ownedNames[name];
        }

        var newNames = {};
        function createProperty(name) {
            if (!hasProp(newNames, name)) {
                newNames[name] = clos(new Function ("$this", "dataCache", "name", "value",
                    "if ($this.map === dataCache[3]) {\n" +
                    "   instrumentationData__set__++\n"+
                    "   if (tracker.hasCacheLink(name)) tracker.flushCaches(name);\n" + 
                    "   $this.map = $this.map.siblings[name];\n" +
                    "   return $this.payload."+name+" = value;\n" +
                    "} return bailout($this, dataCache, name, value);"
                ));
            }
            return newNames[name];
        }

        var set = clos(new Function ("$this", "dataCache", "name", "value",
            "instrumentationData__set__++\n"+
            "return $this.set(name, value);"
        ));
        
        return clos(function ($this, $closure, rcv, method, args, dataCache) {
            var name = args.get(0)
            var cacheId = dataCache.get(0);

            if (dataCache.get(2)[1] === "string" && 
                name !== "__proto__" && 
                rcv.set === root.object.set) {
                if (rcv.map.properties[name] === true) {
                    return updateProperty(name);
                } else {
                    return createProperty(name);
                }
            } else {
                return set;
            }
        });
    })()));
