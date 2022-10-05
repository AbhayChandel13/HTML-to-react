import './App.css';
import Header from './components/header';
import Asidebar from './components/Asidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import { BrowserRouter , Routes,Route } from "react-router-dom";
import Read from './components/Read';
import Create from './components/create';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Header />
        <Asidebar />
           <Routes>
           <Route path="/" element={<MainContent /> }></Route>
           <Route path="/read" element={<Read /> }></Route>
           <Route path="/create" element={<Create/> }></Route>                             
           </Routes>
        <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
