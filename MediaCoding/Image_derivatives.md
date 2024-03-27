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

- The [[Sobel_filter|first derivative]] / gradient quantifies the change in pixel intensity with filters this is typically found using the central difference $\left( \frac{\partial f}{\partial x}=f(x+1)-f(x-1) \right)$
- The second derivative quantifies the rate of change in pixel intensity AKA the smoothness of the transition from light to dark or vice versa. This makes it ideal for detecting random noise 

![[Pasted image 20231022152823.png|550|550]]

## Gradient magnitude
- L2 norm is more computationally expensive but more sensitive to outliers:
$$\| \nabla f \|= \sqrt{\left( \frac{\partial f}{\partial x} \right)^2 + \left( \frac{\partial f}{\partial y} \right)^2}$$
- L1 norm is computationally cheap but less outlier sensitive:
$$\| \nabla f \| = \left| \frac{\partial f}{\partial x} \right| + \left| \frac{\partial f}{\partial y} \right|$$

![[Pasted image 20240321013031.png|350|350]]
## Gradient direction / edge normal
- The gradient direction (ie edge normal) can be found using the following:
$$\theta=\tan^{-1} \left( \frac{\partial f}{\partial y'}/ \frac{\partial f}{\partial x} \right)$$
- The edge direction is perpendicular to the gradient vector direction, the normal essentially points out of the edge signifying where the image is changing intensity the most rapidly

![[Pasted image 20240321014027.png|300|300]]
