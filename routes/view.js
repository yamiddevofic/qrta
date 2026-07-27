const express = require('express');
const router = express.Router();

// Enviar index.html de la carpeta views al acceder a la ruta raíz
router.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'views' });
});

module.exports = router;