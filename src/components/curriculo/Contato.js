import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faAt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../../styles/curriculo/Contato.css';

const Contato = (props) => {
  const formatarCelular = (numero) => {
    const digitos = numero.split('');
    let novoNumero = '(';
    novoNumero += `${digitos[0]}${digitos[1]}) `;
    novoNumero += `${digitos[2]} `;
    for (let i = 3; i < 11; i++) {
      novoNumero += digitos[i];
    }
    return novoNumero;
  };

  const { nome, celular, linkedin, email } = props.states;

  const celularFormatado = celular !== '' ? formatarCelular(celular) : '';

  return (
    <div className='contato'>
      <h2>{nome}</h2>
      {email !== '' ? (
        <p>
          <FontAwesomeIcon icon={faAt} />
          {email}
        </p>
      ) : null}
      {celular !== '' ? (
        <p>
          <FontAwesomeIcon icon={faPhone} />
          {celularFormatado}
        </p>
      ) : null}
      {linkedin !== '' ? (
        <p>
          <FontAwesomeIcon icon={faLinkedin} />
          {linkedin}
        </p>
      ) : null}
    </div>
  );
};

export default Contato;
