# GIT commands

- `git status` (show git status)

```sh
$ git status
On branch feature/landing
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	staff/julio-serra/bash/
	staff/julio-serra/git/

nothing added to commit but untracked files present (use "git add" to track)
```

- `git branch` (show branches)

```sh
$ git branch
  develop
* feature/landing
  landing
  main
```

- `git checkout` (switches another branch, cambiar de rama)

```sh
$ git checkout
Switched to branch 'feature/landing'
```

- `git add` (add files to staging area, abrir el cajon)

```sh
$ git add
git add staff/julio-serra/bash
```

- `git commit` (consolidates files from staging area, guarda)

```sh
$ git commit
git commit -m "add bash doc"
[feature/landing e4470dd] add bash doc
 1 file changed, 18 insertions(+)
 create mode 100644 staff/julio-serra/bash/README.md
 ```

 - `git branch -D` (borrar ramas)

 ```sh
$ git branch -D feature/landind
```

 - `git log` (mostrar historial de commits)

 ```sh
$ git branch -D feature/landind
```