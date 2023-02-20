> [!important]- Metadata
> **Tags:** #OperatingSystems #Networking 
> **Located:** Networking
> **Created:** 19/02/2023 - 14:24
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
# Network tools

> ![[Pasted image 20230219143642.png|500|500]]
> [[Transmission_protocols|transmission protocol]]

## ping
- ping measures response time from a specific device, useful for checking host reach-ability
- Measures RTT and works on end to end manner like tracer route, however messages sent to specific hosts rather than nodes across the path

> ![[Pasted image 20230213231702.png|550|550]]

- ping works in the following way:
	1.  A user sends a "ping" request to a network host using the "ping" command.
	2.  Request in form of an ICMP/UDP "echo request" packet.
	3.  The destination host receives a request and sends back a ICMP/UDP "echo reply" packet.
	4.  The time it takes for the reply packet to reach the source host is measured and recorded.

## iperf
- iperf is a tool that is used to measure network performance by generating traffic between two endpoints and measuring the [[Network_architecture#Bandwidth|Bandwidth]].
- Useful for testing individual connections to a 
> ![[Pasted image 20230220113021.png|650|650]]
> ![[Pasted image 20230220113055.png|650|650]]

- iperf works in the following way:
	1. On the iperf server,  the command `iperf -s` is used to start iperf in server mode. This will cause iperf to listen for incoming connections from the client.
	2. On the iperf client, the command `iperf -c <server_ip_address>` is used to start iperf in client mode and connect to the server. e 
	3. Once the client is connected to the server, iperf will start sending data packets from the client to the server. By default, iperf uses the TCP protocol
	4. The server receives the packets and measures the bandwidth  The server then sends a response back to the client, containing the measured bandwidth. 


## traceroute 