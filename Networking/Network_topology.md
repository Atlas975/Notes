> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking
> **Created:** 25/02/2023 - 23:31
> ```dataviewjs
>let cur = dv.current().file;
>let loc = cur.path;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths).slice(0, 20)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]));
> ```

___
# Network topology
- Refers to the physical / logical arrangements of nodes / links that make up a [[Network_architecture|network]]
- Describes how connections exists a network and how communication is performed 
- Two types of topology exists: 
    - **Physical topology**: placement of nodes in a network 
    - **Logical topology**: how data flows in a network 

## Bus topology 
- Common [[Transmission_mediums|transmission medium]] between all hosts
- Low cost due to one connection, suited for temporary networks 
- Poor fault tolerance and security due to being dependent on one medium

> ![[Pasted image 20230225233858.png|450|450]]


## Ring topology 
- Bus topology in a loop, data still flows in single direction
- P2P LAN, all nodes have equal rights, tokens a

> ![[Pasted image 20230225234635.png|200|200]]