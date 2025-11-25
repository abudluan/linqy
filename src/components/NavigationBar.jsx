import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/NavigationBar.scss';
import ShinyText from '../anims/ShinyText';
import { FaCode } from "react-icons/fa";

const NavigationBar = () => {
  return (
    <Navbar >
      <Container>
        <Navbar.Brand>Linky</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="https://abudluan.vercel.app/" target="_blank" rel="noopener noreferrer" className='codeLink'>
              <FaCode color='white' size={20} />
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;