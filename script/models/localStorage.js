'use strict';

class LocalStorage{
    setValue(key, value, options = {}){
        localStorage.setItem(key, value);
    }

    getValue(key){
        let res = localStorage.getItem(key)
        return res ? [key, res] : [key, 'Not Found!'];
    }

    removeValue(key){
        console.log("remove");
        localStorage.removeItem(key);
    }

    updateValue(key, value){
        this.setValue(key, value);
    }

    getName() {
        return 'Localal Storage: ';
    }
}
