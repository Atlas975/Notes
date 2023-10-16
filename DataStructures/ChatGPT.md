> [!important]- Metadata
> **Tags:** #Null 
> **Located:** DataStructures
> **Created:** 28/05/2023 - 14:50
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# ChatGPT
## Summary prompt
>Please provide a concise explanation for the topic I prompt, using four bullet points. 