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

![[Pasted image 20240322174012.png|450|450]]