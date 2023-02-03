> [!important]- Metadata
> **Tags:** #Programming 
> **Located:** ProgramLanguages/Rust
> **Created:** 03/02/2023 - 08:13
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
# Rust message passing

## Rust initiate protocol 
[[BSPL#Initiate protocol]]
```rust
let (buyer_tx, seller_rx) = mpsc::channel();
let available = HashMap::from([(1, "Apple"), (2, "Banana"), (3, "Orange")]);

for (&id, &name) in available.iter() {
    let tx = buyer_tx.clone();
    thread::spawn(move || {
        tx.send((id, name)).unwrap();
    });
}

for _ in 0..3 {
    println!("Recieved: {:?}", seller_rx.recv().unwrap());
}
```

## Rust offer protocol 
[[BSPL#Offer protocol]]