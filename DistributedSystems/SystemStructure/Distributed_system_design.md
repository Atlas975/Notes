> [!important]- Metadata
> **Tags:** #DistributedSystems 
> **Located:** DistributedSystems
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Distributed system design
- Involves placing processes on independent devices to communicate with each other, managing elements like data stores, messaging systems, and various functionalities
- These vary both in complexity and the level of separation they can offer
## The client-server model
-  A model where clients send requests to a server, which processes them and returns a response.
- Offers centralised management and consistent data handling at the cost of a single failure point

![[Pasted image 20240511144551.png|350|350]]

## Thread distribution
- [[Concurrency|Threads]] are a lightweight concurrency unit within a single address space, used to manage latencies in distributed systems efficiently. Creating a responsive system 
- Creating a thread per every request is fast, but introduces significant overhead. Threads are instead typically created under the following conditions:
	- **Per client:** creates a single thread to be used for every new client connection, can still lead to blocking if each client has lengthy connection times 
	- **Multi-threaded server:** creates a pool of permanent threads that spread out requests

![[Pasted image 20240511175013.png|400|400]]

## Server state

- **Stateless Servers:** no client-specific state, simplifying load balancing and recovery post-crashes
- **Stateful Servers:** Maintains information about their clients, complicating crash recovery and potentially limiting performance with load balancing complexity


## Layering 

-  Simplifies complexity by partitioning services into layers where lower layers provide services to higher ones without exposing underlying implementations.
- Enhances abstraction, reusability, and loose coupling across components.

![[Pasted image 20240511175614.png|350|350]]
## Tiering 

-  Complements layering by physically separating layers across devices. Eg  2-Tier architecture that typically does a client/server split. This seperation also makes [[Replication]] easier
- Separates application logic, database management, and user interface into three distinct layers can be taught of as 3-tier Architecture and is more flexible


![[Pasted image 20240511175803.png|350|350]]


