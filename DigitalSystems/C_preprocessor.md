# C Preprocessor
>![[Pasted image 20220308111017.png]]

## Initial processing
>![[Pasted image 20220308111501.png]]

# Tokenization
- Input C file converted into sequence of pre-processing tokens
- These fall into classes:
>• Identifier: any sequence of letters, digits, or underscores, begining  
with a letter or underscore  
• Number: any C integer and floating point constants (plus more)  
• String literals: string/character constants and header file names
- After this is done, code can be passed directly to the compiler

# Preprocessing language features
>• Inclusion of header files. F ile declarations; substituted in your  
program.  
• Macro expansion. abbreviations for C code fragments. The  
preprocessor replaces macros with their definitions throughout the  
program.  
• Conditional compilation. Include or exclude code segments from  
compilation based on various conditions.  
• Diagnostics. You can detect problems at compile time and issue  
errors or warnings.

# Header files
- The preprocessor scnas the include before continuing with the file
>![[Pasted image 20220308114116.png]]

# Macros
## Function like macros
>![[Pasted image 20220308114157.png]]

## Undifined macros
>![[Pasted image 20220308114441.png]]
