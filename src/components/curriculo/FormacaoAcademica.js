import { Component } from 'react';

class FormacaoAcademica extends Component {
  render() {
    const { formacoes } = this.props.states;
    return (
      <div className='formacaoAcademica'>
        <h2>Formação acadêmica</h2>
        {[...formacoes].reverse().map((formacao) => {
          return (
            <div className='formacao' key={formacao.id}>
              <h3>{formacao.curso}</h3>
              <p>
                {formacao.instituicao} | {formacao.inicio} - {formacao.fim}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FormacaoAcademica;
