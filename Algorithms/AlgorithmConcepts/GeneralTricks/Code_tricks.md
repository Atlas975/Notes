
> [!important]- Metadata
> **Tags:** #Programming #Algorithms 
> **Located:** Algorithms/AlgorithmConcepts/GeneralTricks
> **Created:** 25/10/2022 - 11:45
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Code tricks
## Variable swapping methods 
- Standard temp variable 
```
temp = a 
a = b
b = temp
```

- Arithmetic methods
```
a = a + b
b = a - b
a = a - b

a = a * b
b = a / b
a = a / b
```

- Bitwise swap with XOR
```
a = a ^ b 
b = a ^ b
a = a ^ b
```