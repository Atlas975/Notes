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
- Various policies exist often depending on how strict these need to be
### Mandatory Access Control (MAC)
- **Predefined Access Control**: access is decided by strict, fixed rules set only by the sysadmin
- **Security Labels**: every file and user has a label that says who can open it
### Discretionary Access Control (DAC)
- **User-Set Permissions**: All==ows resource owners to decide and set access permissions for other users.==
- **Access Control Lists**: Implements Access Control Lists (ACLs) for specifying individual user access to various objects.
### Role-Based Access Control (RBAC)
- **Role-Dependent Access**: Assigns access rights based on roles within an organization, streamlining permissions management.
- **Least Privilege & Separation of Duties**: Enforces the principles of least privilege and separation of duties to minimize insider threats.
### Attribute-Based Access Control (ABAC)
- **Attribute-Based Rules**: Determines access by evaluating attributes (user, resource, context) against defined policies.
- **Dynamic and Fine-Grained**: Provides highly dynamic and granular access control, adaptable to a variety of scenarios.
### Rule-Based Access Control (RB-RAC)
- **Rule-Defined Restrictions**: Access is determined by rules, such as time or location-based restrictions, set by administrators.
- **Automated Enforcement**: Rules are automatically applied by the system, often used for system-level control over user access.
### Risk-Adaptive Access Control (RAdAC)
- **Risk Evaluation**: Access rights are dynamically adjusted based on the real-time assessment of risk factors and threat levels.
- **Context-Sensitive Adaptation**: Policy adapts to the changing context, enhancing security responsiveness to potential threats.