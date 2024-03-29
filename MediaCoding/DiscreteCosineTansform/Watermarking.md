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


## Watermark lifecycle


![[Pasted image 20240329154306.png|450|450]]

### Embedding phase

- Uses the host image (I) and the data to be embedded (W) and produces the watermarked images. 
- An optional secret key is used during the embedding phase, making it unique and secure. 
- This ensures that only  key owners can embed, detect, or correctly extract the watermark

![[Pasted image 20240329154439.png|400|400]]

### Attack phase
- When an attempted modification is made to the watermarked data by an outside entity
- Attacks fall into two main categories 
	- **Robustness attack**: intended to remove watermark eg. cropping, filtering, compression etc
	- **Presentation attack**: 

### Detection phase


![[Pasted image 20240329155625.png|400|400]]

## Watermark perception
- **Visible:** watermark is a translucent, used to show visible noticeable ownership 
- **Invisible:** watermark is embedded into the data in a way that's not noticed in the visible data, used as covert evidence of ownership
- **Dual**: combination of both, with an invisible watermark used as a backup to the the visible one

## Watermark robustness
- **Fragile**: easily destructible upon any tampering, suitable for ==image authentication==
- **Robust**: designed to survive various changes such as geometric attacks (rotation, scaling etc) and general noise such as that caused from compression,  suitable for ==ownership protection==
- **Semi-fragile**: survives general noise and compression but will be sensitive to geometric attacks, suitable for ==content authentication==
## Watermark uses
- **Ownership Assertion:** proving ownership by embedding a watermark using a private key.
- **Data Authentication:** detecting modifications to ensure data authenticity (fraud detection)
- **Fingerprinting:** preventing unauthorised duplication by embedding a unique watermark in each copy. Allows for the origin of this comprised copy to be determined by it's fingerprint 
- **Content Protection:** protecting multimedia content previews by embedding visible watermarks.
- **Usage Control and Copy Protection:** controlling the number of permissible copies using digital watermarks that indicate the number of copies permitted 
