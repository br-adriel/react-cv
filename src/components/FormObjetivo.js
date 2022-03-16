import { Component } from 'react';
import FormField from './FormField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

class FormFormacao extends Component {
  render() {
    const { mudarForm, objetivo, defObjetivo } = this.props;
    return (
      <>
        <h2>Objetivo</h2>
        <form action='' onSubmit={() => mudarForm('formacao')}>
          <FormField
            id='objetivo'
            label='Objetivo:'
            atributos={{
              type: 'text',
              minLength: 3,
              name: 'objetivo',
            }}
            iptValue={objetivo}
            iptChange={(e) => defObjetivo(e)}
          />
          <div className='botoes'>
            <button
              type='button'
              onClick={() => mudarForm('contato')}
              className='ml-auto'
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                alt='Seta para a esquerda'
                title='Anterior'
              />
            </button>
            <button type='submit'>
              <FontAwesomeIcon
                icon={faArrowRight}
                alt='Seta para a direita'
                title='Próximo'
              />
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default FormFormacao;
