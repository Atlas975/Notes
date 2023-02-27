# Convolutions over volume
- A convolution will also have a volume when dealing with RGB images
- Convolutions over an additional dimension are done the same way as [[EdgeDetection]] but with all 3 layers summed up resulting in a 2D output

![[Pasted image 20220424215158.png|450|450]]

- This allows for filters that can pick up edges in just a single RGB channels eg a filter that only checks for red edges

![[Pasted image 20220424215318.png|450|450]]

## Applying multiple filters 
- While multiple convolutions flatten an image, multiple filters can be applied as well resulting in a stack
![[Pasted image 20220424220118.png|450|450]]