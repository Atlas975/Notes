



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


## ICMP header
- The format of an ICMP header is as follows:
    - Type (1 byte) - Specifies the type of message. Eg echo request (8) and echo reply (0).
    - Code (1 byte) - Provides additional information about the message. For example, if the type is echo request, the code is typically set to 0.
    - Checksum (2 bytes) - Used to detect errors in the header and data of the ICMP message.
    - Identifier (2 bytes) - A unique identifier that is used to identify the request and response messages belonging to the same "conversation."
    - Sequence Number (2 bytes) - A sequence number that is used to identify each individual message within a "conversation."

## UDP header 
- The format of a UDP header is as follows 
    - Source Port (2 bytes): This field contains the port number of the sending process.
    - Destination Port (2 bytes): This field contains the port number of the receiving process.
    - Length (2 bytes): This field specifies the length of the UDP datagram, including the header and the data. The minimum length of a UDP datagram is 8 bytes.
    - Checksum (2 bytes): This field contains the checksum of the UDP datagram, calculated using a checksum algorithm. The checksum is used to verify the integrity of the UDP datagram.