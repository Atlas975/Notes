> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/IntensityTransforms
> **Created:** 18/03/2024 - 19:59
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Histogram matching
- involves adjusting the intensity distribution of an image to match the histogram of a target image, enhancing the image's contrast and brightness characteristics in a specified way.
- This technique aligns the cumulative distribution function (CDF) of the source image's intensities with the CDF of the target histogram. 
- The goal of histogram matching can be summarised as the following:
    1. Given an image $f$ with a histogram $h_{f}$
    2. Given a specified image g with histogram $h_{g}$ 
    3. Find transformation $T$ such that $T(h_{f})$ matches distribution $h_{g}$


![[Pasted image 20240318203908.png|450|450]]
## Histogram matching algorithm
```python
def histogram_matching(src_channel, ref_hist):
    src_cdf = cumsum(src_hist) / n_s # n_s is the # of pixels in src
    ref_cdf = cumsum(ref_hist) / n_r # n_r is the # of pixels in ref

    mapping = zeros(size(src_channel)) # this will store the transform (T)
    for si in range(n_s): 
        dists = [SSD(src_cdf[si], ref_cdf[ri]) for ri in range(n_r)]
        mapping[si] = argmin(dists) # find the index / intensity of the min distance
    return mapping[src_channel] # map all pixels to new intensity values 
```