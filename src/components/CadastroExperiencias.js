import { Component } from 'react';
import Card from './Card';
import Experiencias from './Experiencias';
import FormExperiencia from './forms/FormExperiencia';

class CadastroExperiencias extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codigo: '',
      cargo: '',
      empresa: '',
      mesInicio: '',
      anoInicio: '',
      mesFim: '',
      anoFim: '',
      tarefas: '',
      textoBotao: 'Adicionar',
    };

    this.btnAtualizar = this.btnAtualizar.bind(this);
  }

  btnAtualizar = (codigo) => {
    const experiencia = this.props.states.experiencias.filter(
      (f) => f.id === codigo
    )[0];
    this.setState({
      codigo: experiencia.id,
      cargo: experiencia.cargo,
      empresa: experiencia.empresa,
      mesInicio: experiencia.mesInicio,
      anoInicio: experiencia.anoInicio,
      mesFim: experiencia.mesFim,
      anoFim: experiencia.anoFim,
      tarefas: experiencia.tarefas.join('. '),
      textoBotao: 'Atualizar',
    });
  };

  render() {
    const { mudarForm, funcExperiencia, states } = this.props;
    return (
      <>
        <Card>
          <FormExperiencia
            mudarForm={mudarForm}
            novaExperiencia={funcExperiencia.nova}
            states={this.state}
            btnAtualizar={this.btnAtualizar}
          />
        </Card>
        <Experiencias
          experiencias={states.experiencias}
          apagarExperiencia={funcExperiencia.apagar}
        />
      </>
    );
  }
}

export default CadastroExperiencias;
