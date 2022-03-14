import { Component } from 'react';
import Card from './Card';
import FormContato from './FormContato';

class Formulario extends Component {
  render() {
    const { defContatos, states, mudarForm } = this.props;
    const formContato = (
      <Card>
        <FormContato
          defContatos={defContatos}
          states={states}
          mudarForm={mudarForm}
        />
      </Card>
    );
    return formContato;
  }
}

export default Formulario;
