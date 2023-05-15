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
```rust
pub fn max_profit(prices: Vec<i32>) -> i32 {
    // Imperative approach
    let (mut mxprof, mut cost) = (0, prices[0]);
    for price in prices.into_iter().skip(1) {
        if price < cost {
            cost = price;
        } else {
            mxprof = mxprof.max(price - cost);
        }
    }
    mxprof
    
    // Functional approach 
    prices
        .into_iter()
        .fold((0, i32::MAX), |(mxprof, cost), price| {
            if price < cost {
                (mxprof, price)
            } else {
                (mxprof.max(price - cost), cost)
            }
        })
        .0
}
```

## Length of longest substring
```python
def lengthOfLongestSubstring(self, s: str) -> int:
    seen = [None] * 128
    res, l = 0, 0

    for r, c in enumerate(s.encode()):
        if seen[c] is not None:
            l = max(l, seen[c] + 1)
        seen[c] = r
        res = max(res, r - l + 1)
    return res
```

## Longest repeating character replacement 
```python
def characterReplacement(self, s: str, k: int) -> int:
    freq = [0] * 128
    res, mxfrq, l = 0, 0, 0

    for r, c in enumerate(s):
        freq[ord(c)] += 1
        mxfrq = max(mxfrq, freq[ord(c)])
        if r - l + 1 - mxfrq > k:
            freq[int(c)] -= 1
            l += 1
        res = max(res, r - l + 1)
    return res
```

## Permutation in string 
```python
def checkInclusion(self, s1: str, s2: str) -> bool:
    n1, n2 = len(s1), len(s2)
    if n1 > n2:
        return False
    idx = lambda c: ord(c) - ord("a")

    s1cnt, win = [0] * 26, [0] * 26
    for c1, c2 in zip(s1, s2):
        s1cnt[idx(c1)] += 1
        win[idx(c2)] += 1
    matches = sum(c1 == c2 for c1, c2 in zip(s1cnt, win))

    for i in range(n1, n2):
        if matches == 26:
            return True
        l, r = idx(s2[i - n1]), idx(s2[i])

        win[r] += 1
        if s1cnt[r] == win[r]:
            matches += 1
        elif s1cnt[r] + 1 == win[r]:
            matches -= 1

        win[l] -= 1
        if s1cnt[l] == win[l]:
            matches += 1
        elif s1cnt[l] - 1 == win[l]:
            matches -= 1

    return matches == 26
```

## Max distance between pair of values 
```rust
pub fn max_distance(nums1: Vec<i32>, nums2: Vec<i32>) -> i32 {
    let (n1, n2) = (nums1.len(), nums2.len());
    let (mut i, mut j, mut mxdist) = (0, 1, 0);

    while i < n1 && j < n2 {
        if nums1[i] > nums2[j] {
            i += 1;
            j = j.max(1 + i);
        } else {
            mxdist = mxdist.max(j - i);
            j += 1;
        }
    }
    mxdist as i32
}
```