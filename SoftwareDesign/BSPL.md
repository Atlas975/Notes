> [!important|inIL]- Metadata
> **Tags:** #Concurrency #Programming 
> **Located:** SoftwareDesign
> **Created:** 26/12/2022 - 09:26
> ```dataviewjs
>let loc = dv.current().file.path;
>let cur = dv.page(loc).file;
>let links = cur.inlinks.concat(cur.outlinks)
>    .array().map(p => p.path);
>let paths = new Set(links.
>    filter(p => !p.endsWith(".png"))
>);
>paths.delete(loc);
>dv.table(["Connections","Tags"], dv.array(
>    Array.from(paths))
>    .map(p => [
>        dv.fileLink(p),
>        dv.page(p).file.tags.join("")
>    ])
>    .slice(0, 20)
>);
> ```

___
# BSPL


 - The blindingly simple protocol language, involves dealing with a declarative bag of protocols 
- Specifies a decentralized information object, useful for [[Multiagent_systems|Multiagent systems]] as well as dependencies for a message to be sent
- Virtual blocks are used to prove lack of [[Concurrency#Concurrency pitfalls|deadlocks]], no hidden coordination
- The **out** parameter creates and transmits knowledge
- The **In** parameter transmits knowledge

## Control vs information flow

```start-multi-column
ID: ID_ckyk
Number of Columns: 2
Largest Column: standard
```

**Control flow**
- Natural in single threads
- Conditional branching is core
- Impossible between mutually autonomous parties

--- column-end ---

**Information flow**
- Natural across multiple threads
- Tied to causality with no hidden coordination
- Keys are the basis for completion
- Robustness, insensitive to infrastructure reordering

=== end-multi-column

## Initiate protocol
```rust
Initiate {
    role B, S
    parameter out ID key, out item
    B -> S: rfq [out ID key, out item]
}
```

![[Pasted image 20221115141615.png|550|550]] note the non deterministic arrival at seller

## Offer protocol
```rust
Offer {
    role B, S
    parameter out ID key, out item, out price
    B -> S: rfq [out ID key, out item]
    S -> B: quote [in ID, in item, out price]
}
```

![[Pasted image 20221115141517.png|600|600]]

## Decide offer protocol
- Accept and reject cannot both occur with same ID
```rust
DecideOffer {
    role B, S
    parameter out ID key, out item, out price, out decision
    B -> S: rfq [out ID, out item]
    S -> B: quote [in ID, in item, out price]

    B -> S: accept[in ID, in item, in price, out decision]
    B -> S: reject[in ID, in item, in price, out decision]

}
```

![[Pasted image 20221115141736.png|600|600]]

## Purchase protocol
- Reject conflicts with accept on resp
- Reject or deliver must occur for completion
```rust
Purchase {
    role B, S, Shipper
    parameter out ID key, out item, out price, out decision
    private address, resp
    B -> S: rfq [out ID, out item]
    S -> B: quote [in ID, in item, out price]

    B -> S: accept[in ID, in item, in price, out address, out resp]
    B -> S: reject[in ID, in item, in price, out outcome, out resp]

    S -> Shipper: ship [in ID, in item, in address]
    Shipper -> B: deliver [in ID, in item, in address, out outcome]
}
```

![[Pasted image 20221115144216.png|600|600]] accept process on left, reject process on right

- A protocol is live if any enactment including empty may progress to completion
## Polymorphic message
- Same message schema but through different possible paths
- Buyer has priority in generating price but if it chooses not to, then S can
```rust
Flexible-Offer {
    role B, S
    parameter in ID key, out item, out price, out qID

    B -> S: rfq[in ID, out item, nil price]
    B -> S: rfq[in ID, out item, out price]

    S -> B: quote[in ID, in item, out price, out qID]
    S -> B: quote[in ID, in item, in price, out qID]
}
```

## Flexible purchase system
- Allows flexible actions without [[Concurrency#Deadlocks|deadlocks]]
```rust
Flexible Purchase {
    role B, S
    parameter out ID key, out item, out shipped, out paid

    B -> S: Request[out ID, out item]
    S -> B: Shipment[in ID, in item, out shipped]
    B -> S: Payment[in ID, in item, out paid]
}
```

- All of the following combinations are valid:

![[Pasted image 20221110132352.png|600|600]]


