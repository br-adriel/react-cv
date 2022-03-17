import { Component } from 'react';
import Card from './Card';
import FormContato from './forms/FormContato';
import FormHabilidade from './forms/FormHabilidade';
import Habilidades from './Habilidades';
import FormObjetivo from './forms/FormObjetivo';
import CadastroFormacoes from './CadastroFormacoes';
import CadastroExperiencias from './CadastroExperiencias';

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
          <CadastroFormacoes
            mudarForm={mudarForm}
            states={states}
            funcFormacao={funcFormacao}
          />
        );
      case 'experiencia':
        return (
          <CadastroExperiencias
            mudarForm={mudarForm}
            funcExperiencia={funcExperiencia}
            states={states}
          />
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
