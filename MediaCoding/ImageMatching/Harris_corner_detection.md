> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/ImageMatching
> **Created:** 22/03/2024 - 17:57
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Harris corner detection
- An algorithm that identifies corners in an image by detecting significant changes in all directions of a window sliding over the image. This is done using the [[Sum_of_squared_differences|SSD]]
- Larger SSD errors from a window to it's neighbours indicates that a corner has been found, flat regions will result in low SSD errors indicating that they're not corners (bad [[Image_features|interest points]])
- This is the first step in calculating a feature vector using algorithms like [[Histogram_of_oriented_gradients|HOG]]

## Small motion assumption
- An assumption using the Taylor series can be made that approximates how much a pixel intensity will change when moved by a small displacement.
- Here, $I_{x}$​ and $I_{y}$​ represent the partial derivatives of the image intensity with respect to the $x$ and $y$ directions. This leaves an expression that depends only on the image gradients and the shift
- This small motion assumption makes the computation needed more efficient 

$$\begin{equation}
\begin{split}
E(u,v) &= \sum_{(x,y)\in W} \left[ I(x + u, y + v) - I(x, y) \right]^2 \\
&\approx \sum_{(x,y)\in W} \left[ I(x, y) + I_x u + I_y v - I(x, y) \right]^2 \\
&\approx \sum_{(x,y)\in W} \left[ I_x u + I_y v \right]^2 \\
&&\text{shorthand: } I_x = \frac{\partial I}{\partial x} \\
\end{split}
\end{equation}$$
