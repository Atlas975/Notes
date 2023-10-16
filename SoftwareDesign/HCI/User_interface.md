> [!important]- Metadata
> **Tags:** #DesignTheory 
> **Located:** SoftwareDesign/HCI
> **Created:** 11/08/2023 - 22:00
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# User interface
- The user interface is the part of a system through which a user can interact, composed of software and/or hardware that supports input, output or both.

![[Pasted image 20230811220045.png|550|550]]