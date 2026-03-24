const Database = require('better-sqlite3');
const db = new Database('banco.db');

db.prepare(
  `CREATE TABLE IF NOT EXISTS prueba (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT
)`,
).run();

const stmt = db.prepare('INSERT INTO prueba (nombre) VALUES (?)');
stmt.run('Test');

const filas = db.prepare('SELECT * FROM prueba').all();
console.log('Registros en prueba:', filas);

db.close?.();
