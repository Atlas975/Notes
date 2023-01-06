# Linux_usage
created: 2022-06-23 16:03
#OperatingSystems

---
## Personal alias shortcuts
```shell
alias zshconfig="code ~/.zshrc"
scripts="/home/adilw/Dropbox/Adil_Code/Scripting"

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
gitLink(){
    git remote set-url origin https://github.com/Atlas975/$*
    git pull
    git add .
    git commit -m "Auto commit"
    git push
}
alias lgit=gitLink;
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
    code -r $*
    clear
    echo -e "\e[0;34m$USER \033[0mcreated\e[1;32m $*\033[0m under \e[1;33m$(pwd | rev | cut -f1 -d'/' - | rev)\033[0m on\e[1;32m $(uname -sr  | cut -f1 -d'-')\033[0m"
}
alias ncode=newCode
testCode(){
   cd /home/adilw/Dropbox/Adil_Code/Temp_Code
   ncode temp.$*
}
alias tcode=testCode
clean(){
    echo -e "\e[0;31m";
    echo -e "Cleaning system...";
    sudo dnf autoremove -y;
    rm -rf ~/.local/share/Trash/*
    rm -rf ~/Downloads/*
    rm -rf ~/Pictures/*
}
alias sysclean=clean
updating(){
    echo -e "\e[0;33mChecking for package updates...\e[0m"
    sudo dnf update -y
    echo -e "\e[0;33mChecking for package upgrades...\e[0m"
    sudo dnf upgrade -y
}
alias fedup=updating
alias farbros="conda activate /home/adilw/anaconda3/envs/farbros";
alias orion="/home/adilw/Dropbox/Adil_Code/Orion; clear; farbros";
alias notes="/home/adilw/Dropbox/Adil_Notes; clear";
alias trim="conda deactivate;clear";
alias home="cd /home/adilw/; trim; neofetch";
alias qnote="nano /home/adilw/Dropbox/Adil_Notes/00-Main/1-Litnote.md"
RunPython(){farbros; python -u $*.py}
alias apy=RunPython
RunJava(){clear;javac *.java;java $*}
alias ajav=RunJava;
alias cjav="rm *.java";
alias arus="clear; cargo fmt; cargo build; cargo run";
RustDepend(){clear; cargo add $*}
alias drus=RustDepend
alias trus="cargo test"
alias debugpy="cd /home/adilw/Dropbox/Adil_Code/LinuxScripts; cat debug_script.py"
RunCpp(){ clear; g++ -o $* $*.cpp && ./$*; }
alias accp=RunCpp
NewCrate(){
	cargo new $*
	cd $*/src;
	clear
	echo -e "\e[0;34m$USER \033[0mcreated\e[1;32m $*\033[0m under \e[1;33m$(pwd | rev | cut -f1 -d'/' - | rev)\033[0m on\e[1;32m $(uname -sr  | cut -f1 -d'-')\033[0m"
	code main.rs
}
alias nrus=NewCrate;
NewGCCRun(){gcc $*.c; $*}
alias gcca=NewGCCRun;
alias news="bbc.sh"
alias orielly="apy "/home/adilw/Dropbox/Adil_Code/Scripting/orielly_login""
alias unilog="apy "/home/adilw/Dropbox/Adil_Code/Scripting/uni_login""
YouTube(){xdg-open "https://www.youtube.com/results?search_query=$*"}
alias ytb=YouTube
path+=($scripts)
export PATH
```
