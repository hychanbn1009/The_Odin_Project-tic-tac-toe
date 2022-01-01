import './App.css';
import Footer from './components/Footer';
import Gameboard from './components/Gameboard';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <Header/>
      <div className='bodyContainer'>
        <Gameboard/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
