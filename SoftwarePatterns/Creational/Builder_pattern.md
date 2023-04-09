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
- Helps simplify the initialisation of an object through the use of a builder class
- This is done by having dedicated methods to assign single/multiple fields. The builder class can then use a build method to return the desired object if all essential fields are set

![[Pasted image 20230409172418.png|550|550]]
- This can also be used to force instantiation through the builder class exclusively 
- A director class may also optionally exist to provide a common builder configurations

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
}

struct CarDirector {
    car_builder: CarBuilder,
}
impl CarDirector {
    fn new() -> Self {
        CarDirector {
            car_builder: CarBuilder::new(),
        }
    }

    fn build_bugatti(&mut self) -> Car {
        self.car_builder
            .name("Bugatti")
            .model("Veyron")
            .year(2010)
            .build().unwrap()
    }

    fn build_ferrari(&mut self) -> Car {
        self.car_builder
            .name("Ferrari")
            .model("F40")
            .year(1992)
            .build().unwrap()
    }
}

let mut car_director = CarDirector::new();
assert_eq!(car_director.build_bugatti().name, "Bugatti");
assert_eq!(car_director.build_ferrari().name, "Ferrari");
```
