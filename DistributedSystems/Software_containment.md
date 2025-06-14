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
# Software containment
- Involves encapsulating a software system and its dependencies within a single virtual unit, helping manage the complexity of multiple software environments
- This is crucial in modern distributed systems for managing dependencies, enabling cross-platform development, and facilitating cloud scaling and co-location.

![[Pasted image 20240511143112.png|450|450]]
## Scaling strategies
- **Scale up (vertical scaling):** Increasing the capacity of a single server. Useful when services are stateful to avoid needing coordination with a lock 
- **Scale out (horizontal scaling):** adding more servers, managed by a load balancer. Ideal when there's a large disparity between process time and load balance time

![[Pasted image 20240510143820.png|400|400]]

## Containment choices
- [[Virtualisation]]: full machine virtualisation using a hypervisor, provides complete isolation by simulating hardware environments. Guest OS is not aware that it's a VM
- [[Virtualisation#Types of virtualisation|Containers]]: lightweight virtualisation that allows for running multiple isolated systems on a single host machine to maximise efficiency. Does not have multiples OS's to keep up to date

![[Pasted image 20240511143844.png|450|450]]
## Dual-mode operation
- Allows [[Operating_system_design|OS]] to protect itself from other system components by featuring both a user mode and kernel mode. Some instructions are prevailed and only executable in kernel mode
- This is controlled via a mode bit provided by hardware, a [[Input&Output_systems|system call]] flips this to kernel mode and a return from said system call resets this to user mod

![[Pasted image 20240511140251.png|400|400]]

- The use of this allows for proper management of shared hardware resources, these resources should be fully utilised as long as there's work to do 
- For VMware this requires intercepting privileged instructions and rewriting them so that they target virtual representations of the instructions effect
## Virtualisation at scale 
- In a data centre, a hypervisor typically runs directly on computer hardware rather than sitting atop a host OS. This is much more efficient by removing a layer of indirection
- The hypervisor in this case directly communicates with hardware using it's own kernel and manages the allocation of memory

![[Pasted image 20240511143312.png|400|400]]
