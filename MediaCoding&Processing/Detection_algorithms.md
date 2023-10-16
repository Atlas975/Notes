# Detection_algorithms
created: 2022-07-31 14:22
#MediaEncoding

---

[[Convolutional_networks]][[Computer_vision]]

- Object detection requires both image classification and detection of where the actual image of focus is in a view. This makes detection algorithms necessary.
- This is known as classification with localization
- The key to these are landmarks, these need to be in fixed locations and help localize the image in focus
# Convolutional sliding windows
- A sliding window moves through segments of an image with the purpose of localizing a specific object. This process is expensive to be performed. However, a convolution can be done in a single forward pass using a network such as the following:

![[Pasted image 20220907000146.png|450|450]]this results in parameter sharing, significantly reducing computational cost 
## YOLO algorithm
- Stands for you only look once
- The bound box in sliding windows is unlikely to fully align with it's intended object in focus. In order to not waste computational resources, the yolo algorithm helps speed up real time detection
- This segments the image into separate cells containing information whether one of the image classes was detected ($P_{c}$)  in that gridcell. This is based on the center of the object, what objects are present and what the boundary box for that gridcell is.


![[Pasted image 20220907000824.png|450|450]]
channels represent number of classes, note objects are always assigned to only one gridcell

$$\begin{align*}
b_{x}=\text{determined by position between 0 and 1}\\
b_{y}=\text{determined by position between 0 and 1}\\
b_{h}=\text{expressed as fraction of overall height of box}\\
b_{w}=\text{expressed as fraction of overall width of box}\\
\end{align*}$$


![[Pasted image 20220802003445.png|450|450]]


## Intersection over union
- A metric for determining how well an object is localized by a boundary, the higher the IOU the more accurate the boundary box

![[Pasted image 20220802112459.png|450|450]]![[Pasted image 20220802003901.png|450|450]]

## Per-pixel class labeling
![[Pasted image 20220801223449.png|450|450]]


# U-net
![[Pasted image 20220801223553.png|450|450]]
$$$
