# Internet
- A network of interconnected set of computers(host)

# The web
- A service, distributed around the world, important for web based information systems eg e-commerce and access databases using WWW.  
- Web pages are written in HTML and transferred between server and client
# Dynamic client / server request / response sequence
>![[Pasted image 20211109094505.png|500|500]]

# 3 tier architecture 
>![[Pasted image 20211109094734.png|500|500]]
- Presentation is mostly whats missing from 2 tier architecture.
## Presentation tier
- GUI
- Data display
- Data input
- Verification (HTML/Javascript input form verification)
- Must not directly interact DBMS
## Logic tier
- Processes data received by users.
- It does not do the updating of the DBMS, it makes the request by pointing it to executable code like SQL.
- Needs to verify format of received data.
## Data tier
- Stores data and returns data to logic tier.
- Data stored in DBMS, all database functions are handled here. 
