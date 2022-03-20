import '../styles/FormField.css';

const FormField = (props) => {
  const { id, label, atributos, iptValue, iptChange = () => {} } = props;
  return (
    <div className='field'>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        {...atributos}
        value={iptValue}
        onChange={(e) => iptChange(e)}
      />
    </div>
  );
};

export default FormField;
