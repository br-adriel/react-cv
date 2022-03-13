import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Formulario from './components/Formulario';

function App() {
  return (
    <>
      <Header />
      <main>
        <section className='dados'>
          <Formulario />
        </section>
        <section className='curriculo'></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
