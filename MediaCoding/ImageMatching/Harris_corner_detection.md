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

![[Pasted image 20240323181435.png|250|250]]

- An intuitive way of looking at HCD is the following 
	1. Treat gradient vectors as a set of $(I_{x},I_{y})$ points with a centre of mass at (0,0)
	2. Fit an ellipse to that set of points via scatter matrix
	3. Analyse ellipse parameters for varying cases



![[Pasted image 20240323181714.png|350|350]]
## Small motion assumption
- Assumes that pixel shifts are so slight that the image's intensity change can be estimated using only the first-order gradient information 
- This avoids complex calculations for every possible small displacement.
- Streamlines the algorithm by enabling the use of a linear approximation (Taylor expansion) for intensity changes, which significantly reduces speeds up the corner detection process

$$\begin{equation}
\begin{split}
E(u,v) &= \sum_{(x,y)\in W} [ I(x + u, y + v) - I(x, y) ]^2 \\
&\approx \sum_{(x,y)\in W} [ I(x, y) + I_x u + I_y v - I(x, y) ]^2 \\
&\approx \sum_{(x,y)\in W} [ I_x u + I_y v ]^2 \\
&\approx \sum_{(x,y)\in W}(I_{x}u)^2+2I_{x}I_{y}uv+(I_{y}v)^2
&&\text{shorthand: } I_x = \frac{\partial I}{\partial x} \\
\end{split}
\end{equation}$$
- This formula can be produced using a **second moment matrix** 
- This allows for the equation as the ellipses formula, allowing for the use of the major semi ($\lambda_{1}$) and minor semi ($\lambda_{2}$) axis in a corner response metric 

![[Pasted image 20240323182608.png|350|350]]![[Pasted image 20240323182713.png|350|350]]
## Corner response metric 
$$\begin{equation}
\begin{split}
R = \lambda_1 \lambda_2 - k(\lambda_1 + \lambda_2)^2\\
= \text{det}(H) - k \cdot \text{tr}(H)^2
\end{split}
\end{equation}$$
$$k=\text{is an empirically determined constant eg. }k=0.04 \text{ to }0.06$$
