# Function Properties
- The input is the domain of the function (all input elements)
- The outputs are the co-domain of the function (all possible output elements)

> ![[Pasted image 20211028234513.png]]
*An input can't have multiple possible outputs, this is not a function*
- **Range** is what actually comes out of the function, it is a subset of the co-domain. 
- It can also be said that a is the pre-image of b under f with b being the image of a under f
- **Multiple inputs to the same output is fine, multiple outputs to same input is not**

# Function arithmetic
> ![[Pasted image 20211028234622.png]]

## Addition
> ![[Pasted image 20211028235316.png|500]]
## Subtraction 
> ![[Pasted image 20211028235235.png|500]]
## Multiplication
> ![[Pasted image 20211028235421.png|500]]
## Division
> ![[Pasted image 20211028235520.png|500]]
*Only the intersection of domains can be used*
## Composition
> ![[Pasted image 20211028235747.png|500]]

# Function types 
- Injective / surjective table
>![[Pasted image 20211101204718.png|500|500]]

# Surjective / onto function
- Every y has at least one x mapped to it. range=co-domain
- Every inverse function has the surjective property. 
>![[Pasted image 20211101005744.png]]
- If the function is a subset of real numbers (N) for every integer y there is an integer x so f(x)=y
- Arithmetic example:
$$y=3x+5$$
$$x=\frac{(y-5)}{3}$$
both result in real numbers with a single input value, making this function surjective.
- Example of non surjective:
>![[Pasted image 20211101123202.png]]
This isn't surjective as there's both a positive and negative number mapped to y. If the domain is restricted to only positive numbers this changes.
- Example of non surjective (linear):
$$y=5x+2$$
on Z to Z becomes
$$x=\frac {y-2}{5} $$
when y=5 , x=3/5 not an integer so y=5 has no mapping


# Injective / one-to-one
- Every y is mapped to only 1 x
- Assume f(x)=f(y)
- Example of non injective (R -> R):
$$ x^2=y^2$$
$$x=\mp y$$
therefore x isn't guaranteed to map to equal y (x=y) therefore the function is not injective 

# Bijective 
- If functions both injective and surjective it can be classified as Bijective.
- All functions that have an inverse are Bijective.

# Set inverse
>![[Pasted image 20211031231048.png|500|500]]
# Algebraic inverse
- Reverse operations
$$ y=4x -\to y^{-1}=\frac{x}{4}$$
# Inverse rules
- Each y **MUST** map to a unique x to have an inverse as the inverse is also a function.
- Therefore not every function has an inverse
- Example
$$ f(x)=x^2$$
- y cannot map to both -2 and 2