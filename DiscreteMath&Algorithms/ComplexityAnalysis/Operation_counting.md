# Operations counting
>![[Pasted image 20220120124709.png]]
## Experimental approach 
>![[Pasted image 20220120120759.png]]
- Limitations:

>![[Pasted image 20220120120901.png]]
## Counting execution steps
- Example:

>![[Pasted image 20220120122806.png]] 4 constant operations + 2n for comparison operator in the loop. This is true for any input 

>![[Pasted image 20220120123016.png]]* 3 + 4n 
- Programs execution time is independent of input
## Edge case programming languages
- Pascal
>![[Pasted image 20220120124332.png]]
- Array access requires 5 operations for array access over C's 2

# Operation counting examples
# Linear execution times
## Operations: average function 
>![[Pasted image 20220124121824.png]]
>![[Pasted image 20220124121857.png]]
>![[Pasted image 20220124122050.png]]
>![[Pasted image 20220124122111.png]]
- Programs execution time is independent of input
## Operations: uncapped average 
>![[Pasted image 20220124122734.png]]
>![[Pasted image 20220124122906.png]]
>![[Pasted image 20220124122929.png]]

## Operations: min function 
- Example of different best and worst case complexities
- worst case (no smaller number than that at index 0)
>![[Pasted image 20220124123404.png]]
- best case (smallest number every iteration)
>![[Pasted image 20220124123605.png]]
>![[Pasted image 20220124123645.png]]

## Operations: linear search
>![[Pasted image 20220126131656.png]]
- Worst case
>![[Pasted image 20220126131809.png]]
- Best case
>![[Pasted image 20220126131944.png]]
- Average case
>![[Pasted image 20220126132158.png]]
>![[Pasted image 20220126132246.png]]
>![[Pasted image 20220126132401.png]]
>![[Pasted image 20220126132528.png]]
>![[Pasted image 20220126132613.png]]
>![[Pasted image 20220126132629.png]]

# Logarithmic execution times 
## Operations: log2
>![[Pasted image 20220124162629.png]]
>![[Pasted image 20220124162659.png]]
>![[Pasted image 20220124162722.png]]
>![[Pasted image 20220124163032.png]]
>![[Pasted image 20220124163058.png]]

# Quadratic execution times
### Operations: square of num
>![[Pasted image 20220126125232.png]]
>![[Pasted image 20220126125453.png]]
N(3N+2)+2N+2+1
>![[Pasted image 20220126125520.png]]

## Cubic execution times
### Operations: cube of num
>![[Pasted image 20220126125909.png]]
3N^3+4N^2+4N+3
## Exponential execution times
>![[Pasted image 20220126130347.png]]
>![[Pasted image 20220126131118.png]]


