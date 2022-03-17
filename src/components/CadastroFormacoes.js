import { Component } from 'react';
import Card from './Card';
import FormFormacao from './forms/FormFormacao';
import Formacoes from './Formacoes';

class CadastroFormacoes extends Component {
  render() {
    const { mudarForm, funcFormacao, states } = this.props;
    return (
      <>
        <Card>
          <FormFormacao
            mudarForm={mudarForm}
            novaFormacao={funcFormacao.nova}
          />
        </Card>
        <Formacoes
          formacoes={states.formacoes}
          apagarFormacao={funcFormacao.apagar}
        />
      </>
    );
  }
}

export default CadastroFormacoes;
