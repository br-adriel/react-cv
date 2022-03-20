import Card from './Card';
import { faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Formacao = (props) => {
  const { formacao, apagarFormacao, editarFormacao } = props;
  return (
    <Card>
      <h3>{formacao.curso}</h3>
      <p>{formacao.instituicao}</p>
      <p>
        {formacao.inicio} - {formacao.fim}
      </p>
      <div className='botoes'>
        <button onClick={() => editarFormacao(formacao.id)} className='ml-auto'>
          <FontAwesomeIcon icon={faPen} alt='Ícone de lápis' title='Editar' />
        </button>
        <button onClick={() => apagarFormacao(formacao.id)}>
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

export default Formacao;
