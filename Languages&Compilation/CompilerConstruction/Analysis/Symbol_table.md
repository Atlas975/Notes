> [!important]- Metadata
> **Tags:** #Languages #Compilers 
> **Located:** Languages&Compilation/CompilerConstruction/Analysis
> **Created:** 02/05/2024 - 14:02
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Symbol table
- Used by a [[Compilers|compiler]] to store identifiers (variable names, functions, classes, etc.) that appear in source code. Tracks identifier details such as type (int, string etc) and memory address
- This helps the compiler understand what each identifier represents and ensures that they're used correctly throughout the program


![[Pasted image 20240502143400.png|350|350]]