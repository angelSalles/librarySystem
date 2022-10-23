const express = require('express');
const router = express.Router();

const LivroController = require('./controllers/LivroController')

router.get('/livro', LivroController.buscarTodos);
router.get('/livro/:isbn', LivroController.buscarUm)
router.post('/newLivro', LivroController.inserir)
router.put('/livro/:isbn', LivroController.alterar)
router.delete('/livro/:isbn', LivroController.excluir)

module.exports = router;