import '../styles/Footer.scss';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
    return (
        <footer className="footerCustom">
            <Container className="text-center">
                <small className='footerText'>&copy; Projetado e Construído por <a className='linkFooter' href='https://abudluan.vercel.app/' target='_blank'>Luan Abud</a></small>
            </Container>
        </footer>
    );
}