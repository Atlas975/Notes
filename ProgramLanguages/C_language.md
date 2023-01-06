#Programming
# C language
# Arrays
## size
> int size=sizeof arr/sizeof arr[0];
## passing arrays in functions
-Example:

> int *arr
# Define constants
### Makes variables purpose more clear by assigning a meaningful name

```c
#define LOWER 0
#define UPPER 20
#define STEP 2

for(int i=LOWER; i<=UPPER; i+=STEP){\
    printf("%d\n",i);
}

```

- The main benefit of constant is only needing to change one line of code if a number needs to be changed.
# Print formatting
### Puts spaces after printing
> printf("%20d %20d",45,54);
### Limits digits after decimal point
> printf("%.2f %10.3f",6.294929491,3.24211);
# While loops
### Guaranteed to execute once
> do {

printf("value of a: %d\n", a); // like a regular while loop but guaranteed to execute at least once\
a = a + 1;\
}while( a < 20 );"
### Infinite loop
> while(1){

break;
}
### Generates number within certain range
> guess=rand()%(upper-lower)+lower
# Input function
> printf("Enter first num:\n");

scanf("%d", &num1);
# Math basic functions

### Power
> printf("This is a power %f\n",pow(2,3));
### Root
> printf("This is a sqrt %f\n",sqrt(36));
## Rounding
### Ceiling
> printf("This is a ceiling %f\n",ceil(36.535));
### Floor
> printf("This is a floor %f\n",floor(36.535));
# Pointers / Indirection
- Use the & operator denoting an address in memory, * is used to declare a pointer variable. Useful for dynamic memory. The space in memory it points to can be changed.
- Pointer example

> char var2[10];
> printf("var1 address is: %x\n", &var1 );

- Pointers are a long hex number regardless of data type, its assigned data type just defines what it points to.
- Pointer example 2:

![[Pasted image 20211115142951.png]]

> Address of var variable: bffd8b3c

Address stored in ip variable: bffd8b3c
Value of *ip variable: 20

- Returning an array without brackets returns memory address of first index.
- Passing memory addresses allows methods to edit variables on a global scale.
- Pointer values eliminate duplicate memory, a pointer can be used to point to a variable for every reference. This is not the case with regular variables where duplicate memory is needed for every copy.

> %p is what can print pointer address
# String functions
> ![[Pasted image 20211126122507.png]]
# Passing strings
> char *compare(char *prompt){

return prompt;\
}
# String to int
> ![[Pasted image 20211206122503.png]]

- requires <stdlib.h>st
# String to double
> atof function
> ![[Pasted image 20211208110535.png|300|300]]
# Length of a string in C (excluding null byte)
> strlen(“Hello”)

returns: 5
## String copy condition
> char text [ 10 ];
> strcpy(text, “can do”);

- output(strlen(text)) will return 6
# String operators in C
## Testing if two strings are equal
> (strcmp(str1, str2)==0);

- If two strings are equal, function will return 0

> (strcmp(str1, str2)>0);

- If str1 is greater than str2, function will return a number greater than 0

> (strcmp(str1, str2)<0);

- If str1 is smaller than str2, function will return a number smaller than 0.
## ASCII table for character classifying
> ![[Pasted image 20211126192324.png]]
> ![[Pasted image 20211126192827.png]]
## Comparing certain number of characters
> int res = strncmp(s1, s2, n);

- Only compares up to character n.
## Scanning a string
> char cString[100] = “hello”;
### Scanning by length:
> int count = strlen(cString);

for (int i = 0; i< count; i++)
printf( “%c”, cString [i]);
### Terminating with null byte
> int index = 0;

while (testString[index] != '\0') {\
printf("%c", testString [index]);\
index++; //remember to incremente\
}
## Array of strings
- Strings act as a 1D array in C, thus requiring a 2D array

> char arr[4][9]

{"Bell","Orange","Cherry","Horseshoe"};\
for (int i=0; i<4; i++){\
printf("%s,",arr[i]);\
}
OR

> ![[Pasted image 20211205174952.png]]

- Passing a 2d char array into a function

> ![[Pasted image 20211205190548.png]]
#### Single quotes represent individual character, double quotes represent strings including null byte
- Arrays and pointers are also interchangeable eg:

