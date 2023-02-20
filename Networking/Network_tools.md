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

## Ping
- ping measures response time from a specific device, useful for checking host reach-ability
- Measures RTT and works on end to end manner like tracer route, however messages sent to specific hosts rather than nodes across the path

> ![[Pasted image 20230213231702.png|550|550]]

- ping works in the following way:
	1.  A user sends a ping request to a network host using the `ping` command.
	2.  Request in form of an ICMP/UDP "echo request" packet.
	3.  The destination host receives a request and sends back a ICMP/UDP "echo reply" packet.
	4.  The time it takes for the reply packet to reach the source host is measured and recorded.

## Iperf
- iperf is a tool that is used to measure network performance by generating traffic between two endpoints and measuring the [[Network_architecture#Bandwidth|Bandwidth]].
- Useful for testing individual connections to a host and to optimise network configurations 
- Bi-directional transfer is also required to check for irregularities in a direction

> ![[Pasted image 20230220113021.png|650|650]]
> ![[Pasted image 20230220113055.png|650|650]]

- iperf works in the following way:
	1. On the iperf server,  the command `iperf -s` is used to start iperf in server mode. This will cause iperf to listen for incoming connections from the client.
	2. On the iperf client, the command `iperf -c <server_ip_address>` is used to start iperf in client mode and connect to the server. e 
	3. Once the client is connected to the server, iperf will start sending data packets from the client to the server. By default, iperf uses the TCP protocol
	4. The server receives the packets and measures the bandwidth  The server then sends a response back to the client, containing the measured bandwidth. 


## Traceroute
- A network diagnostic tool used to trace the path that an [[Internet_protocols|IP]] packet takes from two networked device. Provides information about the routing path and network latency.
- This works by measuring RTT, sending three packets to a router that lies on path to destination and measures lag between transmission and reply

>![[Pasted image 20230210180038.png|450|450]]

- Useful for identifying specific routing bottlenecks along a path from source to destination 

> ![[Pasted image 20230220120621.png|650|650]]

- traceroute works in the following way:
	 1. A user sends a series of packets using the `traceroute` command
	 2. Traceroute sends out a series of packets, each with an increasing Time to Live (TTL) value, starting with a TTL of 1.
	 3. The TTL value is decremented by each router that the packet passes through. When the TTL reaches zero, the router discards the packet and sends an "ICMP time exceeded" message back to the sender.
	 4. Traceroute listens for these ICMP messages and uses them to identify the IP address of the router that sent the message. This IP address is recorded as the first hop in the traceroute report.
	 5. The process is repeated with a new packet with an increased TTL value until the packet reaches the destination host.
	 6. Traceroute displays a report showing the IP address of each router along the path, as well as the time it took for the packet to complete the round-trip between the source and each router.