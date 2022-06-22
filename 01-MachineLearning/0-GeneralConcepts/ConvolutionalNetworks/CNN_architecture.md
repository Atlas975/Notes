# Convolutional Network Architecture
- Example of applying two filters in one step of forward propagation

>![[Pasted image 20220426130729.png]]
note the third dimension in the output depends on the number of filters

## Number of parameters
- A benefit of convolutional networks is that the number of parameters remains the same even for very large images as long as feature detectors that work are used

>![[Pasted image 20220426131435.png]]

- In summary the height and width of the output layer is equal to: 

>![[Pasted image 20220426132020.png]]

- The number of channels (3rd dimension) is equal to the number of filters. The number of channels for each filter must match the number of channels from the previous layers. The activation will end up having the same dimensions as the output 

>![[Pasted image 20220426133009.png]]
capital A denotes batch descent 

- Lastly the weights and biases can be represented as: 

>![[Pasted image 20220426133154.png]]


## Example convolutional network
- The following is an example of a conv net that might be used in scenarios like image classification

>![[Pasted image 20220426134127.png]]

- When including [[Pooling]] one layer might also be denote a conv layer and pool grouped together since the pool lacks its own weights and biases 

>![[Pasted image 20220427012012.png]]

- Full network with pooling example:

>![[Pasted image 20220427012359.png]]
>![[Pasted image 20220427012739.png]]
>(5x5x3 + 1) x 8 = 608
>(5x5x8 + 1) x 16 = 3216


