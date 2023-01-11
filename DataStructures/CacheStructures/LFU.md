> [!important]- Metadata
> **Tags:** #ADTs #Algorithms 
> **Located:** DataStructures/CacheStructures
> **Created:** 02/01/2023 - 08:24
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
# LFU
- [[Caching|Cache]] eviction algorithm based on the **least frequently used** principle, with equal frequencies than using a queue based [[LRU]] eviction scheme  
- Ideal when item access is repetitive
- Not ideal when 

## LFU algorithm 
```python
class LFUCache:
    def __init__(self, cap: int):
        self.cap = cap
        self.f_k_v = defaultdict(OrderedDict)
        self.k_f = {}
        self.minf = 1

    def get(self, key: int) -> int:
        if not (freq := self.k_f.get(key)):
            return -1

        value = self.f_k_v[freq].pop(key)
        self.f_k_v[freq + 1][key] = value
        self.k_f[key] = freq + 1

        if not self.f_k_v[freq]:
            del self.f_k_v[freq]
            if self.minf == freq:
                self.minf += 1
        return value

    def put(self, key: int, value: int) -> None:
        if key in self.k_f:
            self.get(key)
            self.f_k_v[self.k_f[key]][key] = value
            return

        self.cap -= 1
        self.k_f[key] = 1
        self.f_k_v[1][key] = value

        if self.cap < 0:
            fifo_k = self.f_k_v[self.minf].popitem(last=False)[0]
            del self.k_f[fifo_k]
            self.cap += 1
        self.minf = 1
```