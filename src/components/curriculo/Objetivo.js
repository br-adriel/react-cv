import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import '../../styles/curriculo/Objetivo.css';

const Objetivo = (props) => {
  const { objetivo } = props.states;

  return (
    <div className='objetivo'>
      <h2>
        <FontAwesomeIcon icon={faBriefcase} />
        Objetivo
      </h2>
      <p>{objetivo}</p>
    </div>
  );
};

export default Objetivo;
