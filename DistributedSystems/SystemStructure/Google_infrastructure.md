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
- Data is stored in chunks across multiple chunk servers. Uses a model where files are typically appended rather than overwritten (useful for history logging and data accumulation)


![[Pasted image 20240512232831.png|450|450]]

- The fewer chunk servers the easier the job of the master node for coordination, ideally the master node needs to avoid becoming a bottleneck. 
- These chunks act as redundancy and availability access, when looking for a chunk index the master node can redirect to one close to the client
- The master must also handle write access, the chunk server itself is responsible for propagating changes made to files to the other replicas`
## MapReduce
- Processes large data sets across distributed servers by dividing tasks into small segments that can be executed [[Concurrency|concurrently]]. Consists of Map, Shuffle, and Reduce phases
- The API for this allows 3 things to be specified: 
	1. A data source to be automatically divided up
	2. A map program
	3. A reduce program

![[Pasted image 20240512233215.png|400|400]]

- This is ideal for tasks like large-scale data analysis and batch jobs.
- This is typically handled by a master node which delegates specific nodes to be responsible for performing either map or reduce 

![[Pasted image 20240512234505.png|400|400]]
### Map reduce process
1. **Map**: takes input data and uses map program to generate key:value pairs 

![[Pasted image 20240512233632.png|350|350]]

2. **Shuffle**: groups all values that have the same key, placing them at the same worker node 

![[Pasted image 20240512233731.png|300|300]]

3. **Reduce**: turns a key:value-list and outputs a single key:value pair

![[Pasted image 20240512233925.png|300|300]]

## Chubby
- Used primarily for distributed coordination and as a file system for storing small files and locks. Focusing on reliability and availability for a moderately large set of clients.
- Supports atomic operations like open, close, delete, and basic file reads and writes. Used for various services such as primary elections and a [[Domain_name_server|DNS]] for google services


![[Pasted image 20240512234847.png|250|250]]

- Uses [[Paxos]] consensus between it's own replicas using [[Passive_replication|passive replication]], Chubby services itself are accessed through [[Remote_invocation|RPC]]. This also offers [[Caching|caching]], letting chubby notify users of file changes
- Chubby typically stores metadata of files with it's API providing functions for file operations (eg read/write permissions) and lock management.

![[Pasted image 20240512235708.png|300|300]]

- Overall Chubby is vital in storin
### Primary election using Chubby

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
