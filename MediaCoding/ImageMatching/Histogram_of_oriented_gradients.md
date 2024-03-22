---
aliases:
  - HOG
---

> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/ImageMatching
> **Created:** 21/03/2024 - 20:46
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Histogram of oriented gradients
- A feature descriptor calculating algorithm used in [[Image_matching#Local image matching|local image matching]] making it more robust to noise and other sparse representations of an image 
- Captures the features of an image via analysing the distribution of it's intensity gradients. 

![[Pasted image 20240321212543.png|450|450]]

- The HOG algorithm follows these steps:
    1. Gradient computation 
    2. Orientation binning
    3. Block normalisation 
    4. Feature vector construction
- The output of HOG is a feature vector, which encode histogram information in a way that describes the shapes and patterns within an image. 
- This feature vector can be compared to other feature vectors via metrics such as [[Sum_of_squared_differences|SSD]]


## Gradient computation
![[Pasted image 20240322171847.png|450|450]]

## Orientation binning
- The image is then divided into small spatial regions called "cells", and for each cell, a histogram of gradient directions (or orientations) is compiled.
- The gradients of all the pixels in a cell are binned according to their quanternised orientation. This process essentially captures the distribution of directions for the edges in each cell

![[Pasted image 20240322172009.png|250|250]]


## Block normalisation
- To improve accuracy and robustness against changes in illumination and contrast, the histograms are normalised.
- This is typically done over larger regions of the image called "blocks", which overlap with each other and consist of multiple cells

![[Pasted image 20240322172114.png|300|300]]
## HOG algorithm

```matlab
function extractedHOGFeatures = HOG(inputImage)
    cellSz1 = 8; % cell size for cell normalisation
    cellSz2 = 2; % cell size for block normalisation
    numBins = 9; % number of bins for gradient orientation binning
    bindiff = pi / numBins; % difference between bins
    windowSz = cellSz1 * cellSz2; % total window size

    [h, w] = size(inputImage); % resize image to be divisible by 8 
    paddedImage = zeros(h + mod(h, windowSz), w + mod(w, windowSz));
    paddedImage(1:h, 1:w) = inputImage; % pad image with zeros 
    [h, w] = size(paddedImage); % get resized image dimensions

    gradX = imfilter(paddedImage, [-1, 0, 1; -1, 0, 1; -1, 0, 1]); 
    gradY = imfilter(paddedImage, [-1, -1, -1; 0, 0, 0; 1, 1, 1]);
    gradMags = sqrt(gradX.^2 + gradY.^2);  % magnitude of gradients
    gradDir = abs(atan2(gradY, gradX)); % abs to keep range 0:pi

    windowX = repmat(cellSz1, 1, w / cellSz1); 
    windowY = repmat(cellSz1, 1, h / cellSz1); 
    magnitudeCells = mat2cell(gradMags, windowY, windowX); % 8x8 blocks
    directionCells = mat2cell(gradDir, windowY, windowX); 

    bins = linspace(0, pi, numBins + 1); % 9 bins spaced evenly 0:pi, add pi to wrap
    histogramBins = zeros(numel(magnitudeCells), numBins); 
 
    for i = 1:numel(magnitudeCells) 
        magCell = magnitudeCells{i}; % get gradient magnitudes in current window
        dirCell = directionCells{i}; % get gradient directions in current window
        
        [~, lowerIndices] = histc(dirCell, bins); 
        upperIndices = mod(lowerIndices, numBins) + 1; 
        rWeights = (dirCell - bins(lowerIndices)) / bindiff; 
        lWeights = 1 - rWeights; 
        
        binSums = zeros(size(bins)); % create temporary histogram bins
        binSums(lowerIndices) = binSums(lowerIndices) + magCell .* lWeights;
        binSums(upperIndices) = binSums(upperIndices) + magCell .* rWeights;
        binSums(1) = binSums(1) + binSums(end); % cells=pi in last bin, wrap
        histogramBins(i, :) = binSums(1:end-1) / sum(binSums(1:end-1)); % L1 
    end

    histogramBins = reshape(histogramBins, [size(magnitudeCells), numBins]); 
    windowX = repmat(cellSz2, 1, length(windowX) / cellSz2); 
    windowY = repmat(cellSz2, 1, length(windowY) / cellSz2); 
    blockCells = mat2cell(histogramBins, windowY, windowX, numBins); 
    blockCnt = cellSz1 / cellSz2; % number of elements in each block

    featureVec = zeros(numel(blockCells), numBins * blockCnt); 
    for i = 1:numel(blockCells) % perfrom L1 normalisation on each block
        HOGGroup = blockCells{i}(:); % unroll current block, 4x9 = 1x36
        featureVec(i, :) = HOGGroup / blockCnt;  % L1 normalise
    end
    extractedHOGFeatures = reshape(featureVec, [size(blockCells), numBins * blockCnt]); 
end
```
