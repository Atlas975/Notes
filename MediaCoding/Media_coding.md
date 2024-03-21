> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding&Processing
> **Created:** 12/10/2023 - 08:44
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Media coding
- **Media coding**: how media is encoded within the digital domain
- **Media processing**: how additional information can be generated through processing 

## Image formation model 
- Information is picked up with an array of sensors that read reflected light of various intensities
- Digital image creation requires taking in continuous sensed data and converting it to digital form through two key processes:
	- **Sampling**:  digitising coordinate values 
	- **Quantisation**: digitising voltage amplitude values (intensity)

![[Pasted image 20231012154636.png|500|500]]

- A digital image shape is defined as a 2D matrix of pixels. The amplitude of any pair (x,y)  is called the intensity / grey level for that particular pixel. 1 byte (0-255) is a common encoding standard

## Image processing
- The techniques and algorithms applied to images to enhance them, extract useful information, or convert them to a desired format 
- Uses operations like filtering, noise reduction, and image compression
- The spatial and frequency domains are complementary in image processing
### Spatial domain
- Processing deals with direct manipulation of image pixels in their physical coordinate 
- Involves directly manipulating these pixel values, such as applying filters
### Frequency domain 
- Represents an image / signal in terms of its frequency content rather than spatial coordinates
- Achieved by putting an image through a Fourier transform. This process converts the spatial information into frequency information (how often certain patterns or variations occur).