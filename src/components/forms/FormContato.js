import { Component } from 'react';
import FormField from '../FormField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

class FormContato extends Component {
  render() {
    const { defContatos, states, mudarForm } = this.props;
    return (
      <>
        <h2>Informações de contato</h2>
        <form action='' onSubmit={() => mudarForm('objetivo')}>
          <FormField
            id='nome'
            label='Nome completo:'
            atributos={{
              type: 'text',
              required: true,
              minLength: 3,
              name: 'nome',
            }}
            iptValue={states.nome}
            iptChange={defContatos.defNome}
          />
          <FormField
            id='celular'
            label='Celular:'
            atributos={{
              type: 'tel',
              minLength: 11,
              maxLength: 11,
              name: 'celular',
            }}
            iptValue={states.celular}
            iptChange={defContatos.defCelular}
          />
          <FormField
            id='email'
            label='Email:'
            atributos={{
              type: 'email',
              name: 'email',
            }}
            iptValue={states.email}
            iptChange={defContatos.defEmail}
          />
          <FormField
            id='linkedin'
            label='Linkedin:'
            atributos={{
              type: 'text',
              name: 'linkedin',
            }}
            iptValue={states.linkedin}
            iptChange={defContatos.defLinkedin}
          />
          <button type='submit'>
            <FontAwesomeIcon
              icon={faArrowRight}
              alt='Seta para a direita'
              title='Próximo'
            />
          </button>
        </form>
      </>
    );
  }
}

export default FormContato;
