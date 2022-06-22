# Git basics
## Name
>git config --global user.name "Adil Wazeer"
> git config user.name
## Email
>git config --global user.email "name@gmail.com"
git config user.email
- Repositories have separate history in different folders. The git repo is also part of children folders in the parent folder.
- Must NOT initialize a repo inside a repo, use git status first

## Report repo status
> git status
## Initialize new repo
> git init

## Eliminate repo
> rm -rf .git

# Commits
- Act as checkpoints where changes can be grouped together
- Git can be made aware of the existence of new files but needs commands to add a commit.
## Adding files to staging (to be committed)
> git add file1 file2 file3
- This allows files to be grouped together for one commit
## Committing 
- Using -m flag allows a commit message rather than launching a text editor
> git commit -m "Test message"
- regular git commit launches text editor in order to do this
- Terminal response: nothing to commit, working tree clean means every git file being tracked has been added

# Git shortcuts
## Stage all files
> git add .
## Unstage all files
>git reset HEAD -- .

# Git history
## Commit history
> git log

# Git compare
- less than symbol indicates that the line is removed from the second file, greater than symbol indicates that the line is added to the second file.
>![[Pasted image 20220124073644.png]]

# Git cheatsheet
>https://github.com/joshnh/Git-Commands#git-commands

# Git clone
> git clone https://github.com/Atlas975/projectName
