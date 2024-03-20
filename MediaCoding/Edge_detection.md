> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding&Processing
> **Created:** 22/10/2023 - 15:16
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Edge detection
- An edge is a significant local change in the image intensity, It is the boundary between two regions with distinct intensity level properties (eg light to dark to light again)
- The goal of edge detection is to identify the points where image intensity sees rapid change. This is useful as edges are more compact than pixels while still storing semantic / shape information.

![[Pasted image 20220621135948.png|450|450]]

- Filters such as Sobel have larger values for the middle pixel in a row / column in order to reduce the influence of neighbouring pixels when calculating an output

![[Pasted image 20231022153145.png|450|450]]
## Edge detection derivatives 
![[Pasted image 20231022152823.png|550|550]]

- The first derivative / gradient quantifies the change in pixel intensity 
- The second derivative quantifies the rate of change in pixel intensity AKA the smoothness of the transition from light to dark or vice versa 


## Edge types 
- **Step edge**: the image intensity sharply changes from one value to a different value, can occur over a distance as small as 1 pixel. Common in 


![[Pasted image 20240318212535.png|300|300]]
- **Ramp edge**: where the intensity change is not immediate but occurs over a finite distance

![[Pasted image 20240318212315.png|250|250]]

- **Roof edge**: the intensity changes from one value to another value over a finite distance and then returns to the starting value over the same distance. Common with thin features (eg roads)

![[Pasted image 20240318212449.png|250|250]]