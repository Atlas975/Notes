> [!important]- Metadata
> **Tags:** #Statistics 
> **Located:** Statistics/ProbabilityDistributions
> **Created:** 30/04/2024 - 15:02
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Probability distributions

- Descriptions of how probabilities are distributed across possible outcomes of a [[Random_variables|random variable]]
- These are used to help to describe and predict patterns in data
## Types of distributions

- **Discrete Distributions:** involves outcomes that are counted as whole numbers (eg [[Poisson_distribution|Poisson]])
- **Continuous Distributions:** involves outcomes that can take any value in an interval (eg [[Gaussian_distribution|Normal]])

## Probability mass function (PMF)

- **Applies to:** discrete random variables.
- **Definition:** gives the probability that a discrete random variable is exactly equal to some value.
- **Example:** in a fair die roll, the PMF would give a probability of $\frac{1}{6}$ for any specific face.
## Probability density function (PDF)

- **Applies to:** continuous random variables.
- **Definition:** the likelihood of a random variable falling within a particular range of values.
- **Note:** The probability of a continuous random variable equaling a specific value is always zero; hence, probabilities are defined over intervals.

## Cumulative Distribution Function (CDF)
- **Applies to:** both discrete and continuous random variables.
- **Definition:** gives the probability that a random variable <= a certain value.
- **Use:** useful for calculating the probability of a variable falling within a specified range.

## 5. Expected Value (Mean)

- **Definition:** The expected value of a probability distribution is the long-run average outcome of a random variable having that distribution.
- **Calculation:** For discrete variables, it is calculated as \( E[X] = \sum (x \cdot P(x)) \); for continuous, it is \( E[X] = \int x \cdot f(x) \, dx \).

## 6. Variance and Standard Deviation

- **Variance:** Measures the spread of the data in a distribution. It is the expected value of the squared deviation of a random variable from its mean.
- **Standard Deviation:** The square root of the variance, providing a measure of the spread of the distribution in the same units as the random variable.

## 7. Skewness and Kurtosis

- **Skewness:** Describes the asymmetry of the distribution from its mean. Positive skew indicates a tail on the right side; negative skew indicates a tail on the left.
- **Kurtosis:** Measures the 'tailedness' of the distribution. High kurtosis indicates a distribution with heavy tails and a sharp peak, while low kurtosis indicates a flatter distribution.