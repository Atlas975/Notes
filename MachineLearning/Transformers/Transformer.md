> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Transformer
- A [[Neural_networks|deep learning]] model specialised in handling sequential data through the use of the [[Self-attention|self-attention mechanism]], this has the benefit of being highly [[Concurrency|parallelisable ]] and scalable
- These involve processing the entire sequence at once via the use of encoders and decoders each with 2 components in their layers, an [[Multi-headed_attention|MHA]] mechanism and a feed-forward neural net

![[Pasted image 20240623203428.png|300|300]]

## Encoder
- Takes an input sequence and converts it into a high-dimensional vector, this representation captures the essential information and context of the input
- Each layer in the encoder refines the representation of the input sequence, making the final output of the encoder a set of vectors that encapsulate the input’s meaning.


![[Pasted image 20240623204008.png|450|450]]
## Decoder
- Takes an input sequence and predicts the next word, the inputs to the decoder is the output of the encoder and the previous outputs of decoder block itself 
- This results in an output size of $B\times T\times V$ where $B$ is batch size, $T$ is sequence length and $V$ is vocab size (a vector of probabilities of each word occurring calculated vis [[Softmax]])

![[Pasted image 20240624021531.png]]