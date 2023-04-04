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

## Commit history
> git log



# Setup git on local machine 
1.  Generate an SSH key pair:
    
    -   Open a terminal window and run the following command: `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
    -   When prompted, choose a file to save the key pair to. It is recommended to use the default file location.
    -   You will also be prompted to enter a passphrase. It is optional to use a passphrase, but it is generally considered a good security practice to use one.
2.  Add the public key to your GitHub account:
    
    -   In the terminal, run the following command to print the public key to the terminal window: `cat ~/.ssh/id_rsa.pub`
    -   Copy the output to your clipboard.
    -   Go to your GitHub account settings and click on the "SSH and GPG keys" tab.
    -   Click the "New SSH key" button.
    -   Give your key a descriptive title (e.g. "My laptop") and paste the copied key into the "Key" field.
    -   Click the "Add SSH key" button to add the key to your account.
3.  Test the connection:
    
    -   Run the following command in the terminal: `ssh -T git@github.com`
    -   You should see a message that says "Hi username! You've successfully authenticated, but GitHub does not provide shell access."
    -   If you see this message, your SSH key has been set up successfully and you can now use SSH to authenticate with GitHub. 


## Git pull types
```
git config pull.rebase false  # merge
git config pull.rebase true   # rebase
git config pull.ff only      # fast-forward only
```

- The `merge` strategy combines the changes from both branches into a new merge commit. 
- The `rebase` strategy applies your local changes on top of the changes from the remote branch, creating a linear history. 
- The `fast-forward only` strategy only allows a fast-forward merge, which means that the local branch can only be merged into the remote branch if the remote branch has no new changes.