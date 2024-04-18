'use strict';

const mongoose = require('mongoose');
const { countConnect, checkOverload } = require('../helpers/check.connect');

const connectString = `mongodb://localhost:27017/shopDEV`;

class Database {
    constructor() {
        this.connect();
    }

    // connect
    connect(type = 'mongodb') {
        if (1 === 1) {
            mongoose.set('debug', true);
            mongoose.set('debug', { color: true });
        }

        mongoose
            .connect(connectString)
            .then((_) => {
                console.log('✔ Connect Mongodb Success');
                countConnect();
                checkOverload();
            })
            .catch((err) => console.log('❌ Error Connect'));
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;
