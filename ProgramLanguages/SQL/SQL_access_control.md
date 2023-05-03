> [!important]- Metadata
> **Tags:** #Programming #Databases 
> **Located:** ProgramLanguages/SQL
> **Created:** 03/05/2023 - 02:31
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# SQL access control
- Each user is given appropriate access rights (or privileges) on specific database objects
- Users obtain certain privileges when they create an object and can pass some or all of these privileges on to other users at their discretion
- This is known as **discretionary access control** and is used by most [[SQL_language|SQL]] versions

## SQL authorisation
- All queries performed on behalf of specific user or make use of trusted connections
- The [[Database_systems|database]] administer is responsible for setting credentials 
- Access right determine:
	- What database objects a user can reference 
	- What operations can be performed by the user on which objects

## SQL privileges 
-  **SELECT** – To retrieve data from a table/view
- **INSERT** – To insert new rows into a table, can be restricted to specific columns
- **UPDATE** – To modify rows of data in a table, can be restricted to specific columns
- **DELETE** – To delete rows of data from a table
- **REFERENCES** – To reference columns of a table named in integrity constraints, can be restricted to specific columns


## SQL Grant command 
- Allows the DBA to assign permissions to users 

```sql
GRANT [privilege list | ALL PRIVILEGES]
ON [Object_name]
TO [Authorization_list | PUBLIC ]
[WITH GRANT OPTION]
```


## SQL Revoke command 
- The REVOKE statement can remove all or some of the privileges previously granted
```sql
REVOKE [privilege_list | ALL PRIVILEGES ]
ON object_name
FROM [Authorization_list | PUBLIC]
```

## SQL security best practices 
- Assign privileges based on groups rather than individual users
- Do not over grant permissions 