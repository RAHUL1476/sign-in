/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const inputBasePath = process.argv[2];
const outputBasePath = process.argv[3];
const dependencyPath = path.join(inputBasePath, 'lyte-editor', 'lib', 'builder', 'dependencies.json');

const parseDependenciesJson = function (dependencyPath) {
    const modulesToOmit = ['lyte-editor'];//No I18n
    const dependencies = JSON.parse(fs.readFileSync(dependencyPath, 'utf-8'));
    const filesToAdd = [];
    const getFullPath = function () {
        const prevDirs = Array.from(arguments);
        return function (subPath) {
            return path.join.apply(null, prevDirs.concat(subPath));
        }
    }
    for (let module in dependencies) {
        if (!modulesToOmit.includes(module)) {
            const value = dependencies[module];
            if (Array.isArray(value)) {
                filesToAdd.push.apply(filesToAdd, value.map(getFullPath(module)));
            } else if (typeof value === 'object') {
                const omittedKeys = ['_dir', '_needs', '_loadInOrder'];
                const dirname = value._dir || '';//No I18n
                for (let key in value) {
                    if (!omittedKeys.includes(key)) {
                        filesToAdd.push.apply(filesToAdd, value[key].map(getFullPath(module, dirname)))
                    }
                }
            } else {
                throw new Error('Invalid value provided for ' + module);
            }
        }
    }
    return filesToAdd;
}

const createDirRecursive = function (dirToCreate, pathsToCreate) {
    pathsToCreate = pathsToCreate || [];
    if (!fs.existsSync(dirToCreate)) {
        createDirRecursive(path.dirname(dirToCreate), pathsToCreate.concat(path.basename(dirToCreate)));
    } else if (pathsToCreate.length) {
        let len = pathsToCreate.length;
        while (len--) {
            const dirname = pathsToCreate[len];
            fs.mkdirSync(path.join(dirToCreate, dirname));
            dirToCreate = path.join(dirToCreate, dirname);
        }
    }
}

const copyContent = function (srcPath, distPath, actualPath) {
    const absSrcPath = path.join(srcPath, actualPath);
    const stat = fs.statSync(absSrcPath);
    if (stat.isDirectory()) {
        const absDistPath = path.join(distPath, actualPath);
        createDirRecursive(absDistPath);
        fs.readdirSync(absSrcPath).forEach(function (childPath) {
            copyContent(absSrcPath, absDistPath, childPath);
        });
    } else if (stat.isFile()) {
        const absDistPath = path.join(distPath, path.dirname(actualPath));
        createDirRecursive(absDistPath);
        fs.copyFileSync(absSrcPath, path.join(absDistPath, path.basename(actualPath)));
    }
}
// copy Task
try {
    const filesToAdd = parseDependenciesJson(dependencyPath);
    filesToAdd.forEach(copyContent.bind(null, inputBasePath, outputBasePath));
} catch (error) {
    console.error(error);
}
