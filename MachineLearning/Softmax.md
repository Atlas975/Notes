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
- Normalises raw model outputs, ensuring they sum to one and are proportionate to the relative scale of input values. Also needed to map negative neural network outputs to a positive value
- This accentuates the largest scores and suppresses smaller ones, effectively highlighting the most likely outcome:
$$\frac{e^x}{\sum e^{x_{i}}}$$


![[Pasted image 20240402091432.png|400|400]]
## Temperature 
- Temperature ($T$) adjusts the probability spread; higher temperatures yield a flatter distribution, while lower temperatures produce gives more weight to larger values 
- Regulates the trade-off between exploring new options (high temperature) and exploring known ones (low temperature).

$$\frac{e^{x/T}}{\sum e^{x_{i}/T}}$$



![[Pasted image 20240402091815.png|350|350]]
![[Pasted image 20240402092104.png|350|350]]