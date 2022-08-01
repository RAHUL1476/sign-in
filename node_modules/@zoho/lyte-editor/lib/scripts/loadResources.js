_led.addFeature('getPathExtension', function (path) {
    path = path.trim();
    const regexToGetExt = /\.([a-zA-Z]+)(?=\?|$)/;
    const type = regexToGetExt.exec(path);
    return type.length ? type[1] : null;
});
_led.addFeature('loadResources', function (filePath, doc, attrsToSet, onEvery, onAfterAll, onError) {
    attrsToSet = attrsToSet || {};
    onEvery = onEvery || function () { };
    onError = onError || function () { };
    onAfterAll = onAfterAll || function () { };
    const createTag = function (path, doc) {
        return new Promise(function (resolve, reject) {
            path = _led.urlMappings[path] || path;
            const ext = _led.getPathExtension(path);
            let tag = null;
            const attrs = attrsToSet[ext];
            switch (ext) {
                case 'css': {
                    tag = doc.createElement('link');
                    tag.href = path;
                    tag.rel = 'stylesheet';//No I18n
                }
                    break;
                case 'js': {
                    tag = doc.createElement('script');
                    tag.src = path;
                    /* 
                        Defer will maintain the order of execution of the js files irrespective of the loading time
                        So all the tags here are deferred as without defer the file caching issue is present on slow networks
                    */
                    // tag.defer = true;
                    tag.type = 'text/javascript';//No I18n
                }
                    break;
                default: {
                    reject('File type is invalid')
                }
            }
            if (tag) {
                if (attrs) {
                    for (let attr in attrs) {
                        tag.setAttribute(attr, attrs[attr]);
                    }
                }
                tag.onload = function () { resolve(tag) };
                tag.onerror = function (err) { reject(tag, err) };
                doc.head.appendChild(tag);
            }
        });
    }
    let links = [];
    if (this.checkType.string(filePath)) {
        links.push(filePath)
    } else if (this.checkType.array(filePath)) {
        links.push.apply(links, filePath);
    } else {
        _led.throw.warning(_led.error.EXPECTED, 'string (or) array', filePath);//No I18n
        return null;
    }
    Promise.all(links.map(function (link) {
        return createTag(link, doc)
            .then(function (tag) {
                return onEvery(tag) || Promise.resolve(link);
            }).catch(function (tag, error) {
                return onError(tag, error) || Promise.reject(link, error);
            })
    })).then(function (array) {
        onAfterAll(array)
    }).catch(function (link, error) {
        _led.throw.error(_led.error.FILE_NOT_LOADED, link, error);//No I18n
    })
});
_led.addFeature('loadBaseCss', function () {
    if (!_led._loaded.css) {
        const link = document.createElement('link');
        link.rel = "stylesheet";//No I18n
        link.href = _led.pathFor.lyteEditorCss;
        document.head.appendChild(link);
        _led._loaded.css = true;
        /*
            ERROR : css.js:56 Uncaught DOMException: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.
            Dont know why this issue occurs when 'Lyte.injectResources' is used
            This problem started when shadowRoot is added , before that this code was working fine
            Have to report this to LN.
            ``` 
                Lyte.injectResources(basePath,null,function(){
                _led._loaded.css = true;
                })
            ```
        */

    }
});
_led.addFeature('copyStylesToShadowRoot', function (shadowRoot) {
    const links = Array.from(document.getElementsByTagName('link'));
    const hrefRegex = /vs\/(base|editor|platform)/;
    links.forEach(function (link) {
        if (hrefRegex.test(link.getAttribute('href'))) {
            shadowRoot.appendChild(link.cloneNode());
        }
    });
    // const iconCss = `@font-face { font-family: "codicon"; src: url("${getCodiconPath()}") format("truetype"); }`;
    // const style = document.createElement('style');
    // style.type = 'text/css';
    // style.media = 'screen';
    // document.getElementsByTagName('head')[0].appendChild(style);
    // style.innerHTML = iconCss;
});
_led.addFeature('getBrowserInfo', function () {
    let temp;
    const info = {};
    const userAgent = navigator.userAgent;
    const agentRegex = /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d.]+)/i;
    const match = userAgent.match(agentRegex) || [];
    const name = match[1];
    const version = match[2];
    if (/trident/i.test(name)) {
        temp = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
        info.name = "IE"; //No I18n
        info.version = temp[1] || '';//No I18n
        return info;
    }
    if (name === 'Chrome') {//No I18n
        temp = userAgent.match(/\b(OPR|Edge?)\/(\d+)/);
        if (temp !==null) {
            return temp.slice(1).join(' ').replace('OPR', 'Opera').replace('Edg ', 'Edge ');//No I18n
        }
    }
    if (version) {
        info.name = name;
        info.version = version;
    } else {
        info.name = navigator.appName;
        info.version = navigator.appVersion;
    }
    if ((temp = userAgent.match(/version\/(\d+)/i)) !==null) {
        info.version = temp[1];
    }
    return info;
});