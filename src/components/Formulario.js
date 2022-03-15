import { Component } from 'react';
import Card from './Card';
import FormContato from './FormContato';
import FormFormacao from './FormFormacao';
import Formacoes from './Formacoes';
import FormExperiencia from './FormExperiencia';
import Experiencias from './Experiencias';
class Formulario extends Component {
  render() {
    const { defContatos, funcFormacao, funcExperiencia } = this.props;
    const { states, mudarForm } = this.props;
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
        <FormExperiencia
          mudarForm={mudarForm}
          novaExperiencia={funcExperiencia.nova}
        />
      </Card>
    );
    const cardsExperiencia = (
      <Experiencias
        experiencias={states.experiencias}
        apagarExperiencia={funcExperiencia.apagar}
      />
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
        return (
          <>
            {formExperiencia}
            {cardsExperiencia}
          </>
        );
      default:
        return formContato;
    }
  }
}

export default Formulario;
