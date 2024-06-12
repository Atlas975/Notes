> [!important]- Metadata
> **Tags:** #Statistics #StatisticalLearning 
> **Located:** MachineLearning
> **Created:** 02/04/2024 - 08:59
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Softmax
- Converts a vector of numbers into a vector of probabilities, where the probabilities of each value are proportional to the relative scale of each value in the vector
- This accentuates the largest scores and suppresses smaller ones, effectively highlighting the most likely outcome to be predicted. 
$$\frac{e^x}{\sum e^{x_{i}}}$$


![[Pasted image 20240402091432.png|400|400]]

- This combination of turning each value positive + normalising is vital in multi-class classification
- This function does however assume that classes are [[Event_independence|independent]] of each other, in cases where this is not the case the [[Sigmoid_function|sigmoid function ]] is more appropriate as it treats outputs independently

![[Pasted image 20240418141416.png|400|400]]
## Temperature
- Temperature ($T$) adjusts the probability spread; higher temperatures yield a flatter distribution, while lower temperatures produce a distribution that gives more weight to larger values (spikey)
- Regulates the trade-off between exploring new options (high temperature) and exploring known ones (low temperature).

$$\frac{e^{x/T}}{\sum e^{x_{i}/T}}$$

![[Pasted image 20240402091815.png|350|350]]
