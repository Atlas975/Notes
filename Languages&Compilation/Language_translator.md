> [!important]- Metadata
> **Tags:** #Languages #Compilers
> **Located:** Languages&Compilation
> **Created:** 19/01/2024 - 15:42
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Language translator
- Responsible for converting source code from a human readable higher-level language to into machine readable code (executable files). This has 4 distinct phases
- Translators also facilitates cross-language  development by translating higher level code into a intermediate format / machine code that's more cross-platform friendly

![[Pasted image 20240119155134.png|450|450]]

## Preprocessor
- Resp

![[Pasted image 20240119155319.png|600|600]]