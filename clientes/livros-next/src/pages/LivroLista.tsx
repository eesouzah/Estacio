import { useEffect, useState } from 'react';
import Livro from '../model/Livro';
import ControleLivros from '../controle/ControleLivros';
import LinhaLivro from '../components/LinhaLivro';

const LivroLista = () => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState<boolean>(false);
  const controleLivros = new ControleLivros();

  useEffect(() => {
    controleLivros.obterLivros().then(dados => {
      setLivros(dados);
      setCarregado(true);
    });
  }, []);

  const excluir = (codigo: string) => {
    controleLivros.excluir(codigo).then(() => {
      setCarregado(false);
      controleLivros.obterLivros().then(dados => {
        setLivros(dados);
        setCarregado(true);
      });
    });
  };

  return (
    <main>
      <h1>Lista de Livros</h1>
      {carregado ? (
        <table>
          <tbody>
            {livros.map((livro, index) => (
              <LinhaLivro
                key={index}
                livro={livro}
                excluir={() => excluir(livro.codigo)}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p>Carregando...</p>
      )}
    </main>
  );
};

export default LivroLista;