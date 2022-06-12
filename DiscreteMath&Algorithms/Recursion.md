# Recursion
- A method calling itself
- Recursion order manipulation:

>![[Pasted image 20220303120416.png]]
- Recursion is best used when a problem can be solved utilizing solutions to smaller versions of the same problem, and the smaller versions reduce to easily solvable cases.
## Iterative vs recursive approach
>![[Pasted image 20220303120603.png]]

# Recursive time complexity
- There are multiple methods for computing the time complexity  / number of operations of a recursive algorithm 
- Using the following function as an example:
```c
int Sum(int n) {
	if (n==1){
		return 1
	}
	return n + Sum(n-1)
}
```

## Back substitution method 
- Involves using the functions recursive call to formulate a concise equation for time complexity.

> T(n) = T(n-1) + 1 when n > 1

- This shows:

> T(n-1) = T(n-2) + 1 
> T(n-2) = T(n-3) + 1

- Using substitution:

>T(n) = T(n-1) + 1 = T(n-2) + 1 + 1 = T(n-2) + 2 
>T(n) = T(n-2) + 2 = T(n-3) + 1 + 2 = T(n-3) + 3
>T(n) = T(n-k) + k

> n-k=1 means k=n-1  with k being recursive calls

## Recursion trees 

- The depth of a tree describes the depth of its deepest node
- The branching factor describes the number of children at any particular node

>![[Pasted image 20220505003635.png]]

- Useful for visualizing what happens when a recursive call is repeated
- Example recursive trees 

### Recursion tree examples

>![[Pasted image 20220505003954.png|600|500]]
>![[Pasted image 20220505004124.png|600|500]]
>![[Pasted image 20220505004201.png|600|500]]
>![[Pasted image 20220505004214.png|600|500]]



## Master theorem 
- A method of determining the time compelxity of recursive algorithm given that certain conditions are met, the general formula for this is:

>![[Pasted image 20220505190349.png]]
>![[Pasted image 20220509141400.png]]

- The theorem can **only** be used if:

>![[Pasted image 20220505190609.png]]

- The time complexity can then be narrowed to  a single one of the following 

>![[Pasted image 20220505190445.png]]

- Example implementations

>![[Pasted image 20220505190808.png]]
this indicates complexity of n^2

>![[Pasted image 20220505190953.png]]
this indicates complexity of nlog n