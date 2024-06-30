> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning/TimeSeriesAnalysis
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Time series analysis
- The collection, analysis, and interpretation of data points collected or recorded at specific time intervals. This is used to understand patterns, forecast future values, and identify trends
- A time series consists of various components: 
    - **Trend (T)**: the long-term movement or direction in the data. Represents the general pattern or tendency over a significant period, such as upward or downward movement.
    - **Seasonality (S)**: regular and repeating patterns or cycles in data, often observed within a year. For example, retail sales often increase during holiday seasons.
    -  **Cyclic Patterns (C)**: Fluctuations in data over periods longer than a year, usually due to economic cycles. Unlike seasonality, cycles do not have a fixed period.
    -  **Irregular (I) or Random Components**: Unpredictable, random variations in the data which cannot be attributed to trend, seasonality, or cyclic patterns.

![[Pasted image 20240630205015.png|300|300]]


## Lag features 
- Lag refers to the amount of time by which a time series observation is shifted relative to another observation. Lags are used to create lagged variables, which are past values of the series that can be used as predictors in time series models. The concept of lag is integral to autoregressive models, where future values are predicted based on past values.