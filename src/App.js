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
      formAtual: 'contato',
    };

    this.defNome = this.defNome.bind(this);
    this.defEmail = this.defEmail.bind(this);
    this.defCelular = this.defCelular.bind(this);
    this.defLinkedin = this.defLinkedin.bind(this);
    this.mudarForm = this.mudarForm.bind(this);
  }

  // states de contato
  defNome = (e) => this.setState({ nome: e.target.value });
  defEmail = (e) => this.setState({ email: e.target.value });
  defCelular = (e) => this.setState({ celular: e.target.value });
  defLinkedin = (e) => this.setState({ linkedin: e.target.value });

  // state de form exibido
  mudarForm(nomeForm) {
    this.setState({ formAtual: nomeForm });
  }

  render() {
    const defContatos = {
      defNome: this.defNome,
      defEmail: this.defEmail,
      defCelular: this.defCelular,
      defLinkedin: this.defLinkedin,
    };
    return (
      <>
        <Header />
        <main>
          <section className='dados'>
            <Formulario
              states={this.state}
              mudarForm={this.mudarForm}
              defContatos={defContatos}
            />
          </section>
          <section className='curriculo'></section>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
