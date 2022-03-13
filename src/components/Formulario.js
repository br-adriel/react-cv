import { Component } from 'react';
import Card from './Card';
import FormContato from './FormContato';

class Formulario extends Component {
  render() {
    return (
      <Card>
        <FormContato />
      </Card>
    );
  }
}

export default Formulario;
