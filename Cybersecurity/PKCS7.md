> [!important]- Metadata
> **Tags:** #Cybersecurity 
> **Located:** Cybersecurity
> **Created:** 24/04/2024 - 17:11
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# PKCS7
- A padding scheme used for block cipher algorithms that's designed to ensure that the plaintext length is a multiple of the block size. Can be used with any block size from 1 to 255 bytes
- If the length of the data already aligns with the block size, padding is still added to ensure the integrity of the unpadding process


## PKCS7 padding process 
```python
def PKCS7(data, block_sz_bytes):
    padLen = block_sz_bytes - (len(data) % block_sz_bytes)
    return data + bytes([padLen] * padLen)

def UnPKCS7(data, block_sz_bytes):
    padLen = data[-1]
    if block_sz_bytes < padLen < 1:
        raise ValueError("Invalid padding")
    if any(byte != padLen for byte in data[-padLen:]):
        raise ValueError("Invalid padding")
    return data[:-padLen]

if __name__ == "__main__":
    block_sz_bytes = 16
    iv = b"Hello World!"
    print(f"Original data: {iv}")
    padded = PKCS7(iv, block_sz_bytes)
    print(f"Padded data: {padded}")
    unpadded = UnPKCS7(padded, block_sz_bytes)
    print(f"Unpadding data: {unpadded}")
