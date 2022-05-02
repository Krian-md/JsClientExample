'use strict';

class StorageUse {
    constructor(model){
        this.model = model;
    }

    async setValue(key, value, options) {
        await this.model.setValue(key, value, options);
        return this.model.getName() + "Create!";
    }

    async getValue(key) {
        await this.model.getValue(key);
        return this.model.getName() + "Get!";
    }

    async removeValue(key) {
        await this.model.removeValue(key);
        return this.model.getName() + "Delete!";
    }

    async updateValue(key, value) {
        await this.model.updateeValue(key, value);
        return this.model.getName() + "Update!";
    }
}
