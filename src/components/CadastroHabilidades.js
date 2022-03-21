import { useState } from 'react';
import FormHabilidade from './forms/FormHabilidade';
import Habilidades from './Habilidades';
import Card from './Card';

const CadastroHabilidades = (props) => {
  const [codigo, setCodigo] = useState('');
  const [habilidade, setHabilidade] = useState('');
  const [nivel, setNivel] = useState('');
  const [textoBotao, setTextoBotao] = useState('Adicionar');

  const componentStates = {
    codigo,
    habilidade,
    nivel,
    textoBotao,
  };

  const defHabilidade = {
    habilidade: (e) => setHabilidade(e.target.value),
    nivel: (e) => setNivel(e.target.value),
  };

  const limparForm = () => {
    setCodigo('');
    setHabilidade('');
    setNivel('');
    setTextoBotao('Adicionar');
  };

  const btnAtualizar = (codigo) => {
    const habilidasde = props.states.habilidades.filter(
      (f) => f.id === codigo
    )[0];
    setCodigo(habilidasde.id);
    setHabilidade(habilidasde.habilidade);
    setNivel(habilidasde.nivel);
    setTextoBotao('Atualizar');
  };

  const { mudarForm, funcHabilidade, states } = props;

  return (
    <>
      <Card>
        <FormHabilidade
          mudarForm={mudarForm}
          novaHabilidade={funcHabilidade.nova}
          states={componentStates}
          defHabilidade={defHabilidade}
          limparForm={limparForm}
        />
      </Card>
      <Habilidades
        habilidades={states.habilidades}
        apagarHabilidade={funcHabilidade.apagar}
        editarHabilidade={btnAtualizar}
      />
    </>
  );
};

export default CadastroHabilidades;
