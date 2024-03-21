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
- Performance depends on the following parameters: 
	-  Value of high threshold 
	- Value of low threshold 
	- Size of the Gaussian blurring filter and Sigma of Gaussian


## Noise reduction
- Typically, a Gaussian filter is applied to smooth the image and reduce the influence of noise, which can cause false edge detection.
## Gradient calculation
- Finds the intensity [[Image_derivatives|gradient]] of the image using edge detection operators, often using the Sobel method to calculate the gradient magnitude and direction at each pixel.
## Non-maximum suppression
- Also known as edge thinning because it preserves the sharpest gradients and discards the others
- The image magnitude produced thick edges. Ideally, the final image should have thin edges

![[Pasted image 20240321020301.png|450|450]]

- Edges have their gradient magnitudes compared with that of neighbouring pixels that point in the same (rounded) gradient direction 
- If the magnitude of a pixel is less than the magnitudes at one or both neighbours along the gradient direction, the pixels magnitude is set to 0
## Double thresholding
- Gradient magnitude are classified in three categories strong, weak, and non-edge pixels:
	- Pixels with magnitudes ==less than the low threshold== are discarded, i.e value set to 0 
	- Pixels with magnitudes ==higher than the high threshold== are chosen to be **strong edges** and they appear in the final result
	- If  a pixel magnitude falls ==in between the two thresholds==, it is considered to be a **weak edge**

![[Pasted image 20240321021254.png|450|450]]

## Edge tracking by hysteria
- Finally, weak edges that are not connected to strong edges are suppressed
- All other weak edges are preserved if they connect to strong edges as these are marked as meaningful (true) edges 

![[Pasted image 20240321021610.png|450|450]]

- This is handled by iterating over each weak edge and comparing the magnitude of the pixel being processed with its eight surrounding pixels. 
- If at least one of the surrounding pixels belongs to the strong edges group, the gradient magnitude of the pixel being processed is preserved. Otherwise, it is discarded