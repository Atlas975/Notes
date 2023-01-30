> [!important]- Metadata
> **Tags:** #DesignPatterns 
> **Located:** SoftwarePatterns/Creational
> **Created:** 30/01/2023 - 18:09
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
# Builder pattern
```ad-example
```rust
struct Car {
    name: String,
    model: String,
    year: i32,
}

struct CarBuilder {
    name: Option<String>,
    model: Option<String>,
    year: Option<i32>,
}

impl CarBuilder {
    fn new() -> Self {
        CarBuilder {
            name: None,
            model: None,
            year: None,
        }
    }

    fn name(&mut self, name: &str) -> &mut Self {
        self.name = Some(name.to_string());
        self
    }

    fn model(&mut self, model: &str) -> &mut Self {
        self.model = Some(model.to_string());
        self
    }

    fn year(&mut self, year: i32) -> &mut Self {
        self.year = Some(year);
        self
    }

    fn build(&mut self) -> Option<Car> {
        if let (Some(name), Some(model), Some(year)) =
            (self.name.take(), self.model.take(), self.year.take())
        {
            Some(Car { name, model, year })
        } else {
            None
        }
    }

    fn build_bugatti(&mut self) -> Option<Car> {
        self.name("Bugatti").model("Veyron").year(2010).build()
    }
}

assert_eq!(CarBuilder::new().build_bugatti().unwrap().name, "Bugatti");
assert_eq!(CarBuilder::new().name("Ferrari").build(), None);
```