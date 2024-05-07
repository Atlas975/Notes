> [!important]- Metadata
> **Tags:** #DistributedSystems 
> **Located:** DistributedSystems
> **Created:** 20/12/2023 - 22:49
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Time keeping
- Accurate timekeeping is crucial in [[Distributed_systems|distributed systems]] for scheduling, logging, and [[Concurrency|coordinations]] between distinct components. Multiple timing methods exist to handle this.
- Several challenges exist with handling this such as clock drift and dealing with leap seconds
## Types of Clocks
- **Physical Clocks:** hardware mechanisms like quartz  / atomic clocks  used to measure real time. 
- **Logical Clocks:** measures time based on a sequence of events, rather than passage of real time.
## Clock Synchronization
- Maintaining the same time across different systems in a distributed network is challenging due to clock drift and network latencies. This can be dealt with in various ways 
- Network Time Protocol (NTP) is often used to synchronise clocks over a network. This involves regular updates from a reliable time source (eg atomic clock or GPS receiver)


![[Pasted image 20240507124742.png|350|350]]

- Round trip time (RTT) $=(t_{4}-t_{1})-(t_{3}-t_{2})$
- The client estimates clock skew as $(t_{3}+\left( \frac{\text{RTT}}{2} \right)-t_{4})$
- Monotonic clocks are typically used instead of synchronization to measure elapsed time 
## Ordering of Events
- Determining the sequence of events in a distributed system is non-trivial due to the lack of a central, synchronised clock. This requires a appropriate protocol to mark event ordering 
- In other words how can $C$ know how to correctly order messages 

![[Pasted image 20240507125748.png|350|350]]

- One solution is for $A$ to assign timestamps based on a local clock to order events but this relies on ensuring clock skew is kept to a minimum, especially when events are microseconds apart
### Happens-before relationship 
- A logical determination of the order of events based on causality / sequence of communications.
- Can be handled in a variety of ways such as using locks/semaphores or relying on the [[Relations#Transitivity|transitivity]] of events (if $T(e_{1})<T(e_{2})$ then $e_{1}\to e_{2}$), based on the use of a Lampert logical clock


![[Pasted image 20240507141550.png|350|350]]

### Vector clocks 
- Involves each node using a vector of timestamps (the timestamps of all other vectors)
- This allows for better synchronization of logical timestamps 

![[Pasted image 20240507142038.png|350|350]]

