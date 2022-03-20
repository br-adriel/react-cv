import Card from './Card';
import { faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Habilidade = (props) => {
  const { habilidade, apagarHabilidade, editarHabilidade } = props;
  return (
    <Card>
      <h3>{habilidade.habilidade}</h3>
      <p>{habilidade.nivel}</p>
      <div className='botoes'>
        <button
          onClick={() => editarHabilidade(habilidade.id)}
          className='ml-auto'
        >
          <FontAwesomeIcon icon={faPen} alt='Ícone de lápis' title='Editar' />
        </button>
        <button onClick={() => apagarHabilidade(habilidade.id)}>
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

export default Habilidade;
