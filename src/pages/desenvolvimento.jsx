import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/selectedLinks.scss';

const Desenvolvimento = () => {
    return (
        <Container className="design-container">
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
        </Container>
    )
}

export default Desenvolvimento;