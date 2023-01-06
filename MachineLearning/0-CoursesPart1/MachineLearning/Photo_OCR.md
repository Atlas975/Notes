# Photo OCR
- Optical character recognition, used to detect words and shapes. The core process is:
>![[Pasted image 20220214080222.png]]
>![[Pasted image 20220214080248.png]]
- Example of training set
>!![[Pasted image 20220214111623.png]]
## Sliding window detection
- Involves gradually sliding a focused area that takes in readings of an image
>![[Pasted image 20220214111345.png|300|300]]
in this example the area can be shaped roughly like that of a pedestrian
>![[Pasted image 20220214111505.png|300|300]]

## Positive detection
>![[Pasted image 20220214111833.png]]
white areas correspond to areas where the program feels theres a high probability of there being text

- Expansion involves checking if a white pixel is within range of another white pixel. If so more close by pixels have increased probability 
## 1D sliding windows for character segmentation
>![[Pasted image 20220214112728.png]]

# Artificial data synthesis for photo OCR
- One possible way to get training data is to use different fonts, paste them on a random background, giving a training example of a specific letter
>![[Pasted image 20220214113058.png]]
>![[Pasted image 20220214113111.png]]
## Alternative data synthesis approach
- Distort an image and use it for more training data. This is also common in speech recognition 
>![[Pasted image 20220214113237.png]]
>![[Pasted image 20220214113347.png]]

