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

![[Pasted image 20230506205142.png|500|500]]
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