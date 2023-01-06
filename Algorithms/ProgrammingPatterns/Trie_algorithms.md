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
        self.wordsze = set()
        self.children= defaultdict(WordDictionary)
        self.is_word = False

    def addWord(self, word: str) -> None:
        self.wordsze.add(len(word))
        node = self
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
            if word[i] not in node.children:
                return False
            return dfs(i + 1, node.children[word[i]])

        return (n in self.wordsze) and dfs(0, self)
```
## Word search II
![[Trie_algorithms#Trie data structure]]

```python
class Solution:
    def findWords(self, board, words) -> List[str]:
        res = []
        n, m = len(board), len(board[0])
        root = Trie()
        for word in words:
            root.insert(word)

        def bfs(word: str, node: Trie, r: int, c: int) -> None:
            if node.end:
                res.append(word)
                root.remove(word)

            board[r][c] = '#'

            for nr, nc in ((r - 1, c), (r + 1, c), (r, c - 1), (r, c + 1)):
                if (
                    0 <= nr < n
                    and 0 <= nc < m
                    and (nex := node.children.get(board[nr][nc]))
                    and nex.refs > 0
                ):
                    bfs(word + board[nr][nc], nex, nr, nc)

            board[r][c] = word[-1]

        for r, c in product(range(n), range(m)):
            if node := root.children.get(board[r][c]):
                bfs(board[r][c], node, r, c)
        return res
```

