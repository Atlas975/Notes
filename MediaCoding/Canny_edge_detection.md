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
- An algorithm for further enhancing edge detection 
	1. Blurring the grayscale image (eg with  [[Gaussian_filter|Gaussian filter]])
	2. Calculating the gradient magnitude and direction (eg with [[Sobel_filter|Sobel filter]])
	3. Non-maxima suppression
	4. Double thresholding
	5. Edge tracking by hysteresis
- The result of the Canny edge detector is a binary image showing the detected edges


## Noise reduction 


## Gradient calculation 

## 