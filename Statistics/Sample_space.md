> [!important]- Metadata
> **Tags:** #Statistics 
> **Located:** Statistics
> **Created:** 27/04/2024 - 22:05
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Sample space
- The set of everything that can occur 
- Each possible outcome is called a sample point

## Discrete sample space 
- Written as a list 
$$S=\{ a,b,\mathbf{c},\dots \}$$

## Continuous 
- For open interval:

$$S=(0,10)$$
$$0<x<10$$

- For closed interval

$$S=[0,10]$$

$$0\leq{}x\leq{}10$$