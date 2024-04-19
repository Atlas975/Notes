> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/ImageMatching
> **Created:** 22/03/2024 - 17:32
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Image features
- A specific pattern, shape, edge, corner, or a region with a particular texture. These features are used to interpret the content of the image, serving as a basis for image analysis tasks.
- A good [[Image_matching#Local image matching|local]] feature needs to have the following properties:
	- Accurate and repeatable localisation
	- Invariance to translation, rotation, scale, viewpoint
	- Robustness to noise, lighting conditions, compression and blur
	- Distinctness of descriptor 

## Patch matching
- Matches elements are of fixed size, this needs to be large enough for patches to be distinctive resulting in ideally one obvious match

![[Pasted image 20240322173855.png|450|450]]

- A small patch fails to be distinctive as many possible matches could exist 
- This results in what's called a **flat** region

![[Pasted image 20240322174012.png|450|450]]

## Interest point quality
- In general the best interest points are those where shifting a window in any direction results in a significant change to the window's content 
- This makes **corners** the ideal interest point as the largest window changes occur when focused on these regions in an image. This is the intuition behind [[Harris_corner_detection|Harris corner detection]] 

![[Pasted image 20240322175415.png|350|350]]

