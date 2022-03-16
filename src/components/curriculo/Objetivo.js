import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import '../../styles/curriculo/Objetivo.css';

class Objetivo extends Component {
  render() {
    const { objetivo } = this.props.states;

    return (
      <div className='objetivo'>
        <h2>
          <FontAwesomeIcon icon={faBriefcase} />
          Objetivo
        </h2>
        <p>{objetivo}</p>
      </div>
    );
  }
}

export default Objetivo;
