import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faAt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Contato extends Component {
  formatarCelular = (numero) => {
    const digitos = numero.split('');
    let novoNumero = '(';
    novoNumero += `${digitos[0]}${digitos[1]}) `;
    novoNumero += `${digitos[2]} `;
    for (let i = 3; i < 11; i++) {
      novoNumero += digitos[i];
    }
    return novoNumero;
  };

  render() {
    const { nome, celular, linkedin, email } = this.props.states;

    const celularFormatado =
      celular !== '' ? this.formatarCelular(celular) : '';

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
  }
}

export default Contato;
