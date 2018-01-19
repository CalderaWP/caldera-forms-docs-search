# Caldera Forms Documentation Search
[https://calderaforms.com/caldera-forms-documentation-search/](https://calderaforms.com/caldera-forms-documentation-search/)

## Install
* `git clone git@github.com:CalderaWP/caldera-forms-docs-search.git`
* `cd caldera-forms-docs-search npm install`

# Development
* `npm run start`

# Deployment For CF.com 
The CSS and JS files in /dist are used on CF.com using [RawGit](https://rawgit.com/) as CDN.

##Create new dist files and make live on production or staging
* `npm run dist`
* `git push`


### Production
The master branch's /dist files are served on CF.com if it is the live environment.

## Staging
The develop branch's /dist files are served on CF.com unless it is the live environment. According to raw git `New changes you push to GitHub will be reflected within minutes.`


