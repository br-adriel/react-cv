import { Component } from 'react';
import FormHabilidade from './forms/FormHabilidade';
import Habilidades from './Habilidades';
import Card from './Card';

class CadastroHabilidades extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codigo: '',
      habilidade: '',
      nivel: '',
      textoBotao: 'Adicionar',
    };
  }
  render() {
    const { mudarForm, funcHabilidade, states } = this.props;
    return (
      <>
        <Card>
          <FormHabilidade
            mudarForm={mudarForm}
            novaHabilidade={funcHabilidade.nova}
            states={this.state}
          />
        </Card>
        <Habilidades
          habilidades={states.habilidades}
          apagarHabilidade={funcHabilidade.apagar}
        />
      </>
    );
  }
}

export default CadastroHabilidades;
