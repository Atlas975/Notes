> [!important]- Metadata
> **Tags:** #EmbeddedSystems 
> **Located:** EmbeddedSystems
> **Created:** 13/05/2023 - 15:35
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Transistors
-   A semiconductor devices used to amplify or switch electronic signals and power.
-   They consist of three layers of semiconductor material (p-type and n-type) that form two junctions and can be controlled by a small current or voltage applied to the base

![[Pasted image 20230513153636.png|450|450]]
- Allows for amplification or switching of current flow between the collector and emitter.
- The base pin typically requires around 0.6-0.7V to the base pin to turn on. Most transistors have the following anatomy:

![[Pasted image 20230513154120.png|350|350]]


## Transistor materials 
![[Pasted image 20230513153739.png|450|450]]
## Collector
-   In a transistor, the collector is the terminal that collects the majority of the charge carriers (electrons or holes) that flow through the device.
-   It is typically connected to a load resistor or other circuit element that allows the current to be measured or used for further processing.
## Emitter 
-   The emitter is the terminal of a transistor that emits the charge carriers (electrons or holes) into the external circuit.
-   It is the input terminal of the transistor, and the amount of current that flows into the emitter is controlled by the bias voltage applied to the base.