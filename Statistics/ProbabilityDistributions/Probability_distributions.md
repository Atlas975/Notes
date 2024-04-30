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

Probability distributions are mathematical descriptions of how probabilities are distributed across possible outcomes of a random variable. They are fundamental in statistics, helping to describe and predict patterns in data. Below are the essential concepts related to probability distributions:

## Types of Distributions

- **Discrete Distributions:** These involve outcomes that can be counted in whole numbers. Examples include the Binomial, Poisson, and Geometric distributions.
- **Continuous Distributions:** These involve outcomes that can take any value in an interval. Common examples are the Normal, Exponential, and Uniform distributions.

## Probability Mass Function (PMF)

- **Applies to:** Discrete random variables.
- **Definition:** A PMF gives the probability that a discrete random variable is exactly equal to some value.
- **Example:** In a fair die roll, the PMF would give a probability of $\frac{1}{6}$ for any specific face.

## Probability Density Function (PDF)

- **Applies to:** Continuous random variables.
- **Definition:** The PDF, used for continuous distributions, describes the likelihood of a random variable falling within a particular range of values.
- **Note:** The probability of a continuous random variable equaling a specific value is always zero; hence, probabilities are defined over intervals.

## 4. Cumulative Distribution Function (CDF)

- **Applies to:** Both discrete and continuous random variables.
- **Definition:** The CDF gives the probability that a random variable is less than or equal to a certain value.
- **Use:** It is particularly useful for calculating the probability of a variable falling within a specified range.

## 5. Expected Value (Mean)

- **Definition:** The expected value of a probability distribution is the long-run average outcome of a random variable having that distribution.
- **Calculation:** For discrete variables, it is calculated as \( E[X] = \sum (x \cdot P(x)) \); for continuous, it is \( E[X] = \int x \cdot f(x) \, dx \).

## 6. Variance and Standard Deviation

- **Variance:** Measures the spread of the data in a distribution. It is the expected value of the squared deviation of a random variable from its mean.
- **Standard Deviation:** The square root of the variance, providing a measure of the spread of the distribution in the same units as the random variable.

## 7. Skewness and Kurtosis

- **Skewness:** Describes the asymmetry of the distribution from its mean. Positive skew indicates a tail on the right side; negative skew indicates a tail on the left.