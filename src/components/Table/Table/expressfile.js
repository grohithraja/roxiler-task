const express = require('express');
const fetch = require('node-fetch');
const { db, initDb, insertData } = require('./database');
const app = express();
const PORT = 3000;

initDb();

async function fetchDataAndStore() {
    const response = await fetch('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    const data = await response.json();
    insertData(data); 
}


db.serialize(() => {
    fetchDataAndStore().then(() => {
        app.listen(3000, () => {
            console.log(`Server running on port ${3000}`);
        });
    });
});
