> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking
> **Created:** 15/02/2023 - 09:47
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
# Checksum
- A  data verification method used to detect errors (flipped bits) in  transmitted segments.  
- Vital in [[Routing_methods#Packet switching|packet switching]] for the following: 
	- **Sender side**: checksum creation
	- **Receiver side**: checksum validation

![[Pasted image 20230215110458.png|450|450]]

- Checksum-8/16/32/64 are simple algorithms that create fixed-length checksum values of that szie
- These are fast and easy to implement but less reliable than CRC or cryptographic hash functions.
- Error detection not 100% reliable, no correction methods present either 

![[Pasted image 20230510012511.png|350|350]]

## Parity bit check 
- Add Extra bits to the keep number of 1s even

![[Pasted image 20230510122757.png|450|450]]
### 1D parity check 
![[Pasted image 20230510013038.png|350|350]]
### 2D parity check 

![[Pasted image 20230510013104.png|350|350]]
## Cyclic Redundancy Check (CRC)
- A widely used checksum method for error detection in digital networks and storage devices.
- Based on polynomial division and generates a fixed-length check value that can detect multiple errors in a block of data.

![[Pasted image 20230510013324.png|450|450]]
## Adler-32
- A simple checksum algorithm that uses two 16-bit integers to create a 32-bit checksum value.  
- Faster than CRC but less reliable for error detection.
## Message Digest 5 (MD5)
- A cryptographic checksum algorithm that creates a 128-bit hash value of the input data.  
- Widely used for data integrity checking and digital signature verification.
## Secure Hash Algorithm (SHA)
- A family of cryptographic hash functions developed by the National Security Agency (NSA). 
- The most widely used variants are SHA-1 (160-bit), SHA-2 (256-bit, 384-bit, and 512-bit), and SHA-3 (224-bit, 256-bit, 384-bit, and 512-bit). 
- SHA is used for digital signatures, data integrity checking, and password storage.
