 # Git commands

 - `git status` (show git status)

 ```sh
 $ git status
On branch feature/landing
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        staff/blanca-manrique/bash/
        staff/blanca-manrique/git/

nothing added to commit but untracked files present (use "git add" to track)
 ```

 - `git branch` (show branches and the one where I am located)

 ```sh
 $ git branch
  develop
* feature/landing
  main
 ```  

  - `git checkout` (switches to another branch)

 ```sh
 $ git checkout feature/landing
Switched to branch 'feature/landing'
 ```  

- `git add` (add files to staging area)

 ```sh
 $ git add staff/blanca-manrique/bash
 ```  

  - `git commit` (consolidates files from staging area)

 ```sh
 $ git commit -m "add bash doc"
[feature/landing d674f06] add bash doc
 1 file changed, 21 insertions(+)
 ```  

  - `git branch -D` (deletes a branch)

 ```sh
 $ git branch -D feature/landind
 Deleted branch feature/landing
 ```  
