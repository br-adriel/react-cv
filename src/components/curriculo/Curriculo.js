import { Component } from 'react';
import '../../styles/curriculo/Curriculo.css';
import Contato from './Contato';
import Experiencias from './Experiencias';
import FormacaoAcademica from './FormacaoAcademica';
import Habilidades from './Habilidades';
import Objetivo from './Objetivo';

class Curriculo extends Component {
  render() {
    const { states } = this.props;
    return (
      <div className='curriculo'>
        <Contato states={states} />
        {states.objetivo !== '' ? <Objetivo states={states} /> : null}
        {states.habilidades.length > 0 ? <Habilidades states={states} /> : null}
        {states.formacoes.length > 0 ? (
          <FormacaoAcademica states={states} />
        ) : null}
        {states.experiencias.length > 0 ? (
          <Experiencias states={states} />
        ) : null}
      </div>
    );
  }
}

export default Curriculo;
