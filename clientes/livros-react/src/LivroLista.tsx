import { useState, useEffect } from 'react';
import Livro from './model/Livro';
import ControleLivros from './controle/ControleLivros';
import LinhaLivro from './components/LinhaLivro';

export default function LivroLista() {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState(false);
  const controle = new ControleLivros();

  useEffect(() => {
    controle.obterLivros().then(dados => {
      setLivros(dados);
      setCarregado(true);
    });
  }, []);

  const excluir = (codigo: string) => {
    controle.excluir(codigo).then(() => {
      setCarregado(false);
      controle.obterLivros().then(setLivros);
      setCarregado(true);
    });
  };

  if (!carregado) return <p>Carregando...</p>;

  return (
    <div>
      <h2>Lista de Livros</h2>
      <table border={1}>
        <thead><tr><th>ID</th><th>Título</th><th>Autores</th><th>Ação</th></tr></thead>
        <tbody>
          {livros.map((livro, index) => (
            <LinhaLivro key={index} livro={livro} excluir={() => excluir(livro.codigo)} />
          ))}
        </tbody>
      </table>
    </div>
  );
}