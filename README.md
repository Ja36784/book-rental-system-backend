# Sistema de Locação de Livros
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/Ja36784/book-rental-system/blob/main/LICENSE)

Este é um sistema simples de locação de livros desenvolvido utilizando Angular para o frontend e Node.js para o backend. O sistema permite que usuários visualizem uma lista de livros, adicionem novos títulos, editem informações dos livros, alterem a disponibilidade (locar/devolver) e removam livros. O objetivo é oferecer uma solução prática para o gerenciamento de uma pequena biblioteca ou coleção de livros.

## Tecnologias Utilizadas

### Backend:

- Node.js: Plataforma para execução do servidor backend.

- Express.js: Framework para criação de rotas e APIs RESTful.

- MySQL: Banco de dados utilizado para armazenar as informações dos livros e locações.

### Funcionalidades do Sistema:

- Visualizar Livros: Exibe uma lista de livros disponíveis no sistema.

- Adicionar Livro: Permite adicionar um novo livro com informações como título, autor e gênero.

- Editar Livro: Permite editar as informações de um livro existente.

- Deletar Livro: Permite remover um livro, com uma confirmação prévia.

- Alterar Disponibilidade: Permite marcar o livro como locado ou disponível.

### Funcionalidades do Backend:

- APIs RESTful: Implementadas para gerenciar as operações CRUD de livros.

- Validação de Dados: Garante a integridade das informações enviadas ao banco de dados.

## Instalação

Siga os passos abaixo para instalar e executar o projeto localmente:

## Backend:

- Navegue até o diretório backend:

- cd book-rental-system/backend

### Instale as dependências:

- npm install

### Configure o banco de dados no arquivo .env com as seguintes variáveis:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=book_rental_db

Execute o servidor backend:

- node server.js

### Como Usar

- Acesse a página principal para visualizar a lista de livros disponíveis e locados.

- Utilize o formulário para adicionar um novo livro, informando título, autor e gênero.

- Clique no botão "Editar" para alterar as informações de um livro.

- Clique no botão "Remover" para excluir um livro. O sistema solicitará uma confirmação antes de deletar.

- Use o botão "Locar/Devolver" para alternar a disponibilidade do livro.

### Personalização

O sistema pode ser personalizado para atender às suas necessidades específicas:

- Modelo de Livro: Adicione novos campos no modelo Book.

- Estilização: Alterações podem ser feitas no arquivo books.component.css.

- Funcionalidades Backend: Expanda os endpoints no arquivo server.js.

### Melhorias Futuras

Aqui estão algumas ideias para futuras implementações:

- Autenticação de Usuário: Limitar o acesso à edição e remoção para usuários autenticados.

- Sistema de Categorias: Classificar livros por categoria ou gênero.

- Filtragem e Pesquisa: Permitir que usuários filtrem ou pesquisem livros na lista.

- Histórico de Locações: Registrar histórico de locações e devoluções.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests ou reportar problemas no repositório. Certifique-se de seguir as melhores práticas de codificação e comentar seu código quando necessário.
