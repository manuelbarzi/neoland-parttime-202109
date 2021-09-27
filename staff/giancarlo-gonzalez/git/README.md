# Git commands

- `git status` (show git status)

```sh
$ git status
On branch feature/landing
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        staff/giancarlo-gonzalez/bash/
        staff/giancarlo-gonzalez/git/

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
$ git checkout
Switched to branch 'feature/landing'
```
- `git add`(add files to staging area)

```sh
$ git add staff/giancarlo-gonzalez/
```
- `git commit` (consolidates files from staging area)
```sh
$ git commit -m "add bash doc"
[feature/landing f2e0f71] add bash doc
 2 files changed, 39 insertions(+)
 create mode 100644 staff/giancarlo-gonzalez/bash/README.md
 create mode 100644 staff/giancarlo-gonzalez/git/README.md
```

- `git branch-D` (deletes a branch)

```git branch -D feature/landin
Deleted branch feature/landin
```