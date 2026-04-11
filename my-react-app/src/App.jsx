import Header from './Componenet/header/Header'
import About from './Componenet/about/About'
import Gallery from './Componenet/gallery/Gallery'
import Contact from './Componenet/contact/Contact'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
}

export default App;