import Experiencia from './Experiencia';

const Experiencias = (props) => {
  const { experiencias, apagarExperiencia, editarExperiencia } = props;
  return (
    <div className='cards'>
      {experiencias.map((experiencia) => {
        return (
          <Experiencia
            key={experiencia.id}
            experiencia={experiencia}
            apagarExperiencia={apagarExperiencia}
            editarExperiencia={editarExperiencia}
          />
        );
      })}
    </div>
  );
};

export default Experiencias;
