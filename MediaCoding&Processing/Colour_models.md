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


## RGB
- Utilises additive colour mixing by combining red, green, and blue light in different intensities to create a spectrum of colours.
- With no intensity (0) in all three colours resulting in black and maximum intensity producing white, it's fundamental in digital screens and image capturing devices.

## Greyscale

- Works by averaging or weighting the intensity of the primary colours in an image, reducing each pixel to a shade of grey that reflects the overall brightness of that pixel.
- Eliminates hue and saturation information while retaining luminance, making it suitable for focusing on light intensity and textures, often used in image analysis.
$$\text{Grey-value}=0.299 \color{red}R\color{white}+0.587\color{lime}G\color{white}+0.144\color{cyan}B\color{white}$$

## Binary images
- Consist of only two colours, typically black and white, represented by two pixel values (0 for black and 1 for white, or vice versa), simplifying the image data significantly.
- Widely used in applications like document scanning, shape analysis, and pattern recognition, where the focus is on the structure or outline of objects  

$$\text{Binary}=1 \text{ if Grey-value}> T \text{ else }0$$
$$T=\text{threshold where Grey-value is closer to white than black}$$
## YCbCR
- Decomposes images into a luminance component (Y) for brightness and two chrominance components (Cb for blue-difference and Cr for red-difference) for colour information.
- This allows for the intensity component to be modified directly, used extensively in video compression and broadcasting for efficient data transmission.
$$Y=0.299\color{red}R\color{white}+0.587\color{lime}G\color{white}+0.114\color{cyan}B\color{white}$$
$$C_{b}=128-0.168\color{red}R\color{white}-0.331\color{lime}G\color{white}+0.500\color{cyan}B\color{white}$$
$$C_{r}=128-0.500\color{red}R\color{white}-0.419\color{lime}G\color{white}-0.081\color{cyan}B\color{white}$$
## HSV
- Hue represents the colour type, saturation indicates colour richness or purity, and value describes brightness, making the model align closely with human perception of colour.
- This model is particularly useful for intuitive colour adjustments and is widely used in user interfaces and graphic design software.


```python
def rgb_to_hsv(r, g, b):
    r, g, b = r / 255.0, g / 255.0, b / 255.0
    max_rgb = max(r, g, b)
    min_rgb = min(r, g, b)
    diff = max_rgb - min_rgb

    v = max_rgb # value
    s = 0 if max_rgb == 0 else diff / max_rgb # saturation 

    if max_rgb == min_rgb: # hue
        h = 0
    elif max_rgb == r:
        h = (60 * ((g - b) / diff) + 360) % 360
    elif max_rgb == g:
        h = (60 * ((b - r) / diff) + 120) % 360
    else:
        h = (60 * ((r - g) / diff) + 240) % 360
    return h, s, v
```