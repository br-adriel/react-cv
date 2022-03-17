import { Component } from 'react';
import Card from './Card';
import Experiencias from './Experiencias';
import FormExperiencia from './forms/FormExperiencia';

class CadastroExperiencias extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codigo: '',
      cargo: '',
      empresa: '',
      mesInicio: '',
      anoInicio: '',
      mesFim: '',
      anoFim: '',
      tarefas: '',
      textoBotao: 'Adicionar',
    };

    this.defCargo = this.defCargo.bind(this);
    this.defEmpresa = this.defEmpresa.bind(this);
    this.defMesInicio = this.defMesInicio.bind(this);
    this.defAnoInicio = this.defAnoInicio.bind(this);
    this.defMesFim = this.defMesFim.bind(this);
    this.defAnoFim = this.defAnoFim.bind(this);
    this.defTarefas = this.defTarefas.bind(this);

    this.btnAtualizar = this.btnAtualizar.bind(this);
    this.limparForm = this.limparForm.bind(this);
  }

  btnAtualizar = (codigo) => {
    const experiencia = this.props.states.experiencias.filter(
      (f) => f.id === codigo
    )[0];
    this.setState({
      codigo: experiencia.id,
      cargo: experiencia.cargo,
      empresa: experiencia.empresa,
      mesInicio: experiencia.mesInicio,
      anoInicio: experiencia.anoInicio,
      mesFim: experiencia.mesFim,
      anoFim: experiencia.anoFim,
      tarefas: experiencia.tarefas.join('. '),
      textoBotao: 'Atualizar',
    });
  };

  defCargo = (e) => this.setState({ cargo: e.target.value });
  defEmpresa = (e) => this.setState({ empresa: e.target.value });
  defMesInicio = (e) => this.setState({ mesInicio: e.target.value });
  defAnoInicio = (e) => this.setState({ anoInicio: e.target.value });
  defMesFim = (e) => this.setState({ mesFim: e.target.value });
  defAnoFim = (e) => this.setState({ anoFim: e.target.value });
  defTarefas = (e) => this.setState({ tarefas: e.target.value });

  limparForm = () => {
    this.setState({
      codigo: '',
      cargo: '',
      empresa: '',
      mesInicio: '',
      anoInicio: '',
      mesFim: '',
      anoFim: '',
      tarefas: '',
      textoBotao: 'Adicionar',
    });
  };

  render() {
    const { mudarForm, funcExperiencia, states } = this.props;
    const defExperiencia = {
      cargo: this.defCargo,
      empresa: this.defEmpresa,
      mesInicio: this.defMesInicio,
      anoInicio: this.defAnoInicio,
      mesFim: this.defMesFim,
      anoFim: this.defAnoFim,
      tarefas: this.defTarefas,
    };
    return (
      <>
        <Card>
          <FormExperiencia
            mudarForm={mudarForm}
            novaExperiencia={funcExperiencia.nova}
            states={this.state}
            limparForm={this.limparForm}
            defExperiencia={defExperiencia}
          />
        </Card>
        <Experiencias
          experiencias={states.experiencias}
          apagarExperiencia={funcExperiencia.apagar}
          editarExperiencia={this.btnAtualizar}
        />
      </>
    );
  }
}

export default CadastroExperiencias;
