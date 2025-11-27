import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/selectedLinks.scss';
import SplitText from '../anims/SplitText.jsx';

const Desenvolvimento = () => {
    return (
        <Container className="design-container">
            <h3 className='titlePage'>Programação & Desenvolvimento</h3>

            <h5 className='subCategoria mt-0'>Bibliotecas</h5>
            <Row className='g-2'>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://reactbits.dev/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <Row>
                                <h5 className="titleLink "> <img src="src/assets/desenvolvimento/reactBits.png" alt="Framer Logo" className="linkIcon" /> React Bits</h5>
                            </Row>

                            <p className='linkDescript'>
                                Uma coleção de código aberto de componentes React de alta qualidade, animados, interativos e totalmente personalizáveis ​​para criar interfaces de usuário impressionantes e memoráveis.
                            </p>
                        </Card>
                    </a>
                </Col>
            </Row>


            <h5 className='subCategoria'>Estudos</h5>
            <Row className='g-2'>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://www.frontendmentor.io/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <Row>
                                <h5 className="titleLink "> <img src="src/assets/desenvolvimento/frontEndMentor.png" alt="Framer Logo" className="linkIcon" /> Front-end Mentor</h5>
                            </Row>

                            <p className='linkDescript'>
                                Melhore suas habilidades front-end construindo projetos reais. Resolva desafios de HTML, CSS e JavaScript do mundo real enquanto trabalha com projetos profissionais.
                            </p>
                        </Card>
                    </a>
                </Col>


            </Row>
        </Container>
    )
}

export default Desenvolvimento;