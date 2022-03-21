import FormField from '../FormField';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPrint } from '@fortawesome/free-solid-svg-icons';

const FormHabilidade = (props) => {
  const { mudarForm, novaHabilidade, states, limparForm, defHabilidade } =
    props;
  const submitForm = (e) => {
    e.preventDefault();
    const habilidade = {
      id: e.target.codigo.value === '' ? uniqid() : e.target.codigo.value,
      habilidade: e.target.habilidade.value,
      nivel: e.target.nivel.value,
    };
    novaHabilidade(habilidade);
    limparForm();
    e.target.habilidade.focus();
  };

  return (
    <>
      <h2>Habilidades</h2>
      <form action='' onSubmit={(e) => submitForm(e)}>
        <input type='hidden' name='codigo' value={states.codigo} />
        <FormField
          id='habilidade'
          label='Habilidade:'
          atributos={{
            type: 'text',
            minLength: 3,
            name: 'habilidade',
          }}
          iptValue={states.habilidade}
          iptChange={defHabilidade.habilidade}
        />
        <FormField
          id='nivel'
          label='Nível:'
          atributos={{
            type: 'text',
            minLength: 3,
            name: 'nivel',
          }}
          iptValue={states.nivel}
          iptChange={defHabilidade.nivel}
        />
        <div className='botoes'>
          <button type='submit' className='mr-auto'>
            {states.textoBotao}
          </button>
          <button type='button' onClick={() => mudarForm('experiencia')}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              alt='Seta para a esquerda'
              title='Anterior'
            />
          </button>
          <button type='button' onClick={() => window.print()}>
            <FontAwesomeIcon icon={faPrint} alt='Impressora' title='Imprimir' />
          </button>
        </div>
      </form>
    </>
  );
};

export default FormHabilidade;
