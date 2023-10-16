
> [!important]- Metadata
> **Tags:** #DesignTheory 
> **Located:** SoftwareDesign/HCI
> **Created:** 27/02/2023 - 15:31
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Human computer interaction
- HCI is concerned with the disciple of design evaluation and implementation of interactive computer systems 
- Interactive systems allow user to interact in real time and provide real-time user feedback when used. real-time falls in the order of 100ms 
- User interfaces are the part of a system that support input, output or both through the user
- HCI depends on three main components:
    - **Utility**: what a system enables the user to do 
    - **Usability**: how well a user can achieve their goals with the system 
    - **User experience (UX)**: how the system feels to use 
## HCI relevance
- Good usability can:
    - increase user productivity 
    - reduce training and support costs 
    - Increase sales / revenue 
    - Enhance customer loyalty
- Usability is often seen as quality, bad usability is considered a **leaky pipe**
# Model human processors 
- Humans can be taught of as information processors, these processors include:
    - **Perception** (world sensors, uses association triggers and is influenced by attention)
    - **Cognition** (existing knowledge base, effected by practice)
    - **Motor action** (human output, rate of repetitive movement)


![[Pasted image 20221102094936.png|450|450]]

- Effective HCI systems are also required to comply with human time requirements, only then will a system be considered responsive

![[Pasted image 20221102101256.png|450|450]]
