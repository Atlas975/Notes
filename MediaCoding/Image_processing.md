> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding&Processing
> **Created:** 17/03/2024 - 22:41
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Image processing
- The techniques and algorithms applied to images to enhance them, extract useful information, or convert them to a desired format 
- Uses operations like filtering, noise reduction, and image compression
- The spatial and frequency domains are complementary in image processing

## Spatial domain
- Processing deals with direct manipulation of image pixels in their physical coordinate 
- Involves directly manipulating these pixel values, such as applying filters
    - 

## Frequency domain 
- Represents an image / signal in terms of its frequency content rather than spatial coordinates
- Achieved by putting an image through a Fourier transform. This process converts the spatial information into frequency information (how often certain patterns or variations occur).


