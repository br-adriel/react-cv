import { useState } from 'react';
import Card from './Card';
import Experiencias from './Experiencias';
import FormExperiencia from './forms/FormExperiencia';

const CadastroExperiencias = (props) => {
  const [codigo, setCodigo] = useState('');
  const [cargo, setCargo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [mesInicio, setMesInicio] = useState('');
  const [anoInicio, setAnoInicio] = useState('');
  const [mesFim, setMesFim] = useState('');
  const [anoFim, setAnoFim] = useState('');
  const [tarefas, setTarefas] = useState('');
  const [textoBotao, setTextoBotao] = useState('Adicionar');

  const componentStates = {
    codigo,
    cargo,
    empresa,
    mesInicio,
    anoInicio,
    mesFim,
    anoFim,
    tarefas,
    textoBotao,
  };

  const btnAtualizar = (codigo) => {
    const experiencia = this.props.states.experiencias.filter(
      (f) => f.id === codigo
    )[0];
    setCodigo(experiencia.id);
    setCargo(experiencia.cargo);
    setEmpresa(experiencia.empresa);
    setMesInicio(experiencia.mesInicio);
    setAnoInicio(experiencia.anoInicio);
    setMesFim(experiencia.mesFim);
    setAnoFim(experiencia.anoFim);
    setTarefas(experiencia.tarefas.join('. '));
    setTextoBotao('Atualizar');
  };

  const defExperiencia = {
    cargo: (e) => setCargo(e.target.value),
    empresa: (e) => setEmpresa(e.target.value),
    mesInicio: (e) => setMesInicio(e.target.value),
    anoInicio: (e) => setAnoInicio(e.target.value),
    mesFim: (e) => setMesFim(e.target.value),
    anoFim: (e) => setAnoFim(e.target.value),
    tarefas: (e) => setTarefas(e.target.value),
  };

  const limparForm = () => {
    setCodigo('');
    setCargo('');
    setEmpresa('');
    setMesInicio('');
    setAnoInicio('');
    setMesFim('');
    setAnoFim('');
    setTarefas('');
    setTextoBotao('Adicionar');
  };

  const { mudarForm, funcExperiencia, states } = props;

  return (
    <>
      <Card>
        <FormExperiencia
          mudarForm={mudarForm}
          novaExperiencia={funcExperiencia.nova}
          states={componentStates}
          limparForm={limparForm}
          defExperiencia={defExperiencia}
        />
      </Card>
      <Experiencias
        experiencias={states.experiencias}
        apagarExperiencia={funcExperiencia.apagar}
        editarExperiencia={btnAtualizar}
      />
    </>
  );
};

export default CadastroExperiencias;
