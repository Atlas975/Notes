> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding
> **Created:** 21/03/2024 - 20:26
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Image matching
- The process of finding matching pairs of features between images that correspond to the same point in the scene, despite differences in viewpoint, illumination, or scale.
- Vital for processes such as image recognition, object tracking and 3D reconstruction. Image matching fall in one of two categories:
	- **Holistic Image Matching:** Using the entire image to [[Sum_of_squared_differences|calculate similarity]], often facing issues like limited tolerance to shifts and illumination changes.
	- **Local Image Matching:** Involves detecting interest points, describing them, and matching these features, offering more robustness to image variations.

![[Pasted image 20240321203137.png|450|450]]

## Image matching challenges
-  Illumination Variation
- Scale Variation
- Rotation and Perspective Variation

![[Pasted image 20240321204346.png|350|350]]