import { Component } from 'react';
import FormField from './FormField';

class FormContato extends Component {
  render() {
    return (
      <>
        <h2>Informações de contato</h2>
        <form action=''>
          <FormField
            id='nome'
            label='Nome completo:'
            atributos={{
              type: 'text',
              required: true,
              minlength: 3,
              name: 'nome',
            }}
          />
          <FormField
            id='celular'
            label='Celular:'
            atributos={{
              type: 'tel',
              minlength: 11,
              maxlength: 11,
              name: 'celular',
            }}
          />
          <FormField
            id='email'
            label='Email:'
            atributos={{
              type: 'email',
              name: 'email',
            }}
          />
          <FormField
            id='linkedin'
            label='Linkedin:'
            atributos={{
              type: 'text',
              name: 'linkedin',
            }}
          />
          <button type='submit'>Próximo</button>
        </form>
      </>
    );
  }
}

export default FormContato;
