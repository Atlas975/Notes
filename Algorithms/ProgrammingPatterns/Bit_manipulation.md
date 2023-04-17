> [!important|inIL]- Metadata
> **Tags:** #ProgrammingPatterns 
> **Located:** Algorithms/ProgrammingPatterns
> **Created:** 26/12/2022 - 09:23
> ```dataviewjs
>let loc = dv.current().file.path;
>let cur = dv.page(loc).file;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections","Tags"], dv.array(Array.from(paths)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]).slice(0, 20));
> ```

___
# Bit manipulation
## Single number
```rust
pub fn single_number(nums: Vec<i32>) -> i32 {
    nums.into_iter().fold(0, |acc, x| acc ^ x)
}
```

## Number of one bits
```rust
pub fn hammingWeight(n: u32) -> i32 {
    if n == 0 {
        return 0;
    }
    1 + Self::hammingWeight(n & (n - 1))
}
```

## Count bits
```rust
pub fn count_bits(n: i32) -> Vec<i32> {
    if n == 0 {
        return vec![0];
    }
    let mut res = vec![0; n as usize + 1];
    res[1] = 1;
    for i in 2..=n as usize {
        res[i] = res[i >> 1] + (i & 1) as i32;
    }
    res
}
```

## Reverse bits
```rust
pub fn reverse_bits(mut x: u32) -> u32 {
    (0..32).fold(0, |mut acc, _| {
        acc <<= 1;
        acc |= x & 1;
        x >>= 1;
        acc
    })
}
```

## Missing number
```rust
pub fn missing_number(nums: Vec<i32>) -> i32 {
    let n = nums.len() as i32;
    nums.into_iter()
        .enumerate()
        .fold(n, |acc, (i, x)| acc ^ (i as i32) ^ x)
}
```

## Reverse integer
```rust
pub fn reverse(x: i32) -> i32 {
    let sign = 1 - (x < 0) as i64 * 2;
    let mut x = (x as i64) * sign;
    let mut res = 0;
    while x > 0 {
        res *= 10;
        res += x % 10;
        x /= 10;
    }
    if res <= i32::MAX as i64 { (res * sign) as i32 } else { 0 }
}
```

## Sum of two integers
```rust
pub fn get_sum(a: i32, b: i32) -> i32 {
    if b == 0 {
        return a;
    }
    get_sum(a ^ b, (a & b) << 1)
}
```
