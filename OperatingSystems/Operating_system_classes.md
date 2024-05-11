> [!important]- Metadata
> **Tags:** #OperatingSystems 
> **Located:** OperatingSystems
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Operating system classes
- Multiple [[Operating_system_design|OS]] classes exist, each focusing on distinct needs
- **Embedded / real-time**
    - Emphasis on long term reliability, lightweight with only essential software and a certification process for safety critical systems 
    - Preferred on devices with limited resources 
- **Server**
    - Emphasis on shared resources and reliability 
    - Preferred on powerful hardware with vast resources & users to manage
- **Desktop**
    - Emphasis on interactivity and GUI / media 
    - Preferred for usability 
## Monolithic
- Traditional approach, at most two protection levels
- Applications can directly interact with the kernel, no separation. Kernel acts as gatekeeper
- Complete OS runs in kernel space 
- Efficient call structure but difficult to maintain or impose security.

![[Pasted image 20221124232251.png|400]]

## Layered design
- Tighter security as move away from hardware
- Performance penalty for higher layers

![[Pasted image 20221124232614.png|350]]

- Kernel space lies in centre ring (ring 0), applications run in ring 3
- Only ring 0 is allowed to configure [[Paging|page tables]] etc
## Microkernel
- Small kernel, most systems run as applications on the user space
- Very secure, minimal code with system privileges 
- Limited impact if a system fails, can simply restart without corruption
- Extensible and minimal dependencies 

![[Pasted image 20221124232822.png|350|350]]
- Data transferred through inefficient message passing instead of memory references 
- Also well suited for distributed systems as messages can easily be passed over a network
## Monolithic vs Microkernel
- The more running in user space, the less goes wrong in the event of failure 
- Generally, moving away from monolithic means more security, moving towards microkernel means less efficiency 

![[Pasted image 20221124233234.png|600|600]]

## Modular
- Kernel has set of extensible modules that can be dynamically loaded
- Components use a strict API  and are only loaded as needed
- Not limited to microkernel style message passing (like [[OOP_principles|OOP]])

![[Pasted image 20221124234106.png|400]]

## Library OS / Uni-Kernels
- Applications carry most of the functionality typically part of the kernel 
- Kernel configures security at lowest level 
- Typically used in networking, libraries provides all other functionality.

![[Pasted image 20221124234735.png|400]]