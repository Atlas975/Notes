> [!important]- Metadata
> **Tags:** #DesignTheory 
> **Located:** SoftwareDesign/HCI
> **Created:** 11/08/2023 - 22:04
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Evaluation
![[Pasted image 20230811220411.png|450|450]]