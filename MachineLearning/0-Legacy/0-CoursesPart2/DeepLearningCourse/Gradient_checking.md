
# Approximating gradient descent
- The derivative of a change in a function can be approximated by doing the following:
![[Pasted image 20220407195739.png|450|450]]
- This is useful for showing that the derivative of a function is correct by approximating the value it should give


# Gradient checking
- A useful method in finding bugs in implementing techniques such as [[Backpropagation_legacy]]
- The first step of this is to take the weights and biases and to reshape this into a single vector 
![[Pasted image 20220407200204.png|450|450]]
- After this, each element in theta is iterated over, comparing the gradient approximation to that calculated by the derivative, a good error rate would be in the range of 10^-7
![[Pasted image 20220407200602.png|450|450]]
- Implementation notes
![[Pasted image 20220407201008.png|450|450]]