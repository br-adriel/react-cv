import { Component } from 'react';
import FormField from '../FormField';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
class FormFormacao extends Component {
  render() {
    const { mudarForm, novaFormacao } = this.props;
    const submitForm = (e) => {
      e.preventDefault();
      const formacao = {
        id: uniqid(),
        curso: e.target.curso.value,
        instituicao: e.target.instituicao.value,
        inicio: e.target.inicioCurso.value,
        fim: e.target.fimCurso.value,
      };
      novaFormacao(formacao);
      e.target.reset();
      e.target.curso.focus();
    };
    return (
      <>
        <h2>Formação acadêmica</h2>
        <form action='' onSubmit={(e) => submitForm(e)}>
          <FormField
            id='curso'
            label='Curso:'
            atributos={{
              type: 'text',
              minLength: 3,
              name: 'curso',
            }}
          />
          <FormField
            id='instituicao'
            label='Instituição de ensino:'
            atributos={{
              type: 'text',
              minLength: 3,
              name: 'instituicao',
            }}
          />
          <FormField
            id='inicio-curso'
            label='Ano de início:'
            atributos={{
              type: 'number',
              name: 'inicioCurso',
              min: 1900,
              max: new Date().getFullYear(),
            }}
          />
          <FormField
            id='fim-curso'
            label='Ano de término (ou previsão):'
            atributos={{
              type: 'number',
              name: 'fimCurso',
              min: 1900,
            }}
          />
          <div className='botoes'>
            <button type='submit' className='mr-auto'>
              Adicionar
            </button>
            <button type='button' onClick={() => mudarForm('objetivo')}>
              <FontAwesomeIcon
                icon={faArrowLeft}
                alt='Seta para a esquerda'
                title='Anterior'
              />
            </button>
            <button type='button' onClick={() => mudarForm('experiencia')}>
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
