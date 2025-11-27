import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import NavigationBar from './components/NavigationBar.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/home.jsx';
import Design from './pages/design.jsx';
import Ferramentas from './pages/ferramentas.jsx';
import Desenvolvimento from './pages/desenvolvimento.jsx';

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
          </Routes>
          <Footer />
        </Router>
      </div>

    </>
  )
}

export default App
