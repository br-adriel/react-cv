import { Component } from 'react';
import Formacao from './Formacao';
import '../styles/Formacoes.css';

class Formacoes extends Component {
  render() {
    const { formacoes, apagarFormacao } = this.props;
    return (
      <div className='formacoes cards'>
        {formacoes.map((formacao, i) => {
          return (
            <Formacao
              key={formacao.id}
              formacao={formacao}
              apagarFormacao={apagarFormacao}
            />
          );
        })}
      </div>
    );
  }
}

export default Formacoes;
