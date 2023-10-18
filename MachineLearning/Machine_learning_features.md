> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning
> **Created:** 18/10/2023 - 11:58
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Machine learning features
- A feature is a measurable property from the phenomena being observed 
- The feature set represents the information that can be extracted from given data
- **Labels** are the named tags assigned to a feature set, these commonly relate to what the model is trying to learn from 

![[Pasted image 20231018120325.png|425|425]]

## Feature extraction 
- The method set used to map input features to new output features 
- This describes the process of transfo
- Raw data needs to be transformed into numerical informat