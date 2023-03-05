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
```rust
pub fn length_of_longest_substring(s: String) -> i32 {
    let mut seen = [None; 128];
    let (mut res, mut l) = (0, 0);

    for (r, c) in s.bytes().map(|c| c as usize).enumerate() {
        if let Some(i) = seen[c] {
            l = l.max(i + 1);
        }
        seen[c] = Some(r);
        res = res.max(r - l + 1);
    }
    res as i32
}
```

## Longest repeating character replacement 
```rust
pub fn character_replacement(s: String, k: i32) -> i32 {
    let mut freqs = [0; 128];
    let (mut res, mut l, mut mxfrq, k) = (0, 0, 0, k as usize);
    let s = s.as_bytes();

    for (r, &c) in s.into_iter().enumerate() {
        freqs[c as usize] += 1;
        mxfrq = mxfrq.max(freqs[c as usize]);
        if r - l + 1 - mxfrq > k {
            freqs[s[l] as usize] -= 1;
            l += 1;
        } else{
            res = res.max(r - l + 1);
        }
    }
    res as i32
}
```

## Permutation in string 
```python
def checkInclusion(self, s1: str, s2: str) -> bool:
    n1, n2 = len(s1), len(s2)
    if n1 > n2:
        return False
    getidx = lambda c: ord(c) - ord('a')

    s1cnt, s2cnt = [0] * 26, [0] * 26
    for c in s1:
        s1cnt[getidx(c)] += 1
    for c in s2[:n1]:
        s2cnt[getidx(c)] += 1
    matches = sum(s1cnt[i] == s2cnt[i] for i in range(26))

    for i in range(n1, n2):
        if matches == 26:
            return True
        l, r = getidx(s2[i - n1]), getidx(s2[i])

        s2cnt[r] += 1
        if s1cnt[r] == s2cnt[r]:
            matches += 1
        elif s1cnt[r] + 1 == s2cnt[r]:
            matches -= 1

        s2cnt[l] -= 1
        if s1cnt[l] == s2cnt[l]:
            matches += 1
        elif s1cnt[l] - 1 == s2cnt[l]:
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