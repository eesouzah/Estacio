import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrl: './livro-dados.component.css'
})
export class LivroDadosComponent implements OnInit {
  public livro: Livro = new Livro(0, 0, '', '', []);
  public autoresForm: string = '';
  public editoras: Array<Editora> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir = (): void => {
    this.livro.autores = this.autoresForm.split('\n')
      .map((autor) => autor.trim())
      .filter(autor => autor !== '');
    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/');
  };
}
