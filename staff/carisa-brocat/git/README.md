#GIT commands

- `git status` (show branch status, help to know if there are any change we need to commit)

```sh
$ git status
On branch feature/landing
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	../bash/
	./

nothing added to commit but untracked files present (use "git add" to track)
```

- `git branch` (show branches and the one where i am located)

```sh
$ git branch
  develop
* feature/landing
  main
```

- `git checkout` (switch to the branch)

```sh
$ git checkout main
error: Your local changes to the following files would be overwritten by checkout:
	staff/carisa-brocat/bash/README.md
	staff/carisa-brocat/git/README.md
Please commit your changes or stash them before you switch branches.
Aborting

```

- `git branch -D` (force delete the specific branch)

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
