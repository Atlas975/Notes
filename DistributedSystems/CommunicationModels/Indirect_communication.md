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

**Key Abstractions:**

- **Event-based Systems:** Such as publish-subscribe models.
- **Message Queues:** Where messages are stored and retrieved from a queue.
- **Distributed Shared Memory (DSM):** Memory that appears as traditional shared memory but is distributed across multiple systems.
- **Tuple Spaces:** An associative and temporal coordination model in which tuples are written to and read from a shared virtual space.

## Coupling in indirect communication
- **Space Uncoupling:** entities do not need to know each other's identities (eg pubsub)
- **Time Uncoupling:** entities do not need to exist simultaneously, allowing [[Concurrency|async]]

## Publish-subscribe systems

- Indirect communication where publisher can publish an event e: `publish(e)` 
- Subscribers express interest in events through filters f: `subscribe(f)`, and the system acts as a broker ensuring that events are delivered accordingly.



![[Pasted image 20240509155551.png|350|350]]


**Subscription Models:**

1. **Channel-based:** Subscribers receive all messages sent to subscribed channels.
2. **Topic-based:** Messages are classified into topics; subscribers receive messages based on topic subscriptions.
3. **Type-based:** Subscriptions are based on the type of the events.
4. **Content-based:** Subscriptions are based on specific content within the messages, using a query language to specify interests.

### Implementing Publish-Subscribe Systems

- **Centralised Architecture:** single broker handles all messages, which can become a bottleneck.
- **Distributed Architecture:** multiple brokers manage the load, enhancing scalability and reliability.
- **Peer-to-Peer Architecture:** no central brokers; every client can act as a broker, further reducing potential bottlenecks but increasing complexity.


![[Pasted image 20240509155619.png|350|350]]

### Message Queues

Message queues are a form of indirect communication where messages are stored in a queue and processed by consumers. They support both synchronous and asynchronous communication, ensuring reliable delivery but typically facilitating point-to-point rather than multiparty communication.


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
