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




## Watermark perception
- **Visible:** watermark is a translucent, used to show visible noticeable ownership 
- **Invisible:** watermark is embedded into the data in a way that's not noticed in the visible data, used as covert evidence of ownership
- **Dual**: 
## Watermark uses
- **Ownership Assertion:** Proving ownership by embedding a watermark using a private key.
- **Data Authentication:** Detecting modifications to ensure data authenticity (fraud detection)
- **Fingerprinting:** Preventing unauthorised duplication by embedding a unique watermark in each copy. Allows for the origin of this comprised copy to be determined by it's fingerprint 
- **Content Protection:** Protecting multimedia content previews by embedding visible watermarks.
- **Usage Control and Copy Protection:** Controlling the number of permissible copies using digital watermarks that indicate the number of copies permitted 
