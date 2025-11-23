export interface Editora {
  codEditora: number;
  nome: string;
}

export default class ControleEditoraService {
  private editoras: Editora[] = [
    { codEditora: 1, nome: 'Editora Alpha' },
    { codEditora: 2, nome: 'Editora Beta' },
    { codEditora: 3, nome: 'Editora Gamma' }
  ];

  getEditoras(): Editora[] {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    return this.editoras.find(e => e.codEditora === codEditora)?.nome || 'Desconhecida';
  }
}