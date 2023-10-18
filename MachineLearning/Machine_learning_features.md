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
- Raw data needs to be transformed into encodable numerical information whilst still preserving information. Feature extraction describes the process of mapping these raw input features to these new output features
- These features are then fit to be used as input to a learning algorithm. This is necessary as real-world data is often generated in non-numeric formats

![[Pasted image 20231018122819.png|550|550]]


### Feature extraction methods 


## Feature quality 
- A high quality feature needs to have three main characteristics 
- **Repeatability**: should be reliably detectable in different instances eg different angles / luminance when it comes to images 
- **Saliency**: should be usefully descriptive and distinctive eg an image feature should contribute towards accurate analysis and decision making 
- **Compactness**: impacts matching speed, limited / smaller features can be beneficial in terms of memory use and how quickly a feature is matched. Especially crucial in real-time applications 

