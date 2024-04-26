> [!important]- Metadata
> **Tags:** #Cybersecurity #Networking 
> **Located:** Cybersecurity
> **Created:** 26/04/2024 - 23:35
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Network security
- A critical aspect of IT that involves the policies, practices, and tools designed to protect computer [[Network_architecture|networks]] and data from unauthorised access
- The technologies used to handle this can operate on various parts of the [[Protocol_stack|protocol stack]]


## Firewall Technologies:

- **Packet Filtering**: This is a basic form of firewall technology that blocks or allows traffic based on pre-set rules in the network layer.
- **Stateful Inspection**: More advanced than packet filtering, it monitors the state of active connections and can block or allow traffic based on the state of the connection.
- **Proxy Firewalls**: These act as an intermediary for requests from clients seeking resources from other servers, inspecting incoming traffic at the application level.
- **Dynamic Packet Filtering**: An extension of stateful firewalls that can modify firewall rules dynamically based on traffic behavior 