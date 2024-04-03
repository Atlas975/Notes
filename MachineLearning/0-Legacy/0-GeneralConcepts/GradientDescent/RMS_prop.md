# RMS prop 
- An algorithm that helps control [[Gradient_descent_momentum]]
- Helps keep horizontal momentum high while keeping vertical momentum low

![[Pasted image 20220413205440.png|600|600]] 

- Ideally S dw will be small to preserve horizontal momentum by dividing by a small number, the opposite is true for S db
- In practice a hyparameter epsilon is sometimes added to prevent dividing by zero
![[Pasted image 20220413205847.png|450|450]]