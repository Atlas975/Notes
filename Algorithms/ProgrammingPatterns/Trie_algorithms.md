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
# Trie algorithms 
## Trie data structure
```python
class Trie:
    def __init__(self):
        self.children: dict[str, Trie] = defaultdict(Trie)
        self.is_word: bool = False

    def insert(self, word: str) -> None:
        node = self
        for c in word:
            node = node.children[c]
        node.is_word = True

    def remove(self, word: str) -> None:
        path = [self]
        for c in word:
            if not path[-1].children.get(c):
                return
            path.append(path[-1].children[c])

        if path[-1].is_word:
            return
        path[-1].is_word = False
        if len(path[-1].children) > 0:
            return

        remroot = word[-1]
        for node,c in zip(path[-2::-1], word[-2::-1]):
            if len(node.children) > 1 or node.is_word:
                del node.children[remroot]
                return
            remroot = c

    def search(self, word: str) -> bool:
        node = self
        for c in word:
            if not node.children.get(c):
                return False
            node = node.children[c]
        return node.is_word

    def startsWith(self, prefix: str) -> bool:
        node = self
        for c in prefix:
            if not node.children.get(c):
                return False
            node = node.children[c]
        return True
```

## Design Add and Search Words Data Structure
```python
class WordDictionary:
    def __init__(self):
        self.triemp = {}  # len -> {char -> {char -> ...}}

    def addWord(self, word: str) -> None:
        node = self.triemp.setdefault(len(word), {})
        for c in word:
            node = node.setdefault(c, {})

    def search(self, word: str) -> bool:
        def dfs(i, node):
            if i == n:
                return True
            if (c := word[i]) == ".":
                return any(dfs(i + 1, v) for v in node.values())
            return (c in node) and dfs(i + 1, node[c])

        n = len(word)
        return (trie := self.triemp.get(n)) and dfs(0, trie)
```
## Word search II

```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.refcnt = 0
        self.is_word = False
        self.is_rev = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word, rev):
        node = self.root
        for c in word:
            node = node.children.setdefault(c, TrieNode())
            node.refcnt += 1
        node.is_word = True
        node.is_rev = rev

    def remove(self, word):
        node = self.root
        for i, c in enumerate(word):
            parent = node
            node = node.children[c]

            if node.refcnt == 1:
                path = [(parent, c)]
                for c in word[i + 1 :]:
                    path.append((node, c))
                    node = node.children[c]
                for parent, c in path:
                    parent.children.pop(c)
                return
            node.refcnt -= 1
        node.is_word = False

def findWords(self, board, words) -> List[str]:
    res = []
    n, m = len(board), len(board[0])
    trie = Trie()

    boardcnt = Counter(chain(*board))
    for w, wrdcnt in ((w, Counter(w)) for w in words):
        if any(wrdcnt[c] > boardcnt[c] for c in wrdcnt):
            continue
        if wrdcnt[w[0]] < wrdcnt[w[-1]]: 
            trie.insert(w, False)
        else: # word more likely to be found from end
            trie.insert(w[::-1], True)

    def dfs(r, c, parent) -> None:
        if not (node := parent.children.get(board[r][c])):
            return
        path.append(board[r][c])
        board[r][c] = "#"
        if node.is_word:
            word = "".join(path)
            res.append(word[::-1] if node.is_rev else word)
            trie.remove(word)

        dfs(r - 1, c, node) if r > 0 else None
        dfs(r + 1, c, node) if r < n - 1 else None
        dfs(r, c - 1, node) if c > 0 else None
        dfs(r, c + 1, node) if c < m - 1 else None
        board[r][c] = path.pop()

    path = []
    for r, c in product(range(n), range(m)):
        dfs(r, c, trie.root)
    return res
```

## K divisible element subarrays
```python
def countDistinct(self, nums: List[int], k: int, p: int) -> int:
    trie = {} # keeps track of distinct subarrays ending 
    res = 0
    for i in range(len(nums)):
        cnt = 0
        node = trie
        for num in nums[i:]:
            cnt += (num % p) == 0
            if cnt > k: # too many divisible elements
                break
            if num not in node: # new permutation
                res += 1
                node[num] = {}
            node = node[num]
    return res
```

## Delete duplicate folders in system 
```python
def deleteDuplicateFolder(self, paths: list[list[str]]) -> list[list[str]]:
    trie, seen = {}, {}
    for folder in paths: # create trie
        node = trie
        for sub in folder:
            node = node.setdefault(sub, {})

    def dfs(n): # serialise tree
        if not n:
            return 0
        key = tuple(sorted(((k, dfs(v)) for k, v in n.items()), key=lambda x: x[0]))
        if key not in seen:
            seen[key] = (n, len(seen) + 1) # unique id marks duplicate subtrees
        else:
            n["#"] = True # mark current node as duplicate
            seen[key][0]["#"] = True # mark the node in seen as duplicate
        return seen[key][1]

    dfs(trie)
    res = []

    def build(node, path):
        if "#" in node:
            return
        for folder, sub in node.items():
            path.append(folder)
            build(sub, path)
            path.pop()
        res.append(path.copy())

    build(trie, deque())
    return res[:-1] # exclude the empty root path
```