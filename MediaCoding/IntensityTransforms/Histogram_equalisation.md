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
tries to make the intensity distribution uniform
- Takes the histogram function and divides by the total number of the pixels (n) of the image. It gives a measure of how likely is for a pixel to have a certain intensity (i.e., probability)