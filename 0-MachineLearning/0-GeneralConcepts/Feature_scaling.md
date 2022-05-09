# Vector normalization
- A useful method of getting dimensions in unit length, also speeds up gradient descent.
>![[Pasted image 20220302181635.png]]

>![[Pasted image 20220302181610.png|400|400]]

- Matrix examples along column vector
>![[Pasted image 20220302181715.png]]

# Min-max normalization
>![[Pasted image 20220302182040.png]]
minimum set to 0, max to 1
# Z-score normalization
>![[Pasted image 20220302182308.png]]
mean set to 0


# Z score vs normalization
- Min-max normalization: Guarantees all features will have the exact same scale but does not handle outliers well. **Z-score normalization: Handles outliers, but does not produce normalized data with the exact same scale**.

- With min-max normalization, we were guaranteed to reshape both of our features to be between 0 and 1. Using z-score normalization, the x-axis now has a range from about -1.5 to 1.5 while the y-axis has a range from about -2 to 2. This is certainly better than before; the x-axis, which previously had a range of 0 to 40, is no longer dominating the y-axis.