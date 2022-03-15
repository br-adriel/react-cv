import { Component } from 'react';
import FormField from './FormField';
// import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

class FormExperiencia extends Component {
  render() {
    const { mudarForm } = this.props;
    // const submitForm = (e) => {
    //   e.preventDefault();
    //   const experiencia = {
    //     id: uniqid(),
    //   };
    //   e.target.reset();
    // };
    return (
      <>
        <h2>Experiência profissional</h2>
        <form action=''>
          <FormField
            id='cargo'
            label='Cargo:'
            atributos={{
              type: 'text',
              minLength: 3,
              name: 'cargo',
            }}
          />
          <FormField
            id='empresa'
            label='Empresa:'
            atributos={{
              type: 'text',
              minLength: 3,
              name: 'empresa',
            }}
          />
          <FormField
            id='mes-inicio'
            label='Mês de início:'
            atributos={{
              type: 'number',
              min: 1,
              max: 12,
              name: 'mesInicio',
            }}
          />
          <FormField
            id='ano-inicio'
            label='Ano de início:'
            atributos={{
              type: 'number',
              name: 'anoInicio',
              min: 1900,
              max: new Date().getFullYear(),
            }}
          />
          <FormField
            id='mes-fim'
            label='Mês de término:'
            atributos={{
              type: 'number',
              min: 1,
              max: 12,
              name: 'mesFim',
            }}
          />
          <FormField
            id='ano-fim'
            label='Ano de término:'
            atributos={{
              type: 'number',
              name: 'anoFim',
              min: 1900,
              max: new Date().getFullYear(),
            }}
          />
          <FormField
            id='tarefas-desenvolvidas'
            label='Tarefas desempenhadas (separe por ponto e espaço):'
            atributos={{
              type: 'text',
              name: 'tarefasDesempenhadas',
              minLength: 3,
            }}
          />
          <div className='botoes'>
            <button type='submit' className='mr-auto'>
              Adicionar
            </button>
            <button onClick={() => mudarForm('formacao')}>
              <FontAwesomeIcon
                icon={faArrowLeft}
                alt='Seta para a esquerda'
                title='Anterior'
              />
            </button>
            <button>
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

export default FormExperiencia;
