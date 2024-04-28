> [!important]- Metadata
> **Tags:** #Statistics 
> **Located:** Statistics
> **Created:** 28/04/2024 - 15:54
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Monte Carlo method
- A family of algorithms that relies on repeated random sampling to obtain numerical results. 
- Typically used to solve naturally deterministic problems by using probabilistic simulation
- Accuracy of results depends on the number of simulations; can be computationally expensive

## Simulation process
1. **Problem Definition**: define a domain of possible input
2. **Domain modeling**: generate inputs from a probability distribution over domain
3. **Sampling**: Generate random samples that represent possible outcomes.
4. **Computation**: perform deterministic computation on the inputs 
5. **Aggregate results**:  summarise outcomes of the individual computations into a final result

```ad-example


```python

```



```python
import numpy as np
```