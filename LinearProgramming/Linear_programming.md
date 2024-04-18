> [!important]- Metadata
> **Tags:** #Optimisation
> **Located:** LinearProgramming
> **Created:** 30/07/2023 - 12:16
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Linear programming
- Linear programming is a mathematical optimisation technique used to find the best outcome in a mathematical model with linear relationships, subject to a set of constraints.
- It involves maximising or minimising a linear objective function while satisfying linear equality and inequality constraints, often represented as a system of linear equations and inequalities.


![[Pasted image 20240309205713.png|250|250]]
## Linear Programming components
- **Objective Function:** main aim of the problem, either to maximise of to minimise.
- **Decision Variables:** variables used to decide the output as decision variables. 
- **Constraints:** restrictions on the decision variables 
# Linear programming
## Farmers problem

> You have 3 tons of potato seeds and 4 tons of carrot seeds. To grow the crops efficiently, you also have 5 tons of fertiliser, which has to be used when planting in a 1:1 ratio. The profit is 1.2\$ for potato seeds and 1.7\$/kg for carrot seeds. How many potatoes and carrots should you plant to maximize your profit this season?

```python
from pulp import *
model = LpProblem(sense=LpMaximize) # creating the model
x_p = LpVariable("x_p", lowBound=0) # creating the variables
x_c = LpVariable("x_c", lowBound=0)

model += x_p <= 3  # potatoes
model += x_c <= 4  # carrots
model += x_p + x_c <= 5  # fertilizer
model += x_p * 1.2 + x_c * 1.7 # objective function - maximize the profit

status = model.solve(PULP_CBC_CMD(msg=False))
print("potatoes:", x_p.value())
print("carrots:", x_c.value())
print("profit:", model.objective.value())
```

## Knapsack problem

>Given $N$ items, each with a weight ​ and price​, our task is to maximise the price of the items we take into our backpack without exceeding its carry weight $M$.

```python
from pulp import *
weights = [12, 7, 11, 8, 9] # weights of items
prices = [24, 13, 23, 15, 16] # prices of items
mxweight = 26 # max weight

model = LpProblem(sense=LpMaximize)
variables = [LpVariable(name=f"x_{i}", cat=LpBinary) for i in range(len(weights))]
model += lpDot(prices, variables) # objective function
model += lpDot(weights, variables) <= mxweight # constraint

status = model.solve(PULP_CBC_CMD(msg=False)) 
print("price:", model.objective.value())
print("take:", *(int(v.value()) for v in variables))
```

## Bin packing

> Given $n$ items with weights $w_{1}$,…$w_{n}$​ and an arbitrary number of bins with maximum carry weight $C$, determine the lowest number of bins to contain all  items without exceeding their carry weight.

```python
from pulp import *
from itertools import product

weights = [70, 60, 50, 33, 33, 33, 11, 7, 3, 42]
n = len(weights)
max_load = 100
model = LpProblem(sense=LpMinimize) # x_item_bin
var = [[LpVariable(f"x_{i}_{j}", cat=LpBinary) for j in range(n)] for i in range(n)]
bin_cnt = LpVariable("bin_cnt", cat=LpInteger)

for j in range(n):
    model += lpSum(var[i][j] * w for i, w in enumerate(weights)) <= max_load 
for item in var:
    model += lpSum(item[j] for j in range(n)) == 1 # item exists in one bin
for i, j in product(range(n), range(n)):
    model += bin_cnt >= (j + 1) * var[i][j]
model += bin_cnt # objective function

status = model.solve(PULP_CBC_CMD(msg=False))
for j in range(n):
    if item_list := [weights[i] for i in range(n) if var[i][j].value() != 0]:
        print(f"bin {j+1}: {item_list}")
print("bin count:", int(bin_cnt.value()))
```
