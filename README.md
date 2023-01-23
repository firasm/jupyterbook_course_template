# JupyterBook Course Template

This is a template repository that makes it drop-dead simple for anyone to create a JupyterBook course website and deploy it using GH Pages.
No configuration is necessary, there are just three steps.

## Course Website

To access the rendered version of this JupyterBook, visit https://firasm.github.io/jupyterbook_course_template.

Each time there is a commit to `main`, the website will re-deploy.
Currently it takes about 70s for the website to update.


## Usage

### 1. Visit this [template repository](https://github.com/firasm/jupyterbook_course_template) with the GH account you want to use and click "Use this template".

![](https://github.com/firasm/bits/blob/master/jb-step1.png)

### 2. Fill in the info for the new repository, make sure it's a public repository and you include all branches (this will make sure the `gh-pages` branch is deployed).

![](https://github.com/firasm/bits/blob/master/jb-step2.png)

### 3. Give the GitHub Action permission to your repository

- In your own repository, Click Settings
- On the left sidebar, click "Actions"
- Click on "General"
- Allow the "Read-Write Permission"
- If you were able to do this before the GitHub action finished, it should have worked. If you didn't, the job will fail, and you'll need to click on the Run and then click the checkmark to "re-run failed jobs"

Here's an image of the image:

![](https://github.com/firasm/bits/blob/master/jb-step3a.jpg)

### 4. Wait for the GH Action to complete, and then visit your deployed website here: https://<your_github_username>.github.io/<repo_name> . That's it!

![](https://github.com/firasm/bits/blob/master/jb-step3.png)

## Features

1. Support for executing code in a browser using [thebe](https://thebe.readthedocs.io/en/latest/) and [mybinderorg](https://mybinder.org)!

1. Structured book with markdown file stubs aligning with a course structure for a 13 week course. Fully versioned using GitHub, automatically deployed using GH Actions to either GH or your own server. Can also be extended with a testing framework for extra peace of mind.

1. [Examples of how to use IFrames](https://firasm.github.io/jupyterbook_course_template/class/topic1.html#) to embed web content, @phet_sims, @sli.do polls, videos, and other content. 

1. Powerful built-in annotation and commenting features with [hypothes.is](http://hypothes.is) and [utteranc.es](http://utteranc.es). Annotate your syllabus, course readings, and any other content.

1. Add persistent checkboxes so students can track their progress through notebooks, exercises and readings. 

1. Allow students to download pages of the site in PDF, link to the source code on your repo, or open in a mybinder notebook.

1. The JupyterBook can be embedded into Canvas using the Redirect tool so students never have to leave their LMS.

1. (NEW!) Use of the new `substitution` feature of [myst-parser](https://myst-parser.readthedocs.io/en/latest/develop/_changelog.html#id1) to configure the course algorithmically from the `_config.yml` file!

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
	- [ ] Set the substitution parameters under the `myst_substitutions`

1. In the `_toc.yml` file:
	- [ ] Arrange the table of contents to add/remove files
	
1. In the `about` and `class` folders:
	- [ ] Edit the .md and .ipynb files with your course content

## Attribution

- Thanks to [Tomas Beuzen](https://github.com/TomasBeuzen) for his GH Actions workflow that deploys JupyterBooks using GH pages.
- Thanks the entire [Jupyter Project](https://jupyter.org/about)
- Finally, a big thanks to the [JupyterBook community](https://github.com/executablebooks/jupyter-book/graphs/contributors) for my incessant issues, questions, and PR requests on documentation changes.
