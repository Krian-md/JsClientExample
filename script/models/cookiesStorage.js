'use strict';

class CookiesStorage{

    setValue(key, value, options = {}){
        let setCookie = key + "=" + value;

        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }

        for (let opK in options) {
            setCookie += "; " + opK;
            let opV = options[opK];
            if (opV !== true) {
                setCookie += "=" + opV;
            }
        }
        
        document.cookie = setCookie;
    }

    getValue(key){
        // console.log(document.cookie.split(';').join('\n'));
        let res = document.cookie.match(new RegExp(
            "(?:^|; )" + key + "=([^;]*)"
        ));
        // console.log(new RegExp(
        //     "(?:^|; )" + key.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        // ));

        return res ? [key, res[1]] : [key, 'Not Found!'];
    }

    removeValue(key){
        this.setValue(key, '', {expires: new Date()} );
    }

    updateValue(key, value){
        this.setValue(key, value, {expires: '2022-05-10'});
    }

    getName() {
        return 'cookies Storage: ';
    }
}