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
Designing distributed systems involves placing processes on independent devices to communicate effectively with each other, managing elements like data stores, messaging systems, and various functionalities (e.g., posts, ads, friendship features) in relation to each other.

### The Client-Server Model

- **Definition:** A model where clients send requests to a server, which processes them and returns a response.
- **Advantages:**
    - Centralized management.
    - Consistent data handling.
- **Disadvantages:**
    - Single point of failure affecting availability, reliability, and security.

### Introducing Threads

- Threads are lightweight units of concurrency within a single address space, used to manage latencies in distributed systems efficiently.
- **Multi-threaded Client:** Uses threads to handle communication latency.
- **Multi-threaded Server:** Utilizes threads to process multiple incoming invocations concurrently.

### Stateless vs. Stateful Servers

- **Stateless Servers:** Do not maintain client-specific state, simplifying load balancing and recovery post-crashes.
- **Stateful Servers:** Maintain information about their clients, complicating crash recovery and potentially limiting performance.

### Layering in Distributed Systems

- **Purpose:** Simplifies complexity by partitioning services into layers where lower layers provide services to higher ones without exposing underlying implementations.
- **Benefits:** Enhances abstraction, reusability, and loose coupling across components.

### Tiering in Distributed Systems

- **Tiering:** Complements layering by physically separating layers across devices.
- **Examples:**
    - **2-Tier Architecture:** Divides layers between client and server.
    - **3-Tier Architecture:** Separates application logic, database management, and user interface into three distinct layers.

### Replication

- Replication involves duplicating services across multiple servers to enhance performance, availability, and scalability. However, it requires mechanisms to maintain consistency among replicas.

### Brewer's CAP Theorem

- **Statement:** It is impossible for a distributed system to simultaneously provide consistency, availability, and partition tolerance.
- **Implications:** Systems must compromise on one of these aspects, often leading to designs that prioritize two out of the three guarantees.

### Design Patterns for Distributed Systems

- **Proxy Pattern:** Uses a local proxy to represent a remote target object, enhancing distribution transparency.
- **Brokerage and Mediator:** Manage interactions between components to simplify communication and functionality.

### Middleware in Distributed Systems

- Middleware supports distributed systems by providing common services between the operating system and applications. It can be synchronous or asynchronous, language-specific or independent, and can adhere to proprietary or standard-based approaches.

### Architectural Diagrams

- Illustrates how components interact within the system, helping designers and developers understand and manage interactions and data flows effectively.