
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
    l, r = 0, len(matrix) - 1

    while l < r:
        for i in range(r - l):
            tleft = matrix[l][l + i] 
            matrix[l][l + i] = matrix[r - i][l] # top left = bottom left
            matrix[r - i][l] = matrix[r][r - i] # bottom left = bottom right
            matrix[r][r - i] = matrix[l + i][r] # bottom right = top right
            matrix[l + i][r] = tleft # top right = top left
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
def isHappy(self, n: int) -> bool:
    if n < 10:
        return n == 1 or n == 7

    def digit_sum(num):
        res = 0
        while num:
            res += (num % 10) ** 2
            num //= 10
        return res
    
    while n != 1 and n != 4:
        n = digit_sum(n)
    return n == 1
```

## Plus one 
```python
def plusOne(self, digits: List[int]) -> List[int]:
    n = len(digits)
    for i in reversed(range(n)):
        if digits[i] < 9:
            digits[i] += 1
            return digits
        digits[i] = 0
    return [1] + digits
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
        self.xtoymp = defaultdict(lambda: defaultdict(int))
        self.ytoxmp = defaultdict(lambda: defaultdict(int))

    def add(self, point: List[int]) -> None:
        x, y = point
        self.xtoymp[x][y] += 1
        self.ytoxmp[y][x] += 1

    def count(self, point: List[int]) -> int:
        res = 0
        x1, y1 = point
        horiz, verti = self.ytoxmp[y1], self.xtoymp[x1]

        for x2, p2f in horiz.items():  # point adj, point below org, point below adj
            dif = x1 - x2  # side length
            if (p3f := verti[y1 - dif]) and (p4f := self.ytoxmp[y1 - dif][x1 - dif]):
                res += p2f * p3f * p4f
            if (p3f := verti[y1 + dif]) and (p4f := self.ytoxmp[y1 + dif][x1 - dif]):
                res += p2f * p3f * p4f
        return res - (2 * horiz[x1] ** 3)  # remove the origin point from res
```

## Minimum lines to represent a line chart 
```python
def minimumLines(self, points: List[List[int]]) -> int:
    if len(points) < 2:
        return 0
    points.sort(key=lambda x: x[0])
    res = 1
    predx, predy = points[1][0] - points[0][0], points[1][1] - points[0][1]

    for (x1, y1), (x2, y2) in pairwise(points):
        dy, dx = y2 - y1, x2 - x1
        if dy * predx != dx * predy:
            res += 1
            predx, predy = dx, dy
    return res
```