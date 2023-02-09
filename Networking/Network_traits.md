> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking
> **Created:** 26/12/2022 - 03:57
> ```dataviewjs
>let cur = dv.current().file;
>let loc = cur.path;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths).slice(0, 20)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]));
> ```

___
# Network traits
- A network transmission consists of:
	1. Message
	2. Sender
	3. Receiver
	4. Medium
	5. Protocol 

> ![[Pasted image 20211029231531.png|500|500]]

- Data operates on a range of frequencies (bandwidth) regardless of data type.
- Mediums are categorized by different bandwidths and fall into two categories 
    - **Guided**: wired transmission
    - **Unguided**: wireless transmission 
## Header
- Contains key details of data packets such as destination and origin IP. 
- 

## Network criteria 
- Effective  communication over a network requires accounting for the following:
    - **Delivery**: data needs to arrive to correct device only
    - **Accuracy**: data loss shouldn't occur from distortion or noise.
    - **Timeliness**: data packets must arrive without significant delay or else they'll be dropped  
    - **Jitter**: The delay in packet arrival must be consistent.

## Bandwidth
- In bits per second, refers to the speed of bit transmission a medium can accommodate.
- In hertz, refers to the range of frequencies that a medium can allow to pass.
- Certain bit rates may be needed for accurate data transmission.
## Throughput
- How fast data can actually be transmitted, when factoring in congestion, interference etc
- Bandwidth is potential bit rate throughput gives true measurement.
- Lowest transmission speed acts as a bottleneck, so with multiple transmission speeds the lowest bandwidth becomes the one in use 


## Sampling
- Sampling of signals is done at twice the bandwidth
- Min of two readings per cycle needed to reconstruct signal.

> ![[Pasted image 20211030000108.png|400|400]]
> ![[Pasted image 20211030000156.png|500]]

- Therefore needs transmission bandwidth that accommodates 48 kbps 
## Network categories
- Networks are typically heterogeneous consisting of multiple network  
- The network used for a specific service depends on user needs, size, complexity and the technologies available 

### LAN
- Local area network, covers a small geographical area, such as a building or campus. 
- It allows computers to share resources, such as printers, and enables communication between devices within the same network. Multiple LAN layouts exist

> ![[Pasted image 20211030162605.png|450|450]]

### MAN
- Metropolitan area network, covers a larger geographical area than a LAN, such as a city or metropolitan area. 
- MANs are used to connect multiple LANs to form a larger network that can support a wider range of applications and services.
### SAN
- Storage Area Network, a specialised  high-speed network that provides block-level access to data storage devices
- SANs are used to improve the performance and reliability of storage systems and allow multiple servers to access a shared pool of storage resources.

> ![[Pasted image 20230206163117.png|200|200]]

### WAN
- Wide area network, covers a large geographical area, such as a region or country. 
- WANs are used to connect LANs and MANs to form a large, inter-connected network. 
- WANs typically use a combination of technologies, including leased lines, satellite links, and VPNs (virtual private networks), to provide connectivity over large distances.

### Point to point WAN
- Private network used for private communication in an organisation
- Connects distinct WAN's together to communicate over distinct geographical regions 

> ![[Pasted image 20211030163447.png]]

