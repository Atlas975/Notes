> [!important]- Metadata
> **Tags:** #Cybersecurity 
> **Located:** Cybersecurity/RiskManagement
> **Created:** 25/04/2024 - 13:23
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Quantitative privacy
- Involves using numerical methods to measure and ensure individual privacy in datasets
- Focuses on [[Risk_management|risk assessment]] and the application of privacy-preserving techniques to balance the utility of data with the need to protect individual identities when data is shared publicly
- This also needs to avoid **linkage attacks** where anonymised data is correlated with an individual 

![[Pasted image 20240429131841.png|350|350]]
## K-anonymity
- Handles privacy with equivalence classes, these are sets of records with the same non-sensitive attributes. Each of these classes must have at least k individuals
- Techniques:
	- **Suppression**: Hiding information by replacing it with asterisks or other placeholders.
	- **Generalisation**: replace non-sensitive attribute wi
- This can still lead to linkage attacks such as when a category contains the same sensitive data for all individuals in a class (eg class 3 here, guaranteed to have cancer)

![[Pasted image 20240429131923.png|400|400]]
## Ell diversity
- Ell $(\ell)$ diversity is an extension of K-anonymity where each equivalent class must contain $\ell$ unique values for their sensitive attributes 
- This susceptible to linkage attacks such as when the dataset's statistical distribution is known
- This occurs when the non-sensitive attributes of an individual are known 

![[Pasted image 20240429134947.png|400|400]]

## t-closeness
- An extension of $\ell$ diversity, a table has t-closeness when all classes have t-closeness
- A class has t-closeness if the Wasserstein distance between the distribution of a sensitive attribute in this class and it's distribution in the whole dataset is <= t
- This ideally means no new information can be found from an individual class's distribution 

![[Pasted image 20240429141121.png|400|400]]

## Differential privacy
- A method that's highly resistant to linkage attacks, protects privacy by adding random noise to true answers. Works on an interactive query model instead of releasing data
- The noise that's added is typically sampled from a Laplace distribution 

![[Pasted image 20240429143220.png|400|400]]