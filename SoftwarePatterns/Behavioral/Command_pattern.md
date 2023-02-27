> [!important]- Metadata
> **Tags:** #DesignPatterns 
> **Located:** SoftwarePatterns/Behavioral
> **Created:** 31/01/2023 - 12:09
> ```dataviewjs
>let cur = dv.current().file;
>let loc = cur.path;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths).slice(0, 20)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]));
> ```

___
# Command pattern
- Encapsulates a request / behaviour into a stand alone object containing everything regarding that request. This [[Design_patterns|design pattern]] allows this action to easily be reused, giving the user more flexibility with component usage
- By passing commands as parameters, linked commands can be swapped out at runtime

![[Pasted image 20230131121726.png|550|550]]

- The client is responsible for creating and configuring concrete command objects, this includes passing an instance of a receiver, following the [[SOLID_principles#Single responsibility (SRP)|Single responsibility]] principle

![[Pasted image 20230131124649.png|600|600]]


```rust
trait Command {
    fn execute(&self) -> i32;
}

struct AddCommand(i32, i32);
impl Command for AddCommand {
    fn execute(&self) -> i32 {
        self.0 + self.1
    }
}

struct SubtractCommand(i32, i32);
impl Command for SubtractCommand {
    fn execute(&self) -> i32 {
        self.0 - self.1
    }
}

struct Calculator {
    commands: Vec<Box<dyn Command>>,
}

impl Calculator {
    fn new() -> Self {
        Self { commands: vec![] }
    }

    fn add(&mut self, a: i32, b: i32) {
        self.commands.push(Box::new(AddCommand(a, b)));
    }

    fn subtract(&mut self, a: i32, b: i32) {
        self.commands.push(Box::new(SubtractCommand(a, b)));
    }

    fn run(&self) -> i32 {
        self.commands.iter().fold(0, |acc, cmd| acc + cmd.execute())
    }
}

fn main() {
    let mut calculator = Calculator::new();
    calculator.add(1, 2);
    calculator.subtract(3, 4);
    assert_eq!(calculator.run(), 2);
}

```