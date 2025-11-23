import { useState, useEffect } from 'react';
import Livro from '../model/Livro';
import ControleLivros from '../controle/ControleLivros';
import type { Editora } from '../controle/ControleEditoraService';

const LinhaLivro = ({ livro, excluir }: { livro: Livro; excluir: () => void }) => {
  return (
    <tr>
      <td>{livro.codigo}</td>
      <td>{livro.titulo}</td>
      <td>{livro.autores.join(', ')}</td>
      <td><button onClick={excluir}>Excluir</button></td>
    </tr>
  );
};

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
      controle.obterLivros().then(novosLivros => {
        setLivros(novosLivros);
        setCarregado(true);
      });
    });
  };

  if (!carregado) {
    return <p>Carregando lista de livros...</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Lista de Livros</h1>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Autores</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro, index) => (
            <LinhaLivro
              key={index} // usa o índice como key (número, como pedido)
              livro={livro}
              excluir={() => excluir(livro.codigo)}
            />
          ))}
        </tbody>
      </table>

      <p style={{ marginTop: '20px' }}>
        <a href="/dados">Adicionar Novo Livro</a>
      </p>
    </div>
  );
}