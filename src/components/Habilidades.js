import { Component } from 'react';
import Habilidade from './Habilidade';

class Habilidades extends Component {
  render() {
    const { habilidades, apagarHabilidade, editarHabilidade } = this.props;
    return (
      <div className='cards'>
        {habilidades.map((habilidade) => {
          return (
            <Habilidade
              key={habilidade.id}
              habilidade={habilidade}
              apagarHabilidade={apagarHabilidade}
              editarHabilidade={editarHabilidade}
            />
          );
        })}
      </div>
    );
  }
}

export default Habilidades;
