import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello there!
        </p>
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </header>
    </div>
  );
}

export default App;
