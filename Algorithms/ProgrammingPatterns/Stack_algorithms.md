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
# Stack algorithms

## Validate stack sequence 
```python
def validateStackSequences(self, pushed: List[int], popped: List[int]) -> bool:
    i = j = 0
    for pu in pushed:
        pushed[i] = pu
        i += 1
        while i and pushed[i - 1] == popped[j]:
            i -= 1
            j += 1
    return i == 0
```
## Valid parentheses

```python
def isValid(self, s: str) -> bool:
    if len(s) % 2:
        return False
    pairmp = {"(": ")", "[": "]", "{": "}"}
    stack = deque()

    for c in s:
        if c in pairmp:
            stack.append(c)
        elif not stack or pairmp[stack.pop()] != c:
            return False
    return not stack
```

## Min stack
```python
class MinStack:
    def __init__(self):
        self.s = deque()

    def push(self, val: int) -> None:
        stackmin = min(val, self.getMin()) if self.s else val
        self.s.append((val, stackmin))

    def pop(self) -> None:
        self.s.pop()

    def top(self) -> int:
        return self.s[-1][0]

    def getMin(self) -> int:
        return self.s[-1][1]
```

## Evaluate reverse polish notation

```python
def evalRPN(self, tokens: List[str]) -> int:
    s = deque()
    for t in tokens:
        match (t):
            case "+":
                s.append(s.pop() + s.pop())
            case "-":
                s.append(-s.pop() + s.pop())
            case "*":
                s.append(s.pop() * s.pop())
            case "/":
                s.append(int((1 / s.pop()) * s.pop()))
            case _:
                s.append(int(t))
    return s.pop()
```

## Generate parentheses
```python
def generateParenthesis(self, n: int) -> List[str]:
    def dfs(op, cl):
        if op < n:
            s.append('(')
            dfs(op + 1, cl)
            s.pop()
        if cl < op:
            s.append(')')
            dfs(op, cl + 1)
            s.pop()
        if op == cl == n:
            res.append(''.join(s))

    res, s = deque(), deque()
    dfs(0, 0)
    return res
```

## Daily temperatures
```python
def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
    res = [0] * len(temperatures)
    s = deque()

    for r, t in enumerate(temperatures):
        while s and temperatures[s[-1]] < t:
            l = s.pop()
            res[l] = r - l
        s.append(r)
    return res
```

## Car fleet
```python
def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
    pairs = sorted(zip(position, speed), reverse=True) # furthest is bottleneck
    p1, s1 = pairs[0]
    stack = deque([(p1, (target - p1) / s1)])

    for p, s in pairs[1:]:
        t = (target - p) / s # time to reach end
        if t > stack[-1][1]: # can't catch up, new bottleneck / fleet
            stack.append((p, t))
    return len(stack)
```
## Largest rectangle area is histogram

```python
def largestRectangleArea(self, heights: List[int]) -> int:
    mxrea, s = 0, deque()
    for r, h in enumerate(heights):
        l = r 
        while s and h < s[-1][1]: # previous rec cant extend to current
            l, h0 = s.pop()
            mxrea = max(mxrea, h0 * (r - l))
        s.append((l, h)) # l is lestmost >= h

    return max(mxrea, max(h * (len(heights) - l) for l, h in s))
```
