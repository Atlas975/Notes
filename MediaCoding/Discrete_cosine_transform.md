---
aliases:
  - DCT
---

> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding
> **Created:** 25/03/2024 - 22:38
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Discrete cosine transform
- The process of taking data and representing it as the sum of multiple cosine waves 
- This offers a lot of flexibility as adding waves can create new complex shaped waves, however because of constructive interference the average of added waves is usually taken

![[Pasted image 20240325224641.png|450|450]]


## Cosine wave reconstruction
- The signal can be reconstructed from a combination of selected cosine functions
- Eg. reconstruct signal $x$ as closely as possible using weights $b_{i}$

![[Pasted image 20240325224951.png|450|450]]

- Using more waves typically allows for a better approximation of a target wave
- Low frequency components contribute to overall shape 
- High frequency components add fine detail

## Digitised cosine waves
- Due to the cosine wave being infinite in nature, it needs to be digitised into a 
- This is typically done by gathering 8 samples, these need to follow the wave's shape

![[Pasted image 20240326175413.png|450|450]]

- This results in a DCT basis vector that stores the samples taken, normalisation is also typically performed for each of these vectors. 
- These basis vectors are what make up the basis matrix, each row being a digitised signal which when used together can reconstruct the original data.

![[Pasted image 20240326180412.png|450|450]]

- Each wave may also be weighted differently to have some components contribute more to the original signals reconstruction than others (weighted average)
- Removing high frequency signals by placing no weight on them can also act similarly to a blur, as these types of signals contribute to an image's fine details 


## Inverse discrete cosine transform 
- Transforms data from the frequency domain back to the spatial domain (original signal)

$$B\cdot x=\text{DCT}(x)$$
$$B^{-1}\cdot B\cdot x=B^{-1}\cdot\text{DCT}(x)$$
$$x=B^{T}\cdot \text{DCT}(x)$$
- For a cosine transform $B^T=B^{-1}$ 