> [!important]- Metadata
> **Tags:** #DesignTheory 
> **Located:** SoftwareDesign/HCI
> **Created:** 31/07/2023 - 20:31
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# HCI formulas
## Bloch's law 
>$$R = I\times T$$