---
aliases: []
---
> [!important]- Metadata
> **Tags:** #DistributedSystems 
> **Located:** DistributedSystems
> **Created:** 16/10/2023 - 18:54
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Remote invocation
- The process of invoking an operation on a separate computer using a given protocol
- Message exchange handled through agreed protocol, protocols vary in reliability, scalability and performance. Implementation of these is a communication [[Distributed_systems#Middleware|middleware]]

![[Pasted image 20231025001951.png|350|350]]

## Protocol styles 
- **R**: request through fire and forget with no blocking on server side 
- **RR**: request-reply protocol, if reply lost a request may be repeated by client
- **RRA**: second reply from client to acknowledge a resource has been received 

| Style | Client  | Server | Client |
| ----- | ------- | ------ | ------ |
| R     | Request | -      | -      |
| RR    | Request | Reply  | -      |
| RRA      |Request         |Reply        |Acknowledgement        |

## Remote procedure calls 
- RPC's allow for functions to be called on other computers as if they were called locally, simplest form of communication middleware providing a high level request-response mechanism
- Typically synchronous, client blocks while waiting for client function return 

![[Pasted image 20231025002102.png|400|400]]

- RMI's rely on interfaces. Proxies, stubs and dispatchers are generated automatically by an IDL (interface defintion language) compiler 
## Basic RMI procedure 

![[Pasted image 20231025001513.png|550|550]]