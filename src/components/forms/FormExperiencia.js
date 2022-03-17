import { Component } from 'react';
import FormField from '../FormField';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

class FormExperiencia extends Component {
  render() {
    const { mudarForm, novaExperiencia, states, defExperiencia, limparForm } =
      this.props;
    const submitForm = (e) => {
      e.preventDefault();
      const experiencia = {
        id: e.target.codigo.value === '' ? uniqid() : e.target.codigo.value,
        cargo: e.target.cargo.value,
        empresa: e.target.empresa.value,
        mesInicio: e.target.mesInicio.value,
        anoInicio: e.target.anoInicio.value,
        mesFim: e.target.mesFim.value,
        anoFim: e.target.anoFim.value,
        tarefas: e.target.tarefas.value.split('. '),
      };
      novaExperiencia(experiencia);
      limparForm();
      e.target.cargo.focus();
    };
    return (
      <>
        <h2>Experiência profissional</h2>
        <form action='' onSubmit={(e) => submitForm(e)}>
          <input type='hidden' name='codigo' value={states.codigo} />
          <FormField
            id='cargo'
            label='Cargo:'
            atributos={{
              type: 'text',
              minLength: 3,
              name: 'cargo',
            }}
            iptValue={states.cargo}
            iptChange={defExperiencia.cargo}
          />
          <FormField
            id='empresa'
            label='Empresa:'
            atributos={{
              type: 'text',
              minLength: 3,
              name: 'empresa',
            }}
            iptValue={states.empresa}
            iptChange={defExperiencia.empresa}
          />
          <FormField
            id='mes-inicio'
            label='Mês de início:'
            atributos={{
              type: 'number',
              min: 1,
              max: 12,
              name: 'mesInicio',
            }}
            iptValue={states.mesInicio}
            iptChange={defExperiencia.mesInicio}
          />
          <FormField
            id='ano-inicio'
            label='Ano de início:'
            atributos={{
              type: 'number',
              name: 'anoInicio',
              min: 1900,
              max: new Date().getFullYear(),
            }}
            iptValue={states.anoInicio}
            iptChange={defExperiencia.anoInicio}
          />
          <FormField
            id='mes-fim'
            label='Mês de término:'
            atributos={{
              type: 'number',
              min: 1,
              max: 12,
              name: 'mesFim',
            }}
            iptValue={states.mesFim}
            iptChange={defExperiencia.mesFim}
          />
          <FormField
            id='ano-fim'
            label='Ano de término:'
            atributos={{
              type: 'number',
              name: 'anoFim',
              min: 1900,
              max: new Date().getFullYear(),
            }}
            iptValue={states.anoFim}
            iptChange={defExperiencia.anoFim}
          />
          <FormField
            id='tarefas-desenvolvidas'
            label='Tarefas desempenhadas (separe por ponto e espaço):'
            atributos={{
              type: 'text',
              name: 'tarefas',
              minLength: 3,
            }}
            iptValue={states.tarefas}
            iptChange={defExperiencia.tarefas}
          />
          <div className='botoes'>
            <button type='submit' className='mr-auto'>
              {states.textoBotao}
            </button>
            <button type='button' onClick={() => mudarForm('formacao')}>
              <FontAwesomeIcon
                icon={faArrowLeft}
                alt='Seta para a esquerda'
                title='Anterior'
              />
            </button>
            <button type='button' onClick={() => mudarForm('habilidade')}>
              <FontAwesomeIcon
                icon={faArrowRight}
                alt='Seta para a direita'
                title='Próximo'
              />
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default FormExperiencia;
