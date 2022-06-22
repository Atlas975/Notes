# Scaling
- Scaling is done to ensure that data thats scaled differently can still be compared without the difference in scale influencing results
- Examples include currency value and difference in measurement standards
>![[Pasted image 20220406164052.png]]

```
# select the usd_goal_real column
original_data = pd.DataFrame(kickstarters_2017.usd_goal_real)

# scale the goals from 0 to 1
scaled_data = minmax_scaling(original_data, columns=['usd_goal_real'])
```

# Normalization
- Normalization is done to ensure that data falls within a normal distribution
- This is useful for various statistical models that assume normally distributed data
>![[Pasted image 20220406164101.png]]
```
# get the index of all positive pledges (Box-Cox only takes positive values)
index_of_positive_pledges = kickstarters_2017.usd_pledged_real > 0
# get only positive pledges (using their indexes)
positive_pledges = kickstarters_2017.usd_pledged_real.loc[index_of_positive_pledges]

# normalize the pledges (w/ Box-Cox)
normalized_pledges = pd.Series(stats.boxcox(positive_pledges)[0], 
                               name='usd_pledged_real', index=positive_pledges.index)
```