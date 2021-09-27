# GIT  commands

-`git status` (show gut status)

```sh
$ git status 
On branch feature/landing
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        staff/lucas-leone/bash/
        staff/lucas-leone/git/

nothing added to commit but untracked files present (use "git add" to track)
```

-`git branch`(show branches and the one where i am located)

``` sh

$ git branch
develop
* feature/landing
  main
```

- `git checkout`(switch  to another branch)
```sh
$ git che checkout `feature/landing`

```

-`git add` (añadir archivos a stadign area)

``` sh
$ git add staff/lucas-leone/bash/
```

-`git commmit`(consolidate files from staging area)

``` sh

$ git commit -m "add bash doc"
[feature/landing 8820204] add bash doc
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 staff/lucas-leone/bash/README.md

```

-`git branch -D"  (force delete specific archive)

```sh
$ git branch -D feature/test
Deleted branch feature/test (was b7bc51e).
```

- `git log` (show all the commites history)

```sh
```

- `git clone` (clone the project form github)

- `git add` (add the change you're going to commit next)

```sh
$ git add carisa-brocat/git/
```

- `git commit -m` (commit the change)

- `git push` (push the changes to github)

- `git branch -a` (list all remote brranch)

```sh
git branch -a
* feature/landing
  main
  remotes/origin/HEAD -> origin/main
  remotes/origin/develop
  remotes/origin/feature/landing
  remotes/origin/main
```

- `git branch -m` (rename the current branch)

- `git checkout -b` (create new branch and check it at the same time)  

if you have problems with log press :q 