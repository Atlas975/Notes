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
- **HTTPS** (HTTP secure) is a secure version of HTTP that uses TCP for encryption 