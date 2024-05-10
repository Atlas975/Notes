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


## Scaling strategies
- **Scale up (vertical scaling):** Increasing the capacity of a single server. Useful when services are stateful to avoid needing coordination with a lock 
- **Scale out (horizontal scaling):** adding more servers, managed by a load balancer. Ideal when theres a large disparity between process time and load balance time

![[Pasted image 20240510143820.png|400|400]]



## Software containment technologies 
- [[Virtualisation]] is used to offer software containi
1. **Virtualization with Hypervisors (e.g., VMware, Hyper-V):** Full machine virtualization provides complete isolation by simulating hardware environments for virtual machines (VMs).
2. **Containers (e.g., Docker, Kubernetes):** Lightweight virtualization that allows for running multiple isolated systems on a single host machine to maximize efficiency.



### Practical Applications

- **Cloud Scaling:** Both VMs and containers are foundational to cloud services, enabling flexible resource management and rapid scaling.
- **Multi-Tenancy Management:** Isolation features of VMs and containers help manage resources among multiple tenants securely and efficiently.

### Conclusion

Software containment is essential in distributed systems for enhancing scalability, managing dependencies, and supporting multi-tenant architectures. Technologies like VMs and containers provide the tools necessary to deploy and manage applications across diverse environments effectively.