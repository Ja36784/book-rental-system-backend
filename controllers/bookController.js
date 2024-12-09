const Book = require('../models/book');

// Listar todos os livros
exports.getAllBooks = async (req, res) => {
  try {
    const book = await Book.findAll();
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar livros', error: err });
  }
};

// Adicionar um novo livro
exports.addBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao adicionar livro', error: err });
  }
};

// Atualizar um livro
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    await book.update(req.body);
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar livro', error: err });
  }
};

// Deletar um livro
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    await book.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: 'Erro ao deletar livro', error: err });
  }
};
// Alternar disponibilidade do livro
exports.toggleAvailability = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    book.available = !book.available; // Alterna a disponibilidade
    await book.save();
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao alternar disponibilidade', error: err });
  }
};