> char *z = '"Hello"

- Note the pointer cant iterate through characters.
# Bool library
- Bool data type with the required library will return a 1 if the value is anything other than the number 0.
```c
#include<stdio.h>
#include<stdbool.h>
int main()
{
_Bool temp=389833
_Bool temp2=True
printf("Value is : %d and %d", temp1,temp2)
}
```
# File reading
- Reading modes:

> ![[Pasted image 20211203152955.png]]

- Process:

> ![[Pasted image 20211205150851.png]]
> ![[Pasted image 20211205152426.png]]

- Example code:

> ![[Pasted image 20211205162129.png]]
## Useful functions
> ![[Pasted image 20211205152530.png]]

- Note, include string.h
# MALLOC
> ![[Pasted image 20211206091551.png]]

- Note that the sizeof function will return the number of bytes of a students, with the MALLOC function actually allocating the required space.
- Returns null if failed
# Free
- Used to release unused memory

> free()
# Switch case operator
> ![[Pasted image 20211207214353.png]]

- Note that switch is only intended to compare integers and/or single chars
# Casting
- ![[Pasted image 20211216151930.png]]
- The cast tells the compiler to pretend the value is a character pointer
# getch()
- Pauses ouput console until key press
# Structs and unions
[[C_language]] [[Computer_memory]]

- A structure contains an ordered group of data objects
- Each data object in a structure is called a member
- A union is similar except all data objects start in the same memory location
- Unions can only represent the value of one of its members at a time
## Vector implementation with structs
- Creating new vector block

> ![[Pasted image 20211206073714.png]]

- Full vector creation

> ![[Pasted image 20211206073920.png]]
## Unions
- Union example:

> ![[Pasted image 20220315113934.png]]
> ![[Pasted image 20220315114002.png]]
# Records
- A method of holding multiple properties, good for representing an entity eg the characteristics of a student. This is needed as C does not have encapsulation.
- It is not homogeneous like an an array, it is heterogeneous
- Components are called fields

[[Relations]]

> ![[Pasted image 20211203172314.png]]
## Example of records in C
> ![[Pasted image 20211202122712.png]]

Malloc can be used to allocate space for a new record
## Creating new record instance
> ![[Pasted image 20211203235040.png]]
## Allocating variables in record
> ![[Pasted image 20211203235114.png]]

- The record. format is also how a variable is accessed
## Array of records
- Records is a user defined type, as such an array of pointers to student records can be made:

> ![[Pasted image 20211203235434.png]]
## Adapting to lack on encapsulation
- Since attributes aren't hidden, a case statement can be used to address this:

> ![[Pasted image 20211203235641.png]]
## Typedef
- Method of naming structs removes the need to call the name struct node by naming it something like Node
# C Preprocessor
> ![[Pasted image 20220308111017.png]]
## Initial processing
> ![[Pasted image 20220308111501.png]]
# Tokenization
- Input C file converted into sequence of pre-processing tokens
- These fall into classes:

> • Identifier: any sequence of letters, digits, or underscores, begining

with a letter or underscore\
• Number: any C integer and floating point constants (plus more)\
• String literals: string/character constants and header file names

- After this is done, code can be passed directly to the compiler
# Preprocessing language features
> • Inclusion of header files. F ile declarations; substituted in your

program.\
• Macro expansion. abbreviations for C code fragments. The\
preprocessor replaces macros with their definitions throughout the\
program.\
• Conditional compilation. Include or exclude code segments from\
compilation based on various conditions.\
• Diagnostics. You can detect problems at compile time and issue\
errors or warnings.
# Header files
- The preprocessor scnas the include before continuing with the file

> ![[Pasted image 20220308114116.png]]
# Macros
## Function like macros
> ![[Pasted image 20220308114157.png]]
## Undifined macros
> ![[Pasted image 20220308114441.png]]
# Function pointers
[[C_language]]

> ![[Pasted image 20220315141910.png]]

- Assigning function pointers

> ![[Pasted image 20220315142345.png]]

- Invoking function pointers

> ![[Pasted image 20220315142411.png]]

- Usage

> ![[Pasted image 20220315142814.png]]

# Makefiles 