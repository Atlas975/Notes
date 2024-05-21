> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/IntensityTransforms
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Image noise
- Refers to the random variation of brightness or colour information in images, often caused by electronic interference or environmental factors during image acquisition
- This can obscure fine details and degrade the overall quality of an image, making it challenging to analyse or interpret



## Gaussian noise 
- Follows a [[Gaussian_distribution|Normal  distribution]].  It is additive, meaning it affects each pixel independently by adding a value drawn from the Gaussian distribution
- Appears as a smooth, grainy texture over the image, with the intensity of the noise determined by the standard deviation (eg )

![[Pasted image 20240521025930.png|250|250]]
## Salt and pepper noise 
- Also known as impulse noise, consists of random occurrences of white (salt) and black (pepper) pixels. Pixels are replaced with extremes (max or min values)
- Appears as scattered white and black pixels across the image, creating a noisy, speckled effect.

![[Pasted image 20240521030003.png|250|250]]
## Speckle Noise
- Multiplicative noise, meaning it scales the pixel values by a noise factor, and it is typically modeled as  $I'(x,y)=I(x,y)\cdot N(x,y)$
- Results in a granular or “salt-and-pepper” appearance with brighter and darker spots, degrading image quality and obscuring fine details


![[Pasted image 20240521025946.png|250|250]]
## Periodic noise 
- Appears as regular, repeating patterns in the spatial domain, this can manifest as horizontal or vertical stripes, checkerboard patterns, or other cyclical disturbances
- In the frequency domain, periodic noise manifests as distinct spikes or peaks at specific frequencies. Making it identifiable and separable from the main image content

![[Pasted image 20240521025913.png|250|250]]