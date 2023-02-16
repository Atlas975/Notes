---
aliases: HTTP
---

> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking
> **Created:** 16/02/2023 - 10:03
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
# Hypertext transfer protocol
- An [[Internet_protocols#Application layer|Application layer]] protocol used to transfer data over the internet 
- Used client-server model where clients sens a request and a server responds 
- A HTTP request consists of a method (GET / POST / PUT), URL and headers that provide additional information about the request

> ![[Pasted image 20230216101148.png|450|450]]

- **Stateless**, meaning that each request + response is independent of previous operations
## Non-persistent HTTP
- One object sent over a TCP connection, multiple connections needed for multiple objects 
- Useful for small requests, connection closed immediately after response, 3 way handshake

## Persistent HTTP
- Multiple objects can be sent over a TCP connection, less overhead of opening connections 
- Faster response times and less over overhead, useful for larger requests 

## HTTPS
- Stands for Hypertext Transfer Protocol Secure, a secure version of HTTP that makes use of either a secure socket layer (SSL) or transport layer security (TSL)
- Connection is established with a website server followed by [[Checksum|encryption key negotiation]]
- Provides benefits such as 
	1.  **Data confidentiality**: Ensures that the data being transmitted is encrypted, making it more difficult for an attacker to intercept and read it.
	2.  **Authentication**: verifies that the website being accessed is legitimate and not an impostor site created by an attacker.
	3.  **Data integrity**: ensures that data transmitted has not been modified in transit.
