# Memory structure
![[Pasted image 20211116110439.png]]
- Note a NAND gate is only 0 if both inputs = 1
# Clocked D flip flop
- The latch is what decides weather or not an input is accepted
>![[Pasted image 20211116104526.png|400|500]]

- Latching a 0
![[Pasted image 20211117184332.png]]

- Example register operation "ADD A,A 10", A is both source and destination:
![[Pasted image 20211117190726.png]]
## Master slave flip flop
>![[Pasted image 20211117191207.png]]
- Data only moves from the master to the slave if the latch = 0. In this case the master will not be functional while the slave will be.
- The main advantage of master slave is that instead of the output constantly changing from 1 to 0, the output only changes ONCE in a clock cycle (cycling)
- Multiple master-slave flip-flop register:
>![[Pasted image 20211117193752.png]]

# 3 Data bus register
![[Pasted image 20211117194428.png|500|500]]