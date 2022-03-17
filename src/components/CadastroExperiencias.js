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
  }

  render() {
    const { mudarForm, funcExperiencia, states } = this.props;
    return (
      <>
        <Card>
          <FormExperiencia
            mudarForm={mudarForm}
            novaExperiencia={funcExperiencia.nova}
            states={this.state}
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
