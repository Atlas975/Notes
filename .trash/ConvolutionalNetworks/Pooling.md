
# Pooling 
- Pooling layers are often used to help speed up computation and make certain features more robust
- Outputs a matrix of shape:

>![[Pasted image 20220426202808.png]]
## Max pooling 
- Involves using a filter that outputs the max from a region
- Example max pooling:

>![[Pasted image 20220426201231.png]]
- Example 3x3 max pooling with a stride of 1

>![[Pasted image 20220426201727.png]]
- If each grid cell is considered a feature, max pooling allows for preservation of important features if each cell is considered a feature score
- This also preserves the number of channels, pooling computation  is applied to each channel independently 

>![[Pasted image 20220426202148.png]]

## Average pooling 
- Involves calculating the average of each cell, average pooling might be used deep in a network to collapse representation into a smaller output. Max pooling is often used more often

>![[Pasted image 20220426202440.png]]