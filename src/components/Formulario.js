import { Component } from 'react';
import Card from './Card';
import FormContato from './FormContato';

class Formulario extends Component {
  render() {
    const { subContato } = this.props;
    return (
      <Card>
        <FormContato subContato={subContato} />
      </Card>
    );
  }
}

export default Formulario;
