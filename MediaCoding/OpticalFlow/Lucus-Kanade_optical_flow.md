> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/OpticalFlow
> **Created:** 25/03/2024 - 18:26
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Lucus-Kanade optical flow
- Assumes that the surrounding patch has [[Optical_flow#Optical flow assumptions|constant flow / neighbours move together]] 
- Eg. using a 5x5 image patch gives 25 equations:  

$$[I_{x}(p_{1})u+ I_{y}(p_{1})v+I_{t}(p_{1})=0, \ I_{x}(p_{2})u+ I_{y}(p_{2})v+I_{t}(p_{2})=0,\ \dots]$$