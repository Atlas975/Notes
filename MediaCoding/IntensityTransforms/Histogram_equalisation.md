> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/IntensityTransforms
> **Created:** 18/03/2024 - 19:31
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Histogram equalisation
- A computer image processing technique used to improve contrast in images
- It accomplishes this by effectively spreading out the most frequent intensity values

![[Pasted image 20240318195059.png|350|350]]

- Note that images cannot be reconstructed by a histogram as multiple images can have the same histogram distribution. This technique does not impact shape patterns in an image
- Histograms convey no information on the spatial distribution of pixels with a certain grey level.

![[Pasted image 20240318195626.png|350|350]]
## Histogram equalisation process
1. Gets the histogram of image intensities ordered by intensity (lowest to highest)
2. Get the normalised histogram by dividing by the total number of the pixels (n) of the image. It gives a measure of how likely is for a pixel to have a certain intensity (i.e., probability)
3. Map the intensities of the original image to the new equalised intensities.

```python
def histogram_equalisation(intensity_channel):
    histogram = accumarray(intensity_channel) 
    cdf = cumsum(histogram) / n 
    equalised_intensity = floor(cdf[intensity_channel] * MAX_INTENSITY)
    return equalised_intensity
```
