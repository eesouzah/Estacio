import Livro from '../model/Livro';

interface LinhaLivroProps {
  livro: Livro;
  excluir: () => void;
}

export default function LinhaLivro({ livro, excluir }: LinhaLivroProps) {
  return (
    <tr>
      <td>{livro.codigo}</td>
      <td>{livro.titulo}</td>
      <td>{livro.resumo}</td>
      <td>{livro.autores.join(', ')}</td>
      <td>
        <button onClick={excluir} style={{ marginLeft: '8px' }}>
          Excluir
        </button>
      </td>
    </tr>
  );
}