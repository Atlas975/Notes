> [!important]- Metadata
> **Tags:** #Cybersecurity 
> **Located:** Cybersecurity/EncryptionSchemes
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# HMAC
- [[Hashing|Hash]]-based message authentication code. sed to verify the integrity and authenticity of a message. Uses two-rounds of hashing to further separate the message and key
- This two-round protection also helps against length extension attacks

## HMAC algorithm
```python
from hashlib import sha256
BLOCK_SZ = 64 # block size for the HMAC algorithm (in bytes)

def HMAC(key: bytes, text: str) -> str: # a HMAC is a hash of a hash
    if len(key) > BLOCK_SZ: # if larger than the block size, hash it
        key = sha256(key).digest() # now 32 bytes
    key += b"\x00" * (BLOCK_SZ - len(key)) # append any necessary 0x00 bytes 

    ixor = bytes(b ^ 0x36 for b in key) # compute inner hash
    ihash = sha256(ixor + text.encode()) 
    
    oxor = bytes(b ^ 0x5C for b in key) # compute outer hash
    ohash = sha256(oxor + ihash.digest()) 
    return ohash.hexdigest() # return the result of the outer hash in hex
```