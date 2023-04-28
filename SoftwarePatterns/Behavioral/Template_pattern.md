> [!important]- Metadata
> **Tags:** #DesignPatterns 
> **Located:** SoftwarePatterns/Behavioral
> **Created:** 09/04/2023 - 13:31
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Template pattern
- A behavioral [[Design_patterns|design pattern]] that defines the skeleton of an algorithm, subclasses can then override specific steps without changing this core structure 
- This  is done by:
	1. Breaking down the algorithm into a series of methods 
	2. Place the calls to these methods in a single template, these individual steps may be abstract or already have a default implementation
	3. To use the algorithm, the client must provide its own subclass that implements the abstract steps

![[Pasted image 20230409135033.png|550|550]]
- This enforces [[SOLID_principles#Open-Closed (OCP)|Open-Closed]] principle, allowing subclasses to override any  method except the template method itself as this is needed to give the algorithm structure 
```rust
trait Algorithm {
    fn run(&mut self) {
        self.step_1();
        self.step_2();
        self.step_3();
    }

    fn step_1(&mut self);
    fn step_2(&mut self);
    fn step_3(&mut self);
}

struct CustomAlgo1(i32, i32);
impl Algorithm for CustomAlgo1 {
    fn step_1(&mut self) {
        self.0 += 1;
    }
    fn step_2(&mut self) {
        self.1 += 2;
    }
    fn step_3(&mut self) {
        self.0 *= self.1;
    }
}

struct CustomAlgo2(i32, i32);
impl Algorithm for CustomAlgo2 {
    fn step_1(&mut self) {
        self.0 -= 100;
    }
    fn step_2(&mut self) {
        self.0 += 200;
    }
    fn step_3(&mut self) {
        self.1 = self.0.pow(2);
    }
}

let mut algo1 = CustomAlgo1(1, 2);
let mut algo2 = CustomAlgo2(100, 200);
algo1.run();
algo2.run();

```
