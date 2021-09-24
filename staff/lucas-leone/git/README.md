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

-`git branch -D" 