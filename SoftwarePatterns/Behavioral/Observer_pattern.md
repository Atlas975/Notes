---
aliases: [observer]
---

> [!important]- Metadata
> **Tags:** #DesignPatterns
> **Located:** SoftwareDesign/DesignPatterns
> **Created:** 26/12/2022 - 09:23
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
# Observer pattern
- A behavioral [[Design_patterns#Design pattern categories|design pattern]] meant to notify multiple objects (**observers**) of a change to an object thats being observed (**publisher**)
- A subscription mechanism gives individual objects permission to be informed of an event 

![[Pasted image 20230130134658.png|600|600]]


```rust
struct Publisher<'a> {
    observers: Vec<Box<dyn Subscriber + 'a>>,
}

impl<'a> Publisher<'a> {
    fn new() -> Self {
        Self { observers: Vec::new() }
    }

    fn register_observer(&mut self, observer: Box<dyn Subscriber + 'a>) {
        self.observers.push(observer);
    }

    fn notify_observers(&self, message: &str) {
        for observer in self.observers.iter() {
            observer.update(message);
        }
    }
}

trait Subscriber { // define the interface for observing changes
    fn update(&self, message: &str);
}
struct ConcreteSubscriber {
    id: usize,
}
impl Subscriber for ConcreteSubscriber {
    fn update(&self, message: &str) {
        println!("Observer {} received message: {}", self.id, message);
    }
}

let mut subject = Publisher::new();
let observer1 = Box::new(ConcreteSubscriber { id: 1 });
let observer2 = Box::new(ConcreteSubscriber { id: 2 });
subject.register_observer(observer1);
subject.register_observer(observer2);
subject.notify_observers("Hello, observers!");
// Output: observer1 and observer2 received the message
```