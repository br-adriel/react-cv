import { Component } from 'react';
import Card from './Card';
import Experiencias from './Experiencias';
import FormExperiencia from './forms/FormExperiencia';

class CadastroExperiencias extends Component {
  render() {
    const { mudarForm, funcExperiencia, states } = this.props;
    return (
      <>
        <Card>
          <FormExperiencia
            mudarForm={mudarForm}
            novaExperiencia={funcExperiencia.nova}
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
