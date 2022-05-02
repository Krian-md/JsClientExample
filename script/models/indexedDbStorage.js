'use strict';

// window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// // НЕ ИСПОЛЬЗУЙТЕ "var indexedDB = ..." вне функции.
// // также могут отличаться и window.IDB* objects: Transaction, KeyRange и тд
// window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
// window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

// if (!window.indexedDB) {
//     window.alert("Ваш браузер не поддерживает стабильную версию IndexedDB. Такие-то функции будут недоступны");
// }

class IndexedDbStorage{
    constructor() {
        this.id = 'uniqueId';
        this.connect = new ConnectIndexedDbStorage();
        console.log(this.connect.db);
    }
    
    setValue(key, value, option){

        var transaction = this.connect.db.result.transaction(["information"], "readwrite");
        transaction.oncomplete = function(event) {
            alert("All done!");
        };
          
        transaction.onerror = function(event) {
            // Don't forget to handle errors!
        };

        var objectStore = transaction.objectStore("information");
        console.log(objectStore);
        var request = objectStore.add({key: key, value: value});

        request.onsuccess = new function(event){
        };
        
    }

    getValue(key){
        var transaction = this.connect.db.result.transaction(["information"], 'readonly');
        var objectStore = transaction.objectStore("information");
        var request = objectStore.getKey(key);
        request.onerror = function(event) {
          // Handle errors!
        };
        request.onsuccess = function(event) {
          // Do something with the request.result!
          alert(`Name for SSN ${key} is ` + request.result.name);
        }; 
    }

    removeValue(key){
        var request = this.connect.db.result.transaction(["information"], "readwrite")
            .objectStore("information")
            .delete({key: key});
        request.onsuccess = function(event) {
        // It's gone!
        };
    }

    updateValue(key, value){
        // this.setValue(key, value, {time: 3600});
    }

    getName() {
        return 'indexedDb Storage: ';
    }
}


class ConnectIndexedDbStorage {
    constructor(){
        this.db = this.connectDb();
    }

    connectDb(){
        let request = indexedDB.open("myBase", 1);

        request.onerror = function(err){
            console.log(err);
        };

        request.onsuccess = function(event){
            console.log("Create Database!");
        }

        request.onupgradeneeded = function(event){
            console.log("Upgrage Database!");
            event.currentTarget.result.createObjectStore("information", { keyPath: "key" });
        }
        return request;
    }
    isSupportIndexedDb() {
        if (!window.indexedDB) {
            console.log(`Your browser doesn't support IndexedDB`);
            return false;
        }
        return true;
    }
}