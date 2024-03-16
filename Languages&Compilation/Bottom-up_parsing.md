> [!important]- Metadata
> **Tags:** #Languages #Compilers 
> **Located:** Languages&Compilation
> **Created:** 16/03/2024 - 15:49
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Bottom-up parsing
- Work by reducing a [[Formal_languages#Sentence|sentence]] to the sentence symbol by applying productions of the grammar
- Done via a **parse stack**, each symbol read is immediately placed on the top of the stack 


## Bottom-up parsing process 

