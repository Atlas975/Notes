---
aliases: SMTP
---

> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking/TransmissionProtocols
> **Created:** 18/03/2023 - 17:29
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Simple mail transfer protocol
- Email is an asynchronous [[Network_architecture|network]] application that allows sending, receiving and reading
- Consists of 3 core components, SMTP acts as the protocol for sending emails over the web

![[Pasted image 20230318173233.png|450|450]]

- SMTP works on the [[Protocol_stack#Application layer|Application layer]] and used TCP for reliable email transfer between mail servers, runs on TCP [[Network_architecture#Network port|port 25]]
- Command/response style interaction akin to [[Hypertext_transfer_protocol|HTTP]] with a three phase transfer and  a persistent connection between hosts
	1. Handshake
	2. Transfer of message 
	3. Close 
- If a mail server is full, messages are rejected, in this scenario the senders mail server retries over fixed intervals until successful.  Afterwards the receiving user can invoke their user agent to read the sent message 

![[Pasted image 20230318174814.png|450|450]]

- An intermediate mail server may not always be used when sending, such as when the receiver has no other incoming mail   


```
S: 220 nyu.edu 
C: HELO lancs.uk 
S: 250 Hello lancs.uk, pleased to meet you 
C: MAIL FROM: <alice@lancs.uk>
S: 250 alice@lancs.uk… Sender ok 
C: RCPT TO: <bob@nyu.edu>
S: 250 bob@nyu.edu ... Recipient ok 
C: DATA 
S: 354 Enter mail, end with "." on a line by itself 
C: Do you like ketchup? 
C: How about pickles? 
C: . 
S: 250 Message accepted for delivery 
C: QUIT 
S: 221 nyu.edu closing connection
```

- Mail message format: 

![[Pasted image 20230318175738.png|500|500]]
- Mail access from a server also has its own protocols such as:
    - **POP**: Post Office Protocol (authorisation, download)
    - **IMAP**: Internet mail access protocol (allows manipulation of stored messages on server)
    - [[Hypertext_transfer_protocol|HTTP]]: Hypertext transfer protocol (used by gmail,  yahoo etc
- Web based email also exists where the web browser acts as a user agent
## Mail servers
- Acts as a mailbox that contains incoming messages for users
- Has a message queue of mail messages that need to be sent 
- Acts as a server (receives emails) and a client (sends emails)

## User agent
- Acts as a client which composes, edits, reads and sends emails
- Outgoing and incoming messages are stored on servers, not the agent itself
