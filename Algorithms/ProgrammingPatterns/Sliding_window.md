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
```rust
pub fn check_inclusion(s1: String, s2: String) -> bool {
    let (n1, n2) = (s1.len(), s2.len());
    if n1 > n2 {
        return false;
    }

    let get_idx = |c: u8| (c - b'a') as usize;
    let cnt1 = s1.bytes().fold([0u8; 26], |mut acc, c| {
        acc[get_idx(c)] += 1;
        acc
    });

    let s2bytes = s2.as_bytes();
    let mut cnt2 = s2bytes[0..n1].iter().fold([0u8; 26], |mut acc, &c| {
        acc[get_idx(c)] += 1;
        acc
    });
    let mut matches = (0..26).filter(|&i| cnt1[i] == cnt2[i]).count();

    for i in n1..n2 {
        if matches == 26 {
            return true;
        }

        let (l, r) = (get_idx(s2bytes[i - n1]), get_idx(s2bytes[i]));

        cnt2[r] += 1;
        if cnt1[r] == cnt2[r] {
            matches += 1;
        } else if cnt1[r] + 1 == cnt2[r] {
            matches -= 1;
        }

        cnt2[l] -= 1;
        if cnt1[l] == cnt2[l] {
            matches += 1;
        } else if cnt1[l] - 1 == cnt2[l] {
            matches -= 1;
        }
    }

    matches == 26
}
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