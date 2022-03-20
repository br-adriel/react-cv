import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
  const ano = new Date().getFullYear();
  const iconeGithub = <FontAwesomeIcon icon={faGithub} />;
  const iconeLinkedin = <FontAwesomeIcon icon={faLinkedin} />;

  return (
    <footer>
      <p className='text'>Adriel Faria, {ano}</p>
      <div className='icons'>
        <a
          href='https://github.com/br-adriel'
          target='_blank'
          rel='noopener noreferrer'
          title='Github'
          alt='Github'
        >
          {iconeGithub}
        </a>
        <a
          href='https://www.linkedin.com/in/adriel-fsantos/'
          target='_blank'
          rel='noopener noreferrer'
          title='LinkedIn'
          alt='LinkedIn'
        >
          {iconeLinkedin}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
