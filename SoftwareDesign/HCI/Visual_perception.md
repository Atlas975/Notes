> [!important]- Metadata
> **Tags:** #DesignTheory 
> **Located:** SoftwareDesign/HCI
> **Created:** 27/02/2023 - 11:31
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Visual perception
- Humans are sensitive to both brightness and colour, both should be used in conjunction to aid in perception.
- **Cones** are sensitive to colour, **Rods** are sensitive to brightness
- Cones differ in light sensitivity, less sensitivity towards blue
- Red / green deficiency is fairly common (8%)
## Eye movement
- **Foveal vision**: whats directly infront of us (1-2 degrees of visual field) involved in seeing in high resolution eg reading
- **Peripheral vision**: wide view at low resolution, still sensitive to stimuli
- Fixations take 200-250ms to align, saccades are rapid eye movement that take 20-30ms for small shifts
- Eye-in-head comfort is 20 degrees, but the eyes themselves can turn 45-50 degrees before requiring head movement

## HSV colour traits 
- **Hue**: where colour appears on spectrum
- **Saturation**: amount of grey mixed in 
- **Lightness**: intensity of colour
- Contrasting colours are opposite on the wheel

![[Pasted image 20221105141450.png|250|250]]


- Example of contrast benefit, vision is optimized to see contrast:
![[Pasted image 20221105141608.png|450|450]]


## Opponent processing theory
- Opponent processing theory states that opponent colours (not the same as contrasting) aid in human perception 
![[Pasted image 20221105140223.png|450|450]]

## Colour discrimination
- Preceived difference depends on background, colours are harder to tell apart if they are pale or separated by another colour 

![[Pasted image 20221105141851.png|450|450]]

## Preattentive processing
- When information is gained in less than 200-250ms using peripheral vision its known as Preattentive.
- The following are visual properties that effect these without focused attention or effort

![[Pasted image 20221105142343.png|450|450]]

## Gestalt perception
- Gestalt refers to a pattern, the human brain is bias towards symmetry and the simplest interpretation
- Humans tend to like finding patterns in structures

![[Pasted image 20221105142728.png|450|450]]

- Gestalt principles in design

![[Pasted image 20221105142824.png|450|450]]

## Visual structure 
- Visual structure helps the brain scan information faster, this can be achieved by spaced out groups in text

![[Pasted image 20221105143042.png|450|450]]

## Visual encoding
- Encoding information in diagrams is often better with some shapes more than others 
- Length > area for comparing size 

![[Pasted image 20221105143219.png|450|450]]
![[Pasted image 20221105143240.png|450|450]]