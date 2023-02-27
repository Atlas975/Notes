# Statistical_modeling

** 20-06-2022  17:41 **
#StatisticalLearning

---

## Reducible & irreducible errors in predictions

> $y=f(x)+\epsilon$
> $\epsilon \text{ is the irreducible error, acts as un upper bounds to prediction accuracy }$

- When training, we normally dont care how well the model fits the training data, whats more important is that the predicted function correctly makes predictions with unseen data.

## Prediction and Inference

- Prediction: for instance a company only being interested in a response to an advertisement, not caring about relationship between variables
- Inference: for instance a company trying to find out which media is associated with sales. This is an example of modeling for inference by trying to understand relationships

> $p = \text{ number of predictors in a dataset}$
> $m = \text{ number of samples in a dataset}$

## Flexibility vs iterpretability tradeoff

- Flexibility describes how complex the model can be eg a quadratic function is more flexible than a linear one. Useful for pure prediction eg stock prices
- Iterpretability describes how easy the model is to understand, making it easier to interpret how an individual predictor effects a response. Useful for inference eg sales factors

![[Pasted image 20220225155757.png|450|450]]
![[Pasted image 20220225162903.png|450|450]]

# Bias vs variance

![[Pasted image 20220225163602.png|450|450]]
![[Pasted image 20220306175135.png|450|450]]

## Parametric vs non-parametric approaches

- A parametric approach reduces the problem of estimating f down to one of estimating a set of parameters because it assumes a form for f
- A non-parametric approach does not assume a patricular form of f and so requires a very large sample to accurately estimate f
- The advantages of a parametric approach to regression or classification are the simplifying of modeling f to a few parameters and with not as many observations being required when compared to a non-parametric approach
- The disadvantages of a parametric approach to regression or classification are a potentially inaccurate estimate of f if the form of f assumed is wrong or to overfit the observations if more flexible models are used

## Tradeoff with flexibility

![[Pasted image 20220225163911.png|450|450]]

# Automated clustering

- The number of distinct clusters that can be formed with p number of predictors is:

> $\frac{p(p-1)}{2}$

- When these can't easily be seen like with the below example, a method is needed to find these clusters automatically

![[Pasted image 20220225161220.png|450|450]]

# Clustering performance

## Performance measure

- Performance measure is quite different since its qualitative analysis
- A common way of quantifying accuracy of estimate is training error rate, the proportion of mistakes made by applying the model to the test set

![[Pasted image 20220225164512.png|450|450]]
![[Pasted image 20220225164629.png|450|450]]

## Bayes classifier [[Bayes_classifier]]

- The test error rate is minimized using the Bayes classifier by assigning each observation to the most likely class.

![[Pasted image 20220225164939.png|450|450]]
![[Pasted image 20220225164956.png|450|450]]

purple line corresponds to bayes decision boundary
corresponds to predicting class one if Pr(Y = 1|X = x0 ) > 0.5, and class\
two otherwise

![[Pasted image 20220225165449.png|450|450]]

- Bayes error rate is given by:

![[Pasted image 20220225165536.png|450|450]]

## K nearest

- In theory, Bayes classifier is ideal for qualitative responses. But for real data we dont know the probability of Y given X making the use of bayes classifier impossible.
- The KNN formula is often used instead

![[Pasted image 20220225170119.png|450|450]]
![[Pasted image 20220225170437.png|450|450]]

As K becomes larger, the boundary becomes more inflexible (linear)

- Training and test error rate

![[Pasted image 20220225170805.png|450|450]]
