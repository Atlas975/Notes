> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking
> **Created:** 28/03/2023 - 20:13
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Internet headers
- An [[Internet_architecture|internet]] header is a block of metadata  added to a packet or message as it traverses the Internet. 
- Contains information that is used by [[Network_architecture|network]] devices and software to route the packet or message to its destination, as well as to interpret its content.

## ICMP header
- **Type (1 byte)** - Specifies the type of message. Eg echo request (8) and echo reply (0).
- **Code (1 byte)** - Provides additional information about the message. For example, if the type is echo request, the code is typically set to 0.
- **Checksum (2 bytes)** - Used to detect errors in the header and data of the ICMP message.
- **Identifier (2 bytes)** - A unique identifier that is used to identify the request and response messages belonging to the same "conversation."
- **Sequence Number (2 bytes)** - A sequence number that is used to identify each individual message within a "conversation."

## IP header 
-   **Version (4 bits)** - Specifies the IP version being used (e.g. IPv4 or IPv6).
-   **Header Length (4 bits)** - Specifies the length of the IP header in 32-bit words.
-   **Type of Service (1 byte)** - Provides information on how the packet should be handled by the network.
-   **Total Length (2 bytes)** - Specifies the total length of the packet, including the header and data.
-   **Identification (2 bytes)** - A unique identifier that is used to identify the packet and its fragments.
-   **Flags (3 bits)** - Used to control fragmentation and reassembly of the packet.
-   **Fragment Offset (13 bits)** - Specifies the offset of the current fragment within the original packet.
-   **Time to Live (1 byte)** - Specifies the max number of hops the packet can take before it is discarded.
-   **Protocol (1 byte)** - Specifies the protocol used by the packet's payload (e.g. TCP, UDP, ICMP).
-   **Header Checksum (2 bytes)** - Used to detect errors in the header.
-   **Source IP Address (4 bytes)** - Specifies the source IP address.
-   **Destination IP Address (4 bytes)** - Specifies the destination IP address.

## TCP header 
-   **Source Port (2 bytes)** - Specifies the source port number.
-   **Destination Port (2 bytes)** - Specifies the destination port number.
-   **Sequence Number (4 bytes)** - A sequence number used to identify a segment within a TCP stream.
-   **Acknowledgment Number (4 bytes)** - An acknowledgment number that is used to confirm receipt of data by the receiver.
-   **Data Offset (4 bits)** - Specifies the length of the TCP header in 32-bit words.
-   **Reserved (3 bits)** - Reserved for future use.
-   **Flags (9 bits)** - Control flags that indicate the purpose and state of the TCP segment.
-   **Window Size (2 bytes)** - Specifies the size of the receive window.
-   **Checksum (2 bytes)** - Used to detect errors in the TCP header and data.
-   **Urgent Pointer (2 bytes)** - indicates if certain data in the segment should be treated as urgent.
-   **Options (variable)** - Optional fields that provide additional information about the TCP connection.


## UDP header 
-   **Source Port (2 bytes)** - Specifies the source port number.
-   **Destination Port (2 bytes)** - Specifies the destination port number.
-   **Length (2 bytes)** - Specifies the length of the UDP datagram, including the header and data.
-   **Checksum (2 bytes)** - Used to detect errors in the UDP header and data.