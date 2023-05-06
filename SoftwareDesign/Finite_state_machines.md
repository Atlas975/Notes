---
aliases: FSM
---
> [!important]- Metadata
> **Tags:** #DesignTheory 
> **Located:** SoftwareDesign
> **Created:** 06/05/2023 - 23:08
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Finite state machines
- A finite state machine (FSM) is a mathematical model used to represent systems that change state
- Consists of a set of states, inputs, and transitions. FSM's starts in an initial state and can transition between states based on input. 
- Each transition has a condition that determines when a state change occurs as well as secondary effects that occur when that transition happens

![[Pasted image 20230506231513.png|650|650]]