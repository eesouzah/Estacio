import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
  livros: Livro[] = [];
  carregado: boolean = false;

  constructor(private controle: ControleLivrosService) {}

  ngOnInit(): void {
    this.controle.obterLivros().then(livros => {
      this.livros = livros;
      this.carregado = true;
    });
  }

  excluir(codigo: string): void {
    this.controle.excluir(codigo).then(() => {
      // Atualiza a lista após exclusão
      this.controle.obterLivros().then(livros => {
        this.livros = livros;
      });
    });
  }
}