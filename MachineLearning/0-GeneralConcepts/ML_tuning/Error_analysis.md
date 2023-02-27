# Error metrics
- Its worth noting that the best way to gauge which factors contribute most to errors to draft up a quick system to work with and then tune it overtime
- After training a model such as a cat classifier, options arise such as training to better recognize blurry images, dog images, lizard images etc.
- One way of picking which one to focus on is to check what percentage of mislabels i the dev set are attributed to certain categories  and picking a path that offers the most potential improvements.

![[Pasted image 20220421193948.png|450|450]]
in this case its more productive to deal with blurry images

# Incorrect labeling of examples
- Random errors such as the occasional mislabeling of data usually wont break an algorithm, however consistently labeling images like white dogs as cats is known as a systematic error and will cause an algorithm to label all white dogs as cats

![[Pasted image 20220421194524.png|450|450]]

- Its also worth noting that if errors due to incorrect labeling make up a large portion of the incorrect dev set classifications 

![[Pasted image 20220421195105.png|450|450]]