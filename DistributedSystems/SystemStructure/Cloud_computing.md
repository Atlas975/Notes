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
# Cloud computing

Cloud computing provides on-demand access to shared computing resources, allowing users to obtain and configure virtual servers and other services with minimal interaction with the service provider.

- **Characteristics:** Highly scalable, on-demand resources that can be quickly provisioned and released.
- **Types of Services:**
    - **Software as a Service (SaaS):** Offers software applications over the internet.
    - **Platform as a Service (PaaS):** Provides a platform allowing customers to develop, run, and manage applications.
    - **Infrastructure as a Service (IaaS):** Provides fundamental computing resources such as virtualized physical hardware.

### Fog Computing

An extension of cloud computing that brings computation, storage, and application services closer to the edge of the network. It aims to reduce latency, increase system responsiveness, and improve operational efficiency.

- **Use Cases:** Ideal for applications requiring real-time interactions, location awareness, and low latency, such as IoT applications.