> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding&Processing/IntensityTransforms
> **Created:** 18/03/2024 - 18:58
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Gamma transform
- A family of different transformation curves obtained by varying $\gamma$, for example [[Log_transform|log transform]], also known as power-law transform 
- This is a nonlinear operation used in image processing to encode and decode luminance or color values in images, where the intensity is raised to the power of a specific value called gamma $\gamma$








![[Pasted image 20240318190206.png|250|250]]

## Gamma transform formula 
$$g(x,y)=c\cdot f(x,y)^{\gamma}$$
$$c \text{ and } \gamma \text{ are positive constants}$$


## Gamma transform uses 


- Gamma correction is crucial for adjusting the dynamic range and contrast of an image, making it possible to either darken or brighten images in a non-linear manner
- This is often needed to compensate for the nonlinear intensity response of human vision.

![[Pasted image 20240318190524.png|350|350]]