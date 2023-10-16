> [!important]- Metadata
> **Tags:** #DistributedSystems
> **Located:** DistributedSystems
> **Created:** 16/10/2023 - 17:39
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Two general problem
- A problem in [[Distributed_systems|distributed systems]] related to complications in consensus 
- The premise is that two generals, each leading an army, want to capture a city. The attack is only successful if both armies attack together. However communication is not reliable 

![[Pasted image 20231016174155.png|350|350]]

- An ACK is required but can be challenging with an unreliable network 
- Various approaches exist to handle this limitation
## Multiple messages 
- G1 attacks after sending multiple messages to G2 for insurance if one fails
- However, none of the messages arriving is a possibility

![[Pasted image 20231016174534.png|450|450]]