const express = require('express');
const router = express.Router();

const LivroController = require('./controllers/LivroController')

router.get('/livro', LivroController.buscarTodos);

module.exports = router;