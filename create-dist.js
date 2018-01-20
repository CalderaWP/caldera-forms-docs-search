const copy = require('recursive-copy');
const path = require('path');
const package = require("./package.json");
const fs = require('fs');


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

const distPath = `./dist`;
const staticPath = './build/static';

if (!fs.existsSync(distPath)){
    fs.mkdirSync(distPath);
}

if (!fs.existsSync(`${staticPath}/dist`)){
    fs.mkdirSync(`${staticPath}/dist`);
}


const deleteFilesInDir = (directory) => {
    fs.readdir(directory, (err, files) => {
        if (err) throw err;

        for (const file of files) {
            fs.unlink(path.join(directory, file), err => {
                if (err) throw err;
            });
        }
    });
};

deleteFilesInDir(`${distPath}`);
deleteFilesInDir(`${staticPath}/dist`);


copy(`${staticPath}/js/`, `${staticPath}/dist`, options)
    .catch(function(error) {
    console.error('Copy failed ({staticPath}/js/):  ' + error);
});

copy(`${staticPath}/css/`, `${staticPath}/dist`, options)
    .catch(function(error) {
        console.error('Copy failed ({staticPath}/css/):  ' + error);
    });


copy(`${staticPath}/css/` , distPath, options)
    .catch(function(error) {
        console.error('Copy failed ({staticPath}/css/):  ' + error);
    });

copy(`${staticPath}/js/` , distPath, options)
    .catch(function(error) {
        console.error('Copy failed ({staticPath}/js/):  ' + error);
    });