const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../models/livro-dao');

router.get('/', async (req, res) => {
  try {
    const livros = await obterLivros();
    res.json(livros);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const novoLivro = await incluir(req.body);
    res.status(201).json({ mensagem: 'Livro incluído com sucesso', livro: novoLivro });
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const excluido = await excluir(req.params.id);
    if (excluido) {
      res.json({ mensagem: 'Livro excluído com sucesso' });
    } else {
      res.status(404).json({ erro: 'Livro não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

module.exports = router;