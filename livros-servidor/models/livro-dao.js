const Livro = require('./livro-schema');

const obterLivros = async () => {
  return await Livro.find();
};

const incluir = async (livro) => {
  try {
    return await Livro.create(livro);
  } catch (err) {
    throw new Error('Erro ao incluir livro');
  }
};

const excluir = async (codigo) => {
  try {
    const result = await Livro.deleteOne({ _id: codigo });
    return result.deletedCount > 0;
  } catch (err) {
    throw new Error('Erro ao excluir livro');
  }
};

module.exports = { obterLivros, incluir, excluir };