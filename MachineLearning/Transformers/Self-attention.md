> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning/Transformers
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Self-attention
- A mechanism in [[Neural_networks|neural networks]] primarily used for [[Transformers|transformer]] models. This is crucial for tasks like translation, where the meaning of a word can depend on the words around it
- This mechanism enables the model to weigh the importance of tokens in a sequence relative to each other in [[Concurrency|parallel]] rather than sequentially

![[Pasted image 20240606213618.png|400|350]]


## Input embedding 
- Each word in the input sequence is converted into a dense vector representation.
- For a sentence “The cat sat on the mat,” the input embeddings may look like:

```
X = [x_1, x_2, x_3, x_4, x_5, x_6]
```

## Query, Key, Value vectors 


## Score calculation 


## Scaling 

## Softmax function

## Weighted sum