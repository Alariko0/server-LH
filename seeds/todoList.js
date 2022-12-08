require('dotenv/config')

const mongoose = require('mongoose')
const todoModel = require('../models/todoModels')
const todoList = require('./todoList.json')

const MONGO_URI = process.env.NODE_ENV === 'production'
    ? process.env.MONGODB_URI_PROD
    : process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/server";

mongoose
    .connect(MONGO_URI)
    .then((x) => {
        console.log(`connect to mongo! Database name: "${x.connections[0].name}"`)
    })
    .then(() => { })

    .then(() => {
        console.log(todoList)
    })
    .catch(() => {
        console.error('Error connecting to mongo: ', err)
    })
    .finally(() => {
        mongoose.disconnect();
    });

