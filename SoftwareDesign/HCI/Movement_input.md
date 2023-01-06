
# Movement_input
created: 2022-11-05 14:33
#DesignTheory 

---
# Fitt's law
- States how the amount of time required for a person to move a pointer to target area if a function of distance divided by target size, with a and b as coefficients and device dependent 
>$$T = a+b\log_{2}\left( \frac{2D}{W} \right)$$
- Fitt's experiment 

> ![[Pasted image 20221105143840.png]]
> ![[Pasted image 20221105143917.png]]

## Speed accuracy tradeoff
- Faster movement is inversely proportional to accuracy 
- An example of this is mouse tracking speed with the control-display gain
>$$CD_{gain}=\frac{V_{display}}{V_{control}}$$

```ad-example
Example
• Mouse moves 3cm and cursor moves 3cm: CD gain = 1.
• Mouse moves 3cm and cursor moves 6cm: CD gain = 2.
```

> ![[Pasted image 20221105144718.png]]
> low cd = good for precision
> high cd = better for gross positioning, good for quick movement

## Index of difficulty (ID)
>$$ID=\log_{2}\left( \frac{D}{W}+1 \right)$$
- Measured in bits, combines distance and width into measurable difficulty

> ![[Pasted image 20221105145043.png]]

- Device throughput is a measure of input performance that accounts for both speed and accuracy, steeper slopes on a Fitt's law graph mean less throughput

## Crossing vs pointing selection

> ![[Pasted image 20221105145926.png]]

- Crossing is good for thin selection objects and pen style devices

> ![[Pasted image 20221105150043.png]]

## Steering law
> ![[Pasted image 20221105150209.png]]

- This also applies to steering through sub-menus

> ![[Pasted image 20221105150309.png]]

## Keystroke-level model (KLM)
- Describes basic input operations with execution time-estimates 
- Accounts for physical, mental buildup and system response

> ![[Pasted image 20221105151248.png]]

- Limitations: assumes user is an expert and error-free operations 