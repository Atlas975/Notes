
# C to mips
>![[Pasted image 20211215124140.png]]


# MIPS intro program
>![[Pasted image 20211215111739.png]]
- ascizz automatically adds null terminator, ascii does not
>![[Pasted image 20211215112807.png]]

# Fibo program
>![[Pasted image 20220125113609.png]]

# MIPS syscall
- Triggers a system call exception [[MIPS_errorHandling]] that requests a service from the operating system using the service number that can be passed into register $v0. It then retrieves a return result from the result registers
- Execution
>![[Pasted image 20220125111510.png]]
- Syscall service numbers:
>![[Pasted image 20220125111955.png]]
>![[Pasted image 20220130170223.png]]

# MIPS operations
>![[Pasted image 20220515200017.png]]

# MIPS opcode
>![[Pasted image 20220515195933.png]]
>![[Pasted image 20220606154939.png]]