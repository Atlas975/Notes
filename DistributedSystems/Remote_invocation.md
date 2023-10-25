---
aliases:
  - RMI
  - RPC
alias:
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

- RMI's rely on interfaces. Proxies, stubs and dispatchers are generated automatically by an IDL (interface definition language) compiler 
- Client side components:
	- **Proxies**: masks as a local version of remote interface, redirecting calls to client stub 
	- **Client stub**: marshalls (flattening) a call into a request message sent to remote end, also carries out the unmarshall process for returning replies 
- Server side components:
	- **Dispatchers**: receive incoming message to direct to appropriate stub 
	- **Server stubs**: carries out the unmarshall process and invokes appropriate code body, also marshalls reply and afterwards initiates transmission back to client
- RPC's end up looking like this on the client side 
```java
thing = RPCService.getRemote(serverName);  // acquire access to remote entity 
thing.callFunction(arg); // call function as normal
```

### Remote procedure call challenges
- Remote calls have a different latency than local ones 
- Memory access models are different (may need to pass references around )
- Partial failures are possible
- Local procedures have an exactly once guarantee, for RPC this depends on individual protocol implementation and may vary

## Protocol semantics
- **Maybe**: send request to server, no guarantee of reply 
- **At least once**: send request repeatedly until successful, possible for multiple responses
- **At most once**: send request repeatedly until successful, filters duplicates 

![[Pasted image 20231025004923.png|500|500]]

- **Exactly once**: atomic version of at most, procedure carried out completely or not at all

## Remote method invocation
- Uses interfaces to specify remote object, an object needs to implement this interface before it can be advertised for remote access. Allows the client to use the object through the interface 
- Advertisement and lookup for remote objects done through the RMI registry (**rmiregistery**), this registry usually runs on same host as server but doesn't need to 
- RMI can be handled by middleware such as Java RMI and REST
## Basic RMI procedure

![[Pasted image 20231025001513.png|550|550]]
