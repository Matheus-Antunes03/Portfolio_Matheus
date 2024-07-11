import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home"
import { Experiencias } from './pages/Experiencias';
import { Habilidades } from './pages/Habilidades';
import { Pessoal } from './pages/Pessoal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={< Home />}/>
        <Route path='/home' element={< Home />}/>
        <Route path='/experiencias' element={< Experiencias />}/>
        <Route path='/habilidades' element={< Habilidades />}/>
        <Route path='/pessoal' element={< Pessoal />}/>
      </Routes>
    </Router>
  );
}
export default App;