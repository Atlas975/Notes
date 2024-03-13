---
aliases: [recursive]
---

> [!important]- Metadata
> **Tags:** #Programming 
> **Located:** SoftwareEngineering
> **Created:** 26/12/2022 - 09:26
> ```dataviewjs
>let loc = dv.current().file.path;
>let cur = dv.page(loc).file;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]).slice(0, 20));
> ```

___
# Recursion
- A method calling itself
- Recursion order manipulation:

![[Pasted image 20220303120416.png|550|550]]

- Recursion is best used when a problem can be solved utilising solutions to smaller versions of the same problem, and the smaller versions reduce to easily solvable cases. 
- Useful for [[Backtracking]] and [[Tree_algorithms|Tree trasveral]]
## Iterative vs recursive approach
![[Pasted image 20220303120603.png|450|450]]


## Head recursion 
- Recursive call occurs at beginning of calling function, prior to any processing 
- Result propagates back to head call
```python
def head_factorial(n):
    if n == 0:
        return 1
    return n * head_factorial(n - 1)
```

## Tail recursion 
- Nothing left for the function to do when the call is done (except return)
- Recursive call made at end of function when all processing has been completed 
- Result returned without propagating
```python
def tail_factorial(n, acc=1):
    if n == 0:
        return acc
    return tail_factorial(n - 1, acc * n)
```

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

![[Pasted image 20220505003635.png|450|450]]

- Useful for visualizing what happens when a recursive call is repeated
- Example recursive trees 
- Recursion tree examples

![[Pasted image 20220505003954.png|450|450]]
![[Pasted image 20220505004124.png|450|450]]
![[Pasted image 20220505004201.png|450|450]]
![[Pasted image 20220505004214.png|550|550]]



## Master theorem 
- A method of determining the time compelxity of recursive algorithm given that certain conditions are met, the general formula for this is:
>$$T(n)=aT\left( \frac{n}{b} \right)+f(n) $$
>$$T(1)=c$$
>$$ \text{where}\ a\geq{1},\ b\geq{2},\ c>{0} \ \text{and} \ f(n) \text{ is } \theta(n^{d})\text{ where }d\geq{0} \text{ then} $$
>
![[Pasted image 20220509141400.png|450|450]]

- The theorem can **only** be used if:

![[Pasted image 20220505190609.png|450|450]]

- The time complexity can then be narrowed to  a single one of the following 

![[Pasted image 20220505190445.png|450|450]]

- Example implementations

![[Pasted image 20220505190808.png|450|450]]
this indicates complexity of n^2

![[Pasted image 20220505190953.png|450|450]]
this indicates complexity of nlog n