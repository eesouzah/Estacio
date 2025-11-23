import Livro from '../model/Livro';

const baseURL = 'http://localhost:3030/livros';

interface LivroMongo {
  _id: string;
  titulo: string;
  resumo: string;
  autores: string[];
  codEditora: number;
}

export default class ControleLivros {
  async obterLivros(): Promise<Livro[]> {
    const res = await fetch(baseURL);
    const dados: LivroMongo[] = await res.json();
    return dados.map(l => new Livro(l._id, l.codEditora, l.titulo, l.resumo, l.autores));
  }

  async incluir(livro: Livro): Promise<boolean> {
    const corpo = {
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores
    };
    const res = await fetch(baseURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(corpo)
    });
    return res.ok;
  }

  async excluir(codigo: string): Promise<boolean> {
    const res = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
    return res.ok;
  }
}