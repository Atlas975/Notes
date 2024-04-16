> [!important]- Metadata
> **Tags:** #Statistics 
> **Located:** Statistics
> **Created:** 16/04/2024 - 19:06
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Sampling methods


## Simple random sampling 

![[Pasted image 20240416190915.png|300|300]]

## Systematic sampling 

![[Pasted image 20240416190958.png|350|350]]

## Stratified sampling 

![[Pasted image 20240416191031.png|300|300]]

