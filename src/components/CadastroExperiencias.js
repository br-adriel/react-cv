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
    this.limparForm = this.limparForm.bind(this);
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

  limparForm = () => {
    this.setState({
      codigo: '',
      cargo: '',
      empresa: '',
      mesInicio: '',
      anoInicio: '',
      mesFim: '',
      anoFim: '',
      tarefas: '',
      textoBotao: 'Adicionar',
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
            limparForm={this.limparForm}
          />
        </Card>
        <Experiencias
          experiencias={states.experiencias}
          apagarExperiencia={funcExperiencia.apagar}
          editarExperiencia={this.btnAtualizar}
        />
      </>
    );
  }
}

export default CadastroExperiencias;
