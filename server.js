const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

const app = express();
app.use(cors());
app.use(express.json()); // Para recibir JSON

const db = new Database('banco.db');

// Crear tabla usuario si no existe
db.prepare(
  `
  CREATE TABLE IF NOT EXISTS usuario (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario TEXT UNIQUE,
    contrasena TEXT,
    nombreUsuario TEXT,
    apellidoUsuario TEXT,
    nacimiento TEXT
  )
`,
).run();

// Ruta para guardar usuario
app.post('/guardarUsuario', (req, res) => {
  const u = req.body;
  try {
    const stmt = db.prepare(`
      INSERT INTO usuario (usuario, contrasena, nombreUsuario, apellidoUsuario, nacimiento)
      VALUES (?, ?, ?, ?, ?)
    `);
    stmt.run(
      u.usuario,
      u.contrasena,
      u.nombreUsuario,
      u.apellidoUsuario,
      u.nacimiento,
    );
    res.json({ mensaje: `Usuario ${u.usuario} guardado en SQLite ✅` });
  } catch (err) {
    if (err.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      res.json({ mensaje: `El usuario ${u.usuario} ya existe en SQLite ❌` });
    } else {
      res.json({ mensaje: 'Error SQLite: ' + err.message });
    }
  }
});

// Servidor escuchando
app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
