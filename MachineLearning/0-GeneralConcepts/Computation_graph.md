# Computation graphs
- A useful way of breaking up a graph into nodes that correspond to different operation & variables.
- Very useful when there's a specific function that we're trying to tune (eg a neural network), each node has a chain effect on the next.
>![[Pasted image 20220228144424.png]]
- A derivative would work on this backwards, for instance backpropagation via the chain rule. This helps measure the impact of tuning a single variable.
>![[Pasted image 20220228165713.png]]
dvar indicates the derivative of the final output variable thats cared about
>![[Pasted image 20220228170120.png]]

[[Vectorized_logistic_regression]]

## Neural network example
>![[Pasted image 20220303083752.png]]
subscript corresponds to layers