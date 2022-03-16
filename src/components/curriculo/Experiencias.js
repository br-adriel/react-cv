import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
// import '../../styles/curriculo/Experiencia.css';

class Experiencias extends Component {
  render() {
    const meses = [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
    ];
    const { experiencias } = this.props.states;
    return (
      <div className='experienciasProfissionais'>
        <h2>
          <FontAwesomeIcon icon={faClockRotateLeft} />
          Experiência profissional
        </h2>
        {[...experiencias].reverse().map((experiencia) => {
          let inicio = meses[experiencia.mesInicio - 1];
          inicio += ' ' + experiencia.anoInicio;

          let fim = meses[experiencia.mesFim - 1];
          fim += ' ' + experiencia.anoFim;

          return (
            <div className='experiencia' key={experiencia.id}>
              <h3>{experiencia.cargo}</h3>
              <p>
                {experiencia.empresa} | {inicio} - {fim}
              </p>
              <ul>
                {experiencia.tarefas.map((tarefa, i) => {
                  return <li key={i}>{tarefa}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Experiencias;
