import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';

const elements = ['Inicio', 'Sobre Civi', 'Profesionales', 'Testimonios', 'Contacto'];
const imgArrow = (<svg
  className="icon-arrow"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 120 120"
>
  <path
    d="M83.9,67.6c1.5,1.5,1.5,3.8,0,5.3l-3.5,3.5c-1.5,1.5-3.8,1.5-5.3,0L60,61.4L44.9,76.4c-1.5,1.5-3.8,1.5-5.3,0
  l-3.5-3.5c-1.5-1.5-1.5-3.8,0-5.3l21.2-21.2c1.5-1.5,3.8-1.5,5.3,0L83.9,67.6z"
  />
</svg>)

function App() {
  return (
    <div className="App">
      <Header elements={elements} imgArrow={imgArrow} />
      <Main/>
    </div>
  );
}

export default App;
