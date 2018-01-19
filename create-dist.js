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
        '!.DS_Store',

    ],
    rename:(filePath) => {
        let dotSplit = filePath.split('.');
        filePath = filePath.replace( `${dotSplit[1]}.`, '' );
        return filePath;
    },
};

const buildPath = `./dist`;
const staticPath = './build/static';


copy(`${staticPath}/js/`, `${staticPath}/dist`, options)
    .catch(function(error) {
    console.error('Copy failed ({staticPath}/js/):  ' + error);
});

copy(`${staticPath}/css/`, `${staticPath}/dist`, options)
    .catch(function(error) {
        console.error('Copy failed ({staticPath}/css/):  ' + error);
    });


copy(`${staticPath}/css/` , buildPath, options)
    .catch(function(error) {
        console.error('Copy failed ({staticPath}/css/):  ' + error);
    });

copy(`${staticPath}/js/` , buildPath, options)
    .catch(function(error) {
        console.error('Copy failed ({staticPath}/js/):  ' + error);
    });