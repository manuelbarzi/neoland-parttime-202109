# Git commands

- `git status` (show git status)

```sh
$ git status 
On branch feature/landing
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        staff/emmanuel-alcedo/bash/
        staff/emmanuel-alcedo/git/

nothing added to commit but untracked files present (use "git add" to track)
```

- `git branch` (show branches and the one where i am located)

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
$ git add staff/emmanuel-alcedo/bash
```

- `git commit` (consolidates files frow staging area)

```sh
$ git commit -m "add bash doc"
[feature/landing 86d3156] add bash doc
 1 file changed, 39 insertions(+)
 create mode 100644 staff/emmanuel-alcedo/bash/README.md
```

- `git branch -D`  (deletes a branch)

```sh
$ git branch -D feature/landind
deleted branch feature/landind
```
