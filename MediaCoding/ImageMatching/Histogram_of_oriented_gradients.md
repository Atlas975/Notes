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
- A feature descriptor calculating algorithm used in [[Image_matching#Local image matching|local image matching]]
- Captures the features of an image via analysing the distribution of it's intensity gradients. 
- The output of HOG is a feature vector, which encode histogram information in a way that describes the shapes and patterns within an image

![[Pasted image 20240321212543.png|450|450]]
- Follows the 
1. Calculate magnitude and direction of gradient at each pixel in the image
2. Divide the image into 8×8 cells
3. Calculate histogram of gradients in each cell
4. Block Normalisation
5. Form HOG feature vector


- In essence, the HOG feature vector transforms an image into a form that emphasises structural information. This can then be compared with other feature vectors using metrics like [[Sum_of_squared_differences|SSD]]



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