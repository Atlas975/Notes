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

![[Pasted image 20240323182713.png|350|350]]
- Streamlines the algorithm by enabling the use of a linear approximation (Taylor expansion) for intensity changes, which significantly speeds up the corner detection process

$$\begin{equation}
\begin{split}
E(u,v) &= \sum_{(x,y)\in W} [ I(x + u, y + v) - I(x, y) ]^2 \\
&\approx \sum_{(x,y)\in W} [ I(x, y) + I_x u + I_y v - I(x, y) ]^2 \\
&\approx \sum_{(x,y)\in W} [ I_x u + I_y v ]^2 \\
&\approx \sum_{(x,y)\in W}(I_{x}u)^2+2I_{x}I_{y}uv+(I_{y}v)^2
&&\text{shorthand: } I_x = \frac{\partial I}{\partial x} \\
\end{split}
\end{equation}$$
![[Pasted image 20240323182608.png|350|350]]

- This formula can be produced using a **second moment matrix** 
- This equation then becomes the ellipses formula, allowing for the use of the major semi ($\lambda_{1}$) and minor semi ($\lambda_{2}$) axis in a corner response metric 

## Corner response metric
- Both axis can be used to calculate a corner response metric using the following formula:
$$\begin{equation}
\begin{split}
R = \lambda_1 \lambda_2 - k(\lambda_1 + \lambda_2)^2\\
= \text{det}(H) - k \cdot \text{tr}(H)^2
\end{split}
\end{equation}$$
$$k=\text{is an empirically determined constant eg. }k=0.04 \text{ to }0.06$$
- A higher $R$ value indicates a larger ellipses and a higher probability of a pixel being a corner

![[Pasted image 20240323203148.png|250|250]]

## Non-maxima suppression
- Refers to the method used to classify if a pixel is a corner or not using the following steps:
1.  Using a threshold to determine if a pixel is a corner is not ideal as this will vary between images. Instead the following based on the maximum R value in the image is used:

$$R(x,y)>0.1\cdot max(R)$$

2. The candidate becomes a corner if it's R value is a local maximum in a 3x3 window, further filtering down pixels to ones that are most likely to be a corner:

$$R(x,y) > \{ R(x-1,y-1), R(x-1,y), R(x-1,y+1)\dots \}$$

## Spatial scaling robustness 
- HSD is not robust to image scaling, a larger image requires a larger window to detect corners 
- This is because HSD uses a fixed sized window that cannot adapt to larger corners


![[Pasted image 20240323204134.png|300|300]]

- A simple way to adapt to this is to test various window sizes and see which one gives the highest R values, however this testing method is inefficient. Instead a [[Gaussian_pyramid|Gaussian pyramid]] is used

![[Pasted image 20240323204430.png|150|150]]
