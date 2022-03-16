import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

class Habilidades extends Component {
  render() {
    const { habilidades } = this.props.states;
    return (
      <div className='habilidades'>
        <h2>
          <FontAwesomeIcon icon={faLightbulb} />
          Habilidades
        </h2>
        {habilidades.map((habilidade) => {
          return (
            <div className='habilidade' key={habilidade.id}>
              <h3>{habilidade.habilidade}</h3>
              <p>{habilidade.nivel}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Habilidades;
