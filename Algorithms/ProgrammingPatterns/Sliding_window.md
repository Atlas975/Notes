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