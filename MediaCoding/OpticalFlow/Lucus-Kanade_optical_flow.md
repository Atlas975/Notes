> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/OpticalFlow
> **Created:** 25/03/2024 - 18:26
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Lucus-Kanade optical flow
- Assumes that the surrounding patch has [[Optical_flow#Optical flow assumptions|constant flow / neighbours move together]] 
- Eg. using a 5x5 image patch gives 25 equations:  

![[Pasted image 20240325215100.png|350|350]]

$$\begin{equation}
\begin{split}
\text{That is for all points}\in W\\
I_{x}(p_{i})u+ I_{y}(p_{i})v+I_{t}(p_{i})=0
\end{split}
\end{equation}$$
$$\begin{bmatrix} I_x(p_1) & I_y(p_1) \\ I_x(p_2) & I_y(p_2) \\ \vdots & \vdots \\ I_x(p_{25}) & I_y(p_{25}) \end{bmatrix} \begin{bmatrix} u \\ v \end{bmatrix} = - \begin{bmatrix} I_t(p_1) \\ I_t(p_2) \\ \vdots \\ I_t(p_{25}) \end{bmatrix}$$
- The equation comes from the assumption that the brightness of a pixel remains constant between consecutive frames but its position may change due to motion
- This can be represented as $A\cdot d=b$, the goal is to find $d$ which represents the unknowns
## Least squares solution
- One solution to finding d is the following:


$$\left[ \begin{array}{cc} \sum I_x I_x & \sum I_x I_y \\ \sum I_x I_y & \sum I_y I_y \\ \end{array} \right] \left[ \begin{array}{c} u \\ v \\ \end{array} \right] = - \left[ \begin{array}{c} \sum I_x I_t \\ \sum I_y I_t \\ \end{array} \right]$$
- This is equivalent to $(A^{T}\cdot A)\cdot d=A^T\cdot b$
- This works because there are $n^2$ equations and two unknowns
- The solution can then be found by using the inverse matrix:


$$d=(A^{T}\cdot A)^{-1}\cdot A^T\cdot b$$

## Smooth region limitation
- This method does not perform well on smooth regions
- This is because flow cannot reliably be computed, this method works best with corners using similar logic to [[Harris_corner_detection|HCD]]

![[Pasted image 20240325223114.png|450|450]]