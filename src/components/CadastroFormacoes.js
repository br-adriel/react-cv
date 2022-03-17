import { Component } from 'react';
import Card from './Card';
import FormFormacao from './forms/FormFormacao';
import Formacoes from './Formacoes';

class CadastroFormacoes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codigo: '',
      curso: '',
      instituicao: '',
      inicio: '',
      fim: '',
      textoBotao: 'Adicionar',
    };

    this.defCurso = this.defCurso.bind(this);
    this.defInstituicao = this.defInstituicao.bind(this);
    this.defInicio = this.defInicio.bind(this);
    this.defFim = this.defFim.bind(this);

    this.btnAtualizar = this.btnAtualizar.bind(this);
    this.limparForm = this.limparForm.bind(this);
  }

  defCurso = (e) => this.setState({ curso: e.target.value });
  defInstituicao = (e) => this.setState({ instituicao: e.target.value });
  defInicio = (e) => this.setState({ inicio: e.target.value });
  defFim = (e) => this.setState({ fim: e.target.value });

  limparForm = () =>
    this.setState({
      codigo: '',
      curso: '',
      instituicao: '',
      inicio: '',
      fim: '',
      textoBotao: 'Adicionar',
    });

  btnAtualizar = (codigo) => {
    const formacao = this.props.states.formacoes.filter(
      (f) => f.id === codigo
    )[0];
    this.setState({
      codigo: formacao.id,
      curso: formacao.curso,
      instituicao: formacao.instituicao,
      inicio: formacao.inicio,
      fim: formacao.fim,
      textoBotao: 'Atualizar',
    });
  };

  render() {
    const { mudarForm, funcFormacao, states } = this.props;
    const defFormacao = {
      curso: this.defCurso,
      instituicao: this.defInstituicao,
      inicio: this.defInicio,
      fim: this.defFim,
    };
    return (
      <>
        <Card>
          <FormFormacao
            mudarForm={mudarForm}
            novaFormacao={funcFormacao.nova}
            states={this.state}
            defFormacao={defFormacao}
            limparForm={this.limparForm}
          />
        </Card>
        <Formacoes
          formacoes={states.formacoes}
          apagarFormacao={funcFormacao.apagar}
          editarFormacao={this.btnAtualizar}
        />
      </>
    );
  }
}

export default CadastroFormacoes;
