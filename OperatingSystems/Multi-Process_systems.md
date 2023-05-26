---
aliases: scheduling
---
> [!important|inIL]- Metadata
> **Tags:** #OperatingSystems #Concurrency 
> **Located:** OperatingSystems
> **Created:** 26/12/2022 - 09:27
> ```dataviewjs
>let loc = dv.current().file.path;
>let cur = dv.page(loc).file;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections","Tags"], dv.array(Array.from(paths)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]).slice(0, 20));
> ```

___
# Multi-Process systems

## Types of systems
- **Batch systems**: periodic jobs, allowed to complete before moving on eg payroll processing. May use scheduling such as shortest or longest process first.
- **Real-time systems**: time-critical elements, deadlines need to be followed in order to maintain data integrity / experience eg multimedia system
- **Interactive systems**: prioritises responsiveness eg a desktop

## I/O Scheduling
- [[Input&Output_systems|I/O]] is a natural scheduling point as data from a device may be needed to run a process
- High priority I/O may result in another process being dispatched until I/O completes

![[Pasted image 20221208190430.png|450]]
![[Pasted image 20221208190631.png|400]]
- I/O can act as a determining factor for process switches, these need to be balanced with CPU processes for a responsive system

![[Pasted image 20221208190942.png|450]]
-  having too many CPU bound processes can block I/O, having too many I/O bound processes can block CPU processes

- Some methods of enforcing scheduling include 
	- **Cooperative**: tasks actively yield control to scheduler 
	- **Pre-emptive**: scheduler forcibly takes control at regular intervals
	- **Priority-scheduling**: each process given a priority 

![[Pasted image 20221208192030.png|450]]

> example of priority queue, may lead to starvation at lower levels

## Process deadlock

- Another potential issue are processes that obtain exclusive access to a resource. This can result in the case where a high-priority process is blocked by a low priority process, which in itself cannot complete because it isn't given CPU time over the high priority process. [[Multiagent_systems]]
- This can be solved by occasionally pushing a lower priority process to high priority to avoid potential [[Concurrency#Concurrency pitfalls|deadlocks]]

![[Pasted image 20221208193916.png|500]]
## Deferred procedure calls (DPCs)
 - Interrupt service routines need to be short for a multi-process system. 
 - Devices may invoke a large number of interrupts at a time, failure to service these in time can cause system failure 
 - An ISR should aim to only do essential work such as clearing interrupt flags, overall systems should be prepared to handle a large volume of interrupts over time

## Schedulers and the dispatcher
- [[Processors|Multiple schedulers]] exist in a system these include :
	- **Long term scheduler:** makes decision if a process should be allowed on system, determines if there are enough resources to fulfill the process before its possible deadline
	- **Medium term scheduler:** determines which processes should be in memory, sets priorities as to what should be cached
	- **Short term scheduler:** responsible for disk scheduling by picking the process that runs next from the run queues 
	- **Dispatcher**: performs the context switches, the code that actually restarts process
## Scheduling overhead
- The cost to every process switch include: 
	- Time to invoke scheduler 
	- Saving current context 
	- Selecting new process 
	- Load new context
## Scheduling criteria
- **CPU utilization**: percentage of CPU time spent in application code 
- **Throughput**: processes completed over time 
- **Turnaround time**: time between process submission and completion

![[Pasted image 20221208204323.png|400]]
- **Waiting time**: sum of time waiting in queue 

![[Pasted image 20221208204209.png|400]]
- **Response time**: time between submission and start of doing useful work

# Preemptive scheduling
- Scheduler forces context switch at defined intervals
- **Quantum** determines how long processes run 
   -  Long: less interactive, fewer switches (more efficient)
	- Short: more interactive, more switches (less efficient)

![[Pasted image 20221208210226.png|450]]

- The programmable interrupt timer can be used to schedule interrupts at fixed timeperiods 
## Round-robin system
- Ensures fairness of process running

![[Pasted image 20221208210539.png|400]]

- descheduling places process at back of queue 
- Since processes can appear in a queue multiple times, this needs to be accounted for when determining the average waiting time of the scheduling method 

![[Pasted image 20221208211311.png|400]]

- Turnaround time is unaffected by this

![[Pasted image 20221208211508.png|400]]
# Disk scheduling
- The idea of disk scheduling methods is to avoid having the disk focus on hotspots where it has to move back and forth, instead its ideal to keep the head moving in a continuous, optimal way. Good disk scheduling is vital to allow the [[Operating_system_design|processing of multiple tasks]]

![[Pasted image 20211119222858.png|250|200]]

- The hard disk is a naturally block data transfer oriented device with the smallest unit of disk storage being known as a sector. Multiple sectors exist on a track.
- With these disks, how fast they can be accessed is more important than the rate they transfer data. Requiring effective scheduling to be used optimally
- The components of disk access latency include
	- **Seek time**: time taken for the head disk to leave and enter the cylinder.
	- **Rotational delay**: time required for the sector to make a full rotation.
- These are both mechanical delays, which are much larger than CPU delays.
## Disk scheduling considerations
- Response time: how quickly responses are handled 
- Throughput: order requests to get the most data possible 
- Fairness: avoiding starvation of requests
## First come first serve scheduling (FCFS)

![[Pasted image 20221208122708.png|500]]

- This has no real disk scheduling optimization, poor throughput with long seek times
- Fast response times with a natural expected order

![[Pasted image 20221208122940.png|200|200]]

## Shortest seek time first scheduling (SSTF)

![[Pasted image 20221208123205.png|500]]

- Optimized for smoother head movement, does not follow natural queue
- Short seek times, high throughput
- Longer max response times due to searching, potential starvation
- Head may be stuck in a disk hotspot 

![[Pasted image 20221208124126.png|200|200]]

## Elevator scheduling / SCAN
![[Pasted image 20221208123646.png|500]]

- Avoids starvation by allowing head movement
- Only goes for closest request provided it keeps the head moving
- Two chances to access data at extremities but adds a level of unfairness as certain data can be accessed when the head is moving either forward or backwards

![[Pasted image 20221208124036.png|200|200]]
## Circular scan scheduling / C-SCAN

![[Pasted image 20221208124516.png|450|450]]

- Attempts to eliminate unfairness of elevator scheduling, requests cannot take advantage of head movement back and forth as the head will always make a full rotation around the disk
- Longer service schedule but fairer 

![[Pasted image 20221208124801.png|200|200]]
## Earliest deadline first scheduling (EDF)
- Orders process based on deadlines to complete a process (FCFS for deadlines)
- Optimises on deadline first then seek time, acts as a priority queue 

![[Pasted image 20221208125136.png|450|450]]

- Applications more likely to stall on reads as they are typically needed immediately, writing can be delayed unless used for synchronization.

![[Pasted image 20221208125647.png|150|150]]


- SCAN + EDF scheduling 

![[Pasted image 20221208125814.png|450|450]]
