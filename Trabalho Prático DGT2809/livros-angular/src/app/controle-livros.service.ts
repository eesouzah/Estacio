import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Angular Avançado',
      resumo: 'Guia completo para desenvolvedores Angular.',
      autores: ['Carlos Silva', 'Ana Souza']
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Estruturas de Dados',
      resumo: 'Fundamentos e aplicações práticas.',
      autores: ['Roberto Almeida']
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Desenvolvimento Web Moderno',
      resumo: 'Do básico ao avançado com frameworks atuais.',
      autores: ['Mariana Costa', 'Lucas Ferreira']
    }
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const maxCodigo = this.livros.length > 0
      ? Math.max(...this.livros.map(l => l.codigo))
      : 0;
    livro.codigo = maxCodigo + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}