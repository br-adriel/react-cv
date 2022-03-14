import { Component } from 'react';
import Card from './Card';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Formacao extends Component {
  render() {
    const { formacao, apagarFormacao } = this.props;
    return (
      <Card>
        <h3>{formacao.curso}</h3>
        <p>{formacao.instituicao}</p>
        <p>
          {formacao.inicio} - {formacao.fim}
        </p>
        <div className='botoes'>
          <button
            onClick={() => apagarFormacao(formacao.id)}
            className='ml-auto'
          >
            <FontAwesomeIcon icon={faTrashCan} />
            Apagar
          </button>
        </div>
      </Card>
    );
  }
}

export default Formacao;
