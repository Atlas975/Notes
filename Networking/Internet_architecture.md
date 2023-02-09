---
aliases: internet, web
---
> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking
> **Created:** 26/12/2022 - 03:56
> ```dataviewjs
>let loc = dv.current().file.path;
>let cur = dv.page(loc).file;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]).slice(0, 20));
> ```

___
# Internet architecture
- The internet supports a diverse of applications that rely on web services 
- Core components include 
	- **Hosts**: the end system computing devices that run network applications
	- **Communication links**: physical or digital links, speed measured in bandwidth 
	- **Switches**: used to forward packet (data blocks) down links 

> ![[Pasted image 20230123143523.png|400|400]]

- The internet itself can be taught of as a network of networks with protocols such as TCP / IP / HTTP governing the way data is transmitted. 
- Internet standards also exist to define how communication over the internet needs to be established between hosts
## Response sequence

>![[Pasted image 20211109094505.png|400|400]]

## Internet architecture

>![[Pasted image 20211109094734.png|450|450]]

### Presentation tier
- Data display / input
- Verification (HTML/Javascript input form verification)
- Must not directly interact with a [[Database_design|DBMS]]
### Logic tier
- Processes data received by clients.
- Does not update data, only makes request
- Needs to verify format / type of received data.
### Data tier
- Stores data and returns data to logic tier.
- Data stored in DBMS, all database functions are handled here. 

## Internet structure
- The structure of an internet can be divided into 3 core components 
    - **Network edges**: endpoints of a network, also known as hosts / end systems / clients,  hosts applications on client devices, IOT and network servers 
    - **Access networks**: wired / wireless communication links eg routers 
    - **Network crore**: interconnected routers in a network of networks 

## Web
- An interconnected systems of public web pages that can be accessed through the internet 
- Web pages are written in HTML and transferred between server and client

