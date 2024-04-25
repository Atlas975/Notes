> [!important]- Metadata
> **Tags:** #Cybersecurity 
> **Located:** Cybersecurity
> **Created:** 24/04/2024 - 17:15
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Access controls
- Set of security features that control how users and systems interact
- Helps enforce [[Security_principles|security principles]] by prevent unauthorised access
- Level of authorisation is determined after successful authentication

## Access control components
- **Access**: flow of information between subject and an object 
- **Subjects**: active entities that requests access to an object or it's data 
- **Objects**:  passive entities that contain information

## Steps for subject to access an object
![[Pasted image 20240425151529.png|275|275]]

### Identification
- Ensure subject is the entity it claims to be 
- Identification info may be public (eg a username), this needs to be unique
- An identity management system (IdM) describes the management of these identities 
### Authentication
- Authentication is done based on private information, this comes in 3 forms:
	- **Authentication by knowledge**: something a person knows 
	- **Authentication by ownership**: something a person has 
	- **Authentication by characteristic**: something a person is
- Strong authentication uses multiple of these (eg two-factor authentication
- Single sign
### Authorisation
- The access given to the subject based on trust and subject's need-to-know.
- Enforced by roles, location, and time (eg a root user can have all permissions)
### Accountability
- Tracked through user, system, and application activities.
- Tools used for audit and legal documentation.
