> [!important]- Metadata
> **Tags:** #GeneticAlgorithms
> **Located:** Algorithms/GeneticAlgorithms
> **Created:** 11/11/2023 - 16:48
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Genetic encoding
- Encoding schemes are used to represent a potential solution to a [[Genetic_algorithms|genetic algorithm]] problem
- Each gene in an encoded chromosome represents a decision variable
## Binary encoding 
- Each chromosome is a string of bits that are either 0 / 1
- Common used in [[Linear_programming#Knapsack problem|Knapsack]] style problems, meaning of bit groups can vary 

![[Pasted image 20231112141958.png|350|350]]
## Value encoding 
- Each chromosome is a string of values, easier to encode non binary information
- Useful for [[Neural_Network_notation|neural networks]] where weights can be encoded as individual genes 

![[Pasted image 20231112144014.png|350|350]]
## Permutation encoding 
- Each chromosome is a string of numbers representing an order in a sequence 
- Useful in [[Graph_algorithms|graph problems]] such as traveling salesman

![[Pasted image 20231112144450.png|350|350]]


## Tree encoding 
- Each chromosome is a tree of some objects eg functions or commands 
- Mainly used for evolving programs or expressions where the goal is to fin a function that gives the best final output 

![[Pasted image 20231112144712.png|350|350]]