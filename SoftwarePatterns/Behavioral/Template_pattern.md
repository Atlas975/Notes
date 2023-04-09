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
    fn run(&self) {
        self.step_1();
        self.step_2();
        self.step_3();
    }

    fn step_1(&self);
    fn step_2(&self);
    fn step_3(&self);
}

struct ConcreteAlgorithm {}
impl Algorithm for ConcreteAlgorithm {
    fn step_1(&self) {
        println!("ConcreteAlgorithm: Step 1");
    }
    fn step_2(&self) {
        println!("ConcreteAlgorithm: Step 2 (default)");
    }
    fn step_3(&self) {
        println!("ConcreteAlgorithm: Step 3 (default)");
    }
}

struct CustomAlgorithm {}
impl Algorithm for CustomAlgorithm {
    fn step_1(&self) {
        println!("CustomAlgorithm: Step 1");
    }
    fn step_2(&self) {
        println!("CustomAlgorithm: Step 2 (custom)");
    }
    fn step_3(&self) {
        println!("CustomAlgorithm: Step 3 (custom)");
    }
}

let concrete = ConcreteAlgorithm {};
let custom = CustomAlgorithm {};
concrete.run();
custom.run();

```
