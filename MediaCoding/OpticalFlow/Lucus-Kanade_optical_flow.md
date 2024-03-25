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

$$[I_{x}(p_{1})u+ I_{y}(p_{1})v+I_{t}(p_{1})=0, \ I_{x}(p_{2})u+ I_{y}(p_{2})v+I_{t}(p_{2})=0,\ \dots]$$
$$\begin{bmatrix} I_x(p_1) & I_y(p_1) \\ I_x(p_2) & I_y(p_2) \\ \vdots & \vdots \\ I_x(p_{25}) & I_y(p_{25}) \end{bmatrix} \begin{bmatrix} u \\ v \end{bmatrix} = - \begin{bmatrix} I_t(p_1) \\ I_t(p_2) \\ \vdots \\ I_t(p_{25}) \end{bmatrix}$$

- This can be represented as $A\cdot d=b$, the goal is to find d which represents the unknowns
## Least squares solution
- One solution to finding d is the following:

$$\left[ \begin{array}{cc} \sum I_x I_x & \sum I_x I_y \\ \sum I_x I_y & \sum I_y I_y \\ \end{array} \right] \left[ \begin{array}{c} u \\ v \\ \end{array} \right] = - \left[ \begin{array}{c} \sum I_x I_t \\ \sum I_y I_t \\ \end{array} \right]$$
- This is equivalent to $(A^TA)\cdot b=A^T\cdot b$
