import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  private editoras: Array<Editora> = [
    new Editora(1, "Angular LTDA"),
    new Editora(2, "Est Dados"),
    new Editora(3, "Web Mod")
  ];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.filter(e => e.codEditora === codEditora)[0];
    return editora ? editora.nome : '';
  }
}