> [!important|inIL]- Metadata
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
# Sliding window
## Best time to buy and sell stock 
```python
def maxProfit(self, prices: List[int]) -> int:
    n=len(prices)
    if n <= 1: return 0
    profit=0
    l=0
    for r in range(1, n):
        if prices[r]>prices[l]:
            profit=max(profit,prices[r]-prices[l])
        else:
            l=r
    return profit
```

## Length of longest substring
```python
def lengthOfLongestSubstring(self, s: str) -> int:
    res=0
    j=0
    seen={}
    for i,c in enumerate(s):
        if c in seen:
            j=max(j,seen[c]+1)
        seen[c]=i
        res=max(res,i-j+1)
    return res
```

## Longest repeating character replacement 
```python
def characterReplacement(self, s: str, k: int) -> int:
    freq = defaultdict(int)
    longest, maxf, l = 0, 0, 0

    for r, c in enumerate(s):
        freq[c] += 1
        maxf = max(maxf, freq[c])
        if r - l + 1 - maxf > k:
            freq[s[l]] -= 1
            l += 1
        else:
            longest = max(longest, r - l + 1)
    return longest
```

## Permutation in string 
```python
def checkInclusion(self, s1: str, s2: str) -> bool:
    n1, n2 = len(s1), len(s2)
    if n1 > n2: return False

    let_count = {c: 0 for c in ascii_lowercase}
    s1_count = let_count | Counter(s1)
    s2_count = let_count | Counter(s2[:n1])

    matches = sum(s1_count[c] == s2_count[c] for c in ascii_lowercase)

    for r in range(n1, n2):
        if matches == 26:
            return True

        s2_count[s2[r]] += 1
        if s1_count[s2[r]] == s2_count[s2[r]]:
            matches += 1
        elif s1_count[s2[r]]+1 == s2_count[s2[r]]:
            matches -= 1

        s2_count[s2[r-n1]] -= 1
        if s1_count[s2[r-n1]] == s2_count[s2[r-n1]]:
            matches += 1
        elif s1_count[s2[r-n1]]-1 == s2_count[s2[r-n1]]:
            matches -= 1

    return matches == 26
```

## Max distance between pair of values 
```python
def maxDistance(self, nums1: List[int], nums2: List[int]) -> int:
    i = mxdist = 0
    j = 1
    n1, n2 = len(nums1), len(nums2)
    while i < n1 and j < n2:
        if nums1[i] > nums2[j]:
            i += 1
            j = max(i + 1, j)
        else:
            mxdist = max(mxdist, j - i)
            j += 1
    return mxdist
```