> [!important]- Metadata
> **Tags:** #Networking #OperatingSystems 
> **Located:** Networking
> **Created:** 23/01/2023 - 14:18
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
# Network switching 
- the 

## Packet switching
- Method of creating temporary connections between devices using **switches**.
- Switches can be taught of as [[Graphs|nodes]] that can either be an end location or used for routing
- More resource efficient than constant connections (point to point)
- **Timeliness** is important to a packet switched network, if packet acknowledgement isn't received soon enough a packet is dropped

> ![[Pasted image 20211030163652.png|500]]

### Switches
- Connect devices together
- Set of interlinked nodes
### Packets
- Packets can follow different paths from source to destination. 
- Recompiled at end node.
## Circuit switching (time division)
- Networks connected by physical links, designed specifically for voice communication.
- Time division is whats used to allow multiple access by allocating time slots to users.
- Circuits can share links have have limited capacity but new links cant be made if capacity is reached.
- Each circuit allocated fixed amount of link capacity, wasted on silent telephone lines for example.
- Like a liquid, data flows continuously and path is fixed 
- Requires very high bandwidth to handle traffic.

## Circuit vs packet switching
- Packet switching is more cost efficient, packets don't don't need a dedicated channel to travel to their destination.
- Packet switching is more resource efficient, not using channels throughout the delivery of data.
- Circuit switching allows for data to be delivered at a consistent bandwidth
- Circuit switching allows for data to be delivered with minimum delay, better timeliness.
