  # Mini batch gradient descent 
- Allows for faster gradient descent to occur by creating smaller batches, removing the need to go through the whole dataset to perform a single step
![[Pasted image 20220408134430.png|450|450]]
>t indicates batch numbers
- implementation:
![[Pasted image 20220408144028.png|450|450]]
an epoch refers to going through the dataset once, however unlike standard gradient descent this results in multiple steps

## Plotting Mini Batch descent 
- Since a separate dataset is used in each mini batch descent step, a downward step isnt guaranteed, this results in a more noisy plot
![[Pasted image 20220408155547.png|450|450]]

## Determining mini batch size
- A mini batch size of m corresponds to standard gradient descent, a size of 1 is effectively [[Stochastic_gradient_descent]] which is much faster but also much more noisy. Stochastic descent will also never converge but will instead oscillate around the minimum. 
- Some of the noise in stochastic descent can also be solved with a smaller learning rate
![[Pasted image 20220408155916.png|450|450]]
- A batch size in between this is often the best solution, both having more direction towards the minimum and being able to make steps without going through the full dataset
- On smaller datsets standard batch descent is suitable, on larger datasets a power of 2 is typically used due to the similarity in how computer memory is layed out (64,128,256,512,1024 ...)