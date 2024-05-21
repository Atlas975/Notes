> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding
> **Created:** 23/03/2024 - 21:39
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Optical flow
- Motion is the main form of extracting information from videos. Optical flow techniques involve finding the displacement vector of all pixels in an image sequence. 
- This assumes that the background in constant, with the only difference from frame to frame being an object that moves across it 


![[Pasted image 20240323214320.png|350|350]]
## Optical flow assumptions
- Optical flow methods rely on assumptions about frame transitions such as:
	- **Colour consistency**: pixels mostly remain the same colour between frames
	- **Small motion**: pixels do not move far between frames, allowing for a small search region
	- **Neighbours move together**: neighbouring pixel patches have the same motion vector ($u,v$), allowing for correspondence to be found at the patch level 
- Under these assumptions 
## Colour consistency equation
- Used to calculate motion between two frames under the optical flow assumptions 
- The flow velocities represent the movement from one frame to the next. Note the small motion allows for the first order Taylor series approximation to be used

$$I_{x}u+I_{y}v+I_{t}=0$$
$$I_{x},I_{y}=\text{Image gradients}$$
$$u,v =\text{flow velocity (unknowns)}$$
$$I_{t}=\text{temporal gradient}$$

![[Pasted image 20240323220001.png|350|350]]

## Aperture problem 
- Flow velocities are unknown when viewed through a limited FOV, making the direction of motion uncertain. Mainly caused by a lack of context about the object's environment.
- This requires a sufficient window size to 
