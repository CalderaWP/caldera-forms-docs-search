const copy = require('recursive-copy');

const path = require('path');
const package = require("./package.json");

const options = {
    overwrite: true,
    expand: true,
    dot: false,
    junk: true,
    filter: [
        '**/*',
        '!.DS_Store'

    ],
    rename:(filePath) => {
        let dotSplit = filePath.split('.');
        if( 'css/main' === dotSplit[0] || 'js/main' ===dotSplit[0]){
            filePath = filePath.replace( `${dotSplit[1]}.`, '' );
        }
        return filePath;
    },
};

const buildPath = `./dist`;
const staticPath = './build/static';
copy(staticPath, buildPath, options)
    .then(function(results) {

    })
    .catch(function(error) {
        console.error('Copy failed (dist):  ' + error);
    });

copy(staticPath, `${staticPath}/dist`, options)
    .catch(function(error) {
        console.error('Copy failed (static dist): ' + error);
    });


