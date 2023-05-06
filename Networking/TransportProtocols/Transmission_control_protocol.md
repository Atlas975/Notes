---
aliases: TCP
---
> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking/TransportProtocols
> **Created:** 06/05/2023 - 22:53
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Transmission control protocol
- A [[Transport_protocols|transport protocol]] that offers reliable data transfer
