import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import NavigationBar from './components/NavigationBar.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/home.jsx';
import Design from './pages/design.jsx';
import Ferramentas from './pages/ferramentas.jsx';
import Desenvolvimento from './pages/desenvolvimento.jsx';
import Games from './pages/games.jsx';
import Tecnologia from './pages/tecnologia.jsx';
import Trabalho from './pages/trabalho.jsx';  
import Curiosidades from './pages/curiosidades.jsx';
import IA from './pages/ia.jsx';
import Estudo from './pages/estudo.jsx';
import Wallpaper from './pages/wallpaper.jsx';

function App() {
  return (
    <>
      <div className="app-container">
        <Router>
          <NavigationBar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/design' element={<Design />} /> 
            <Route path='/ferramentas' element={<Ferramentas />} /> 
            <Route path='/desenvolvimento' element={<Desenvolvimento />} />
            <Route path='/games' element={<Games />} />
            <Route path='/tecnologia' element={<Tecnologia />} />
            <Route path='/trabalho' element={<Trabalho />} />
            <Route path='/curiosidades' element={<Curiosidades/>} />
            <Route path='/ia' element={<IA/>} />
            <Route path='/estudo' element={<Estudo/>} />
            <Route path='/wallpaper' element={<Wallpaper/>} />
          </Routes>
        </Router>
      </div>

    </>
  )
}

export default App
