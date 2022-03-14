import { Component } from 'react';
import Card from './Card';
import FormContato from './FormContato';
import FormFormacao from './FormFormacao';

class Formulario extends Component {
  render() {
    const { defContatos, states, mudarForm, funcFormacao } = this.props;
    const formContato = (
      <Card>
        <FormContato
          defContatos={defContatos}
          states={states}
          mudarForm={mudarForm}
        />
      </Card>
    );
    const formFormacao = (
      <Card>
        <FormFormacao mudarForm={mudarForm} novaFormacao={funcFormacao.nova} />
      </Card>
    );

    switch (states.formAtual) {
      case 'formacao':
        return formFormacao;
      default:
        return formContato;
    }
  }
}

export default Formulario;
