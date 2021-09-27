# GIT commands

- `git status` (shows git status)

```sh
$ git status 
On branch feature/landing
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	staff/yoana-padron/bash/
	staff/yoana-padron/git/

nothing added to commit but untracked files present (use "git add" to track)
```

- `git branch` (shows branches and the one where I'm located)

```sh
$ git branch
  develop
* feature/landing
  main
  ```

- `git checkout` (switches to another branch)

```sh
$ git checkout
Switched to branch 'develop'
Your branch is up to date with 'origin/develop'.
```

- `git add` (add files to staging area)

```sh
$ git add staff/yoana-padron/bash 
``` 

- `git commit` (consolidates files from staging area)

```sh
$ git commit -m "add doc name"
[feature/landing 7d1baf0] add bash doc
 1 file changed, 40 insertions(+)
 create mode 100644 staff/yoana-padron/bash/README.md
```

- `git branch -D`(deletes a branch)

```sh
$ git branch -D NombreBranch
Deleted branch * NombreBranch*
```

- `git log` (shows all the commits)

```sh
$ git log
'commit 7d1baf0f12942c9cb0875982fb65157921da7e03 (HEAD -> feature/landing)'
Author: Yoana Padron <ypadron@Yoanas-MacBook-Pro.local>
Date:   Fri Sep 24 19:57:28 2021 +0200

    'add bash doc'

'commit 5caf4650eb6e47593d496e765c25790dcbb8a15a'
Author: Yoana Padron <ypadron@Yoanas-MacBook-Pro.local>
Date:   Thu Sep 23 21:07:28 2021 +0200

    'add folder and doc'

'commit 9c6fea89d56e99b32377843a0a6849a8cefea738 (origin/main, origin/develop, origin/HEAD, main, develop)'
Author: manuelbarzi <manuelbarzi@gmail.com>
Date:   Thu Sep 23 20:28:48 2021 +0200

   ' add initial folders and docs'

'commit a51ce074a66efee0300433bde6de59b9cedf4d99'
Author: manuelbarzi <manuelbarzi@gmail.com>
Date:   Thu Sep 23 20:19:57 2021 +0200

    'Initial commit'

```
