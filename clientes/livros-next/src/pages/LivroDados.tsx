import { useState } from 'react';
import { useRouter } from 'next/router';
import Livro from '../model/Livro';
import ControleLivros from '../controle/ControleLivros';
import ControleEditoraService from '../controle/ControleEditoraService';

const LivroDados = () => {
  const router = useRouter();
  const controleLivros = new ControleLivros();
  const controleEditora = new ControleEditoraService();

  const [livro] = useState(new Livro('', 0, '', '', [])); // código vazio

  const incluir = () => {
    controleLivros.incluir(livro).then(sucesso => {
      if (sucesso) {
        router.push('/LivroLista'); // ou '/' dependendo da rota
      }
    });
  };

  return (
    <div>
      {/* formulário */}
      <button onClick={incluir}>Incluir</button>
    </div>
  );
};

export default LivroDados;