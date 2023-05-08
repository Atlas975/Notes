---
aliases: DHCP
---
> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking/TransportProtocols
> **Created:** 08/05/2023 - 00:41
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Dynamic host configuration protocol