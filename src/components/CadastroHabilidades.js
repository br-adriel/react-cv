import { Component } from 'react';
import FormHabilidade from './forms/FormHabilidade';
import Habilidades from './Habilidades';
import Card from './Card';

class CadastroHabilidades extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codigo: '',
      habilidade: '',
      nivel: '',
      textoBotao: 'Adicionar',
    };

    this.defHabilidade = this.defHabilidade.bind(this);
    this.defNivel = this.defNivel.bind(this);

    this.limparForm = this.limparForm.bind(this);
    this.btnAtualizar = this.btnAtualizar.bind(this);
  }

  defHabilidade = (e) => this.setState({ habilidae: e.target.value });
  defNivel = (e) => this.setState({ nivel: e.target.value });

  limparForm = () =>
    this.setState({
      codigo: '',
      habilidade: '',
      nivel: '',
      textoBotao: 'Adicionar',
    });

  btnAtualizar = (codigo) => {
    const habilidasde = this.props.states.habilidades.filter(
      (f) => f.id === codigo
    )[0];
    this.setState({
      codigo: habilidasde.id,
      habilidade: habilidasde.habilidade,
      nivel: habilidasde.nivel,
      textoBotao: 'Atualizar',
    });
  };

  render() {
    const { mudarForm, funcHabilidade, states } = this.props;
    const defHabilidade = {
      habilidade: this.defHabilidade,
      nivel: this.defNivel,
    };
    return (
      <>
        <Card>
          <FormHabilidade
            mudarForm={mudarForm}
            novaHabilidade={funcHabilidade.nova}
            states={this.state}
            defHabilidade={defHabilidade}
            limparForm={this.limparForm}
          />
        </Card>
        <Habilidades
          habilidades={states.habilidades}
          apagarHabilidade={funcHabilidade.apagar}
          editarHabilidade={this.btnAtualizar}
        />
      </>
    );
  }
}

export default CadastroHabilidades;
