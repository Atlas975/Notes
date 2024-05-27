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
- A feature is a measurable property from the phenomena being observed. The feature set represents the information that can be extracted from given data
- By extracting relevant features, the model can focus on the most important aspects of the data, leading to better accuracy and generalisation on unseen data
- **Labels** are the named tags assigned to a feature set, these commonly relate to what the model is trying to learn from 

![[Pasted image 20231018120325.png|425|425]]

- A feature vector is a structured collection of features representing a data instance eg for a fruit this may contain information such as colour distribution, shape and texture 
- A good compact feature vector is essential as input for classification algorithms 

## Feature extraction
- Raw data needs to be transformed into encodable numerical information whilst still preserving information. 
- Feature extraction is the process of mapping raw input features into new output features
- These features are then fit to be used as input to a learning algorithm. This is necessary as real-world data is often generated in non-numeric formats

![[Pasted image 20231018122819.png|550|550]]

- Feature detection is the process of identifying where to extract features from as not all parts of a piece of data may have relevant information

## Feature quality
- **Repeatability**: should be reliably detectable in different instances eg angle / luminance in images 
- **Saliency**: should be usefully descriptive and distinctive, contribute towards decision making 
- **Compactness**: should obey memory constraints, also impacts feature matching speed in applications 
- 
- impacts matching speed, limited / smaller features can be beneficial in terms of memory use and how quickly a feature is matched. Crucial in real-time applications 
