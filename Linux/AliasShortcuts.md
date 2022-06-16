# Alias shortcuts 
```shell
gitTotal() {
    git add .
    git commit -m "$*"
    git push
}
alias mgit=gitTotal;
newCode(){
    touch $*
    code $*
    clear
    echo -e "created\e[1;32m $*\033[0m in \e[1;33m$(pwd | rev | cut -f1 -d'/' - | rev)\033[0m on\e[1;32m $(uname -sr  | cut -f1 -d'-')\033[0m"
}
alias ncode=newCode
alias xclean="sudo rm -rf ~/.local/share/Trash/* || True && rm -rf ~/Downloads/*" 
alias fedup="sudo dnf update && sudo dnf upgrade";
alias farbros="conda activate /home/adilw/anaconda3/envs/farbros";
alias orion="/home/adilw/Dropbox/Adil_Code/Orion; clear; farbros";
alias notes="/home/adilw/Dropbox/Adil_Notes; clear";
alias trim="conda deactivate;clear";
alias home="/home/adilw/; trim; pfetch";
javaRun(){
	javac *.java 
	java $*
}
alias mjav=javaRun;
alias cjav="rm *.java";
alias arus="cargo build; cargo fmt; cargo run";
newCrate(){cargo new $*; cd $*/src; code main.rs}
alias nrus=newCrate;
newGCCRun(){gcc $*.c; $*}
alias gcca=newGCCRun;
```
