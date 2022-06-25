
# Linux_usage
created: 2022-06-23 16:03
#OperatingSystems

---
 
[[Operating_systems]]
## Linux filesystem 
>![[Pasted image 20220618155352.png]]
>![[Pasted image 20220426161528.png]]

## Linux filesystem permissions
>![[Pasted image 20220426155019.png]]


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



# Personal alias shortcuts 
```shell
gitTotal() {
    git add .
    git commit -m "$*"
    git push
}
alias pgit=gitTotal;
gitAuto() {
    git add .
    git commit -m "Auto commit"
    git push
}
alias agit=gitAuto;
gitNew(){
    git clone git@github.com:Atlas975/$*
    cd $*
    git remote set-url origin https://github.com/Atlas975/$*
    clear
    echo -e "cloned and linked repository\e[1;32m $*"
}
alias ngit=gitNew;
alias cgit="git clone $*"
newCode(){
    touch $*
    code $*
    clear
    echo -e "\e[0;34m$USER \033[0mcreated\e[1;32m $*\033[0m under \e[1;33m$(pwd | rev | cut -f1 -d'/' - | rev)\033[0m on\e[1;32m $(uname -sr  | cut -f1 -d'-')\033[0m"
}
alias ncode=newCode
testCode(){
   cd /home/adilw/Dropbox/Adil_Code/TempCode
   rm $*
   ncode $*
}
alias tmpcode=testCode
alias xclean="sudo rm -rf ~/.local/share/Trash/* ; sudo rm -rf ~/Downloads/*"
alias fedup="sudo dnf update && sudo dnf upgrade";
alias farbros="conda activate /home/adilw/anaconda3/envs/farbros";
alias orion="/home/adilw/Dropbox/Adil_Code/Orion; clear; farbros";
alias notes="/home/adilw/Dropbox/Adil_Notes; clear";
alias trim="conda deactivate;clear";
alias home="/home/adilw/; trim; pfetch";
alias qnote="nano /home/adilw/Dropbox/Adil_Notes/00-Main/1-Litnote.md"
javaRun(){
	clear
	javac *.java
	java $*
}
alias mjav=javaRun;
alias cjav="rm *.java";
alias arus="clear; cargo fmt; cargo build; cargo run";
newCrate(){
	cargo new $*
	cd $*/src;
	clear
	echo -e "\e[0;34m$USER \033[0mcreated\e[1;32m $*\033[0m under \e[1;33m$(pwd | rev | cut -f1 -d'/' - | rev)\033[0m on\e[1;32m $(uname -sr  | cut -f1 -d'-')\033[0m"
	code main.rs
}
alias nrus=newCrate;
newGCCRun(){gcc $*.c; $*}
alias gcca=newGCCRun;```