---
aliases: congestion
---
> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking
> **Created:** 07/05/2023 - 16:19
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Congestion control
- [[Reliable_data_transfer|RDT]] utilises several methods to treat packet loss but does not treat the cause 
- Congestion control deals with the issue of too many sources / too much data or data arrival being too fast for the the network to handle. This manifests as:
    - **Lost packets**: buffer overflow at routers 
    - **Long delays**: queuing in router buffers
## Congestion general rules
$$\text{Delay}\propto \text{(Capacity remaining)} ^{-1}$$
$$\text{Throughput}\propto(\text{loss/retransmission/duplicates})^{-1}$$
$$\text{Throughput}\leq{\text{Capacity}}$$


## Infinite buffer solution 
- Involves one router with an infinite buffer that requests pass through 
- No retransmission required, max in/out capacity set at R

![[Pasted image 20230507164311.png|400|400]]

## Finite buffer solution 
- Additional overhead required on sender side to know when router buffer is available 

![[Pasted image 20230507164406.png|450|450]]

## Multi-buffer solution 

![[Pasted image 20230507164608.png|550|550]]