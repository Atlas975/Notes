# cd
- Change directory
## cd / 
- takes to root directory
## cd .. 
- go back one directory
- Longer versions can be used for multiple movements cd ../folder
# ls
- Show content of directory
## ls -a
- Shows hidden folders

# pstree
- Lists active processes

# for loop
performs a for loop
>for i in {0..10..2}; do echo "Welcome $i times"; done

# touch
- Creates files in current directory
## touch {a..z}.txt     
- Creates 26 files
- Loop to create 152 files:
>for f in {a..z} {A..Z} {0..99}
do
echo hello > "$f.txt"
done

# mkdir
- Creates directory 
- eg:
> mkdir anyFolder
# echo
- Prints line of text
## echo {}{}
- Multiply lists by each other
- eg:
>echo {1,2,3}{a,b,c}
output=1a 1b 1c 2a 2b 2c 3a 3b 3c

# cat
- Concatenates files 
> cat file.txt
- reads out content of file
> cat filename1 filename2>filename3
- Joins two files into filename3, combining them

# gcc [[C_basics]]
- C compiler on command line (GNU) 
## gcc-o
- creates executable file
- eg:
> gcc -o anyName anyProgram.c

to execute:
> ./anyName 

# wget
- Allows for downloads off online
> wget downloadLink

# history
- Gives full list of command usage

# nano
- Allows text file editing on command line
> nano file1.txt
- ctrl o to overwrite file

# Fun command
- Train animation
>sl
