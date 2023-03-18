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
- Email is an asynchronous network application that allows sending, receiving and reading
- Consists of 3 core components, SMTP acts as the protocol for sending emails over the web

![[Pasted image 20230318173233.png|500|500]]

## Mail servers 
- Acts as a mailbox that contains incoming messages for users
- Has a message queue of 