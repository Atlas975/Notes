> [!important|inIL]- Metadata
> **Tags:** #OperatingSystems 
> **Located:** OperatingSystems
> **Created:** 26/12/2022 - 09:26
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
# Virtualisation

- Allows multiple workloads to share physical resources by abstracting away the underlying hardware, useful for running multiple [[Operating_system_design|operating systems]] or applications
- The motivation behind this is that machines are often idle / under utilise their resources Some application-level protection  are also insufficient for providing services like server hosting or operating cloud computing 

> ![[Pasted image 20221216124410.png|550|550]]

## Virtualisation features
- **Base images / templates**: pre-canned OS installations, eg dual boot 
- **Snapshots**: capture entire state of running OS and system to disk
- **Clone**: copy base or snapshot image 
- **Live-migrations**: suspend OS and resume on separate host machines

## Types of virtualisation
- **Type 0: mainframes**: hardware support for hardware partitioning of devices and processors to multiple operating systems 
- **Type 1: OS based virtualisation:** VM support from underlying system from host OS
- **Type 2: user-space virtualisation**: no required support from underlying system eg virtualbox
- **Containers / emulation**: takes existing OS and replicate its internal data structures to provide the appearance of running multiple OS's at once. Eg Docker, Kubernetes

## OS expectations
- Even in a virtual environment each process expects:
	- A known [[Operating_system_design#Boot process|boot process]]
	- [[Processors]]
	- [[Input&Output_systems#Interrupts|Interrupt]] and timer systems 
	- Sufficient memory with known layout
	- [[Computer_memory#Memory protection|Memory management system]]
	- [[Input&Output_systems#DMA (Direct memory access)|Direct access to all I/O subsystems]] including inter-bus bridges and range of I/O devices
	- [[Linux_permissions|Protection system]] with distinct admin and user modes
- None of these should be accessible in user mode

## Unsupported virtualisation
- All applications run in user space, this includes guest operating systems. Host OS has exclusive access to supervisor / kernel space

> ![[Pasted image 20221219225313.png|500|500]]

- Considering a [[Operating_system_design#Layered design|layered approach]], the host OS runs in ring 0 and a guest OS will run in ring 1, general applications continue to run in ring 3. 
- This means that the host OS has privileges over the guest OS and the guest OS has privileges over applications 
- Note most processors support only user and supervisor mode
- Certain instructions such as on [[x86_assembly|x86]] also function differently in rings 0-3, such as only allowing ring 0 to configure [[Paging]] tables