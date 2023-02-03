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

```rust
let (buyer_tx, seller_rx) = mpsc::channel();
let (seller_tx, buyer_rx) = mpsc::channel();

let available = HashMap::from([(1, "Apple"), (2, "Banana"), (3, "Orange")]);
let prices = available
    .iter()
    .map(|(&id, &name)| ((id, name), id * 250))
    .collect::<HashMap<_, _>>();

for (&id, &name) in available.iter() {
    let tx = buyer_tx.clone();
    thread::spawn(move || {
        tx.send((id, name)).unwrap();
    });
}

for _ in 0..3 {
    let recieved = seller_rx.recv().unwrap();
    println!("Recieved request: {:?}", recieved);
    let price = prices[&recieved];
    let tx = seller_tx.clone();

    thread::spawn(move || {
        tx.send((recieved.1, price)).unwrap();
    });
}

for _ in 0..3 {
    let recieved = buyer_rx.recv().unwrap();
    println!("{} price is: {}", recieved.0, recieved.1);
}
```

## Decide offer protocol 
[[BSPL#Decide offer protocol]]
```rust
let (buyer_tx, seller_rx) = mpsc::channel();
let (seller_tx, buyer_rx) = mpsc::channel();
let (decisions_tx, decisions_rx) = mpsc::channel();

let available = HashMap::from([(1, "Apple"), (2, "Banana"), (3, "Orange")]);
let prices = available
    .iter()
    .map(|(&id, &name)| ((id, name), id * 250))
    .collect::<HashMap<_, _>>();

for (&id, &name) in available.iter() {
    let tx = buyer_tx.clone();
    thread::spawn(move || {
        tx.send((id, name)).unwrap();
    });
}
drop(buyer_tx);

for recieved in seller_rx {
    println!("Recieved request: {:?}", recieved);
    let price = prices[&recieved];
    let tx = seller_tx.clone();

    thread::spawn(move || {
        tx.send((recieved, price)).unwrap();
    });
}
drop(seller_tx);

for recieved in buyer_rx {
    println!("Price for request {:?} is: {}", recieved.0, recieved.1);
    let tx = decisions_tx.clone();
    thread::spawn(move || {
        tx.send((recieved.0, random::<bool>())).unwrap();
    });
}
drop(decisions_tx);

for recieved in decisions_rx {
    let choice = if recieved.1 { "Accepted" } else { "Reject" };
    println!("Request {:?} was {}", recieved.0, choice);
}
```