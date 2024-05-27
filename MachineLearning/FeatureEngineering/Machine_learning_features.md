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
- A feature is a measurable property from the data being observed. In [[Artificial_intelligence|ML]] these are the input variables that are fed into a model to make predictions.
- 

![[Pasted image 20231018120325.png|425|425]]

- A feature vector is a structured feature collection representing a data instance, ideally compact
- The feature set represents the possible information that can be extracted from given data
- Labels are the named tags assigned to a feature set, these commonly relate to what the model is trying to learn from. These are used in the training process of [[Artificial_intelligence#Supervised learning|supervised learning]]
## Feature quality
- **Repeatability**: should be reliably detectable in different instances eg angle / luminance in images 
- **Saliency**: should be usefully descriptive and distinctive, contributing towards decision making 
- **Compactness**: should obey memory constraints, also impacts matching speed in applications
## Feature extraction
- Raw data needs to be transformed into encodable numerical information whilst still preserving information. Feature extraction is the process of mapping raw inputs into features
- By extracting relevant features, a model can focus on the most important aspects of the data, leading to better accuracy and generalisation on new data

![[Pasted image 20231018122819.png|550|550]]


### Manual Feature extraction
- Allows for domain expertise to guide the selection of features, potentially leading to more meaningful and relevant features for the specific problem.
- This can be time-consuming, requiring expertise in the domain and knowledge of the data.
### Automatic feature extraction 
- Ideal for large datasets and can discover features that may not be obvious to human experts, leveraging algorithms to find patterns and relationships in the data.
- This may result in less interpretable features and can be computationally intensive, requiring significant resources to process the data (eg [[Convolutional_networks|CNNs]])
## Feature detection 
- The process of identifying where to extract features from, this is necessary as not all parts of a piece of data may have relevant information 
- By focusing on detected features and extracting them appropriately, data complexity is reduced, making it more manageable for machine learning algorithms to process