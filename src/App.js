import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <section>
        <Home />
      </section>
    </div>
  );
}

export default App;
