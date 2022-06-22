# Strided convolutions
- Strided convolutions control the jump made by the filter after each iteration
- Example with stride 2:

>![[Pasted image 20220424213122.png]]
this jump is also applied vertically
>![[Pasted image 20220424213225.png]]

## Strided convolutions shape
- Including strides, the output matrix ends up being:
> (((n + 2p - f) /s) +1) x (((n + 2p - f) /s) +1)
-  The floor of this computation is taken as tells after the last step are excluded

>![[Pasted image 20220424213842.png]]
>![[Pasted image 20220424213918.png]]