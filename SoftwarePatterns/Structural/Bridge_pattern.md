> [!important]- Metadata
> **Tags:** #DesignPatterns 
> **Located:** SoftwarePatterns/Structural
> **Created:** 31/01/2023 - 14:36
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
# Bridge pattern
- Splits a large class into separate hierarchies to allow for decoupled, independent development of various components 
- This is done be splitting a dimension of a component into a separate class hierarchy, this way the original objects reference a member of the new hierarchy

![[Pasted image 20230131150710.png|600|600]]

- This [[Design_patterns|design pattern]] gives more flexibility between component hierarchies, with each hierarchy layer consisting of the following sub-hierarchies:
	- **Abstraction**: only performs configuration (high-level control logic), work delegated to implementation layer
	- **Implementation**: the underlying logic used to respond to user actions, uses an interface that's common to all concrete implementations

```rust
// Implementation hierarchy: defines ways to prepare and deliver a pizza
trait Pizza {
    fn prepare(&self, topping: &str);
    fn deliver(&self);
}

struct ThinCrust;
impl Pizza for ThinCrust {
    fn prepare(&self, topping: &str) {
        println!("Preparing Thin Crust Pizza with {}", topping);
    }

    fn deliver(&self) {
        println!("Delivering Thin Crust Pizza");
    }
}

struct DeepDish;
impl Pizza for DeepDish {
    fn prepare(&self, topping: &str) {
        println!("Preparing Deep Dish Pizza with {}", topping);
    }

    fn deliver(&self) {
        println!("Delivering Deep Dish Pizza");
    }
}

// Abstraction hierarchy: defines the interface for ordering pizza
trait FoodStyle {
    fn order_pizza(&self);
}

struct AmericanStyle<P: Pizza> {
    pizza: P,
}

impl<P: Pizza> FoodStyle for AmericanStyle<P> {
    fn order_pizza(&self) {
        self.pizza.prepare("Pepperoni");
        self.pizza.deliver();
    }
}

struct ItalianStyle<P: Pizza> {
    pizza: P,
}

impl<P: Pizza> FoodStyle for ItalianStyle<P> {
    fn order_pizza(&self) {
        self.pizza.prepare("Mushrooms");
        self.pizza.deliver();
    }
}

AmericanStyle { pizza: ThinCrust }.order_pizza();
ItalianStyle { pizza: DeepDish }.order_pizza();
```
