const banco = require('./conexao');

const LivroSchema = new banco.Schema({
  titulo: String,
  autor: String,
  codEditora: Number,
  preco: Number
}, { collection: 'livros' });

const Livro = banco.model('Livro', LivroSchema);

module.exports = Livro;