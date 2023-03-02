
> [!important]- Metadata
> **Tags:** #ProgrammingPatterns 
> **Located:** Algorithms/ProgrammingPatterns
> **Created:** 26/12/2022 - 09:26
> ```dataviewjs
>let loc = dv.current().file.path;
>let cur = dv.page(loc).file;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]).slice(0, 20));
> ```

___
# Two pointers
## Valid palindrome 
```python
def isPalindrome(self, s: str) -> bool:
    l, r = 0, len(s) - 1
    while l < r:
        while not s[l].isalnum() and l < r: l += 1
        while not s[r].isalnum() and l < r: r -= 1
        if s[l].casefold() != s[r].casefold():
            return False
        l += 1
        r -= 1
    return True
```

## Two sum II
```python
def twoSum(self, numbers: List[int], target: int) -> List[int]:
    l, r = 0, len(numbers) - 1
    while l < r:
        tsum = numbers[l] + numbers[r]
        if tsum == target:
            return (l + 1, r + 1)
        elif tsum < target:
            l += 1
        else:
            r -= 1
    return -1
```

## 3sum
```python
def threeSum(self, nums: List[int]) -> List[List[int]]:
    res = []
    n = len(nums)
    nums.sort()
    for l in range(n):
        if l > 0 and nums[l-1] == nums[l]:
            continue
        m, r = l+1, n-1
        while m < r:
            s = nums[l] + nums[m] + nums[r]
            if s < 0: m += 1
            elif s > 0: r -= 1
            else:
                res.append((nums[l], nums[m], nums[r]))
                m += 1
                while nums[m] == nums[m-1] and m < r:
                    m += 1
    return res
```

## Container with most water 
```python
def maxArea(self, height: List[int]) -> int:
    mxar = 0
    l, r = 0, len(height) - 1

    while l < r:
        if height[l] < height[r]:
            mxar = max(mxar, height[l] * (r - l))
            l += 1
        else:
            mxar = max(mxar, height[r] * (r - l))
            r -= 1
    return mxar
```

## Trapping rain water 
```python
def trap(self, height: List[int]) -> int:
    l, r = 0, len(height) - 1
    if r < 2:
        return 0
    lmax, rmax = height[l], height[r]
    area = 0

    while l < r:
        if lmax < rmax:
            l += 1
            if lmax > height[l]:
                area += lmax - height[l]
            else:
                lmax = height[l]
        else:
            r -= 1
            if rmax > height[r]:
                area += rmax - height[r]
            else:
                rmax = height[r]
    return area
```


## Push dominoes 
```python
def pushDominoes(self, dominoes: str) -> str:
    n, l = len(dominoes), -1
    res = list(dominoes)
    for r, force in enumerate(dominoes):
        if force == "L":
            if l == -1:
                for i in range(r, -1, -1):
                    if res[i] != ".":
                        break
                    res[i] = "L"
            else:
                i, j = l + 1, r - 1
                while i < j:
                    res[i], res[j] = "R", "L"
                    i += 1
                    j -= 1
                l = -1

        elif force == "R":
            if l != -1:
                for i in range(l + 1, r):
                    res[i] = "R"
            l = r

    if l != -1:
        for i in range(l + 1, n):
            res[i] = "R"
    return "".join(res)
```