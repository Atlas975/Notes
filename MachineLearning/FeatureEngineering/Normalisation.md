> [!important]- Metadata
> **Tags:** #Statistics 
> **Located:** MachineLearning/FeatureEngineering
> **Created:** 02/04/2024 - 19:37
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Normalisation
- Involves adjusting data from different scales to a common scale without distorting the differences between them, making it easier to compare and analyse.
- Also improves the performance and accuracy of machine learning algorithms by ensuring that each feature contributes proportionately to the final prediction
## Standardisation 
- Done to ensure that data falls within a normal distribution
- Useful for various statistical models that assume normally distributed data

![[Pasted image 20220406164101.png|450|450]]

- This is also known as z-scaling as the new valye
# Scaling
- Scaling is done to ensure that data thats scaled differently can still be compared without the difference in scale influencing results
- Examples include currency value and difference in measurement standards
![[Pasted image 20220406164052.png|450|450]]

```
# select the usd_goal_real column
original_data = pd.DataFrame(kickstarters_2017.usd_goal_real)

# scale the goals from 0 to 1
scaled_data = minmax_scaling(original_data, columns=['usd_goal_real'])
```

```
# get the index of all positive pledges (Box-Cox only takes positive values)
index_of_positive_pledges = kickstarters_2017.usd_pledged_real > 0
# get only positive pledges (using their indexes)
positive_pledges = kickstarters_2017.usd_pledged_real.loc[index_of_positive_pledges]

# normalize the pledges (w/ Box-Cox)
normalized_pledges = pd.Series(stats.boxcox(positive_pledges)[0], 
                               name='usd_pledged_real', index=positive_pledges.index)
```