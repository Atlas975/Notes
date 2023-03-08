---
alias: processor
---

> [!important]- Metadata
> **Tags:** #OperatingSystems 
> **Located:** OperatingSystems
> **Created:** 27/02/2023 - 16:44
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Processors
## Processor affinity
- A process may have a 'can run on' CPU affinity bitmask, indicating what processors its able to run on. This also includes it's preferred CPU
- A ready process for a CPU is looked for based on 
	- What last ran on the CPU
	- What processes have as a preferred CPU
	- Process priority if in a [[Multi-Process_systems]]
- Virtual CPUs (hyper-threading) pose a challenge as they contend for the same resources 


## Address space
- Address space (or main memory address space) is the amount of memory that can be addressed by a processor, indicates range of memory addresses that can be used 
- **x64** and **x32** architecture indicates that many bits of address space
- In **x86** architecture, the main memory address space is divided into two parts:
	- The first part is called **real mode**, which is a 16-bit mode and can address 1 MB of memory.
	- The second part is called **protected mode**, which is a 32-bit mode and can address 4 GB of memory.

# Multiprocessors
- With multiple processors, a hierarchy of [[Computer_memory|memory]] and access speeds exist within processors. 
- Computer processing structure:

![[Pasted image 20221219114824.png|450|450]]

- Shared caches also exist that multiple cores are clustered around
- Resource optimisations are essential, with multiple types of processors, idle time can often be large with limited usage eg text editors wont use a GPU
- General purpose GPUs (**GPGPU**) solve the issue of GPUs operating differently to standard processors. These are fine grained for [[Concurrency|parallelism]] with lots of static data. eg matrix multiplication and general calculations. [[Input&Output_systems|I/O]] tends to target batch processing
## Non-uniform memory access
- Architectural structures differing also presents a challenge
- Processor memory coupling can be an issue, a penalty may exist when trying to access memory present in another cache that is not present when trying to access local memory

![[Pasted image 20221219123145.png|350|350]]

## Symmetric multi-processing (SMP)
- Processors considered equal with each processor having it's own scheduler
- Run queues can either be:
	- Common / shared between processors
	- Per-process 
- Per-process queues add more overhead with the complexity of load balancing, these queues will also need to be able to:
	- **Pull**: free processors claim tasks taken on by busy processors 
	- **Push**: periodically redistribute tasks among process caches

## Asymmetric multi-processing (AMP)
- Single processor coordinates other process queues, simpler approach with scheduler data structures only accessed by a single CPU
- Specialist processors such as a GPU cannot handle this as code cannot be moved 

![[Pasted image 20221219124045.png|450|450]]

- Moving a process can still be expensive, caches may be invalidated or I/O or interrupts may be bound to a specific CPU and need to be redirected

## Interrupts and multi-processors
- [[Input&Output_systems#Interrupts|Interrupts]] need directing to appropriate processors
- These interrupts need to be forwarded to the appropriate processor for correct data handling
- In a **non-uniform memory access scheme**, this has a particularly high cost compared to symmetric multi-processing as I/O must go from one processor to another

![[Pasted image 20221219215141.png|450|450]]

- Solutions to direct interrupts include:
	- Each processor having it's own interrupt controller ([[Input&Output_systems#Interrupts#Programmable interrupt controller|PIC]])
	- [[Concurrency#Spinlocks|Spinlocks]], spin on shared lock object, useful for brief locks in multi-processor systems. These are not useful on single processor systems as no useful work is done while spinning takes place
- Page replacement may vary between cores, eg windows uses [[Computer_memory#LRU|LRU]] in single processor and [[Computer_memory#FIFO|FIFO]] in multi-processor systems


```dataviewjs
const degree = 2; // specify the degree of links

let inLin = new Set(dv.current().file.inlinks);
for (let i = 0; i < degree; i++) {
    inLin = new Set([...inLin].flatMap(x => [...dv.page(x).file.inlinks]));
}

inLin = [...new Set([...inLin].map(x => x.path))].map(x => dv.fileLink(x))
dv.table([`${degree}-degree links`], inLin.map(x => [x]));
```