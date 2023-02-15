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
- A checksum is a type of data verification method used to detect errors in data transmission or storage. 

## Cyclic Redundancy Check (CRC)
- A widely used checksum method for error detection in digital networks and storage devices.
- Based on polynomial division and generates a fixed-length check value that can detect multiple errors in a block of data.
## Adler-32
- A simple checksum algorithm that uses two 16-bit integers to create a 32-bit checksum value.  
- Faster than CRC but less reliable for error detection.
## Message Digest 5 (MD5)
is a cryptographic checksum algorithm that creates a 128-bit hash value of the input data. It is widely used for data integrity checking and digital signature verification.
	
4.  SHA (Secure Hash Algorithm): SHA is a family of cryptographic hash functions developed by the National Security Agency (NSA). The most widely used variants are SHA-1 (160-bit), SHA-2 (256-bit, 384-bit, and 512-bit), and SHA-3 (224-bit, 256-bit, 384-bit, and 512-bit). SHA is used for digital signatures, data integrity checking, and password storage.
	
5.  Checksum-8, 16, 32, 64: These are simple checksum algorithms that create fixed-length checksum values of 8, 16, 32, or 64 bits. They are fast and easy to implement but less reliable than CRC or cryptographic hash functions.
