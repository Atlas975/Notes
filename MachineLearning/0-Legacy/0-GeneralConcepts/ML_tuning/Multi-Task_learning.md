# Multi-task learning 
- In cases where multiple different output variables exist, a network will need to learn to handle multiple tasks, autonomous car example:

![[Pasted image 20220422185103.png|450|450]]

- This means the loss function can be seen as the following:

![[Pasted image 20220422185429.png|450|450]]

## When to use Multi-task learning 
- Training on a set of tasks with similar lower level features or when data for each task is similar
- A large enough network is also needed to ensure that these tasks are performed well