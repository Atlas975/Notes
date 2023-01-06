# Matrices
- Can be used to represent equations and produce a single vector
> ![[Pasted image 20211113112423.png|500|500]]
## Matrix rules:
>![[Pasted image 20211113113325.png|500|500]]
- The matrix as a scale factor
- **the number of columns in the first matrix must be equal to the number of rows in the second matrix**
## Identity matrix
- Matrix that does nothing
>![[Pasted image 20211113113509.png|500|500]]
## Rotation by 90 degrees
>![[Pasted image 20211113114041.png]]
# Matrix multiplication 
- Matrices can be multiplied to make a new matrix that gives the new coordinates 
- Order of operation matters, matrix multiplication is done by doing:
> (row1 x column1) (row1 x column2)
> (row2 x column1) (row2 x column2)

>![[Pasted image 20211113115224.png]]
#### Associative but not commutative
# Transformation
- The two orange vectors represent the two vectors in a matrix
>![[Pasted image 20211113120232.png|200|200]]
## Clockwise rotation by angle
![[Pasted image 20211113144231.png]]
## Unit circle 
![[Pasted image 20211113151816.png]]
# Gaussian elimination 
- The inverse of a matrix eliminates a matrix making it an identity matrix.
> ![[Pasted image 20211113184125.png|400|400]]
- Subtracting row 1 from the other rows can simplify a problem, eg:
>![[Pasted image 20211113184412.png|400|400]]
- This also tells us that c = 2	
- This also reduces the matrix to echelon form (everything below diagonal is 0) allowing to solve using substitution.
- This can be taken further by removing row c and then b from other rows after solving them.
>![[Pasted image 20211113184817.png|400|400]]
## Using Gaussian elimination to find inverse matrix
>![[Pasted image 20211114105242.png]]
>![[Pasted image 20211114113000.png]]
#### The goal is to get the original matrix to look like the identity matrix
- Step by step example: subtract 1st row from 3rd row, then swap2nd and 3rd row to match identity matrix
>![[Pasted image 20211114110258.png]]
 subtract 1st row from 3rd row, then swap 2nd and 3rd row to closer match identity matrix
 ![[Pasted image 20211114111020.png]]
 subtract 2 time row 2 from row 3
 ![[Pasted image 20211114111241.png]]
 subtract row 3 from row 1
 ![[Pasted image 20211114111320.png]]
 This gives the inverse matrix
 
 # Echelon form conversion process
 ![[Pasted image 20211114135837.png]]
 
 # Inverse matrix formula
 >![[Pasted image 20211211182555.png]]
 # Determinants and inverses
 ## Determinant
 How much a space is scaled by
 >![[Pasted image 20211114143857.png]]

## Stretching example
>![[Pasted image 20211114144025.png]]
#### Determinant is still AD
- The determinant is donated by |A|
- The inverse of a matrix can be found by flipping terms on leading diagonal and taking - of sub diagonal terms
![[Pasted image 20211114144607.png]]
- Dividing the inverse by 1 over the determinant gives the identity matrix 
![[Pasted image 20211115000213.png|500|500]]
- Example where determinant = 0, vectors lie on the same line
![[Pasted image 20211115000610.png|400|300]] 
- When vectors are not linearly independent, the determinant is 0
#### Note the inverse matrix allows for a transformation to be undone (new vectors back to original vectors) (determinant is 0 and not linearly independent)
# Orthogonal matrices
- Transposed matrix:
>![[Pasted image 20211211081756.png]]
>![[Pasted image 20211211082115.png]]
- A set of basis vectors that are perpendicular to each other is an orthogonal set.

# Gram-Schmidt method
- Method of creating orthogonal matrix
>![[Pasted image 20211211082846.png]]
- Example:
>![[Pasted image 20211211084608.png]]
- With this last vector a full onthogonal set is formed
>![[Pasted image 20211211085004.png]]
>![[Pasted image 20211211085050.png]]

# Matrix transpose
- Flips matrix along its diagonal
>![[Pasted image 20220104122743.png]]

# Matrix rank
- How many rows are not made of another row + how many columns are not made of another column
>![[Pasted image 20220106125958.png]]
