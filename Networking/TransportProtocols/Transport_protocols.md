---
aliases: transport layer
---
> [!important]- Metadata
> **Tags:** #OperatingSystems #Networking 
> **Located:** Networking/TransportProtocols
> **Created:** 27/02/2023 - 11:31
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Transport protocols
- Part of the [[Protocol_stack#Transport layer|transport layer]], which acts as the glue for the network and application layer. Works by providing [[Network_architecture#Network socket|socket]] to socket communication between applications 
- In [[Protocol_stack#Bi-directional communication|bi-directional communication]] this performs two opposite tasks:
	- **Sender side**: breaks messages into segments, passes to network layer 
	- **Receiver side**: reassembles segments into messages, passed to application layers
- The transport layer can also provide reliable data transfer & integrity such as with TCP, but it doesn't provide bandwidth or [[Network_delay|delay]] guarantees

![[Pasted image 20230506210736.png|500|500]]
- In summary, while the [[Protocol_stack#Network layer|network layer]] provides logical communication between hosts, the transport layer provides does the same between processes to enhance network layer services

| Protocol | Description | Use Case |
| -------- | ----------- | -------- |
| TCP | Transmission Control Protocol | Provides reliable, ordered, and error-checked delivery of data between applications running on hosts communicating over an IP network. | Used for applications that require reliable and ordered data delivery, such as web browsing, email, file transfer, and database transactions. |
| UDP | User Datagram Protocol | Provides simple and connectionless datagram delivery services, but without error checking or reliability guarantees. | Used for applications that require fast and efficient data transmission, such as streaming media, online gaming, and real-time communication. |
| HTTP | Hypertext Transfer Protocol | Used for transferring data over the World Wide Web. | Used for accessing and transferring web pages, media, and other resources on the internet. |
| FTP | File Transfer Protocol | Used for transferring files over a network. | Used for transferring large files, software updates, or website content between servers and clients. |
| SMTP | Simple Mail Transfer Protocol | Used for sending and receiving email messages. | Used for sending and receiving email messages between mail servers and email clients. |
| POP | Post Office Protocol | Used for retrieving email messages from a server. | Used for downloading email messages from a mail server to an email client. |
| IMAP | Internet Message Access Protocol | Used for accessing and managing email messages on a server. | Used for managing email messages across multiple devices and clients, and for accessing shared email accounts. |
| DNS | Domain Name System | Used for resolving domain names to IP addresses. | Used for translating human-readable domain names (such as example.com) into IP addresses (such as 192.0.2.1) that can be used to locate web servers and other resources on the internet. |
| SSH | Secure Shell | Used for secure remote access to a computer or network. | Used for secure remote administration, file transfer, and command execution over an insecure network. |
| Telnet | Telnet Protocol | Used for remote access to a computer or network. | Used for remote administration, debugging, and other tasks that require access to a command-line interface. |
| SNMP | Simple Network Management Protocol | Used for managing and monitoring network devices. | Used for monitoring network performance, identifying and resolving issues, and configuring network devices such as routers, switches, and servers. |         |             |          |


## Transport service types
- **Connection oriented**: works in 3 phases, connection set-up, data transfer, disconnect 
- **Connectionless**: transfer of isolated units 

## Transport multiplexing
- Used to share a single network connection among multiple processes [[Concurrency|concurrently]]
- Multiple methods of achieving this including  [[Routing_methods#Frequency division multiplexing (FDM)|FDM]] and [[Routing_methods#Time division multiplexing (TDM)|TDM]]

![[Pasted image 20230506210701.png|500|500]]

### Connectionless demultiplexing
- Host receives IP datagrams with a src / dest IP, transport-layer segment and dest port number 
- The host uses the **destination IP and port number** to direct segments to their socket 

![[Pasted image 20230506211941.png|200|200]]
- IP datagrams with the same portNo but different senders will arrive at the same socket
- Example of a connectionless demux 

![[Pasted image 20230506212410.png|500|500]]

### Connection-oriented demultiplexing 
- In connection oriented multiplexing the TCP socket is identified by a 4-tuple consisting of:
	1. Src IP
	2. Src Port#
	3. Dest IP
	4. Dest Port#
- The demux receiver uses all 4 to direct a segment to the appropriate socket 
- Only once a connection is established can packets be sent, example connection demux:

![[Pasted image 20230506213826.png|500|500]]

- This is done by having a socket on the receiving end constantly listening in order to accept future connections that may come in
- Once a connection is accepted, a socket is returned that can be used to communicate with this sender

![[Pasted image 20230506214251.png|500|500]]


## Reliable data transfer
- Tasked with receiving a reliable stream of data for an application 
- 

![[Pasted image 20230506225817.png|450|450]]