# Caldera Forms Documentation Search
[https://calderaforms.com/caldera-forms-documentation-search/](https://calderaforms.com/caldera-forms-documentation-search/)

## Install
* `git clone git@github.com:CalderaWP/caldera-forms-docs-search.git`
* `cd caldera-forms-docs-search npm install`

# Development
* `npm run start`

# Deployment For CF.com 


### Production
* The master branch's /dist files are served on CF.com if it is the live environment.

## Staging
* The develop branch's /dist files are served on CF.com unless it is the live environment.
* They are served using [RawGit](https://rawgit.com/) as CDN.
* According to raw git "New changes you push to GitHub will be reflected within minutes."

### Deploy to staging
* `npm run predeploy && npm run dist && git push origin develop`
    *  You may need to use `sudo`
