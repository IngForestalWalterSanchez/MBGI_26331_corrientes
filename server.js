// Importar los módulos necesarios
const express = require('express');
const path = require('path');

// Crear una instancia de la aplicación Express
const app = express();

// Definir el puerto. Render usará el de la variable de entorno, si no, usa el 3000.
const PORT = process.env.PORT || 3000;

// Middleware para servir archivos estáticos (imágenes, CSS, JS, GeoJSON, etc.)
// Le dice a Express que la carpeta actual (__dirname) contiene archivos públicos.
app.use(express.static(path.join(__dirname)));

// Ruta principal que sirve el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});