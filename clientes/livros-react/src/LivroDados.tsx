import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Livro from './model/Livro';
import ControleLivros from './controle/ControleLivros';

export default function LivroDados() {
  const navigate = useNavigate();
  const controleLivros = new ControleLivros();

  const [livro] = useState(new Livro('', 1, '', '', ['']));

  const incluir = () => {
    controleLivros.incluir(livro).then(sucesso => {
      if (sucesso) navigate('/');
    });
  };

  return (
    <div>
      <h2>Adicionar Livro</h2>
      <p>Formulário simplificado. Edite o código para adicionar campos reais.</p>
      <button onClick={incluir}>Incluir Livro (teste)</button>
    </div>
  );
}