import Formacao from './Formacao';
import '../styles/Formacoes.css';

const Formacoes = (props) => {
  const { formacoes, apagarFormacao, editarFormacao } = props;
  return (
    <div className='formacoes cards'>
      {formacoes.map((formacao) => {
        return (
          <Formacao
            key={formacao.id}
            formacao={formacao}
            apagarFormacao={apagarFormacao}
            editarFormacao={editarFormacao}
          />
        );
      })}
    </div>
  );
};

export default Formacoes;
