import { Component } from 'react';
import '../../styles/curriculo/Curriculo.css';
import Contato from './Contato';

class Curriculo extends Component {
  render() {
    const { states } = this.props;
    return (
      <div className='curriculo'>
        <Contato states={states} />
      </div>
    );
  }
}

export default Curriculo;
