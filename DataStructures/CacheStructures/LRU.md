---
alias: least recently used
---

> [!important]- Metadata
> **Tags:** #ADTs #Algorithms 
> **Located:** DataStructures/CacheStructures
> **Created:** 02/01/2023 - 08:23
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
# LRU
- [[Caching|Cache]] eviction algorithm based on the **least recently used principle**
- Ideal when requests follow a random pattern since eviction is based on use recency, meaning it tends to remove older items while maintaining ones that are reused frequently
## LRU algorithm
```python
class LRUCache:
    def __init__(self, cap: int):
        self.cap = cap
        self.cache = {}
        self.left, self.right = Node(), Node()
        self.left.nex, self.right.pre = self.right, self.left

    def append(self, node: Node) -> None:
        l, r = self.right.pre, self.right
        node.pre, node.nex = l, r
        l.nex = r.pre = node
        self.cache[node.key] = node

    def pop(self, key: int) -> Node:
        node = self.cache.pop(key)
        l, r = node.pre, node.nex
        l.nex, r.pre = r, l
        return node

    def get(self, key: int) -> int:
        if node := self.cache.get(key):
            self.append(self.pop(key))
            return node.value
        return -1

    def put(self, key: int, value: int) -> None:
        if node := self.cache.get(key):
            node.value = value
            self.append(self.pop(key))
            return

        if len(self.cache) == self.cap:
            lru = self.left.nex
            self.pop(lru.key)
        self.append(Node(key, value))
```