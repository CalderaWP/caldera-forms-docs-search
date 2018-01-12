# Caldera Forms Documentation Search
[http://calderalabs.org/caldera-forms-docs-search/](http://calderalabs.org/caldera-forms-docs-search/)

## Install
* `git clone git@github.com:CalderaWP/caldera-forms-docs-search.git`
* `cd caldera-forms-docs-search npm install`

# Development
* `npm run start`

# Deploy
* `npm run deploy`

__IMPORTANT__ : Right now, deployment will break the embedded version on CalderaForms.com for 0-599 seconds.

Solutions: 
* Figure out how to make the url for the js file not dynamic, that way CalderaForms.com wouldn't have to query/cache manifest file.
* Increment `CALDERA_FORMS_CHILD_THEME_VERSION` in the child theme and do a complete deploy through Pantheon.
* Not worry too hard, since Pantheon should be serving a cached version. Still...
 