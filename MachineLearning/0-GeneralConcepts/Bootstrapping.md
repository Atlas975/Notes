# Bootstrapping
- A resampling technique used to estimate statistics on a population
- Resampling is normally time consuming and expensive, however it is necessary on measurements with high variance
![[Pasted image 20220227163121.png|450|450]]
- Process:
1. Choose a random value from the original number line
![[Pasted image 20220227163212.png|450|450]]
2. Iterate until an acceptable number of sample collected
![[Pasted image 20220227163328.png|450|450]]
![[Pasted image 20220227163512.png|450|450]]
randomly selecting data while allowing for duplicates is called sampling with replacement
we chose 8 measurements for the new number line as this is the number of sample in the original number line
3. add the mean of bootstrapped dataset of what will now be a histogram of means
![[Pasted image 20220227163628.png|450|450]]
4. Keep iterating steps 1-3, this is called bootstrapping 
![[Pasted image 20220227163704.png|450|450]] 

**Note we could have also used statistics such as the SDV, median etc.**

## Interpreting Bootstrapped results
- The histogram tells us how the mean might change by redoing the experiment several time
![[Pasted image 20220227163906.png|450|450]]
- To get the error of the original dataset
![[Pasted image 20220227164105.png|450|450]]
![[Pasted image 20220227164122.png|450|450]]
- We can also use this for hypothesis testing
![[Pasted image 20220227164219.png|450|450]]
- In this scenario the confidence interval covers 0, meaning we can not reject the null hypothesis that 0 is not doing anything

# Bootstrapping to calculate p-values
- Start method:
![[Pasted image 20220227170128.png|450|450]]
![[Pasted image 20220227170142.png|450|450]]
![[Pasted image 20220227170229.png|450|450]]
- The data is now ready for testing
![[Pasted image 20220227165458.png|450|450]]
![[Pasted image 20220227165554.png|450|450]]
![[Pasted image 20220227165649.png|450|450]]
![[Pasted image 20220227165713.png|450|450]]
- This means the p value for the observed mean (0.5) =
![[Pasted image 20220227165838.png|450|450]]
![[Pasted image 20220227165823.png|450|450]]
![[Pasted image 20220227165914.png|450|450]]