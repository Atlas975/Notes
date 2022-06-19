# Matlab boolean
- Equal to
>1==2
- Not equal to
>1~=2
- AND operation
>1&&2
- OR operation
>1 || 2
- XOR operations (returns true in this case)
> xor(1,2)
## Matrix boolean
>![[Pasted image 20220111140223.png]]
>![[Pasted image 20220111140253.png]]

# Matlab variables
- int assign
> a=3;
- string assign
> a='hello';

# Matlab functions
## print statement
- Example:
>disp('hello');
- Same print formatting as [[C_language#Print formatting]]
> disp(sprintf('2 decimals: 0.2f', pi))      
> **prints 3.14**
## ones matrix
- Initializes a matrix of ones with given dimensions
>![[Pasted image 20220111123417.png]]
## zeros matrix
>![[Pasted image 20220111123530.png]]
## Matrix of random elements (0-1)
>![[Pasted image 20220111123601.png]]
## Matrix of gaussian elements
>![[Pasted image 20220111123800.png]]
## Absolute value
>![[Pasted image 20220111135231.png]]
## Maximum
- Note that if a matrix is used, function returns column wise maximum
>![[Pasted image 20220111135636.png]]
- Max with index
>![[Pasted image 20220111140101.png]]
### Row and column wise max
>![[Pasted image 20220111141332.png]]
## Matlab sum,product,floor & ceil
>![[Pasted image 20220111141202.png]]
# Matlab constants
> pi
> inf **infinity**
> ie6 **10^6**

# Matlab vectors / matrices
## Matrix initialization
>![[Pasted image 20220111115354.png]]
## Transpose matrix
> A'   <---- denoted by quotation mark
## Matrix size 
-note this also returns a matrix,
>![[Pasted image 20220111124112.png]]
## Accessing elements
>![[Pasted image 20220111125504.png]]
>![[Pasted image 20220111125619.png]]
>![[Pasted image 20220111125718.png]]
## Accessing and changing elements
>![[Pasted image 20220111125842.png]]
## Put all elements in single vector
>![[Pasted image 20220111125950.png]]
## Return individual dimensions
>![[Pasted image 20220111124243.png]]
## Matlab matrix tricks
- Create a vector incrementing from 1 to 2 by jumps of 0.1
>![[Pasted image 20220111123147.png]]
- Retrieve first 6 elements
> v=1:6
## Identity matrix
>![[Pasted image 20220111124006.png]]
## Matrix concatenate
- Concatenate matrix row wise
>![[Pasted image 20220111130314.png]]
- Concatenate matrix column wise
>![[Pasted image 20220111130632.png]]
## Matrix inverse
>![[Pasted image 20220111141925.png]]
## Matrix flip along diagonal
- Example: flipped identity matrix
>![[Pasted image 20220111141824.png]]
## Types of matrix multiplication
- For regular matrix multiplication
> A * B
- For element wise matrix multiplication (only works for same dimensions)
> A .*B
- Element wise squaring
> A .^ B 
- or to just square every element
> A .^ 2 
- Element wise reciprocal matrix
> 1./A


# Log and e
>![[Pasted image 20220111135102.png]]
>![[Pasted image 20220111135129.png]]
# Graphing MatLab data
## Trig function plot
>![[Pasted image 20220111142622.png]]
- Plots a histogram for a matrix
> hist(variable) 
## Plotting two graphs 
>![[Pasted image 20220111144929.png]]
## Labeling
>![[Pasted image 20220111145158.png]]
## Plot two separate figures
- The subplot() function also works to plot two graphs in the same function
>![[Pasted image 20220111145308.png]]
## Access individual elements
>![[Pasted image 20220111150018.png]]
## Changing axis
>![[Pasted image 20220111150058.png]]
## Visualizing matrix
>![[Pasted image 20220111150315.png]]

# Control statements
## If statement
>![[Pasted image 20220111151250.png]]
## For loop example
>![[Pasted image 20220111150801.png]]
- Alternate way
>![[Pasted image 20220111150855.png]]
## While loop example
>![[Pasted image 20220111150958.png]]
- Example with break
>![[Pasted image 20220111151108.png]]

# Matlab methods
- Example, note that matlab functions can take more than one variable
>![[Pasted image 20220111155315.png]]

# Matlab unrolling vectors
>![[Pasted image 20220127224737.png]]
# Theta optimization
[[Weights_optimization]]
