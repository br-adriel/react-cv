import { Component } from 'react';
import Card from './Card';
import FormContato from './FormContato';
import FormFormacao from './FormFormacao';
import Formacoes from './Formacoes';
import FormExperiencia from './FormExperiencia';
import Experiencias from './Experiencias';
import FormHabilidade from './FormHabilidade';
import Habilidades from './Habilidades';
import FormObjetivo from './FormObjetivo';

class Formulario extends Component {
  render() {
    const {
      defContatos,
      defObjetivo,
      funcFormacao,
      funcExperiencia,
      funcHabilidade,
      states,
      mudarForm,
    } = this.props;

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

    // objetivo
    const formObjetivo = (
      <Card>
        <FormObjetivo
          mudarForm={mudarForm}
          objetivo={states.objetivo}
          defObjetivo={defObjetivo}
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
    const formHabilidade = (
      <Card>
        <FormHabilidade
          mudarForm={mudarForm}
          novaHabilidade={funcHabilidade.nova}
        />
      </Card>
    );
    const cardsHabilidade = (
      <Habilidades
        habilidades={states.habilidades}
        apagarHabilidade={funcHabilidade.apagar}
      />
    );

    switch (states.formAtual) {
      case 'objetivo':
        return formObjetivo;
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
        return (
          <>
            {formHabilidade}
            {cardsHabilidade}
          </>
        );
      default:
        return formContato;
    }
  }
}

export default Formulario;
