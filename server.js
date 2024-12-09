require('dotenv').config(); // Carregar variáveis de ambiente
const express = require('express'); // Framework para criar o servidor
const cors = require('cors'); // Middleware para lidar com CORS
const sequelize = require('./config/database'); // Conexão com o banco de dados
const bookRoutes = require('./routes/bookRoutes'); // Rotas dos livros
const Book = require('./models/book');


const app = express(); // Inicializa o aplicativo Express
const PORT = process.env.PORT || 3000; // Define a porta do servidor

// Middleware
app.use(cors({
  origin: 'http://localhost:4200', // URL do frontend
}));
app.use(express.json()); // Middleware para processar JSON

// Rotas
app.use('/books', bookRoutes); // Define o prefixo das rotas para /books

// Testa a conexão com o banco de dados e inicia o servidor
sequelize.authenticate()
  .then(() => console.log('Conexão com o banco de dados bem-sucedida!'))
  .then(() => sequelize.sync({ alter: true })) // Ajusta o modelo ao banco sem perder dados /Sincroniza modelos com o banco
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

sequelize
  .sync({ force: false }) // Use force: true para recriar tabelas (apaga os dados existentes)
  .then(() => {
    console.log('Banco de dados sincronizado com sucesso!');
  })
  .catch((err) => {
    console.error('Erro ao sincronizar banco de dados:', err);
  });