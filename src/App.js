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
      formacoes: [],
      experiencias: [],
      habilidades: [],
    };

    // contato
    this.defNome = this.defNome.bind(this);
    this.defEmail = this.defEmail.bind(this);
    this.defCelular = this.defCelular.bind(this);
    this.defLinkedin = this.defLinkedin.bind(this);

    // formacao
    this.novaFormacao = this.novaFormacao.bind(this);
    this.apagarFormacao = this.apagarFormacao.bind(this);

    // experiencia
    this.novaExperiencia = this.novaExperiencia.bind(this);
    this.apagarExperiencia = this.apagarExperiencia.bind(this);

    // habilidade
    this.novaHabilidade = this.novaHabilidade.bind(this);
    this.apagarHabilidade = this.apagarHabilidade.bind(this);

    // form exibido
    this.mudarForm = this.mudarForm.bind(this);
  }

  // states de contato
  defNome = (e) => this.setState({ nome: e.target.value });
  defEmail = (e) => this.setState({ email: e.target.value });
  defCelular = (e) => this.setState({ celular: e.target.value });
  defLinkedin = (e) => this.setState({ linkedin: e.target.value });

  // states de formação
  novaFormacao = (formacao) =>
    this.setState((ant) => {
      return {
        formacoes: [...ant.formacoes, formacao],
      };
    });

  apagarFormacao = (id) =>
    this.setState((ant) => {
      return {
        formacoes: ant.formacoes.filter((f) => f.id !== id),
      };
    });

  // states de experiencias
  novaExperiencia = (experiencia) =>
    this.setState((ant) => {
      return {
        experiencias: [...ant.experiencias, experiencia],
      };
    });

  apagarExperiencia = (id) =>
    this.setState((ant) => {
      return {
        experiencias: ant.experiencias.filter((e) => e.id !== id),
      };
    });

  // states de habilidades
  novaHabilidade = (habilidade) =>
    this.setState((ant) => {
      return {
        habilidades: [...ant.habilidades, habilidade],
      };
    });

  apagarHabilidade = (id) =>
    this.setState((ant) => {
      return {
        habilidades: ant.ehabilidade.filter((h) => h.id !== id),
      };
    });

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
    const funcFormacao = {
      nova: this.novaFormacao,
      apagar: this.apagarFormacao,
    };
    const funcExperiencia = {
      nova: this.novaExperiencia,
      apagar: this.apagarExperiencia,
    };
    const funcHabilidade = {
      nova: this.novaHabilidade,
      apagar: this.apagarHabilidade,
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
              funcFormacao={funcFormacao}
              funcExperiencia={funcExperiencia}
              funcHabilidade={funcHabilidade}
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
