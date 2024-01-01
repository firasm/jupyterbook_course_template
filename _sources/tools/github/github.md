# Git and GitHub

## GitHub

### Cloning Repos

Open a Terminal window, and then run the following command:

```
git clone https://github.com/firasm/test.git
```

### Pull requests

Once you have created a branch and "completed" a feature, it's time to merge the feature back to the `main` (or `master`) branch.
Of course, as you learned in the tutorial you can do this yourself, but in general it's a good idea for another teammate to review your work before it is merged into master. 
This is where Pull Requests come in:

To create pull requests (even students working solo can do this), [you can follow Steps 4 and 5 from here](https://guides.github.com/activities/hello-world/#pr), and then assign a reviewer (from your group) to look at your code.


From [GitHub's documentation](https://github.com/git-guides):

> **Issues** are a great way to keep track of tasks, enhancements, and bugs for your projects. They’re kind of like email—except they can be shared and discussed with the rest of your team. Most software projects have a bug tracker of some kind. GitHub’s tracker is called Issues, and has its own section in every repository.

> **Labels** are a great way to organize different types of issues. Issues can have as many labels as you want, and you can filter by one or many labels at once.

> **Milestones**, are groups of issues that correspond to a project, feature, or time period. People use them in many different ways in software development.

> **Assignees** are a great way to filter, categorize issues, and remember what you're responsible to do. Each issue can have an assignee — one person that’s responsible for moving the issue forward. Assignees are selected the same way milestones are, through the grey bar at the top of the issue. You can change or add a milestone, an assignee, and labels by clicking their corresponding gears in the sidebar on the right.

### Pull changes from `remote`` into `local`

How to pull the most recent changes to your computer

If you edit your code on the GitHub web interface, or if another use commits to your repository, to update the repository with the most recent changes, you should **always start a working session by running this command** in your git repository (using either Terminal or GitBash): 

```
git pull
```

This will make sure your local computer is updated with any changes.
If you expect that some of the same files have been edited (or if your `git pull` fails), you can try:

```
git pull --no-ff
```

Commit and push your changes often while you work to stay in sync.

### Creating a new release

[Here](https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/managing-releases-in-a-repository) are the instructions to create a release.

Briefly, here is how to create a release ([from the docs](https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/managing-releases-in-a-repository)):

1. On GitHub, navigate to the main page of the repository.

2. To the right of the list of files, click Releases or Latest release.

<img src="https://docs.github.com/assets/images/help/releases/release-link.png" width="600px">

3. Click Draft a new release.

4. Type a version number for your release. Versions are based on Git tags.

5. Use the drop-down menu to select the branch that contains the project you want to release.

6. Type a title and description for your release.

7. Once you're ready to publicize your release, click Publish release. To work on the release later, click Save draft.

### Semantic Versioning

When developers (like you!) are working on a software project that others will be using or viewing, they need a way to communicate with their users when new features are released and bugs are fixed.
Typically, this is done by creating **version** and you're likely most familiar with this with your phone or laptop operating system (OS).
For instance, if you have an iPhone the latest version of your OS is 14.2.1 - what do the 14, 2 and 1 mean?
There are conventions, and the one that I suggest you follow is: [Semantic Versioning](https://semver.org).

From [semver.org](https://semver.org), here is the summary:

Given a version number MAJOR.MINOR.PATCH, increment the:

1. MAJOR version when you make incompatible API changes,
1. MINOR version when you add functionality in a backwards compatible manner, and
1. PATCH version when you make backwards compatible bug fixes.

## Git

GitHub has a [handy cheat sheet](https://education.github.com/git-cheat-sheet-education.pdf) available.

Here are some relevant screenshots from that cheat sheet:

![](setup.png)

![](stage.png)

![](branch.png)