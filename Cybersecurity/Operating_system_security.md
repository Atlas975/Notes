> [!important]- Metadata
> **Tags:** #Cybersecurity #OperatingSystems 
> **Located:** Cybersecurity
> **Created:** 27/04/2024 - 15:48
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Operating system security
- An [[Operating_system_design|OS]] and it's applications present numerous opportunities for security risk (both human and non-human) due to the large amount of data contained in it's numerous systems
- These threats fall into 4 major categories:
	- **Data Exposure**: Risks to data confidentiality.
	- **Data Tampering**: Risks to data integrity.
	- **Denial of Service**: Threatens the availability of systems.
	- **Viruses**: Aim to breach the system's defence


![[Pasted image 20240427165716.png|350|350]]

## Cryptographic protection
> - Data confidentiality can be handled via [[Cryptography|cryptographic]] methods such as [[Symmetric_encryption|symmetric]] \/ [[Asymmetric_encryption|asymmetric]]  cryptography and [[Hashing|hash functions]] 
- The main risk regarding this is the potential for keys to be compromised (secrets hard to protect)

![[Pasted image 20240427171524.png|400|400]]
### Trusted platform module
- A hardware implemented cryptoprocessor, this can perform cryptographic operations in main memory and use secondary memory for key storage 
- Due to being hardware implemented, this is both fast and secure

## OS access control
- Permissions in an OS are controlled via an [[Linux_permissions|access matrix]]
- [[Security_models|Multilevel security]] models are also useful for handling this 

## Persistent security concerns
- **Confinement problem**: prevents processes from transmitting data outside its intended scope
- **Covert Channels**: unintended paths of communication that may be exploited

## Technical attacks
- **Memory leaks**: when memory allocated to a process is not freed,  processes that do this can be exploited leading to a DDOS attack via memory starvation
- **String formatting attacks**:  occurs when valid string formatting is not used with c function such as `printf()`, attackers can pass a list of parameters to be executed as a command 
- **Integer overflow**: when an arithmetic operation creates an out of bounds value, can be exploited to cause buffer overflows or put the program in an insecure state 
- **Code Injection**: makes a program execute unintended commands, result of poor input validation
- **Buffer overflow**: occurs when data exceeds memory bounds, when this causes a segmentation fault the opportunity arises to insert a malicious payload to be executed

![[Pasted image 20240427200252.png|350|350]]