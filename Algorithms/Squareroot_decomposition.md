> [!important]- Metadata
> **Tags:** #Algorithms 
> **Located:** Algorithms
> **Created:** 22/08/2023 - 18:56
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Squareroot decomposition
- **Optimization Technique:** Square Root Decomposition optimizes range queries/updates in an array by dividing it into small blocks.
- **Block Division:** Array is split into √n blocks, each with √n elements, finding a balance between block count and preprocessing.
- **Preprocessing:** Relevant data is precomputed within each block, like sums or max values.
- **Query/Update:** Operations are done in two steps: complete block processing, followed by remaining elements, reducing complexity to around O(√n).


## Mutable range sum query 
```python
class NumArray:
    def __init__(self, nums: list[int]):
        self.nums = nums
        self.blck_sz = ceil(len(nums) ** 0.5)
        self.blck_sum = [0] * self.blck_sz
        for i, num in enumerate(nums):
            self.blck_sum[i // self.blck_sz] += num

    def update(self, i: int, val: int) -> None:
        self.blck_sum[i // self.blck_sz] += val - self.nums[i]
        self.nums[i] = val

    def sumRange(self, l: int, r: int) -> int:
        l, lrem = divmod(l, self.blck_sz)
        r, rrem = divmod(r, self.blck_sz)
        return (
            sum(self.blck_sum[l : r + 1])
            - sum(self.nums[l * self.blck_sz : l * self.blck_sz + lrem])
            - sum(self.nums[r * self.blck_sz + rrem + 1 : (r + 1) * self.blck_sz])
        )
```