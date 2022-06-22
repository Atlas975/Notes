# Exponentially weighted averages
- A moving average that places greater emphasis on the most recent readings that are taken, this is more computationally efficient than computing standard averages over a window
>![[Pasted image 20220413004712.png]]
each value is calculated by taking 0.9*previousValue + 0.1*currentValue

- Taking more frequent readings results in a smoother curve
>![[Pasted image 20220413004944.png]]
red represents an interval of 10, green is 50

- The temperature adapts more slowly in the latter case but is 
- When beta is large, more weight is given towards the previous value and is the equivalent of taking less frequent readings
>![[Pasted image 20220413005426.png]]

## Backtracking averages 
- Each value can be represented as the sum of previous values in what can be graphed as exponential growth 
>![[Pasted image 20220413005943.png]]

## Implementation
>![[Pasted image 20220413010449.png]]