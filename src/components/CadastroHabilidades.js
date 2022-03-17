import { Component } from 'react';
import FormHabilidade from './forms/FormHabilidade';
import Habilidades from './Habilidades';
import Card from './Card';

class CadastroHabilidades extends Component {
  render() {
    const { mudarForm, funcHabilidade, states } = this.props;
    return (
      <>
        <Card>
          <FormHabilidade
            mudarForm={mudarForm}
            novaHabilidade={funcHabilidade.nova}
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