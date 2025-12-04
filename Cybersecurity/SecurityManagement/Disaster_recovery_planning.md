> [!important]- Metadata
> **Tags:** #Cybersecurity 
> **Located:** Cybersecurity/SecurityManagement
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Disaster recovery planning
- Used when an organisation cannot mitigate the impact of a [[Risk_management|risk]] while its [[Incident_response_planning|occurring]], this is also necessary when the level of damage is so severe that it cannot be recovered from quickly
- When a situation is a disaster, priority changes from containing an incident to securing the most valuable assets so that the organisation survives in the long term 

## DRP process
- Regular testing is needed to ensure the DRP works, this can be done in various ways:
    - **Testing plan**:
    - **Live exercises**:
    - **Tabletop exercises**: cheap simulation, participants expected to know the plan