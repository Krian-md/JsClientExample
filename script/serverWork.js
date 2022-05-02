'use strict';





let storageUse = new StorageUse();
storageUse.model = new CookiesStorage();

const btnSave = document.querySelector('#btnSave');
const btnGet = document.querySelector('#btnGet');
const btnRemove = document.querySelector('#btnRemove');
const btnUpdate = document.querySelector('#btnUpdate');
const selectStorage = document.querySelector('#selectStorage');

selectStorage.addEventListener('change', function(event){
    if(this.value === 'cookies'){
        storageUse.model = new CookiesStorage();
    }
    else if(this.value === 'localStorage'){
        storageUse.model = new LocalStorage();
    }
    else if(this.value === 'indexDbStorage'){
        storageUse.model = new IndexedDbStorage();
    }
});


async function setValue() {
    console.log('Set!');
    const fieldFirstSet = document.querySelector('#fieldFirstSet');
    const fieldSecondSet = document.querySelector('#fieldSecondSet');
    const fieldThirdSet = document.querySelector('#fieldThirdSet');

    await storageUse.model.setValue('firstName', fieldFirstSet.value, {expires: '2022-05-10'});
    await storageUse.model.setValue('lastName', fieldSecondSet.value, {expires: '2022-05-10'});
    await storageUse.model.setValue('age', fieldThirdSet.value, {expires: '2022-05-10'});
}

async function getValue() {
    console.log('Get!');

    const informationGet = document.querySelector('.informationGet');
    informationGet.classList.remove('none');

    const fieldFirstGet = document.querySelector('#fieldFirstGet');
    const fieldSecondGet = document.querySelector('#fieldSecondGet');

    let res = await storageUse.model.getValue(fieldKeyGet.value);

    console.log(res);

    fieldFirstGet.innerText = res[0];
    fieldSecondGet.innerText = res[1];
}

async function removeValue() {
    console.log('Remove!');
    const fieldKeyRemove = document.querySelector('#fieldKeyRemove');
    
    await storageUse.model.removeValue(fieldKeyRemove.value);
}

async function updateValue() {
    console.log('Update!');

    const fieldKeyUpdate = document.querySelector('#fieldKeyUpdate');
    const fieldValueUpdate = document.querySelector('#fieldValueUpdate');
    await storageUse.model.updateValue(fieldKeyUpdate.value, fieldValueUpdate.value);
}


btnSave.addEventListener('click', setValue);
btnGet.addEventListener('click', getValue);
btnRemove.addEventListener('click', removeValue)
btnUpdate.addEventListener('click', updateValue);
