import { Component } from 'react';
import Formacao from './Formacao';
import '../styles/Formacoes.css';

class Formacoes extends Component {
  render() {
    const { formacoes, apagarFormacao, editarFormacao } = this.props;
    return (
      <div className='formacoes cards'>
        {formacoes.map((formacao) => {
          return (
            <Formacao
              key={formacao.id}
              formacao={formacao}
              apagarFormacao={apagarFormacao}
              editarFormacao={editarFormacao}
            />
          );
        })}
      </div>
    );
  }
}

export default Formacoes;
