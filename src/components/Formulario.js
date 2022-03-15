import { Component } from 'react';
import Card from './Card';
import FormContato from './FormContato';
import FormFormacao from './FormFormacao';
import Formacoes from './Formacoes';
import FormExperiencia from './FormExperiencia';
import Experiencias from './Experiencias';
import FormHabilidade from './FormHabilidade';

class Formulario extends Component {
  render() {
    const { defContatos, funcFormacao, funcExperiencia } = this.props;
    const { states, mudarForm } = this.props;

    // contato
    const formContato = (
      <Card>
        <FormContato
          defContatos={defContatos}
          states={states}
          mudarForm={mudarForm}
        />
      </Card>
    );

    // formacao academica
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

    // experiencia profissional
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

    // habilidades
    const formHabilidades = (
      <Card>
        <FormHabilidade mudarForm={mudarForm} />
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
        return (
          <>
            {formExperiencia}
            {cardsExperiencia}
          </>
        );
      case 'habilidade':
        return formHabilidades;
      default:
        return formContato;
    }
  }
}

export default Formulario;
