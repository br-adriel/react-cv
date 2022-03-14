import { Component } from 'react';
import FormField from './FormField';
import uniqid from 'uniqid';

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
            <button onClick={() => mudarForm('contato')}>Voltar</button>
            <button type='submit'>Adicionar</button>
            <button>Próximo</button>
          </div>
        </form>
      </>
    );
  }
}

export default FormFormacao;
