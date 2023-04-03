const express = require('express');
const app = express();

// Configuración de directorios
app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');

// Rutas
app.get('/', (req, res) => {
  res.render('index', { title: 'Inicio' });
});

app.get('/acerca-de', (req, res) => {
  res.render('acerca-de', { title: 'Acerca de Lionel Messi' });
});

app.get('/trabajos', (req, res) => {
  res.render('trabajos', { title: 'Trabajos de Lionel Messi' });
});

app.get('/galeria', (req, res) => {
  res.render('galeria', { title: 'Galería de Fotos de Lionel Messi' });
});

// Iniciar servidor
app.listen(3000, () => console.log('Servidor iniciado en el puerto 3000'));
