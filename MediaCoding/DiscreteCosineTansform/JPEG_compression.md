> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/DiscreteCosineTansform
> **Created:** 27/03/2024 - 21:57
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# JPEG compression
- A lossy compression method that makes use of [[Discrete_cosine_transform|DCT]], this results in a image with a much lower file size whilst still retaining visual fidelity. 
- This starts by converting an input image (eg [[Colour_models#RGB|RGB]] format) to [[Colour_models#YCbCR|YCbCR]] format and then subsampling the Cb and Cr channels. The rest of the algorithm than works using this image format

![[Pasted image 20240327220258.png|350|350]]

- The block based processing scheme used allows for easy [[Concurrency|parallelisation]] of this process 
- Note that the DCT process itself is lossless, and can be performed as many times as needed, the lossy component of this algorithm comes from the threshold function

![[Pasted image 20240327224639.png|300|300]]
## YCbCr importance in JPEG
- The main limitation with formats like RGB is that each channel contains an equal level of information, this greatly limits compression opportunity 
- [[Visual_perception|Human vision]] is more sensitive to luminosity than colour variation which is solely encoded in the Y channel in YCbCr. This allows for the colour channels to be down-sampled without major loss
- Compression can then be performed solely on the Y(luminance) channel

![[Pasted image 20240327223708.png|350|350]]


## JPEG threshold function
- This involves setting the highest frequency coefficients to 0, this discards information about the image while maintaining the perceived quality of it. This is done by the quantisation step
- This works because only the lower frequency components contribute the the core shape of the image while high frequency components contribute to the image's fine details

![[Pasted image 20240327225122.png|350|350]]

## JPEG quantisation
- Controls the compression ratio of the JPEG process, this is done using a quantisation matrix, which is predefined. Higher values in this matrix result in more aggressive compression
- This first requires scaling the input block into values between (min value - max value) as a preprocessing step. This is because cosine waves have values between -1 to 1

![[Pasted image 20240328175019.png|350|350]]

- 2D DCT can then be applied, each DCT value can then be divided by it's corresponding match in the quantisation table. The quantised DCT values ($C$) is equal to $\lfloor{D/Q}\rfloor$
- Note how higher values are used in the quantisation table for higher frequency components, this is to ensure that these values are compressed more than lower frequency components 

![[Pasted image 20240328175734.png|350|350]]

## Entropy encoding
- A DCT block can be separated into DC (lowest frequency block) and AC (all other blocks). This is used in entropy encoding to further compress data after the quantisation step
- This is result of this is the finished compression scheme

![[Pasted image 20240328180855.png|350|350]]

### DC encoding
- For DC values, this works on the assumption that adjacent blocks carry similar intensity values
- This allows for the use of **DPCM** (differential pulse code modulation) which involves storing the difference between each DCT number and it's predecessor


![[Pasted image 20240328183457.png|350|350]]

- These numbers tend to be much small than their original DCM counterpart. This allows for data to be represented using fewer bits
### AC endoing
- After the quantisation step, long strings of 0's will likely be present. AC encoding is handled differently to DC encoding to handle this 
- This is done by having each non-zero value also encode the number of zeros prior to it. This follows the zig-zag pattern that describes the frequency order

![[Pasted image 20240328184110.png|450|450]]
