'use strict';

const mongoose = require('mongoose');
const os = require('os');
const process = require('process');

const _SECONDS = 5000;

const countConnect = () => {
    const numConnection = mongoose.connect.length;
    console.log(`Number of connection: ${numConnection}`);
};
const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length;
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;

        const maxConnections = numCores * 5;
        console.log(`Active connections: ${numConnection}`);
        console.log(`Memory usage: ${memoryUsage / 1024 / 1024}MB`);
        if (numConnection > maxConnections) {
            console.log(`⚠ Connection overload detecred`);
        }
    }, _SECONDS);
};

module.exports = { countConnect, checkOverload };
