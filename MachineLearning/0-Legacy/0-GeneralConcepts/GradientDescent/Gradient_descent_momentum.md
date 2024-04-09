# Gradient descent momentum
- Ideal [[Gradient_descent_legacy]]  momentum looks like the following
![[Pasted image 20220413180449.png|450|450]]
- This can be smoothed out by doing the following 
![[Pasted image 20220413181107.png|450|450]]
- By averaging out the positive and negative vertical oscillations, a height closer to 0 occurs
- The average in the horizontal direction still remains large allowing for more directed steps
- This can also be represented as a ball rolling down hill as a physics analogy 
![[Pasted image 20220413181226.png|450|450]]

## Gradient  descent momentum implementation
![[Pasted image 20220413181351.png|450|450]]
![[Pasted image 20220413181510.png|450|450]]
the right version of the formula is also used, bias correction typically isnt used due to self correction in early iterations