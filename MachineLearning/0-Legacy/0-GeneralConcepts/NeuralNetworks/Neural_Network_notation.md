# Deep vs shallow networks
![[Pasted image 20220305150057.png|700|550]]
deep networks are prone to overfitting (high variance), shallow networks are prone to underfitting (high bias)

- Notation:

![[Pasted image 20220305150130.png|700|550]]
n detonates the number of neurons in each layer, L detonates layer number with the input layer corresponding to layer 0

- Forward propagation summary:

![[Pasted image 20220305151315.png|700|550]]
note in this case its fine to use a for loop to iterate through each layer

- Matrix dimensions summary:

![[Pasted image 20220305152140.png|700|550]]
b uses projection to fit the dimensions its used in


# Cache method
- Used to pass variables computed during forward propagation to the corresponding backward propagation step. It contains useful values for backward propagation to compute derivatives.

![[Pasted image 20220305180244.png|450|450]]
![[Pasted image 20220305180530.png|450|450]]
- Diagram summary of forward and backward propagation


![[Pasted image 20220306093717.png|450|450]]
![[Pasted image 20220305233902.png|450|450]]
![[Pasted image 20220305154715.png|400|400]]
