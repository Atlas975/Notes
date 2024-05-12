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
# Google infrastructure
- Exemplifies the integration of software and hardware to achieve high reliability, performance, and scalability via the effective use of [[Distributed_systems|distributed system]] principles 
- Given the scale, faults are frequent requiring an emphasis on [[Fault_tolerence|fault tolerance]]  

![[Pasted image 20240512225943.png|300|300]]
## Scalability principles
- **Scalable size:** able to support a massive increase in the number of users
- **Scalable geography:** operates over global distances, must tackle latency and data consistency 

## Hardware Platform

- **Commodity Hardware:** utilises standard PCs with modifications, such as a stripped-down version of [[Linux_permissions|Linux]] and significant storage capacity per unit.
- **Server organisation:** servers are organised into racks with built-in redundancy and connected through multiple switches, forming a cluster.
- **Storage Scale:** A cluster comprises of thousands of machines, offering petabytes of storage.

![[Pasted image 20240512230044.png|350|350]]

## gRPC
- A simple [[Distributed_systems#Middleware|middleware]] service used for almost all inter-machine communication 
- Consists of two parts:
	- **Serialisation format**: converts raw data into flattened binary for transport, this is not self-describing so a schema must be sent as well
	- [[Remote_invocation|RPC implementation]]: operations support one parameter to one result

```
message Person { // Example of setting up a message (language agnostic)
  required int32 id = 1;
  required string name = 2;
  optional string email = 3;
}
message Student {
  required Person person = 1;
  required string college = 2;
}

message SearchRequest { // Example of setting up an RPC
  required string query = 1;
  optional int32 page_number = 2;
  optional int32 result_per_page = 3;
}
service SearchService {
  rpc Search (SearchRequest) returns (SearchResponse);
}
```

## Google file system (GFS)
-  GFS employs a unique architecture where metadata is handled by a master to simplify consistency. This uses a reduced consistency model to improve scalability 
- Data is stored in chunks across multiple chunk servers. Uses a model where files are typically appended rather than overwritten (useful for logging and data accumulation)

### Google File System (GFS) Details

- **Architecture:** Single master with multiple chunk servers; clients interact directly with chunk servers for data operations after initial contact with the master.
- **Data Handling:** Uses a model where files are typically appended rather than overwritten, which aligns with the common usage patterns at Google, such as logging and data accumulation.

### MapReduce

- **Purpose:** Processes large data sets across distributed servers by dividing tasks into small segments that can be executed concurrently.
- **Operation:** Consists of Map, Shuffle, and Reduce phases; it efficiently processes tasks by mapping out data processing, shuffling the data to organize it by the key, and then reducing the data to aggregate final results.
- **Use Cases:** Ideal for tasks like large-scale data analysis and batch jobs.

### Impact and Innovations

Google's development practices have significantly influenced the broader field of distributed computing, inspiring technologies such as Hadoop and Apache Spark, which mimic or build upon the principles seen in Google's approaches to handling large-scale data processing.


### Key Design Philosophies at Google

Google’s infrastructure design emphasizes:

- **Simplicity:** Focus on doing one thing well.
- **Performance:** Every millisecond counts; back-of-the-envelope calculations are crucial.
- **Testing:** Rigorous testing with a strong emphasis on logging and tracing to identify and resolve issues.
- **Use of Commodity Hardware:** Opt for the cheapest commodity hardware and manage risk through software resilience.

### Chubby - Google's Lock Service

Chubby provides a lock service that is:

- **Primary Focus:** Reliability and availability for a moderately large set of clients.
- **Secondary Concerns:** Throughput and storage capacity.
- **Functionality:** Used primarily for distributed coordination and as a file system for storing small files (e.g., metadata).

#### Features of Chubby

- **Operations:** Supports atomic operations like open, close, delete, and basic file reads and writes.
- **Use Case:** Typically used for locks held over long periods, supporting tasks like primary elections in distributed systems.

### Chubby's API and System Structure

- **API:** Provides functions for file operations and lock management.
- **System Structure:** Consists of a small number of replicated servers (usually five), using a consensus protocol to ensure consistency and availability.

### Primary Election Using Chubby

- Chubby is instrumental in primary elections within distributed systems. It enables a process to acquire a lock to become the primary, with others acting as replicas. This is crucial for systems like GFS and BigTable.

### Bigtable - Google’s Distributed Storage System

- **Overview:** Bigtable is a large-scale, non-relational, distributed database optimized for Google's infrastructure.
- **Architecture:** Uses a master to manage tablet servers, which store data in structured formats optimized for performance and scalability.

#### Features of Bigtable

- **Data Model:** Handles semi-structured data across large numbers of tablets, supporting billions of rows and thousands of columns.
- **Usage:** Integral to Google products like Search, Maps, and Analytics, due to its efficient data handling capabilities.

### Integration with Other Google Systems

- **Chubby and Bigtable:** Use Chubby for lock management and configuration storage.
- **GFS and Bigtable:** Bigtable is built on top of the Google File System (GFS) to manage the massive data storage requirements.

### Design Considerations and Trade-offs

- **Scalability vs. Consistency:** Google’s systems often favor scalability and performance over strict consistency, using innovative data storage and coordination services to manage these trade-offs effectively.
