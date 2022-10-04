import './App.css';
import Header from './components/header';
import Asidebar from './components/Asidebar';
import MainContent from './components/MainContent'
function App() {
  return (
    <div className="App">
    <Header />
    <Asidebar />
    <MainContent />    
    </div>
  );
}

export default App;
