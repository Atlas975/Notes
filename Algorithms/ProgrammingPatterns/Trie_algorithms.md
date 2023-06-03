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
class DictNode:
    def __init__(self):
        self.children = defaultdict(DictNode)
        self.is_word = False

class WordDictionary:
    def __init__(self):
        self.root = DictNode()
        self.wordsze = set()

    def addWord(self, word: str) -> None:
        self.wordsze.add(len(word))
        node = self.root
        for c in word:
            node = node.children[c]
        node.is_word = True

    def search(self, word: str) -> bool:
        n = len(word)

        def dfs(i, node):
            if i == n:
                return node.is_word
            if word[i] == ".":
                return any(dfs(i + 1, v) for v in node.children.values())
            if word[i] in node.children:
                return dfs(i + 1, node.children[word[i]])
            return False
        return (n in self.wordsze) and dfs(0, self.root)
```
## Word search II

```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.refcnt = 0
        self.is_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for c in word:
            node = node.children.setdefault(c, TrieNode())
            node.refcnt += 1
        node.is_word = True

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
    for word in words:
        trie.insert(word)

    def dfs(r, c, parent) -> None:
        if (val := board[r][c]) not in parent.children:
            return
        node = parent.children[val]
        path.append(val)
        board[r][c] = "#"
        if node.is_word:
            word = "".join(path)
            res.append(word)
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

