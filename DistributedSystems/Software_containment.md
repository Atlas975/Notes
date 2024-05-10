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
- **Scale up (vertical scaling):** Increasing the capacity of a single server.
- **Scale out (horizontal scaling):** adding more servers, managed by a load balancer

### When to Scale Out

- Scaling out is preferable when the service time on individual servers becomes a bottleneck, making it advantageous to distribute the load across multiple servers.
- Geographic scaling involves placing services closer to users to reduce latency and improve user experience.

### Challenges with Stateful Services

- Coordination between servers that maintain state can negate the benefits of scaling out due to the overhead of keeping state consistent across multiple instances.

### Software Containment Technologies

1. **Virtualization with Hypervisors (e.g., VMware, Hyper-V):** Full machine virtualization provides complete isolation by simulating hardware environments for virtual machines (VMs).
2. **Containers (e.g., Docker, Kubernetes):** Lightweight virtualization that allows for running multiple isolated systems on a single host machine to maximize efficiency.

### Comparison: VMs vs. Containers

- **VMs:**
    - Provide full isolation with separate OS environments.
    - Higher resource consumption.
    - Suitable for cross-platform compatibility and secure environments.
- **Containers:**
    - Share the host OS kernel but maintain isolated user spaces.
    - Lower resource consumption.
    - Ideal for applications that require rapid deployment and scaling.

### Practical Applications

- **Cloud Scaling:** Both VMs and containers are foundational to cloud services, enabling flexible resource management and rapid scaling.
- **Multi-Tenancy Management:** Isolation features of VMs and containers help manage resources among multiple tenants securely and efficiently.

### Conclusion

Software containment is essential in distributed systems for enhancing scalability, managing dependencies, and supporting multi-tenant architectures. Technologies like VMs and containers provide the tools necessary to deploy and manage applications across diverse environments effectively.