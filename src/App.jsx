import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home.jsx';
import NavigationBar from './components/NavigationBar.jsx';

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route exact path='/' element={<Home />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
