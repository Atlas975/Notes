---
aliases: DNS
---

> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking
> **Created:** 16/02/2023 - 09:40
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
# Domain name server
- An [[Internet_protocols#Application layer|application layer protocol]], acts as an alias for a domain's computer readable  IP address
- Uses a distributed database of name servers known as the domain domain name system
- DNS can also act as a load balancer having multiple IP addresses correspond to one name

![[Pasted image 20230308124225.png|450|450]]
- Not that only leaf nodes correspond to specific addresses 
- The internet domain name structure, a DNS server typically exists for each of these:

![[Pasted image 20230308124525.png|400|400]]

- A domain is a subdomain of another if its name ends with the other domain name eg 
```
lancs.ac.uk -sub-domain-> ac.uk -sub-domain-> uk 
```

- DNS name server resolution: 

![[Pasted image 20230308130522.png|400|400]]
- This is a full recursive search which is uncommon, instead a cache typically intercepts this request, cache entries still timeout 
## Domain server types
### Top-level domain servers
- A TLD is responsible for all top level country domains eg uk, fr, ca 
### Authoritative domain servers
- Organisations own DNS server providing IP mappings for an organisations named hosts 

### Local domain server
- Does not strictly belong to hierarchy, acts as a [[Caching|cache]] for recent name-to-address translations
- Works as a [[Proxy_pattern|proxy]], forwarding query if necessary ie the cache is out of date
## Full qualified domain names
- An FQDN ends with a dot, it specifies the exact location of a resource and includes all levels of the DNS hierarchy including the top level domain
- Names without a dot can be extended to its root node. An FQDN is not always needed for a search query depending on the domain one is already present in 

![[Pasted image 20230308125447.png|400|400]]
