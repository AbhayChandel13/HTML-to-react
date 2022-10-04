import './App.css';
import Header from './components/header';
import Asidebar from './components/Asidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
    <Header />
    <Asidebar />
    <MainContent />    
    <Footer />
    </div>
  );
}

export default App;
