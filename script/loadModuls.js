'use strict';

let linksByScripts = ['/script/models/cookiesStorage.js',
'/script/models/localStorage.js',
'/script/models/indexedDbStorage.js',
'/script/models/storage.js',
'/script/serverWork.js'];


function addScripts(linksByScripts){
    linksByScripts.forEach(elem => {
        var script = document.createElement('script');
        script.src = elem;
        script.async = false;
        document.body.appendChild(script);
    });
}

addScripts(linksByScripts);