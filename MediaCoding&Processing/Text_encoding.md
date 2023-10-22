> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding&Processing
> **Created:** 22/10/2023 - 15:32
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Text encoding
- Textual data is represented as a string of words in [[ASCII]] format. The meaning of these words needs to be encoded in a way computers are able to understand
- ****