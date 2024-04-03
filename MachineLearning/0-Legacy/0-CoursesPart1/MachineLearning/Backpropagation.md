
# Backpropagation method
https://www.3blue1brown.com/lessons/backpropagation-calculus
- Example, simple single neuron network, goal is to find how sensitive cost function is to changes in each of these variables. This gives the adjustments that give the more efficient decrease in the cost function
![[Pasted image 20220127180820.png|450|450]]
- Focusing on the last two neurons
![[Pasted image 20220127181034.png|450|450]]
![[Pasted image 20220127181639.png|450|450]]
>![200|400](https://3b1b-posts.us-east-1.linodeobjects.com//content/lessons/2017/backpropagation-calculus/tree-extended.png)
- The sensitivity of C with respect to small changes in W can be summarized as:
![[Pasted image 20220127182048.png|450|450]]
![[Pasted image 20220127182636.png|450|450]]
- The impact a nudge in the weight parameter depends on the strength of the previous neuron  
![[Pasted image 20220127182921.png|450|450]]
- This is only the derivative of wl for a specific training example
![[Pasted image 20220127183217.png|450|450]]
- Overall its only one component of the gradient vector
![[Pasted image 20220127183322.png|450|450]]
- Example for the change in bias and previous activation
![[Pasted image 20220127183536.png|450|450]]
![[Pasted image 20220127183706.png|450|450]]
- K and L are often used to index the position of a node in its respective network
![[Pasted image 20220127183851.png|450|450]]
![[Pasted image 20220127184107.png|450|450]]
- Activation neurons in further back layers influences the cost function through multiple paths
![[Pasted image 20220127184325.png|450|450]]
# Neural network classification
![[Pasted image 20220123162932.png|450|450]]
![[Pasted image 20220123163345.png|450|450]]

# Gradient computation
![[Pasted image 20220127173033.png|450|450]]

# Backpropagation algorithm
![[Pasted image 20220127173120.png|450|450]]
![[Pasted image 20220127173506.png|450|450]]
![[Pasted image 20220127173819.png|450|450]]
![[Pasted image 20220127174115.png|450|450]]

## Backpropagation simplified view
![[Pasted image 20220127174725.png|450|450]]
![[Pasted image 20220127175338.png|450|450]]
![[Pasted image 20220127175559.png|450|450]]