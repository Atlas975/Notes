# Alias shortcuts 
```shell
alias orion="/home/adilw/Dropbox/Adil_Code/Orion"
alias sdu="sudo dnf update"
gitTotal() {
    git add .
    git commit -m "$*"
    git push
}
alias mgit=gitTotal
alias agit=git add .; git commit -m "auto commit";git push; 
alias farbros="conda activate /home/adilw/anaconda3/envs/farbros";
alias home="/home/adilw/";
alias trim="conda deactivate;clear";
javaRun(){
	javac *.java 
	java $*
}
alias mjav=javaRun()
alias cjav="rm *.java";
alias arus="cargo fmt; cargo run; cargo clean";
newCrate(){cargo new $*}
alias nrus=newCrate()
```
