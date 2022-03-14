import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Formulario from './components/Formulario';
import { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      celular: '',
      email: '',
      linkedin: '',
    };

    this.submitContato = this.submitContato.bind(this);
  }

  submitContato(e) {
    e.preventDefault();
    this.setState({
      nome: e.target.nome.value,
      email: e.target.email.value,
      celular: e.target.celular.value,
      linkedin: e.target.linkedin.value,
    });
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <section className='dados'>
            <Formulario subContato={this.submitContato} />
          </section>
          <section className='curriculo'></section>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
