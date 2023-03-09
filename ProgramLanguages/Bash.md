> [!important]- Metadata
> **Tags:** #Programming 
> **Located:** ProgramLanguages
> **Created:** 27/02/2023 - 16:44
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Bash

## Operation ordering
>
$$\text{;}=\text{sequential ordering of operations}$$
$$\text{\&}=\text{operations performed in parallel}$$
$$\text{\&\&}=\text{next operation perfomed only if previous operation succeeds}$$
$$\text{|}=\text{connects operations together regardless of exit status}$$
$$\text{||}= \text{next operation perfomed only if previous operation fails}$$

- A successful operation returns an exit status of 0 

## Bash ANSI colour codes
```bash
Black        0;30     Dark Gray     1;30
Red          0;31     Light Red     1;31
Green        0;32     Light Green   1;32
Brown/Orange 0;33     Yellow        1;33
Blue         0;34     Light Blue    1;34
Purple       0;35     Light Purple  1;35
Cyan         0;36     Light Cyan    1;36
Light Gray   0;37     White         1;37
```

# Cd
- Change directory
## Cd /
- takes to root directory
## Cd ..
- go back one directory
- Longer versions can be used for multiple movements cd ../folder
# Ls
- Show content of directory
## Ls -a
- Shows hidden folders
# Pstree
- Lists active processes
# For loop
performs a for loop
> for i in {0..10..2}; do echo "Welcome $i times"; done
# Touch
- Creates files in current directory
## Touch {a..z}.txt
- Creates 26 files
- Loop to create 152 files:

> for f in {a..z} {A..Z} {0..99}

do
echo hello > "$f.txt"
done
# Mkdir
- Creates directory
- eg:

> mkdir anyFolder
# Echo
- Prints line of text
## Echo {}{}
- Multiply lists by each other
- eg:

> echo {1,2,3}{a,b,c}

output=1a 1b 1c 2a 2b 2c 3a 3b 3c
# Cat
- Concatenates files

> cat file.txt

- reads out content of file

> cat filename1 filename2>filename3

- Joins two files into filename3, combining them