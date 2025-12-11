import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import '../styles/NavigationBar.scss';
import SplitText from '../anims/SplitText.jsx';
import { useTheme } from '../utis/useTheme.jsx';
import { IoSunny, IoMoon } from "react-icons/io5";

const NavigationBar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <SplitText
            text="Linqy"
            className="navText"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button
            onClick={toggleTheme}
            className="btn-theme-toggle"
          >
            {theme === "light" ? <IoMoon className='iconBtn' size={20} color='black' /> : <IoSunny className='iconBtn' size={20} color='white' />}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;