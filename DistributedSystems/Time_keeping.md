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
Accurate timekeeping is crucial in distributed systems for scheduling, logging, and coordination between different components.

**Types of Clocks:**

- **Physical Clocks:** Use hardware mechanisms like quartz or atomic clocks to measure the passage of real time.
- **Logical Clocks:** Measure time based on a sequence of events, rather than the passage of real time.

#### Techniques:

- **Network Time Protocol (NTP):** Used to synchronize clocks of computers over a network.
- **Atomic Clocks:** Provide high precision and are used in settings requiring very accurate timekeeping, such as GPS satellites.

### Clock Synchronization

Maintaining the same time across different systems in a distributed network is challenging due to clock drift and network latencies.

**Methods:**

- **Synchronization:** Regular updates from a reliable time source to adjust the system clocks.
- **Monotonic Clocks:** Used to measure elapsed time without needing synchronization.

### Ordering of Events

Determining the sequence of events in a distributed system is non-trivial due to the lack of a central, synchronized clock.

**Key Concepts:**

- **Timestamps:** Assigning timestamps based on a local clock to order events.
- **Happens-Before Relationship:** A logical determination of the order of events based on their causality and the sequence of communications.

#### Algorithms:

- **Lamport Clocks:** Provide a simple mechanism for ordering events using a scalar timestamp.
- **Vector Clocks:** More complex than Lamport clocks, vector clocks use an array of timestamps to provide a comprehensive ordering of events across multiple processes.