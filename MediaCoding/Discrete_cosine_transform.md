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
- Due to the cosine waves being infinite, they need to be digitised, with a discrete number of points used in sampling it. These can then be stored to reconstruct data in the [[Media_coding#Frequency domain|frequency domain]]
- The number of cosine waves needed to reconstruct a signal depends on the length of values the signal can assume. In practice a signal with 8 possible values is typically used

![[Pasted image 20240326175413.png|450|450]]

- This results in a DCT basis vector that stores the samples taken, normalisation is also typically performed for each of these vectors. 
- These basis vectors are what make up the **basis matrix**, each row being a digitised cosine wave. These vectors can then be used to reconstruct data and are constant

![[Pasted image 20240326180412.png|450|450]]

- The number of sampling points used to digitise a wave must be the same as the the number of cosine waves used ie B must be an (nxn) matrix
## Transform stage
- Each vector (digitised cosine wave) in the basis matrix is weighted according to how much that wave is needed to contribute to reconstructing x (original image)
- These weights are calculated by the DCT function

![[Pasted image 20240326220504.png|450|450]]

$$B\cdot x=\text{DCT}(x)$$

- Removing high frequency signals by placing no weight on them can also act similarly to a blur, as these types of signals contribute to an image's fine details 
## Inverse DCT
- Transforms data from the frequency domain back to the spatial domain (original row data)
- For a cosine transform $B^T=B^{-1}$
- Steps to inverting the transform:

$$B\cdot x=\text{DCT}(x)$$
$$B^{-1}\cdot B\cdot x=B^{-1}\cdot\text{DCT}(x)$$
$$x=B^{T}\cdot \text{DCT}(x)$$

## 2D DCT
- A 2D cosine wave is created by taking the product of two cosine waves, a 2D basis matrix is what's needed for processing data such as 2D images
- This 2D basis matrix is found by performing $B\cdot B^T$ using a 1D basis matrix
$$b_{jk}=b_{j}^T\cdot b_{k}$$

![[Pasted image 20240326223554.png|450|450]]

- The following shows 64 images of size 8x8, these images are called DCT basis images and are each a 2D cosine wave pattern. This basis matrix can transform an 8x8 window in an image:


![[Pasted image 20240326224410.png|450|450]]

- The transform stage for 2D DCT is the same as 1D DCT, but with a 2D cosine wave applied to each value in the input window (x). The goal of finding the combination weights also remains the same

![[Pasted image 20240327183548.png|400|400]]