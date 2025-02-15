> [!important]- Metadata
> **Tags:** #ADTs 
> **Located:** DataStructures
> **Created:** 17/06/2023 - 00:40
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Segment trees
- A data structure used for fast querying and updating of intervals or segments within an array.
- They allow for operations such as finding the sum, min / max, or any other associative operation over a given range of elements in **logarithmic** time complexity,

![[Pasted image 20230617004635.png|400|400]]  
- Segment trees require n leaf nodes and n internal nodes resulting in 2n nodes being needed
- This can be seen here with a segment tree for 16 elements:

![[Pasted image 20230921163711.png]]

## Segment tree code 
```python
class SegmentTree:
    def __init__(self, data):
        self.n = len(data)
        self.tree = ([0] * self.n) + data  # (2 * n) nodes
        for i in reversed(range(1, self.n)):
            self.tree[i] = self.tree[i << 1] + self.tree[(i << 1) + 1]
        print(self.tree)

    def update(self, i, value):
        i += self.n
        self.tree[i] = value
        while i > 1: # Propagate changes up the tree, ^1 flips l and r child
            self.tree[i >> 1] = self.tree[i] + self.tree[i ^ 1] 
            i >>= 1

    def query(self, l, r):
        qsum = 0
        l += self.n
        r += self.n

        while l < r:
            if l & 1: # x & 1 means x is a right child, add it, move to parent
                qsum += self.tree[l]
                l += 1
            if r & 1: # x & 1 means x is a right child, add left, move to parent
                r -= 1
                qsum += self.tree[r]
            l >>= 1
            r >>= 1

        return qsum

data = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
st = SegmentTree(data)
print(st.query(0, 5))  # Print the sum in range [0..=4]
st.update(2, 1)  # Modify element at index 2
print(st.query(0, 5))  # Print the sum in range [0..=4]
```