
# Time_complexity
created: 2022-06-23 16:22
#ComplexityTheory 

---
[[Algorithm_fundamentals]]
## Sort algorithm time complexity
![[Pasted image 20220612171916.png|450|450]]
## Data structure time complexity
![[Pasted image 20220325121014.png|450|450]]
# Time complexity scale
![[Pasted image 20220201151320.png|450|450]]
# Operations counting
![[Pasted image 20220120124709.png|450|450]]
## Experimental approach
![[Pasted image 20220120120759.png|450|450]]

- Limitations:

![[Pasted image 20220120120901.png|450|450]]
## Counting execution steps
- Example:

![[Pasted image 20220120122806.png|450|450]] 4 constant operations + 2n for comparison operator in the loop. This is true for any input

![[Pasted image 20220120123016.png|450|450]]* 3 + 4n

- Programs execution time is independent of input
## Edge case programming languages
- Pascal

![[Pasted image 20220120124332.png|450|450]]

- Array access requires 5 operations for array access over C's 2
# Operation counting examples
## Linear execution times
## Operations: average function
![[Pasted image 20220124121824.png|450|450]]
![[Pasted image 20220124121857.png|450|450]]
![[Pasted image 20220124122050.png|450|450]]
![[Pasted image 20220124122111.png|450|450]]

- Programs execution time is independent of input
## Operations: uncapped average
![[Pasted image 20220124122734.png|450|450]]
![[Pasted image 20220124122906.png|450|450]]
![[Pasted image 20220124122929.png|450|450]]
## Operations: min function
- Example of different best and worst case complexities
- worst case (no smaller number than that at index 0)

![[Pasted image 20220124123404.png|450|450]]

- best case (smallest number every iteration)

![[Pasted image 20220124123605.png|450|450]]
![[Pasted image 20220124123645.png|450|450]]
## Operations: linear search
![[Pasted image 20220126131656.png|450|450]]

- Worst case

![[Pasted image 20220126131809.png|450|450]]

- Best case

![[Pasted image 20220126131944.png|450|450]]

- Average case

![[Pasted image 20220126132158.png|450|450]]
![[Pasted image 20220126132246.png|450|450]]
![[Pasted image 20220126132401.png|450|450]]
![[Pasted image 20220126132528.png|450|450]]
![[Pasted image 20220126132613.png|450|450]]
![[Pasted image 20220126132629.png|450|450]]
## Logarithmic execution times
## Operations: log2
![[Pasted image 20220124162629.png|450|450]]
![[Pasted image 20220124162659.png|450|450]]
![[Pasted image 20220124162722.png|450|450]]
![[Pasted image 20220124163032.png|450|450]]
![[Pasted image 20220124163058.png|450|450]]
## Quadratic execution times
### Operations: square of num
![[Pasted image 20220126125232.png|450|450]]
![[Pasted image 20220126125453.png|450|450]]

N(3N+2)+2N+2+1

![[Pasted image 20220126125520.png|450|450]]
## Cubic execution times
### Operations: cube of num
![[Pasted image 20220126125909.png|450|450]]

3N^3+4N^2+4N+3
## Exponential execution times
![[Pasted image 20220126130347.png|450|450]]
![[Pasted image 20220126131118.png|450|450]]
# Average case
- Only N needs to be replaced
- Average case assumes N is in the array

[[Algorithm_fundamentals#Sequences formulae]]

![[Pasted image 20220131121809.png|450|450]]
![[Pasted image 20220131121821.png|450|450]]
![[Pasted image 20220131140717.png|450|450]]
![[Pasted image 20220131141108.png|450|450]]
![[Pasted image 20220131121839.png|450|450]]

- Calculating both average cases:

![[Pasted image 20220201135705.png|450|450]]
![[Pasted image 20220201134628.png|450|450]]
# Evaluating probability of outcome
![[Pasted image 20220201135555.png|450|450]]
## Average time complexity
![[Pasted image 20220131123412.png|450|450]]
![[Pasted image 20220131123432.png|450|450]]
## Time growth
![[Pasted image 20220131123521.png|450|450]]

- Function growth table

![[Pasted image 20220131123632.png|450|450]]
## Graphical time growth
![[Pasted image 20220131123717.png|450|450]]
![[Pasted image 20220131123923.png|450|450]]
![[Pasted image 20220131124009.png|450|450]]
# Average case
- Only N needs to be replaced
- Average case assumes N is in the array

[[Algorithm_fundamentals#Sequences formulae]]

![[Pasted image 20220131121809.png|450|450]]
![[Pasted image 20220131121821.png|450|450]]
![[Pasted image 20220131140717.png|450|450]]
![[Pasted image 20220131141108.png|450|450]]
![[Pasted image 20220131121839.png|450|450]]

- Calculating both average cases:

![[Pasted image 20220201135705.png|450|450]]
![[Pasted image 20220201134628.png|450|450]]
# Evaluating probability of outcome
![[Pasted image 20220201135555.png|450|450]]
## Average time complexity
![[Pasted image 20220131123412.png|450|450]]
![[Pasted image 20220131123432.png|450|450]]
## Time growth
![[Pasted image 20220131123521.png|450|450]]

- Function growth table

![[Pasted image 20220131123632.png|450|450]]
## Graphical time growth
![[Pasted image 20220131123717.png|450|450]]
![[Pasted image 20220131123923.png|450|450]]
![[Pasted image 20220131124009.png|450|450]]
