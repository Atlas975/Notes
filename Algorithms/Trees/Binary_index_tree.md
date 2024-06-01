

> [!important]- Metadata
> **Tags:** #ADTs 
> **Located:** Algorithms
> **Created:** 25/08/2023 - 14:39
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Binary index tree
- Binary Indexed Trees (BIT) are a way to keep track of running totals in a list of numbers. They allow fast calculations of the total sum of any part of the list and are also good at quickly changing one number in the list and updating the totals.
- BIT allows logarithmic-time updates and prefix sum queries. It achieves this by representing the array in a way that each element stores the cumulative sum of a specific range of original array elements, enabling quick calculation of the sum of any prefix subarray.
```
Before:
[ 5 ] [ 6 ] [21 ] [32 ] [84 ] [112] [112]
  1     2     3     4     5     6     7
After:
[ +5] [ +1] [+15] [+11] [+52] [+28] [ +0]
  1     2     3     4     5     6     7
```
![[Pasted image 20230830004438.png|300|300]]

## Extract last bit trick
- This [[Bit_manipulation|bit manipulation]] trick allows for the extraction of the last bit of a number in binary form:
```
i & -i
eg: 2 & -2 = 2, 3 & -3 = 1
```

## Create sorted array through instructions
```python
def createSortedArray(self, instructions: list[int]) -> int:
    mx = max(instructions)
    bit = [0] * (mx + 1)  # binary indexed tree
    cnt = defaultdict(int)  # count of each number to exclude dupe cost

    def getSum(x): # sum of bit[0] ~ bit[x]
        if x == 0:
            return 0
        return bit[x] + getSum(x - (x & -x))

    def update(x): 
        cnt[x] += 1
        while x <= mx:
            bit[x] += 1
            x += x & -x

    res = 0
    for i, x in enumerate(instructions): # i is current len
        l = getSum(x - 1)
        res += min(l, i - l - cnt[x])
        update(x)
    return res % (10**9 + 7)
```
