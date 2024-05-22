> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/ImageMatching
> **Created:** 23/03/2024 - 21:12
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Laplacian pyramid
- Allows for the reconstruction of an image from using a [[Gaussian_pyramid|Gaussian pyramid]]
- Has the benefit of being more memory efficient than storing the entire image at each step, instead saving a binary image containing the image residual


![[Pasted image 20240323212402.png|350|350]]

$$l_{i}=g_{i}-F_{i}(g_{i+1})$$

## Image residual 
- The residual of an image is calculated using the following formula:

$$\text{Image}-\text{GaussianBlur}(\text{Image})=\text{Residual}$$

![[Pasted image 20240323211830.png|400|400]]

## Image reconstruction 
- This process involves applying a gaussian filter a second time 
- This also required inserting zeros as placeholder space 

![[Pasted image 20240323212808.png|450|450]]
- The difference between the image prior to a Gaussian pyramid step and the reconstructed image gives the residual, this is what's stored
- These residuals are all that's needed alongside the image from the current Gaussian pyramid step to reconstruct the whole image back to it's base form