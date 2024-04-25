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
- AC policies are enforced by AC mechanisms, AC models are mathematical models designed to enforce these on a target system

![[Pasted image 20240425160551.png|250|250]]

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
- Single sign-on (SSO) systems make this more convenient by having one authentication platform that acts as security for multiple systems 
### Authorisation
- The access given to the subject based on trust and subject's need-to-know.
- Enforced by roles, location, and time (eg a root user can have all permissions)
### Accountability
- Tracks all activity in a system in order to traceback any potential issues 
- This can create a large amount of data, so auditing tools are needed to filter it

## Access control policies
- The set of rules established by an organisation to regulate who can view or use resources in a computing environment. These are central to information security 
- Various policies exist that offer tradeoffs based in security and practicality 
- These often make use of the ==Bella-LaPadula== model (subject clearance compared with object's classification). Subject are also unable to write down so no unauthorised lower security writing
- The ==Biba model== is also commonly used (can read up and write down only)
### Mandatory Access Control (MAC)
- **Predefined Access Control**: access is decided by strict, fixed rules set only by the sysadmin
- **Security Labels**: every file has a label stating the clearance level required for access 
### Discretionary Access Control (DAC)
- **User-Set Permissions**: the person who makes a file can control permissions regarding it 
- **Access Control Lists**: each file has a list saying which users can access it 
### Role-Based Access Control (RBAC)
- **Role-Dependent Access**: what a user can access depends on their role 
- **Least Privilege & Separation of Duties**: enforces least privilege needed to avoid internal threats
### Attribute-Based Access Control (ABAC)
- **Attribute-Based Rules**: evaluates attributes (user, resource, context) to determine access
- **Dynamic and Fine-Grained**: provides dynamic and adaptable access control
### Risk-Adaptive Access Control (RAdAC)
- **Risk Evaluation**: access rights can change based on real-time risks 
- **Context-Sensitive Adaptation**: increased security responsiveness to potential threats
