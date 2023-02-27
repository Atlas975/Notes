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
- An [[Internet_protocols#Application layer|Application layer]] [[Transmission_protocols|transmission protocol]] used to transfer data over the internet 
- Used client-server model where clients sens a request and a server responds 

![[Pasted image 20230216101148.png|450|450]]

- **Stateless**, meaning that each request + response is independent of previous operations
- HTTP requests are in [[ASCII]] and consist of a method (GET / POST / PUT), URL and headers that provide additional information about the request
- HTTP response: 

![[Pasted image 20230216113306.png|450|450]]

## HTTP methods
1.  **GET**: retrieves data from a server, parameters made part of URL
2. **Conditional GET**: only send object if cache has no up to date data 
3.  **POST**: sends data to a server to create or update a resource.
4.  **PUT**: updates an existing resource on a server.
5.  **DELETE**: deletes a resource from a server.
6.  **HEAD**: retrieves the headers for a resource, but not the resource itself, useful for debugging
7.  **OPTIONS**: retrieves the communication options available for a resource.
8.  **CONNECT**: establishes a network connection to a server over a secure SSL/TLS tunnel.
9.  **TRACE**: echoes back the received request so that a client can see what changes or additions have been made by intermediate servers.
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

## Cookie
- Small file located inside the browser, sent to web server by browser 
- Sent back to the browser in all subsequent request, helps get around statelessness of HTTP
- Initial HTTP request creates a unique ID and back-end database for that id

![[Pasted image 20230216113702.png|450|450]]

- Remote links such as those to a websites social media or website advertisements can also make use of 3rd party cookies, allowing a 3rd party to track users across multiple websites

## Request load balancer
- A network device / application that distributes HTTP requests across multiple servers, vital for high traffic websites to prevent traffic overload and increase fault tolerance  
- Various algorithms exist to handle balancing eg round robin, load based etc 
- Round-robin is not ideal when servers can handle varying capacities 

![[Pasted image 20230216115019.png|450|450]]

## Web caches
- Allows client requests to be satisfied without involving the origin server 
- Makes use of a [[Proxy_pattern|proxy]] server, this also helps avoid overloading origin  

![[Pasted image 20230216115644.png|500|500]]

## HTTP2
- Head of line blocking is a [[Concurrency|concurrent]] request problem where an earlier request blocks other requests from arriving

![[Pasted image 20230216120128.png|450|450]]

- This can be mitigated by dividing objects into separate frames, similar to [[Routing_methods#Time division multiplexing (TDM)|TDM]] 
- This allows smaller objects to arrive much faster 

![[Pasted image 20230216120353.png|450|450]]

