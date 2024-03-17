> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding&Processing
> **Created:** 17/03/2024 - 20:30
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Colour models
- Mathematical systems for representing colours as tuples of numbers, such as RGB to effectively capture, display, and print colours in various devices and mediums.
- Various models exist, but some cannot be converted from one to another eg grayscale -> RGB


## Greyscale

- Works by averaging or weighting the intensity of the primary colours in an image, reducing each pixel to a shade of grey that reflects the overall brightness of that pixel.
- Eliminates hue and saturation information while retaining luminance, making it suitable for focusing on light intensity and textures, often used in image analysis.
## RGB
- Utilises additive colour mixing by combining red, green, and blue light in different intensities to create a spectrum of colours.
- With no intensity (0) in all three colours resulting in black and maximum intensity producing white, it's fundamental in digital screens and image capturing devices.

$$\text{Grey-value}=0.299\color{red}R\color{white}$$
## YCbCR
- Decomposes images into a luminance component (Y) for brightness and two chrominance components (Cb for blue-difference and Cr for red-difference) for colour information.
- Designed to align with human vision's sensitivity to brightness over colour, it's used extensively in video compression and broadcasting for efficient data transmission.
## HSV
- Hue represents the colour type, saturation indicates colour richness or purity, and value describes brightness, making the model align closely with human perception of colour.
- This model is particularly useful for intuitive colour adjustments and is widely used in user interfaces and graphic design software.
