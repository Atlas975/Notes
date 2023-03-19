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
- [[Caching|Cache]] eviction algorithm based on the **least frequently used** principle, with equal frequencies then using a queue based [[LRU]] eviction scheme to prioritise removal 
- Ideal when item access is repetitive, protecting high usage items from a burst of new requests
- Suffers from the [[Caching#Coldstart replacement|coldstart problem]] as item retaining is based on frequency, newer items can struggle to enter and remain in the cache 

## LFU algorithm 
```python
class LFUCache:
    def __init__(self, cap: int):
        self.cap = cap
        self.fkv = defaultdict(OrderedDict)
        self.kf = {}
        self.minf = 1

    def update(self, key: int, freq: int, new_val: int) -> None:
        self.fkv[freq + 1][key] = new_val
        self.kf[key] = freq + 1

        if self.fkv[freq]:
            return
        del self.fkv[freq]
        if self.minf == freq:
            self.minf += 1

    def get(self, key: int) -> int:
        if freq := self.kf.get(key):
            value = self.fkv[freq].pop(key)
            self.update(key, freq, value)
            return value
        return -1

    def put(self, key: int, value: int) -> None:
        if freq := self.kf.get(key):
            self.fkv[freq].pop(key)
            self.update(key, freq, value)
            return

        self.kf[key] = 1
        self.fkv[1][key] = value
        if len(self.kf) > self.cap:
            fifo_k = self.fkv[self.minf].popitem(last=False)[0]
            del self.kf[fifo_k]
        self.minf = 1
```


