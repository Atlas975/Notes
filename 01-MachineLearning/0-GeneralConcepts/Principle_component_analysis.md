# PCA
- The number of principal components is either the number of variables or the number of samples, whichever one is smaller
## PCA step by step
- Example 2D PCA plot (note this can also be done for 1D and 3D)
>![[Pasted image 20220228112653.png|400|400]]
- PCA can take measurements for 4 or more variables and make a 2D plot like the one above, showing us how similar samples cluster together
- PCA also tells us which variable is most valuable for clustering the data
>![[Pasted image 20220228112947.png|400|400]]
- PCA can also tell us how accurate the 2D graph is
- Example of PCA step by step on 2D example:

1. Calculate the center of the data
>![[Pasted image 20220228113155.png|400|400]]
2. Shift the origin so the average is at the center of the graph
>![[Pasted image 20220228113301.png|300|300]]
3. Fit a line that goes through the data(must also go through the origin)
>![[Pasted image 20220228113402.png|400|400]]
>![[Pasted image 20220228113431.png|400|400]]
- From there there are two possible approaches: to measure the distances from the data to the line and minimize those distances. It can also try find a line that maximizes the distance from the projected points to the origin.
>![[Pasted image 20220228113933.png|400|400]]
>![[Pasted image 20220228113949.png|400|400]]
- Repeating for every other point
>![[Pasted image 20220228114026.png|400|400]]
>![[Pasted image 20220228114214.png|400|400]]
- The line with the largest sum of squared distances is called principal component 1
>![[Pasted image 20220228114307.png|400|400]]
- In this example PC1 has a slope of 0.25, that means that for every unit 4 we go along the gene 1 axis:
>![[Pasted image 20220228114524.png|400|400]]
>![[Pasted image 20220228114640.png|400|400]]
this is actually called the linear combination of gene1 and gene2
- This indicates data is mostly spread along the gene 1 axis
>![[Pasted image 20220228114856.png|100|200]]
>![[Pasted image 20220228114948.png|200|300]]
>![[Pasted image 20220228115050.png|400|400]]
- We now have a principal component
>![[Pasted image 20220228115339.png|400|400]]
the sum of squared distances for the best fit line is the eigenvalue for PC1
>![[Pasted image 20220228120240.png|400|400]]
>![[Pasted image 20220228120315.png|400|400]]
- Calculating PC2:
>![[Pasted image 20220228233457.png|400|400]]
>![[Pasted image 20220228233537.png|400|400]]
in unit vector terms, -0.242 gene1, 0.97 gene2
## Interpreting principal components
- Rotate everything until PC1 is horizontal
- We then use the principal components as x/y coordinates for the new points, using each respective points place on the two principal components
>![[Pasted image 20220228234042.png|400|400]]
pca with single value decomposition
- We can also use the eigenvalues to calculate variation around the origin by dividing by the sample size -1
>![[Pasted image 20220228234308.png|500|500]]
>![[Pasted image 20220228234347.png|400|400]]

## 3D example
>![[Pasted image 20220228234635.png|400|400]]
- Center data than find best fitting line:
>![[Pasted image 20220228234708.png|400|400]]
>![[Pasted image 20220228234727.png|400|400]]
>![[Pasted image 20220228234753.png|200|200]]
>![[Pasted image 20220228235233.png|400|400]]
>![[Pasted image 20220228235415.png|400|400]]
 ## PCA main concepts
>![[Pasted image 20220228111843.png|300|300]]
>![[Pasted image 20220228111909.png|300|300]]
>![[Pasted image 20220228111942.png|300|300]]
>![[Pasted image 20220228112110.png|300|300]]
>![[Pasted image 20220228112135.png|300|300]]
>![[Pasted image 20220228112208.png|300|300]]