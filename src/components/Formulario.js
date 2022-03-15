import { Component } from 'react';
import Card from './Card';
import FormContato from './FormContato';
import FormFormacao from './FormFormacao';
import Formacoes from './Formacoes';
import FormExperiencia from './FormExperiencia';
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
    const cardsFormacao = (
      <Formacoes
        formacoes={states.formacoes}
        apagarFormacao={funcFormacao.apagar}
      />
    );
    const formExperiencia = (
      <Card>
        <FormExperiencia mudarForm={mudarForm} />
      </Card>
    );

    switch (states.formAtual) {
      case 'formacao':
        return (
          <>
            {formFormacao}
            {cardsFormacao}
          </>
        );
      case 'experiencia':
        return formExperiencia;
      default:
        return formContato;
    }
  }
}

export default Formulario;
