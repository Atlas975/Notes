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
- Ping measures response time from a specific device, useful for checking host reach-ability
- Measures RTT and works on end to end manner like tracer route, however messages sent to specific hosts rather than nodes across the path

> ![[Pasted image 20230213231702.png]]
- Ping works in the following way:
    1.  A user sends a "ping" request to a network host using the "ping" command.
    2.  Request in form of an ICMP/UDP "echo request" packet.
    3.  The destination host receives a request and sends back a ICMP/UDP "echo reply" packet.
    4.  The time it takes for the reply packet to reach the source host is measured and recorded.

## Iperf 

   
3.  On the iperf server, you run the command "iperf -s" to start iperf in server mode. This will cause iperf to listen for incoming connections from the client.
    
4.  On the iperf client, you run the command "iperf -c <server_ip_address>" to start iperf in client mode and connect to the server. Replace <server_ip_address> with the IP address or hostname of the server.
    
5.  Once the client is connected to the server, iperf will start sending data packets from the client to the server. By default, iperf uses the TCP protocol, which ensures that all packets are delivered and provides a reliable measurement of the network performance.
    
6.  The server receives the packets and measures the bandwidth, or the amount of data that can be transmitted per unit of time. The server then sends a response back to the client, containing the measured bandwidth.
    
7.  The client receives the response and displays the results on the screen. The results typically include the measured bandwidth, along with other statistics such as the round-trip time, or the time it takes for a packet to travel from the client to the server and back.
    
8.  The test is complete, and the client can be disconnected from the server by pressing Ctrl-C.





> ![[Pasted image 20230220100710.png]]