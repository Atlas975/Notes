> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking
> **Created:** 27/02/2023 - 16:44
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Application architecture
-  Refers to the way in which software applications are designed to communicate and exchange data over a network.
- This includes the protocols, interfaces, and software components that allow applications to interact with each other across a network.


## Client server architecture 
- A server acts as a s
![[Pasted image 20230318153513.png|300|300]]
![[Pasted image 20230216145332.png|500|500]]

## P2P architecture 
![[Pasted image 20230216145421.png|500|500]]