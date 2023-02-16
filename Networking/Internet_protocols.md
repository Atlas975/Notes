---
aliases: IP, internet protocol 
---

> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking
> **Created:** 06/02/2023 - 15:02
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
# Internet protocols
- The rules the sender, receiver and devices need to follow for effective data communication.
- Part of **transport layer** of the OSI model, defines when, how and what is communicated,  it also defines the format of data for allowing accurate and timely data transmission.
- TCP/ IP was developed to allow for this to be done between distinct networks

## Network abstraction
- Gives [[Internet_architecture|internet]] applications a common interface to work with a protocol layer 
- Abstracts away the underlying implementations of a layer allowing for modularity 

> ![[Pasted image 20230216083059.png|450|450]]

## Protocol layering
- A technique used to implement network abstraction, dividing communication into layers 
- Lower layers transmit data while higher layers format and send data

> ![[Pasted image 20230216083526.png|450|450]]

- Hierarchical, each layer depends on the service of the layer beneath it
- Changes to a lower layer can have a cascading effect, requiring changes to the layers above it 
- However, layers can be swapped out without impacting other layers if they share the same API 

## Bi-directional communication
- In bidirectional communication, each layer must perform 2 opposite tasks.
- Data must also be able to be transmitted in both directions simultaneously 

> ![[Pasted image 20211105234139.png|500|500]] 

- Each layer has a specific protocol only understood by that layer.
- Opposite objects (protocols), must be able to perform identical tasks

> ![[Pasted image 20211105235208.png|550|550]]

# Internet protocol stack
- Routers only work on the first 3 layers, switches work on first 2 (physical,data)

> ![[Pasted image 20211109092413.png|400|400]]

## Application layer
- The actual protocols needed for effective data communication, designed to meet requirements for different applications. Layer where applications interact.
- File transfer, email and DNS all fall here
## Transport layer
- Lowest layer in which communication instead of packets are used. Eg. flow control, allowing devices to tell each other to lower or increase data transmission rates based on what they're capable of.
## Network layer
- Transfers data packets, in a WAN this involves creating a route as well. In a LAN this is not the case
## Data link layer
- Transmits data packets that are directly connected by physical link. In a WAN this is between routers, in a LAN this is between hosts (unique user IP's)
## Physical layer 
- Transfers binary data using electrical signals.


# Exchange using OSI

> ![[Pasted image 20211106001757.png|450|450]]

- Headers are what allow distinguishing between layers.
