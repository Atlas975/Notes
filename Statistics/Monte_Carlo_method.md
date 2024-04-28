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
import numpy as np 
import matplotlib.pyplot as plt
sims = 10_000 # number of simulations

task_A = np.random.uniform(1, 5, sims) # hours needed for task A 
task_B = np.random.uniform(2, 6, sims) # hours needed for task B
duration = task_A + task_B # total hours needed for both tasks (uniform dist)
print(f"Probability of finishing in 9 hours: {np.mean(duration <= 9):.1%}")

plt.figure(figsize=(6, 4))
plt.hist(duration, density=True)
plt.axvline(9, color='r')
plt.xlabel("Duration")
plt.ylabel("Density")
plt.show()
```


