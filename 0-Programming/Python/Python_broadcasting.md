# Python Broadcasting
- Describes how dumpy treats shapes of different dimensions, the smaller array is broadcast across the larger array so that they are compatible.
- This only works if the elements are compatible, which is only true if their dimensions are compatible when:
1. they are the same dimensions
2. Multiplication is being done with a scaler
>![[Pasted image 20220302154117.png]]
- Broadcasting use example, calculating the percentage each element in a vector contributes to the total of its column
>![[Pasted image 20220302154945.png]]
>![[Pasted image 20220302155004.png]]
reshape isnt necessary in this scenario but is a good method of ensuring compatibility
- Matrix decomposition:
>![[Pasted image 20220302155342.png]]