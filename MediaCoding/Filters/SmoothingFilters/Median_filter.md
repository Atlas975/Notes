> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/Filters/SmoothingFilters
> **Created:** 19/03/2024 - 18:22
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Median filter
- A non-linear filter that's extremely effective at the removal of **salt and pepper noise** (i.e., random occurrences of black and white pixels)
- Works by taking the neighbouring pixels, sorting them and replacing the original value by the median of the kernel list of values


![[Pasted image 20240319191339.png|450|450]]