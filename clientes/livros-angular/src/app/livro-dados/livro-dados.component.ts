import { Component } from '@angular/core';
import { Livro } from '../livro';
import { ControleLivrosService } from '../controle-livros.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css'],
  imports: [FormsModule]
})
export class LivroDadosComponent {
  livro = new Livro(); // código já é string vazia
  autoresTexto = '';

  constructor(
    private controle: ControleLivrosService,
    private router: Router
  ) {}

  incluir(): void {
    this.livro.autores = this.autoresTexto
      .split(',')
      .map(a => a.trim())
      .filter(a => a.length > 0);

    this.controle.incluir(this.livro).then((sucesso) => {
      if (sucesso) {
        this.router.navigateByUrl('/lista');
      } else {
        alert('Erro ao incluir o livro.');
      }
    });
  }
}