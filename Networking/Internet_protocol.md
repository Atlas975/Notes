> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking
> **Created:** 08/05/2023 - 00:44
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Internet protocol


## Routing tables
- Needs to give the next hop for every possible IP with  2^32 possibilities existing for 32-bit addresses
- This can be extremely slow to prcess 
![[Pasted image 20230508004630.png|500|500]]

![[Pasted image 20230508004930.png|400|400]]