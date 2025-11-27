import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/selectedLinks.scss';

const Ferramentas = () => {
    return (
        <Container className="design-container">
            <h3 className='titlePage'>Ferramentas</h3>

            <h5 className='subCategoria mt-0'>Compartilhamento</h5>
            <Row className='g-2'>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://file.pizza/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <Row>
                                <h5 className="titleLink "> <img src="src/assets/ferramentas/filePizza.png" alt="Framer Logo" className="linkIcon" /> File Pizza</h5>
                            </Row>

                            <p className='linkDescript'>FilePizza é um serviço que permite enviar arquivos diretamente entre navegadores, sem armazenamento em servidores, usando conexão P2P via WebRTC.</p>
                        </Card>
                    </a >
                </Col>

               
            </Row>
        </Container>
    )
}

export default Ferramentas;