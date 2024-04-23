---
aliases:
  - Steganography
---

> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/DiscreteCosineTansform
> **Created:** 28/03/2024 - 20:24
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Watermarking
- The process of embedding information into a digital signal in a way that's difficult to remove
- This signal may represent any piece of data, but the watermark should be carried in any copy

![[Pasted image 20240329162310.png|350|350]]

- [[Media_coding#Spatial domain|Spatial domain]] watermarking involves direct modification of pixels, not robust to compression 
- [[Media_coding#Frequency domain|Frequency domain]] watermarking involves frequency coefficients, location and strength based on perception rules and is more robust
- Watermarks need to consider the following parameters 
	- Tranparancy / perception
	- Robustness 
	- Security
	- Capacity
	- Reversibility
	- Complexity / cost

## Watermark phases


![[Pasted image 20240329154306.png|450|450]]

### Embedding phase

- Uses the host image (I) and the data to be embedded (W) and produces the watermarked images. 
- An optional secret key is used during the embedding phase, making it unique and secure. 
- This ensures that only  key owners can embed, detect, or correctly extract the watermark

![[Pasted image 20240329154439.png|400|400]]

### Attack phase
- When an attempted modification is made to the watermarked data by an outside entity
- Attacks fall into two main categories 
	- **Robustness attack**: targeted removal of a watermark eg. cropping, filtering or compression
	- **Presentation attack**: geometric transformations such as rotations or scaling

### Detection phase
- An algorithm applied to an attacked watermarked to attempt to extract it's watermark 
- The attacked image is always fed as input (I') but may also optionally need the original image or original watermarked image. Additionally 

![[Pasted image 20240329155625.png|400|400]]
- The optional key used in embedding may be required to correctly extract and authenticate the watermark. This helps in confirming the source and integrity of the watermarked data
- This also helps avoid false positive detections of a watermark, as detection requires specific keys


## Watermark extraction types
- **Non-blind**: requires the original image and the watermark
- **Semi-blind**: requires the watermark  
- **Blind**: does not require the original image or it's watermark
## Watermark perception
- **Visible:** watermark is a translucent, used to show visible noticeable ownership 
- **Invisible:** watermark is embedded into the data in a way that's not noticed in the visible data, used as covert evidence of ownership
- **Dual**: combination of both, with an invisible watermark used as a backup to the the visible one

## Watermark robustness
- **Fragile**: easily destructible upon any tampering, suitable for ==image authentication==
- **Robust**: designed to survive various changes such as geometric attacks (rotation, scaling etc) and general noise such as that caused from compression,  suitable for ==ownership protection==
- **Semi-fragile**: survives general noise and compression but will be sensitive to geometric attacks, suitable for ==content authentication==

## Watermark insertion strategy
- The following need to be considered when inserting a watermark:
- **Luminance sensitivity**: higher background brightness $\to$ lower watermark visibility 
- **Texture sensitivity**: stronger texture $\to$ lower watermark visibility 
    - Texture is estimated after quantising the [[Discrete_cosine_transform|DCT]] coefficients using [[JPEG#JPEG quantisation|JPEG quantisation]] , the more non-zero coefficients left the higher the texture. 

![[Pasted image 20240329233401.png|200|200]]
- **Location sensitivity**: the centre of an image is perceptually the most important to an image 
## Watermark uses
- **Ownership Assertion:** proving ownership by embedding a watermark using a private key.
- **Data Authentication:** detecting modifications to ensure data authenticity (fraud detection)
- **Fingerprinting:** preventing unauthorised duplication by embedding a unique watermark in each copy. Allows for the origin of this comprised copy to be determined by it's fingerprint 
- **Content Protection:** protecting multimedia content previews by embedding visible watermarks.
- **Usage Control and Copy Protection:** controlling the number of permissible copies using digital watermarks that indicate the number of copies permitted 
