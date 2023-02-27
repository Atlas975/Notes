> [!important]- Metadata
> **Tags:** #DesignTheory 
> **Located:** SoftwareDesign
> **Created:** 26/12/2022 - 09:26
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
# Software planning
## Software engineering stack
> ![[Pasted image 20221010164140.png|450|450]]
# Software requirements
- Describes what a systems should do as well as any constraints it may have in completing the required objective
- Requirement engineering is essential as these kind of errors are more numerous, costly and persistent than software errors
- It only describes what software should do without going into logistics AKA "the how". Implementation details should never be included initially, this allows for some level of creativity in how a project is completed

> ![[Pasted image 20221010164519.png|550|550]]its best to consider these in a way that can be explained to anyone

- The level of abstraction in requirements depends on stakeholders
- Language should be consistent use **SHALL** for essential requirements and **SHOULD** for desirable requirements
## Functional vs non-functional requirements
- Functional requirements describe what a system has to deliver
- Non-functional requirements specify quality through **SHALL** statements

> ![[Pasted image 20221010165416.png|550|550]]

- Non-functional metrics

> ![[Pasted image 20221010165451.png|550|550]]


# Use cases 
- A behavioral model of a system used to structure stakeholder needs / goals
- Used to derive test cases and the standard for UML 
- These can be either a diagram or a textual analysis 

> ![[Pasted image 20221024144013.png|550|550]]

## Use case template 
1. Pre-conditions: initial activities that must take place
2. Flow of events: user actions and system responses under normal conditions 
3. Post-conditions : system state at the end of normal execution
- This format helps reveal edge cases for alternative control flow 
- ATM example:

> ![[Pasted image 20221024163027.png|550|550]]

## Use case levels 
- **Cloud level:** very high level summary. Typically a business goal. 
- **Sea level.** our user goal. Key characteristics: single sitting & user gets a result 
- **Fish level:** Usually the include or extend use cases 
- **Bottom-of-the-ocean level**. Too low!

```ad-example
Facebook example:
Cloud:
– Maximize number of users
– Maintain Reputation
– Secure User’s Private Data
• Sea:
– Add Application
– Add Friend
– Create Account
• Fish:
– Login
– Accept Terms of Service
• Bottom-of-Ocean
– Enter Password
– Click on “submit”
```

