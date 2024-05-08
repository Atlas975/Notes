> [!important]- Metadata
> **Tags:** #DistributedSystems  #Concurrency 
> **Located:** DistributedSystems
> **Created:** 15/10/2023 - 13:57
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Distributed systems
- Systems designed to support the development of applications that can make use of multiple autonomous processing elements 
- These do not share primary memory but instead cooperate by sending [[Concurrency#Asynchronous use|asynchronous]] messages
- Distributed systems are essential for services that are challenging / infeasible to be implemented on a single computer. The reasons for using systems like these include:
	- **Geographical limitations**: computers may need to communicate with users globally 
	- **Robustness**: allows for safe node failures eg distributed databases without data loss
	- **Performance**: [[Concurrency|concurrency]] allows for joining forces for increased resources and availability 
## Distributed system challenges
- Unlike standalone computers, distributed systems need to be able to account for node failure while still remaining operational. This becomes a challenge especially when operations like bank transfers are partially completed 
- When a node stops working its referred to as a **fault**, ideal distributed systems need to achieve high fault tolerance 
- Node failure modes include: 
	- **Crash-stop** (fail-stop): unpredictable node failure due to hardware/software fault
	- **Crash-recovery** (fail-recovery): node crashes but recovers and resumes as normal  
	- **Byzantine** (fail-arbitrarily): node suffers from  arbitrary / malicious behaviours
- [[Network_architecture|Networks]] themselves can also fail, as a result of this an error may not be immediately known by other nodes. Timeouts are typically used to handle this 
- Heterogeneity is also a challenge as nodes may exist with different privileges and formats
## Network Failure modes
- **Reliable** **links**: messages received when sent,  may also be reordered ([[Routing_methods#Packet switching|packet switching]])
- **Fair-loss** **links**: messages can be lost / duplicated / reorders but works eventually 
- **Arbitrary links**: messages may receive interference (modify / drop / listen)
## System model 
- **Synchronous**: node clocks synced with an upper bound on exclusive time for nodes
- **Asynchronous**: arbitrary deliver / processing times, no guarantees as node clock drifts
- **Partially synchronous**: unpredictable transitions from sync to async and vice versa 
- **Bounded asynchrony**: assume there is a known  upper bound on message delivery time
## FLP impossibility theorem 
- The Fischer, Lynch and Patterson theorem details that it is impossible for distributed consensus as long as there's the possibility of even one faulty process 
- If there is no known upper bound on how long it takes a process to complete it's impossible to distinguish from a node failure and a process taking a long time to complete it's work 
## Middleware 
- Provides a high level programming abstraction 
- Hides complexity of distributed system as well as underlying forms of heterogeneity 

![[Pasted image 20231016184020.png|400|400]]

- Middleware protocols support 
    - **Resource sharing** through concurrency protocols 
    - **Transparency** by allowing a distributed system to be viewed as a single computer 
    - **Openness** by providing portability and a standard interface to work with 
- Overall good middleware is essential for scalability, maintenance, fault tolerance and security 

![[Pasted image 20240508132935.png|450|450]]