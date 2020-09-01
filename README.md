# JupyterBook Course Template

This is a template repository that makes it drop-dead simple for anyone to create a JupyterBook course website and deploy it using GH Pages.
No configuration is necessary, there are just three steps.

## Course Website

To access the rendered version of this JupyterBook, visit https://firasm.github.io/jupyterbook_course_template.

Each time there is a commit to master, the website will re-deploy.
Currently it takes about 70s for the website to update.


## Usage

### 1. Visit this [template repository](https://github.com/firasm/jupyterbook_course_template) with the GH account you want to use and click "Use this template".

![](https://github.com/firasm/bits/blob/master/jb-step1.png)

### 2. Fill in the info for the new repository, make sure it's a public repository and you include all branches (this will make sure the `gh-pages` branch is deployed.

![](https://github.com/firasm/bits/blob/master/jb-step2.png)

### 3. Wait for the GH Action to complete, and then visit your deployed website here: https://firasm.github.io/jupyterbook_course_template. That's it!

![](https://github.com/firasm/bits/blob/master/jb-step3.png)

## Features

TBD

## Edit the template for your course

There are a few things you need to do to adapt this template for your course.
I might miss a few things, so this list is a work in progress:

1. In the `_config.yml` file:

	- [ ] Set title of the book (Physics 111)
	- [ ] Update author (Firas Moosvi)
	- [ ] Update logo image (images/logo.png)
	- [ ] Add Google Analytics ID (Optional)
	- [ ] Enable/Disable Hypothes.is (remove the line to remove the hypothes.is integration)
	- [ ] Configure Utteranc.es repository (Choose one of Hypothesis or Utteranc.es)
	- [ ] Adjust `extra_footer` to control License of course materials

1. In the `_toc.yml` file:
	- [ ] Arrange the table of contents to add/remove files
	
1. In the `about` and `class` folders:
	- [ ] Edit the .md and .ipynb files with your course content


## Attribution

- Thanks to [Tomas Beuzen](https://github.com/TomasBeuzen) for his GH Actions workflow that deploys JupyterBooks using GH pages.
- Thanks the entire [Jupyter Project](https://jupyter.org/about)
- Finally, a big thanks to the [JupyterBook community](https://github.com/executablebooks/jupyter-book/graphs/contributors) for my incessant issues, questions, and PR requets on documentation changes.
