> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/Watermarking
> **Created:** 29/03/2024 - 19:33
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Frequency domain watermarking
- Involves embedding a [[Watermarking|watermark]] using the [[Media_coding#Frequency domain|frequency domain]]
- Typically uses a [[Discrete_cosine_transform|DCT]] to do this, making the inserted watermark more robust 

![[Pasted image 20240330175537.png|400|400]]


## Embedding position choice
- The middle most frequencies are typically modified to embed the watermark 
- This frequency band is both robust and won't modify the image's core visible components

![[Pasted image 20240330004624.png|300|300]]

## One bit embedding
- A single bit in the watermark can be embedded by picking two random coefficients in the DCT matrix, comparing them and embed it according to the rule $P$
- If the necessary condition is not met (eg trying to embed 1 but coefficients are in the wrong order) then the coefficients must be modified

![[Pasted image 20240330181206.png|450|450]]

- The modification done to get two coefficients to satisfy the rule $P$ involves first making both of them equal by adding $\frac{\text{diff}}{2}$ to the smaller coefficient and subtracting it from the larger one
- A threshold value is then added to the desired larger coefficient and subtracted from the desired smaller coefficient, this is predetermined and it's size is calculated using experimentation
- This method allows for [[Watermarking#Watermark extraction types|blind]] watermark extraction, only needing the RNG seed


## AC-DC embedding
- More robust then using two random coefficients, always uses an AC coefficient in rule $P$
- The other location is picked randomly in the mid frrequency band, the use of both a low and mid frequency coefficient makes the watermark 


![[Pasted image 20240330183004.png|200|200]]