# Markov chains
- A system that describes the probability of one state occurring given the current occurring event.
- Consider this model where the probability of the food served during a day depends on the food served the previous day:
>![[Pasted image 20220225104756.png]]
>![[Pasted image 20220225105013.png]]
- After a large amount of steps these probabilities converge on:
>![[Pasted image 20220225105106.png]]
this is called the equilibrium / stationary state
## Linear algebra representation
- Matrices allow for these probabilities to be written in a compact form
>![[Pasted image 20220225105206.png]]
- Example: using the matrix to find the probabilities of each food the next day given its a pizza day, this can by done by multiplying by a vector as follows:
>![[Pasted image 20220225105457.png]]
- Doing this multiple times will eventually converge on the stationary state, at a certain point the output row vector will be exactly the same as the input row vector
>![[Pasted image 20220225105655.png]]
>![[Pasted image 20220225110018.png]]
- Using this technique allows us to find out if there are more than one stationary states, this is done by finding out if there are more eigenvectors (input) where eigenvalues can equal to one while still outputting the same result