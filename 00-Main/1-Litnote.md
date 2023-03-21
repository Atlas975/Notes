


$$\rho(\text{Success},\gamma_{\text{Attacker\_{ID},Attacker\_{Name}}}(\sigma_{\text{Result='Hit'}\cup \text{Result='Victory'}}(\text{Combat})))$$
$$\rho(\text{A, }\Pi_{Attacker\_{ID ,}Attacker\_{Name},COUNT(Result)}(\text{Success}))$$
$$\rho(C, Characters)$$
$$\rho(\text{ResultSet}(C \Join_{C.Account\_{ID}=A.\text{Attacker\_{ID},}C.Account\_{Name}=A.Attacker\_{Name}} A))$$
$$\Pi_{\text{C.Name}}(ResultSet) \text{ ORDER BY COUNT(Result) DESC LIMIT 5} $$
$$\Pi_{Attacker\_{Name},\text{COUNT(*)}}(\gamma_{\text{Attacker\_{ID},Attacker\_{Name}}}(\sigma_{\text{COUNT(*)}> 5}(\text{Combat})))$$




$$\rho(\text{A, }\Pi_{Attacker\_{ID ,}Attacker\_{Name},COUNT(Result)}(\gamma_{\text{Attacker\_{ID},Attacker\_{Name}}}\text{(Combat)}))$$
$$\rho(C, Characters)$$
$$\rho(\text{ResultSet}(C \Join_{C.Account\_{ID}=A.\text{Attacker\_{ID},}C.Account\_{Name}=A.Attacker\_{Name}} A))$$
$$\Pi_{C.Name}(ResultSet) \text{ ORDER BY A.COUNT(*)}$$




$$\rho(C, \Pi_{Account\_{ID},COUNT(Name)}(\sigma_{COUNT(Name)>5}(\gamma_{Account\_{ID}}(Characters )))$$
$$\rho(ResultSet , C \Join_{Accounts.ID=C.Account\_{ID}}Accounts)$$
$$\Pi_{A.Forename,A.Surname}(ResultSet)$$






$$\Pi_{Item}(\sigma_{\text{COUNT(Item)}\geq 10}(\gamma_{Item}(\text{Inventories})))$$



$$\begin{align*}
1+1=2
\end{align*}$$



