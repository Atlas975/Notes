# Bias correction
- When using [[Exponentially_weighted_averages]], the first reading will be off due to not having a previous value to recall from, impacting all future values

![[Pasted image 20220413175534.png|450|450]]
purple curve is what results instead of intended green curve
- An alternative approach is to use this for the previous value 

>v/(1-b^t)
this results in correction in earlier predictions but makes very little difference in later predictions as b becomes small 

![[Pasted image 20220413175946.png|450|450]]