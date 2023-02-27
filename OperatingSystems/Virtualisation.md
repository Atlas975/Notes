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
- The motivation behind this is that machines are often idle / under utilise their resources Some application-level protection  are also insufficient for providing services like server hosting or operating cloud computing. 

![[Pasted image 20221216124410.png|550|550]]

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

![[Pasted image 20221219225313.png|450|450]]

- Considering a [[Operating_system_design#Layered design|layered approach]], the host OS runs in ring 0 and a guest OS will run in ring 1, general applications continue to run in ring 3. 
- This means that the host OS has privileges over the guest OS and the guest OS has privileges over applications 
- Note most processors support only user and supervisor mode
- Certain instructions such as on [[x86_assembly|x86]] also function differently in rings 0-3, such as only allowing ring 0 to configure [[Paging]] tables, this means certain privileged instructions would have to be rewritten or emulated. This is inefficient 

## Para-virtualisation
- Involves a modified guest OS that's virtualisation aware, prevents issues regarding instructions behaving differently depending on ring level
- Guest OS makes a special kind of [[Operating_system_design#System calls|system call]] known as a **hypercall** to the underlying operating system for privileged instructions 

![[Pasted image 20230116183857.png|550|550]]

- While it's safer and more efficient for a guest OS to be aware of itself being in a virtual environment, this ideally should not be visible to applications as these should behave identically regardless of mode

![[Pasted image 20230116184554.png|450|450]]

- While this approach to dealing with system [[Input&Output_systems#Device drivers|drivers]] is that drivers for hypervisor versions of an OS are unlikely to be present, meaning **generic device drivers** have to be user 
- Generic device drivers are less efficient than their company produced counterparts, however the hypervisor can be shrunk down due to the existence of an additional service that hosts native OS drivers

![[Pasted image 20230116191008.png|500|500]]

- While additional redirection may have a performance penalty, device drivers commonly support this operation allowing for this penalty to be minimised. This is an example of a **Hybrid VMM (Hypervisor + OS)**

## Page table virtualisation
- In a virtual OS, page tables for the guest OS sit on top of page tables for the host OS in a nested structure 
- MMUs and processors may support [[Paging#Hierarchical / Multi-level paging|multilevel hierarchies ]] that expands upon the two level paging hierarchy in the host OS to remove the need for nesting

![[Pasted image 20230116191712.png|450|450]]

## I/O Virtualisation
- [[Input&Output_systems|I/O]]  in virtualisation won't have direct access to hardware, but methods exist for multiple virtual machines to share a single physical I/O device 
- Support for this has come in two core ways
	- **Architectural support**
	- **Peripheral  Component Interconnect express (PCIe) extensions**
- A PCI system has multiple busses, each bus may have multiple devices connected 
- The first bits in a PCI address define the bus location followed by the device and lastly the device function
- These are used in conjunction to map to an address in memory  

![[Pasted image 20230117122104.png|450|450]]

- Architectural support can come in the form of **single-root I/O virtualisation (SR-IOV)**
- This involves the host OS communicating with physical functions to instantiate virtual functions for each VM to bind to
- Since this is a 1-to-1 mapping, each VM can configure the device how it wants

![[Pasted image 20230117123106.png|450|450]]