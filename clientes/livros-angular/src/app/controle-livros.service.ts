import { Injectable } from '@angular/core';
import { Livro } from './livro';

const baseURL = 'http://localhost:3030/livros';

interface LivroMongo {
  _id: string;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  async obterLivros(): Promise<Livro[]> {
    const resposta = await fetch(baseURL);
    const livrosMongo: LivroMongo[] = await resposta.json();
    return livrosMongo.map(({ _id, ...rest }) => {
      const livro = new Livro();
      Object.assign(livro, rest);
      livro.codigo = _id;
      return livro;
    });
  }

  async excluir(codigo: string): Promise<boolean> {
    const resposta = await fetch(`${baseURL}/${codigo}`, {
      method: 'DELETE'
    });
    return resposta.ok;
  }

  async incluir(livro: Livro): Promise<boolean> {
    const livroMongo: LivroMongo = {
      _id: livro.codigo,
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores
    };
    const resposta = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(livroMongo)
    });
    return resposta.ok;
  }
}