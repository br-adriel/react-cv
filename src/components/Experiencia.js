import Card from './Card';
import { faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import uniquid from 'uniqid';

const Experiencia = (props) => {
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
  const { experiencia, apagarExperiencia, editarExperiencia } = props;

  return (
    <Card>
      <h3>{experiencia.cargo}</h3>
      <p>
        {experiencia.empresa} | {meses[experiencia.mesInicio - 1]}{' '}
        {experiencia.anoInicio} - {meses[experiencia.mesFim - 1]}{' '}
        {experiencia.anoFim}
      </p>
      <ul>
        {experiencia.tarefas.map((tarefa) => {
          return <li key={uniquid()}>{tarefa}</li>;
        })}
      </ul>
      <div className='botoes'>
        <button
          onClick={() => editarExperiencia(experiencia.id)}
          className='ml-auto'
        >
          <FontAwesomeIcon icon={faPen} alt='Ícone de lápis' title='Editar' />
        </button>
        <button onClick={() => apagarExperiencia(experiencia.id)}>
          <FontAwesomeIcon
            icon={faTrashCan}
            alt='Ícone de lixeira'
            title='Apagar'
          />
        </button>
      </div>
    </Card>
  );
};

export default Experiencia;
