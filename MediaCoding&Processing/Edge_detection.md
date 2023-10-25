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

- Edges in images are typically represented by a transition from darker to lighter pixels, multiple filters such as the one below for vertical detection can be used to find specific edge types
- Being able to detect lower level features like edges is the first step in training a CNN

![[Pasted image 20220621135948.png|450|450]]

- An image channel is represented as a grid of rows and columns which map to it's respective pixel intensity value. For videos this mapping is from rows, columns and individual frames
- Filters such as Sobel have larger values for the middle pixel in a row / column in order to reduce the influence of neighbouring pixels when calculating an output

![[Pasted image 20231022153145.png|450|450]]
## Edge detection derivatives 
![[Pasted image 20231022152823.png|550|550]]
- The first derivative / gradient of quantifies the change in pixel intensity 
- The second derivative quantifies the rate of change in pixel intensity AKA the smoothness of the transition from light to dark or vice versa 
