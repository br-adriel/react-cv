import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const FormacaoAcademica = (props) => {
  const { formacoes } = props.states;
  return (
    <div className='formacaoAcademica'>
      <h2>
        <FontAwesomeIcon icon={faGraduationCap} />
        Formação acadêmica
      </h2>
      {[...formacoes].reverse().map((formacao) => {
        return (
          <div className='formacao' key={formacao.id}>
            <h3>{formacao.curso}</h3>
            <p>
              {formacao.instituicao} | {formacao.inicio} - {formacao.fim}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default FormacaoAcademica;
