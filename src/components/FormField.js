import { Component } from 'react';
import '../styles/FormField.css';

class FormField extends Component {
  render() {
    const { id, label, atributos, iptValue, iptChange = () => {} } = this.props;
    return (
      <div className='field'>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          {...atributos}
          value={iptValue}
          onChange={(e) => iptChange(e)}
        />
      </div>
    );
  }
}

export default FormField;
