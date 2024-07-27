1. 'git init' -> It createa a .git folder that has all the relevant info to manage the version of our project.

2. 'Working Area' -> There can be some files   are not currently managed by git which means that changes done or to be done in those files are not managed by git yet. When we do 'git status' and see the untracked files then those are actually called to be in working area.


3.'Staging Area' -> which files are going to be a part of next version that will create . In this area git knows what changes will be done from prev version to next version.

4.'Repository Area' -> This area actually contains the details of all the previous registered version.

5. 'git add <file>' -> moves from working to staged area.

6. 'git rm --cache <file>' ->
moves back to working aread from staging area.

8. 'Commit' -> It is a particular version of the project.

9. 'git commit' -> register staging changes to repository area or commit.

10. 'git log' -> list down all the  commits of the repo.

11. 'git restore --staged <file>' ->
It removes all files changed from staging to working area. This is only works if changes are in our staging area.

12. 'git restore <file>' -> It removes all file changes from the staging area to commited .

13. '' -> If we don't want to commit by using vim editor then we can use command like that : 
   'git commit -m'

14. 'git remote' -> list down all the remote connection names.

15. 'Remote Connection' -> It helps to link two git repo for uploading and downloading changes  from each

16. 'git remote add <name of remote>
<link of the remote> -> This command helps to add a new link to the remote repo and give a name to it.

17. ' git remote rm <name of remote>' -> this command deletes a remote connection .


18. 'git remote rename <oldname> <newName> '



