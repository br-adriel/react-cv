import { Component } from 'react';
import '../styles/FormField.css';

class FormField extends Component {
  render() {
    const { id, label, atributos } = this.props;
    return (
      <div className='field'>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...atributos} />
      </div>
    );
  }
}

export default FormField;
