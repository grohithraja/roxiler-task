const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the SQLite database.');
});


const initDb = () => {
    db.run(`CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY,
        title TEXT,
        price REAL,
        description TEXT,
        category TEXT,
        image TEXT,
        sold BOOLEAN,
        dateOfSale TEXT
    )`);
};

const insertData = (data) => {
    const stmt = db.prepare(`INSERT INTO products (id, title, price, description, category, image, sold, dateOfSale) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`);
    data.forEach(product => {
        stmt.run(product.id, product.title, product.price, product.description, product.category, product.image, product.sold, product.dateOfSale);
    });
    stmt.finalize();
};


module.exports = { db, initDb, insertData };
