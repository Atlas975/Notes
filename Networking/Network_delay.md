> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking
> **Created:** 10/02/2023 - 17:01
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
# Network delay
- 4 types of [[Network_architecture|network]] delay exist 
	• Processing Delay
	• Queuing Delay
	• Transmission Delay
	• Propagation Delay

## Processing delay
- Dependent on how busy a device is, the time taken for device to read and route a packet based on [[Network_architecture#Network header|header]] metadata, 
- This delay is typically small, but may include checking bit level errors in a packet 

## Queuing delay
- Dependent on network congestion, the time spent [[Network_routing#Packet queuing|packet queuing]] before transmission 
- Queues only develop if arrival rate exceeds output link capacity 

> ![[Pasted image 20230210172826.png|400|400]]

## Transmission delay
- Dependent  on [[Network_routing#Packet transmission delay|packet transmission delay]], since networks are store and forward, entire packets must be received before forwarding 
- Transmission delay is the time taken to transmit all packet bits onto the link

> ![[Pasted image 20230210173557.png|400|400]]

## Propagation delay
- Dependent on the speed of [[Transmission_mediums|transmission mediums]], eahc l
