import { Component } from 'react';
import Habilidade from './Habilidade';

class Habilidades extends Component {
  render() {
    const { habilidades, apagarHabilidade } = this.props;
    return (
      <div className='cards'>
        {habilidades.map((habilidade) => {
          return (
            <Habilidade
              key={habilidade.id}
              habilidade={habilidade}
              apagarHabilidade={apagarHabilidade}
            />
          );
        })}
      </div>
    );
  }
}

export default Habilidades;
