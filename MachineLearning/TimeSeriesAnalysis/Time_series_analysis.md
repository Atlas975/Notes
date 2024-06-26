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
    - **Trend (T)**: the long-term movement of the mean of the data series. Represents the general pattern over a significant period. This is the slowest moving part of a series 
    - **Seasonality (S)**: regular and repeating patterns or cycles in data, often observed within a year. For example, retail sales often increase during holiday seasons.
    -  **Cyclic Patterns (C)**: fluctuations in data over periods longer than a year, usually due to economic cycles. Unlike seasonality, cycles do not have a fixed period.
    -  **Irregular (I) or Random Components**: unpredictable, random variations in the data which cannot be attributed to trend, seasonality, or cyclic patterns.

![[Pasted image 20240630205015.png|300|300]]

## Time-step features 
- Refers to the interval between consecutive observations in a dataset. This interval can vary depending on the nature of the data and the frequency of observation
- The concept of time-step is crucial for understanding the temporal structure of the data and for performing various time series operations such as forecasting and modelling
## Lag features 
- The amount of time by which a time series observation is shifted relative to another observation. Vital with autoregressive models, where future values are predicted based on past values.
- Lags are used to create lagged variables, which are past values of the series [[Thread_types]] can be used as predictors in time series models. 

![[Pasted image 20240630210011.png|250|250]]