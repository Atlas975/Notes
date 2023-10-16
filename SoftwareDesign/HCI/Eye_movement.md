> [!important]- Metadata
> **Tags:** #DesignTheory 
> **Located:** SoftwareDesign/HCI
> **Created:** 11/08/2023 - 21:48
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Eye movement
- Gaze = the eye direction relative to the world = eyes + head + body
- Gaze is a natural pointer, eye tracking as input device 
- **Fixations**: aligns object of interest, takes 200-250ms. Eyes are still, movement treated as noise 
- **Saccades**: rapid movement from one fixation to the next 20-30ms
## Gaze limitations
- Midas Touch: don't want input on everything
- Gaze has no obvious click, natural jitter also exists
- Cannot move objects with gaze