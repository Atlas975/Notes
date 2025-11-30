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
- Provides on-demand leasing of computing resources, allowing users to obtain and configure [[Virtualisation|virtual]] servers and other services with minimal service provider interactions 
- Highly scalable, on-demand resources can quickly provisioned and released.


![[Pasted image 20240512224816.png|350|350]]

## Service types
- **Software as a Service (SaaS):** offers software applications over the internet.
- **Platform as a Service (PaaS):** a platform allowing users to develop, run, and manage applications.
- **Infrastructure as a Service (IaaS):** provides computing resources eg virtualised physical hardware.

## Fog Computing

- An extension of cloud computing that brings computation, storage, and application services closer to the edge of the network. Ideal for reducing latency (eg with real time applications)
- This increases system responsiveness and improve operational efficiency. Typically handled by having compute geographically closer to clients 

