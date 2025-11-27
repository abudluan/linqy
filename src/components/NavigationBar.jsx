import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/NavigationBar.scss';
import SplitText from '../anims/SplitText.jsx';

const NavigationBar = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <SplitText
            text="Linky"
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
      </Container>
    </Navbar>
  );
}

export default NavigationBar;