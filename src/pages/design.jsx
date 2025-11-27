import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/selectedLinks.scss';
import { FaPalette } from "react-icons/fa6";

const Design = () => {
    return (
        <Container className="design-container">
            <div className="d-flex gap-2">
                <FaPalette size={28} className='iconTitle' />
                <h3 className='titlePage'>Design & UI/UX</h3>
            </div>


            <h5 className='subCategoria mt-0'>Ferramentas & Geradores</h5>
            <Row className='g-2'>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://www.framer.com/ai/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img src="src/assets/design/framerIA.png" alt="Framer Logo" className="linkIcon" />
                                Framer IA
                            </h5>

                            <p className='linkDescript'>Framer é a ferramenta de design para sites. Crie designs livremente, publique rapidamente e expanda com CMS, SEO, análises e muito mais. Comece gratuitamente.</p>
                        </Card>
                    </a >
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://quickfavs.com/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img src="src/assets/design/quickFavs.png" alt="Framer Logo" className="linkIcon" />
                                QuickFavs
                            </h5>

                            <p className='linkDescript'>Crie favicons de alta qualidade para seu site ou aplicativo com facilidade. Envie sua imagem, personalize-a e baixe um pacote completo de favicon otimizado para todas as plataformas.</p>
                        </Card>
                    </a>
                </Col>
            </Row>

            <h5 className='subCategoria'>Cores & Paletas</h5>
            <Row className='g-2'>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://www.happyhues.co/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img src="src/assets/design/happyHues.png" alt="Framer Logo" className="linkIcon" />
                                Happy Hues
                            </h5>

                            <p className='linkDescript'>Não tem certeza de quais cores usar em seus projetos ou onde usá-las? O Happy Hues é um site de inspiração de paletas de cores que funciona como um exemplo prático de como as cores podem ser usadas em seus projetos de design.</p>
                        </Card>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default Design