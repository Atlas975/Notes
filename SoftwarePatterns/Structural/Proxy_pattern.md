> [!important]- Metadata
> **Tags:** #DesignPatterns #Networking 
> **Located:** SoftwarePatterns/Structural
> **Created:** 30/01/2023 - 13:13
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
# Proxy pattern
- Adds a layer of abstraction from client to source, can act as a firewall / filter / cache and more 
- This [[Design_patterns|design pattern]] is vital in [[Network_basics|networking]], to speed up requests and provide security, the proxy acts as a substitute for another object whilst controlling access to that object

> ![[Pasted image 20230130132227.png|550|550]]

- Example of a cache providing proxy that acts as an intermediary between a slower service

```rust
trait Service {
    fn get(&mut self, num: i32) -> f64;
}

// Service implementation
struct ServiceCalc;
impl Service for ServiceCalc {
    fn get(&mut self, num: i32) -> f64 {
        ((num / 3) >> (1 + num * 9999 % 3) ^ 975) as f64
    }
}

// Proxy implementation, takes in an instance of service
struct CacheProxy {
    service: ServiceCalc,
    cache: HashMap<i32, f64>,
}
impl Service for CacheProxy {
    fn get(&mut self, num: i32) -> f64 {
        if let Some(&result) = self.cache.get(&num) {
            return result;
        }
        let result = self.service.get(num);
        self.cache.insert(num, result);
        result
    }
}

let mut service = CacheProxy {service: ServiceCalc, cache: HashMap::new(),};
println!("Result: {}", service.get(1)); // cache miss
println!("Result: {}", service.get(2)); // cache miss
println!("Result: {}", service.get(1)); // cache hit
println!("Result: {}", service.get(2)); // cache hit
println!("Result: {}", service.get(3)); // cache miss
```