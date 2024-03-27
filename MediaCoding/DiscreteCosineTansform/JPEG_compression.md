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


## YCbCr importance in JPEG
- The main limitation with formats like RGB is that each channel contains an equal level of information, this greatly limits compression opportunity 
- [[Visual_perception|Human vision]] is more sensitive to luminosity than colour variation which is solely encoded in the Y channel in YCbCr. This allows for the colour channels to be down-sampled without major loss


![[Pasted image 20240327223708.png|350|350]]
## Pre-processing steps

![[Pasted image 20240327222408.png]]
