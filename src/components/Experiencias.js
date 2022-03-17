import { Component } from 'react';
import Experiencia from './Experiencia';

class Experiencias extends Component {
  render() {
    const { experiencias, apagarExperiencia, editarExperiencia } = this.props;
    return (
      <div className='cards'>
        {experiencias.map((experiencia) => {
          return (
            <Experiencia
              key={experiencia.id}
              experiencia={experiencia}
              apagarExperiencia={apagarExperiencia}
              editarExperiencia={editarExperiencia}
            />
          );
        })}
      </div>
    );
  }
}

export default Experiencias;
