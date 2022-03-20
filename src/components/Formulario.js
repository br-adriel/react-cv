import Card from './Card';
import FormContato from './forms/FormContato';
import FormObjetivo from './forms/FormObjetivo';
import CadastroFormacoes from './CadastroFormacoes';
import CadastroExperiencias from './CadastroExperiencias';
import CadastroHabilidades from './CadastroHabilidades';

const Formulario = (props) => {
  const {
    defContatos,
    defObjetivo,
    funcFormacao,
    funcExperiencia,
    funcHabilidade,
    states,
    mudarForm,
  } = props;

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
        <CadastroHabilidades
          mudarForm={mudarForm}
          funcHabilidade={funcHabilidade}
          states={states}
        />
      );
    default:
      return formContato;
  }
};

export default Formulario;
