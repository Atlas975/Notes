> [!important]- Metadata
> **Tags:** #OperatingSystems #Networking 
> **Located:** Networking
> **Created:** 19/02/2023 - 14:24
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
# Networking tools

> ![[Pasted image 20230219143642.png|500|500]]


## Ping
- Measures RTT and works on end to end manner like tracer route, however messages sent to specific hosts rather than nodes across the path
- Ping measures response time from a specific device while tracerroute 

> ![[Pasted image 20230213231702.png]]
- Ping works in the following way:
    1.  A user sends a "ping" request to a network host using the "ping" command.
    2.  Request in form of an Internet Control Message Protocol (ICMP) "echo request" packet.
    3.  The destination host receives the request and sends back an ICMP "echo reply" packet.
    4.  The time it takes for the reply packet to reach the source host is measured and recorded.