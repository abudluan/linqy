import '../styles/selectedLinks.scss';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaRobot } from "react-icons/fa";

const IA = () => {
    return (
        <Container className="page-container">
            <div className="d-flex gap-1">
                <FaRobot size={30} className='iconTitle' />
                <h3 className='titlePage'>Inteligência Artificial</h3>
            </div>

            <h5 className='subCategoria mt-0'>Ferramentas de IA para Design</h5>
            <Row className='g-2'>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://www.framer.com/ai/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img src="src/assets/ia/framerIA.png" alt="Framer Logo" className="linkIcon" />
                                Framer IA
                            </h5>

                            <p className='linkDescript'>Framer é a ferramenta de design para sites. Crie designs livremente, publique rapidamente e expanda com CMS, SEO, análises e muito mais. Comece gratuitamente.</p>
                        </Card>
                    </a >
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://pixie.haus/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img src="src/assets/ia/pixieHaus.png" alt="Framer Logo" className="linkIcon" />
                                pixie.haus
                            </h5>

                            <p className='linkDescript'>Gerador de pixel art de IA para criação precisa de sprite. Experimente saídas rápidas, remoção automática de fundo e manuseio de pixels sem costura.</p>
                        </Card>
                    </a >
                </Col>
            </Row>

            <h5 className='subCategoria'>Prompts & Coleções</h5>
            <Row className='g-2'>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://www.bananaprompts.xyz/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img src="src/assets/ia/bananaPrompts.png" alt="Framer Logo" className="linkIcon" />
                                Banana Prompts
                            </h5>

                            <p className='linkDescript'>
                                Navegue por vídeos cinematográficos, explore imagens impressionantes, copie os prompts exatos e acompanhe as tendências que moldam a arte gerativa.
                            </p>
                        </Card>
                    </a >
                </Col>


            </Row>
        </Container>
    )
}

export default IA;