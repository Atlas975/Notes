> [!important|inIL]- Metadata
> **Tags:** #DesignTheory 
> **Located:** SoftwareDesign
> **Created:** 26/12/2022 - 09:27
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
# Software architecture
- The architecture of a system can be divided into sub-systems and lower level components 

![[Pasted image 20221105125845.png|600]]

## Software design process:

1. **Architectural design** - the sub-systems making up the system and their relationships are
identified and documented. Model of control is identified.
2. **Interface design** - for each sub-system, it’s interface with other sub-systems is designed and
documented.
3. **Component design** - services (i.e. functional requirements) are allocated to different
components and the interfaces of these components are designed
4. **Data structure design** - the data structures used in the system implementation are designed in
detail.
5. **Algorithm design** - the algorithms used to provide services are designed in detail and
specified.

- Example of broken down system as ball and socket diagram:

![[Pasted image 20221105134023.png|550]]

- Possible exceptions should also be labeled, this can be charted in a table, example of an alarm control system:

![[Pasted image 20221105134740.png|550]]

## Architecture design process
- [[Software_planning|Software planning]] is vital to creating a properly structured system, this can be done through the following design cycle

![[Pasted image 20221105135100.png|450|450]]
![[Pasted image 20221118113251.png|450|450]]

# Control models
- Concerned with the control flow between subsystems, there are two main forms of this:
- **Centralized control**: one system has overall responsibility for control, call return model: 

![[Pasted image 20221123232100.png|500|500]] 

- **Event-based systems**: each subsystem responds to events created from other subsystems during runtime. Events are broadcasted  to all sub-systems where any subsystem that can handle the event does so. This is an interrupt driven model

![[Pasted image 20221123235111.png|500|500]]

- Choice of architecture effects
	- Performance 
	- Security 
	- Safety
	- Availability
	- Maintainability
## Performance vs security
- While the left model can potentially be faster,  by separating all services by a process they need to go through on the right model, information that can potentially be unverified never reaches the user interface object

![[Pasted image 20221123235429.png|500|500]]

## Efficiency vs availability

![[Pasted image 20221123235642.png|550|550]]

## Architectural conflicts
- Using components that cover large systems (large grain) improves performance but reduces maintainability 
- Introducing redundant components  improves availability but makes security more difficult 
- Localizing critical components means more communication and degraded performance
- Small-grain components  improves reuse at the cost of performance 
# Architectural boundary
- Well defined boundaries are essential to architectural design
- Enables independence between subsystems and makes maintenance, deployment and testing faster and simpler.

![[Pasted image 20221124000736.png|550|550]]

- This also allows independent subsystem testing and makes subsystem breakage less impactful on other systems
## Input process output architecture
- Segregates business logic from the rest of the system.
- A controller is needed to orchestrate input -> request model -> delivery

![[Pasted image 20221124000504.png|500|500]] - user only communicates through boundary 

## Plug-in architectural style
- Plug in components provide a service within the overall system that needs to conform to systems plugin standards. eg mods [[OOP_principles#Interface signature]]

![[Pasted image 20221124001324.png|550|550]]

## Layered architectural style
- Arbitrary number of layers that each relies on services and infrastructure from layers directly beneath it. Layers can be developed independently and architecture is portable as long as interfaces don't change 

![[Pasted image 20221124001630.png|500|500]]
![[Pasted image 20221124001708.png|550|550]]

## Repository architectural style
- Suitable when components need to share data between each other 
- Components must agree to repo schema, adding an extra level of coordination

![[Pasted image 20221124001856.png|550|550]]
![[Pasted image 20221124001914.png|550|550]]

## Client server architectural style
- Set of servers offer service to clients, services are independent and concurrent.
- Services and servers can be swapped without effecting actors 

![[Pasted image 20221124002108.png|500|500]]
> 
![[Pasted image 20221124002149.png|550|550]]

## Interface architecture
- [[OOP_principles#Interface signature|Interfaces]] offer a way to reduce code dependencies from higher level objects

![[Pasted image 20221213092146.png|500|500]]

