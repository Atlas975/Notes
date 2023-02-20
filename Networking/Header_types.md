> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking
> **Created:** 20/02/2023 - 17:59
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
# Header types


## ICMP
The format of an ICMP header is as follows:
-   Type (8 bits) - Specifies the type of message. Examples include echo request (8) and echo reply (0).
-   Code (8 bits) - Provides additional information about the message. For example, if the type is echo request, the code is typically set to 0.
-   Checksum (16 bits) - Used to detect errors in the header and data of the ICMP message.
-   Identifier (16 bits) - A unique identifier that is used to identify the request and response messages belonging to the same "conversation."
-   Sequence Number (16 bits) - A sequence number that is used to identify each individual message within a "conversation."