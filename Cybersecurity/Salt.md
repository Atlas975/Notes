> [!important]- Metadata
> **Tags:** #Cybersecurity 
> **Located:** Cybersecurity
> **Created:** 25/04/2024 - 15:41
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Salt
- A random piece of data added to a user's input, typically a password, before it's hashed
- These are mainly used to defend against the pre-computed attacks such as:
    - **Dictionary**: a controlled brute-force attack that inputs commonly used passwords to compare with the stored hashes 
    - **Rainbow table**: makes use of a large database of hashes and their input, allowing for easy lookup of duplicate hashes that may be stored
    

![[Pasted image 20240425154354.png|450|450]]

## Salting process
1. **Randomness**: When a user creates a password, a unique salt is randomly generated
2. **Combining**: The salt is then combined with the password (usually by appending)
3. **Hashing**: The combination of the salt and password is then hashed
4. **Storage**: Both the hash and the salt are stored in the database. The salt is stored so that it can be retrieved whenever a user attempts to log in using their unsalted password