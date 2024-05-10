> [!important]- Metadata
> **Tags:** #DistributedSystems 
> **Located:** DistributedSystems/CommunicationModels
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Indirect communication
- Involves interactions through an abstraction layer, decoupling the sender and receiver. 
- This approach provides flexibility in system design, allowing for changes, migrations, and updates without direct dependencies between communicating parties.
- Two main styles of uncoupling exist in indirect communication 
	- **Space Uncoupling:** entities do not need to know each other's identities (eg pubsub)
	- **Time Uncoupling:** entities do not need to exist simultaneously, allowing [[Concurrency|async]]


**Key Abstractions:**

- **Event-based Systems:** Such as publish-subscribe models.
- **Message Queues:** Where messages are stored and retrieved from a queue.
- **Distributed Shared Memory (DSM):** Memory that appears as traditional shared memory but is distributed across multiple systems.
- **Tuple Spaces:** An associative and temporal coordination model in which tuples are written to and read from a shared virtual space.



## Publish-subscribe systems

- Indirect communication where publisher can publish an event e: `publish(e)` 
- Subscribers express interest in events through filters f: `subscribe(f)`, this allows the broker to filter message delivery based only on subscribers 
- Events are delivered in async `notify(e)` and publisher can optionally advertise `advertise(f)`
### Subscription Models

- **Channel-based:** subscribers receive all messages sent to named subscribed channels.
-  **Topic-based:** messages are classified into topics; supports topic hierarchies (eg all sports topics)
-  **Type-based:** subscriptions are defined with direct [[OOP_principles|programming objects]], supports hierarchies
-  **Content-based:** [[SQL_language|query]] based approach to subscription based on message content , expensive to implement due to runtime lookups but offers good flexibility in filtering

### Publish-Subscribe architectures

- **Centralised architecture:** single broker handles all messages, which can become a bottleneck.
- **Distributed architecture:** multiple brokers manage the load, enhancing scalability and reliability.
- **Peer-to-Peer Architecture:** no central brokers; every client can act as a broker, further reducing potential bottlenecks but increasing complexity.


![[Pasted image 20240509155619.png|350|350]]

### Message flooding
- Describes the nodes at which messages are filtered, 
- This can be done with every publisher flooding subscribers and having these subscribers filter based on subscriptions but this is inefficient 


![[Pasted image 20240510131240.png|350|350]]

- The more efficient option is typically to flood the publisher side and handle filtering there
- For more efficiency this can be done in the broker network, only forwarding messages down paths where a valid subscriber exists. This requires a [[Routing_methods|routing table]]

```
upon receive publish(event e) from node x
    matchlist := match(e, subscriptions)
    send notify(e) to matchlist
    fwdlist := match(e, routing)
    send publish(e) to fwdlist - x

upon receive subscribe(subscription s) from node x
    if x is client then
        add x to subscriptions
    else
        add(x, s) to routing
    send subscribe(s) to neighbours - x
```

- Rendezvous nodes may also be used to create multiple subnets with their own broker, this is highly scalable typically making use of a distributed [[Hash_tables|hash table]]
- This requires two new function 
	- `SN(s)`: takes a sub s and returns nodes that can take responsibility for it 
	- `EN(e)`: takes event e and returns nodes for matching e against subs in the system
### Message Queues

- An indirect communication approach where messages are stored in a queue and processed by consumers. They support both synchronous and asynchronous communication. 
- This ensures reliable delivery but typically facilitates point-to-point rather than multiparty communication. Message delivery is reliable 


![[Pasted image 20240509155840.png|400|400]]

### Distributed Shared Memory (DSM)

- DSM provides an abstraction of shared memory over a distributed system, allowing programs to interact with shared data as if it were local, hiding the complexities of distribution.
- It is used primarily in environments requiring tight coupling, like clustered computing.

## Tuple Spaces

- Offers flexible and powerful form of indirect communication by allowing tuples (sets of named items) to be written to and read from a shared space. 
- Operations on tuple spaces are associative, meaning they are based on the content of the tuples rather than explicit addresses.


![[Pasted image 20240509155920.png|300|300]]

## Indirect communication considerations
- **Efficiency:** Optimising the routing of messages to ensure quick and efficient delivery.
- **Scalability:** Ensuring the system can handle large numbers of users / high message load.
- **Flexibility:** Allowing for changes in the network without significant disruption.

### Conclusion

Indirect communication systems like publish-subscribe systems, message queues, and tuple spaces provide powerful paradigms for flexible and efficient communication in distributed systems. They are particularly valuable in environments where participants are loosely coupled and can dynamically change.
