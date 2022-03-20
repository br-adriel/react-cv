import { useState } from 'react';
import Card from './Card';
import FormFormacao from './forms/FormFormacao';
import Formacoes from './Formacoes';

const CadastroFormacoes = (props) => {
  const [codigo, setCodigo] = useState('');
  const [curso, setCurso] = useState('');
  const [instituicao, setInstituicao] = useState('');
  const [inicio, setInicio] = useState('');
  const [fim, setFim] = useState('');
  const [textoBotao, setTextoBotao] = useState('Adicionar');

  const componentStates = {
    codigo,
    curso,
    instituicao,
    inicio,
    fim,
    textoBotao,
  };

  const defFormacao = {
    curso: (e) => setCurso(e.target.value),
    instituicao: (e) => setInstituicao(e.target.value),
    inicio: (e) => setInicio(e.target.value),
    fim: (e) => setFim(e.target.value),
  };

  const limparForm = () => {
    setCodigo('');
    setCurso('');
    setInstituicao('');
    setInicio('');
    setFim('');
    setTextoBotao('Adicionar');
  };

  const btnAtualizar = (codigo) => {
    const formacao = props.states.formacoes.filter((f) => f.id === codigo)[0];
    setCodigo(formacao.id);
    setCurso(formacao.curso);
    setInstituicao(formacao.instituicao);
    setInicio(formacao.inicio);
    setFim(formacao.fim);
    setTextoBotao('Atualizar');
  };

  const { mudarForm, funcFormacao, states } = props;

  return (
    <>
      <Card>
        <FormFormacao
          mudarForm={mudarForm}
          novaFormacao={funcFormacao.nova}
          states={componentStates}
          defFormacao={defFormacao}
          limparForm={limparForm}
        />
      </Card>
      <Formacoes
        formacoes={states.formacoes}
        apagarFormacao={funcFormacao.apagar}
        editarFormacao={btnAtualizar}
      />
    </>
  );
};

export default CadastroFormacoes;
