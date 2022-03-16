import { Component } from 'react';
import FormField from './FormField';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPrint } from '@fortawesome/free-solid-svg-icons';

class FormHabilidade extends Component {
  render() {
    const { mudarForm, novaHabilidade } = this.props;
    const submitForm = (e) => {
      e.preventDefault();
      const habilidade = {
        id: uniqid(),
        habilidade: e.target.habilidade.value,
        nivel: e.target.nivel.value,
      };
      novaHabilidade(habilidade);
      e.target.reset();
    };
    return (
      <>
        <h2>Habilidades</h2>
        <form action='' onSubmit={(e) => submitForm(e)}>
          <FormField
            id='habilidade'
            label='Habilidade:'
            atributos={{
              type: 'text',
              minLength: 3,
              name: 'habilidade',
            }}
          />
          <FormField
            id='nivel'
            label='Nível:'
            atributos={{
              type: 'text',
              minLength: 3,
              name: 'nivel',
            }}
          />
          <div className='botoes'>
            <button type='submit' className='mr-auto'>
              Adicionar
            </button>
            <button type='button' onClick={() => mudarForm('experiencia')}>
              <FontAwesomeIcon
                icon={faArrowLeft}
                alt='Seta para a esquerda'
                title='Anterior'
              />
            </button>
            <button type='button' onClick={() => window.print()}>
              <FontAwesomeIcon
                icon={faPrint}
                alt='Impressora'
                title='Imprimir'
              />
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default FormHabilidade;
