> [!important|inIL]- Metadata
> **Tags:** #OperatingSystems #Programming 
> **Located:** SoftwareEngineering
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
# Multiagent systems
- A system that interacts with multiple intelligent agents 
- There are two ways of handling this

# Centralised systems
- Central entity that controls actions between users 
- Eg. commercial platform, social media or an autonomous system 

![[Pasted image 20221105005148.png|250|250]]

# Decentralised systems

![[Pasted image 20221105005237.png|450|450]]

- Lower level components such as individual users communicate with each other
- Each principles software controls its decision making
- Enables [[Software_architecture#Coupling (SRP)|loose coupling]] between components
- Each agent in the system gives its principal a level of autonomy 
- **Autonomy** means that it isn't essential for agent to send a message 

## Decentralised communication protocols
- Agents play a role in these protocols by participating
- The main requirements in a protocol specification include:
	- Roles: level of abstraction over base agents 
	- Message schemes: allowed data 
	- Constraints of message occurrence & ordering
	- Message emission and reception: how data transmission is handled, if this is point-to-point, between roles or multicast (one sender multiple receivers)
- Multicast sending: 

![[Pasted image 20221105113614.png|450|450]]

- Example autonomous system, not the three parties have no client server and are not required to communicate with each other 

![[Pasted image 20221105115527.png|450|450]]

- Protocols encourage: 
	- **Autonomy**: limited constraints on agent decision making and interactions
	- **Inter-operation**: gives meaning to transmitted messages by specifying correct behaviors
	- **Heterogeneity**: like an [[OOP_principles#Interface signature|Interface signature]],  provides a standard that all agents must follow in implementatuon

## State machines
- A state machine is an abstraction over an algorithm to describe its control flow
- Useful for describing intended control flow of a [[Concurrency|concurrent]] model

![[Pasted image 20221105122527.png|450|450]]

# Multiagent system pitfalls
- Interactions must maintain data integrity
- This is often maintained by object specifications

![[Pasted image 20221105123506.png|450|450]]

- Example challenges include 
## Integrity violations

![[Pasted image 20221105123657.png|450|450]]

## Race conditions

![[Pasted image 20221105123726.png|400|400]]

## Deadlock interactions

![[Pasted image 20221105123821.png|400|400]]

## Asynchronous communication
- Ordering send - receive communication has its own challenges such as required synchronization and tight coupling 

![[Pasted image 20221105124158.png|450|450]]
loose coupling and autonomy with asynchronous communication

- Communication is often FIFO in delivery, this is helped through message queues  
