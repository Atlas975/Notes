Formula sheet:
[[PoPGwxvuEein8Q5msPYVqg_3edb0e701bee11e8a3bbdda3bd061ec3_maths4ml-linearalgebra-formula.pdf]]
# Angle reference
![[Pasted image 20211106150233.png]]
# Vectors
- An object with magnitude and direction
- In computers, usually viewed as an ordered list of numbers that describe the properties of an object.
- Negative reverses a vector
- Vector addition is associative
# Size of vector
- The square root of the sum of a vectors components squared gives the size of a vector (2 dimensional)

# Vector multiply (dot product)
> [1,2,3] * [4,5,6] = (1x4)+(2x5)+(3x6)= 32
## Size of a vector (self)
- A vector can be dotted with itself to get its size. Simply dot it with itself and then take the square root.
> rr=r1r1+r2r2
$$r1^2+r2^2 = sqrt(r1^2+r2^2)^2 = |r|^2$$
![[Pasted image 20211106144505.png|500|500]]
# Cosine rule
>![[Pasted image 20211112123228.png]]
- This tells us that:
> $$r.s=|r||s|cos?$$

# Scalar projection
- The scalar projection of one vector over another can be defined as:
>$$ \frac{r.s}{|r|}=|s|cos?$$

# Vector projection 
- The vector projection in terms of unit vector. (size)
>$$ r\frac{r.s}{r.r}$$ or $$\frac{r.s}{|r|^2}$$
- Always consider r as the vector being displayed onto eg:
>  What is the velocity of a ship in relation to its current? in this case current direction is r

#### The vector projection is also equal to the scaler projection multiplied by $$\frac {r}{|r|}$$
# Changing basis
- Involves changing the basis vectors.
- If two vectors are at 90 degrees to each other they can become the new basis vectors.
- This can be proven if dot product = 0
- The vector projection can then be used to find existing vectors in terms of the new basis vectors.
- Example 1:
>![[Pasted image 20211112235209.png|500|500]]
- Example 2:
>![[Pasted image 20211210221638.png|500|500]]
- Example 3 w projections:
>![[Pasted image 20211210222133.png]]

# Linear independence 
- When a vector CANT be found in the basis of another vector
>![[Pasted image 20211113002504.png|300|300]]

# Transformation with changed basis
>![[Pasted image 20211210222610.png]]