import Habilidade from './Habilidade';

const Habilidades = (props) => {
  const { habilidades, apagarHabilidade, editarHabilidade } = props;
  return (
    <div className='cards'>
      {habilidades.map((habilidade) => {
        return (
          <Habilidade
            key={habilidade.id}
            habilidade={habilidade}
            apagarHabilidade={apagarHabilidade}
            editarHabilidade={editarHabilidade}
          />
        );
      })}
    </div>
  );
};

export default Habilidades;
