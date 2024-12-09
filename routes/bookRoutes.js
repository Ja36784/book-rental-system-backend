const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.getAllBooks); // Listar todos os livros
router.post('/', bookController.addBook);   // Adicionar livro
router.put('/:id', bookController.updateBook); // Atualizar livro
router.delete('/:id', bookController.deleteBook); // Deletar livro
router.patch('/:id/toggle', bookController.toggleAvailability); // Alternar disponibilidade


module.exports = router;
