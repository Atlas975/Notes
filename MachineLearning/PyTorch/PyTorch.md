> [!important]- Metadata
> **Tags:** #Programming 
> **Located:** MachineLearning
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# PyTorch
- An open-source [[Artificial_intelligence|ML]] library widely used for [[Neural_networks|deep learning ]] applications
- Key components include:
	- **Tensors**: a fundamental building block in PyTorch similar to [[Numpy_library|NumPy]] arrays but with [[Multi-Process_systems|GPU]] support and is able to handle multiple data types 
	- **Autograd**: a differentiation library for automatic [[Backpropagation|gradient computation]] via the use of computation graphs and recording operations performed on tensors
- PyTorch includes all the tools needed for deep learning such as neural net components, optimisers and data loading (via the DataLoader class). Example workflow:

```python
import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader, TensorDataset

X = torch.randn(100, 10)  # 100 samples, 10 features
y = torch.randn(100, 1)  # 100 target values

dataset = TensorDataset(X, y)  # create a dataset and data loader
dataloader = DataLoader(dataset, batch_size=10, shuffle=True)

class SimpleNet(nn.Module):  # define a simple neural network
    def __init__(self):
        super(SimpleNet, self).__init__()
        self.fc1 = nn.Linear(10, 50)
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(50, 1)

    def forward(self, x):
        x = self.relu(self.fc1(x))
        x = self.fc2(x)
        return x

model = SimpleNet()
criterion = nn.MSELoss()  # define loss function and optimizer
optimizer = optim.SGD(model.parameters(), lr=0.01)

for epoch in range(100): # training loop (100 epochs)
    for batch_X, batch_y in dataloader:
        optimizer.zero_grad()  # Clear gradients
        outputs = model(batch_X)  # Forward pass
        loss = criterion(outputs, batch_y)  # Compute loss
        loss.backward()  # Backward pass
        optimizer.step()  # Update weights

    print(f"Epoch {epoch+1}, Loss: {loss.item()}")
print("Training complete.")
```