import { Component } from 'react';
import Card from './Card';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Habilidade extends Component {
  render() {
    const { habilidade, apagarHabilidade } = this.props;
    return (
      <Card>
        <h3>{habilidade.habilidade}</h3>
        <p>{habilidade.nivel}</p>
        <div className='botoes'>
          <button
            onClick={() => apagarHabilidade(habilidade.id)}
            className='ml-auto'
          >
            <FontAwesomeIcon
              icon={faTrashCan}
              alt='Ícone de lixeira'
              title='Apagar'
            />
          </button>
        </div>
      </Card>
    );
  }
}

export default Habilidade;
