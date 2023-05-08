> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking
> **Created:** 08/05/2023 - 00:44
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Internet protocol

## IPV4
- A **32 bit** address, typically written in dotted notation with the decimal system 
- Each number is encoded in 8 bits eg `192.168.21.76`, leading zeroes unnecessary
## Routing tables
- Needs to give the next hop for every possible IP with  2^32 possibilities existing for 32-bit addresses
- This can be extremely slow to process 
![[Pasted image 20230508004630.png|500|500]]

![[Pasted image 20230508004930.png|400|400]]



## Reserved IP addresses
1.  **Loopback address (127.0.0.0/8)** - This address range is reserved for loopback purposes, meaning that any traffic sent to this address range is looped back to the same machine. The most commonly used loopback address is 127.0.0.1, which is used to test network services on the local machine.
2.  **Private address ranges** - These are IP address ranges that are reserved for use in private networks and are not routable on the public internet. There are three private address ranges:
	-   **10.0.0.0/8** - This address range provides up to 16,777,214 IP addresses for use in private networks.
	-   **172.16.0.0/12** - This address range provides up to 1,048,574 IP addresses for use in private networks. The range is divided into 16 subnets of 65,534 IP addresses each.
	-   **192.168.0.0/16** - This address range provides up to 65,534 IP addresses for use in private networks.
3.  **Link-local address (169.254.0.0/16)** - This address range is reserved for link-local purposes, meaning that it is used for communication between devices on the same physical network segment when no DHCP server is available to assign IP addresses.
4.  **Multicast address ranges** - These address ranges are reserved for multicast purposes, meaning that they are used to send traffic to multiple hosts simultaneously. There are several multicast address ranges, including:
	
	-   **224.0.0.0/4** - This address range is used for local network multicast traffic.
	-   **239.0.0.0/8** - This address range is used for administratively scoped multicast traffic.
