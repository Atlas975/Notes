> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding
> **Created:** 20/03/2024 - 19:30
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Image derivatives



## Edge detection derivatives 
![[Pasted image 20231022152823.png|550|550]]

- The [[Sobel_filter|first derivative]] / gradient quantifies the change in pixel intensity 
- The second derivative quantifies the rate of change in pixel intensity AKA the smoothness of the transition from light to dark or vice versa


## Gradient magnitude 
$$\| \nabla f \|= \sqrt{\left( \frac{\partial f}{\partial x} \right)^2 + \left( \frac{\partial f}{\partial y} \right)^2}$$

- An alternative formula that's less accurate but more computationally efficient:
$$\| \nabla f \| = \left| \frac{\partial f}{\partial x} \right| + \left| \frac{\partial f}{\partial y} \right|$$
## Gradient direction 
$$\theta=\tan^{-1} \left( \frac{\partial f}{\partial y'}/ \frac{\partial f}{\partial x} \right)$$


