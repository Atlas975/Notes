
> [!important|inIL]- Metadata
> **Tags:** #ProgrammingPatterns 
> **Located:** Algorithms/ProgrammingPatterns
> **Created:** 26/12/2022 - 09:27
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
# Math & geometry
## Rotate image 
```python
def rotate(self, matrix: List[List[int]]) -> None:
    """
    matrix[l][l + i] = top left
    matrix[l + i][r] = top right
    matrix[r][r - i] = bottom right
    matrix[r - i][l] = bottom left
    """

    l = 0
    r = len(matrix) - 1

    # 90 degree clockwise
    while l < r:
        for i in range(r - l):
            tleft = matrix[l][l + i]
            matrix[l][l + i] = matrix[r - i][l]
            matrix[r - i][l] = matrix[r][r - i]
            matrix[r][r - i] = matrix[l + i][r]
            matrix[l + i][r] = tleft
        r -= 1
        l += 1
```

## Spiral matrix 
```python
def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
    t, b = 0, len(matrix)
    l, r = 0, len(matrix[0])
    res = deque()
    while l < r and t < b:
        res.extend(matrix[t][i] for i in range(l, r))
        t += 1
        res.extend(matrix[i][r - 1] for i in range(t, b))
        r -= 1
        if l == r or t == b:
            break
        res.extend(matrix[b - 1][i] for i in reversed(range(l, r)))
        b -= 1
        res.extend(matrix[i][l] for i in reversed(range(t, b)))
        l += 1
    return res
```

## Set matrix zeroes
```python
def setZeroes(self, matrix: List[List[int]]) -> None:
    n, m = len(matrix), len(matrix[0])
    col0 = any(matrix[i][0] == 0 for i in range(n))

    for r, c in product(range(n), range(1, m)):
        if matrix[r][c] == 0:
            matrix[r][0], matrix[0][c] = 0, 0

    for r, c in product(reversed(range(n)), range(1, m)):
        if matrix[r][0] == 0 or matrix[0][c] == 0:
            matrix[r][c] = 0

    if col0:
        for i in range(n):
            matrix[i][0] = 0
```


## isHappy 
```rust
pub fn is_happy(mut n: i32) -> bool {
    let digsum = |mut n: i32| -> i32 {
        let mut s = 0;
        while n > 0 {
            s += (n % 10).pow(2);
            n /= 10;
        }
        s
    };
    while n != 1 && n != 4 {
        n = digsum(n);
    }
    n == 1
}
```

## Plus one 
```rust
pub fn plus_one(mut digits: Vec<i32>) -> Vec<i32> {
    for dig in digits.iter_mut().rev() {
        if *dig < 9 {
            *dig += 1;
            return digits;
        }
        *dig = 0;
    }
    digits.insert(0, 1);
    digits
}
```

## Pow (x,n)
```python
def myPow(self, x: float, n: int) -> float:
    def indice(x, n):
        if n == 0:
            return 1
        elif n % 2:
            return x * indice(x * x, n // 2)
        return indice(x * x, n // 2)

    res = indice(x, abs(n))
    return res if n > 0 else 1 / res
```

## Sum of numbers with unit digit K
```python
def minimumNumbers(self, num: int, k: int) -> int:
    if num == 0:
        return 0
    unitdig = num % 10
    for i in range(1, 11):
        kmult = k * i
        if kmult > num:
            return -1
        if kmult % 10 == unitdig:
            return i
    return -1
```

## Multiply strings 
```python
def multiply(self, num1: str, num2: str) -> str:
    n1, n2 = len(num1), len(num2)
    digits = [0] * (n1 + n2)

    for i in reversed(range(n1)):
        if num1[i] == "0":
            continue
        for j in reversed(range(n2)):
            digits[i + j + 1] += int(num1[i]) * int(num2[j])
            digits[i + j] += digits[i + j + 1] // 10
            digits[i + j + 1] %= 10
    return ''.join(map(str, digits)).lstrip("0") or "0"
```

## Detect squares 
```python
class DetectSquares:
    def __init__(self):
        self.pntcnt = Counter()

    def add(self, point: List[int]) -> None:
        self.pntcnt[tuple(point)] += 1

    def count(self, point: List[int]) -> int:
        x1, y1 = point
        return sum(
            freq2 * self.pntcnt[x2, y1] * self.pntcnt[x1, y2]
            for (x2, y2), freq2 in self.pntcnt.items()
            if abs(x2 - x1) == abs(y2 - y1)
        ) - (self.pntcnt[x1, y1] ** 3)
```