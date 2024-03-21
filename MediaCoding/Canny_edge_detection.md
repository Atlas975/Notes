> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding
> **Created:** 21/03/2024 - 01:43
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Canny edge detection
- An algorithm for further enhancing edge detection, the result of detector is a binary image effective at showing the detected edges
- Follows the following general steps:
	1. Blurring the grayscale image (eg with  [[Gaussian_filter|Gaussian filter]])
	2. Calculating the gradient magnitude and direction (eg with [[Sobel_filter|Sobel filter]])
	3. Non-maxima suppression
	4. Double thresholding
	5. Edge tracking by hysteresis


## Noise reduction 
- Typically, a Gaussian filter is applied to smooth the image and reduce the influence of noise, which can cause false edge detection.
## Gradient calculation 
- Finds the intensity [[Image_derivatives|gradient]] of the image using edge detection operators, often using the Sobel method to calculate the gradient magnitude and direction at each pixel.
## Non-maximum suppression
- Also known as edge thinning because it preserves the sharpest gradients and discards the others
- The image magnitude produced thick edges. Ideally, the final image should have thin edges

![[Pasted image 20240321020301.png|450|450]]
## Double thresholding 
- Two thresholds are used, a high and a low one, to identify strong and weak edges. 
- Strong edges are marked as certain edges, while weak edges are only considered if they are connected to strong edges