# Padding 
- Taking an n x n image and applying a f x f filter results in an output of dimensions (n-f+1) x (n-f+1)
- This results in two downsides, one being that the image shrinks  meaning this can only be applied so many times before the image becomes too small.
- The next is that certain pixels have a filter applied less often than other pixels in the output
- A solution to this is padding which can also preserve the original input size

>![[Pasted image 20220424193122.png]]
padding of 1 example

# Valid and Same convolutions
> - Valid convolutions have no padding applied 
> - Same convolutions pad so that output size = input size

>![[Pasted image 20220424193624.png]]

- padding for same convolutions = 
$$\frac{(f-1)} {2}$$
