import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/selectedLinks.scss';
import { FaCode } from "react-icons/fa6";

const Desenvolvimento = () => {
    return (
        <Container className="page-container">
            <div className="d-flex gap-1">
                <FaCode size={30} className='iconTitle' />
                <h3 className='titlePage'>Programação & Desenvolvimento</h3>
            </div>

            <h5 className='subCategoria mt-0'>Bibliotecas</h5>
            <Row className='g-2'>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://reactbits.dev/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img
                                    src="src/assets/desenvolvimento/reactBits.png"
                                    alt="React Bits Logo"
                                    className="linkIcon"
                                />
                                React Bits
                            </h5>

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
                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img
                                    src="src/assets/desenvolvimento/frontEndMentor.png"
                                    alt="React Bits Logo"
                                    className="linkIcon"
                                />
                                Front-End Mentor
                            </h5>

                            <p className='linkDescript'>
                                Melhore suas habilidades front-end construindo projetos reais. Resolva desafios de HTML, CSS e JavaScript do mundo real enquanto trabalha com projetos profissionais.
                            </p>
                        </Card>
                    </a>
                </Col>


                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://quickref.me/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img
                                    src="src/assets/desenvolvimento/quickRefMe.png"
                                    alt="React Bits Logo"
                                    className="linkIcon"
                                />
                                QuickRef.ME
                            </h5>

                            <p className='linkDescript'>
                                Encontre estruturas e sintaxes de diversas linguagens, como JavaScript, Go, C, HTML e até prompts para ChatGPT, além de banco de dados e várias outras ferramentas!
                            </p>
                        </Card>
                    </a>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://coddy.tech/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <h5 className="titleLink d-flex align-items-center gap-2">
                                <img
                                    src="src/assets/desenvolvimento/coddyTech.png"
                                    alt="React Bits Logo"
                                    className="linkIcon"
                                />
                                Coddy
                            </h5>

                            <p className='linkDescript'>
                                Aprenda código de uma maneira divertida e eficaz com o Coddy.Tech – aproveite o domínio de diversas linguagens de programação diariamente e crie habilidades com facilidade, tudo online!
                            </p>
                        </Card>
                    </a>
                </Col>

            </Row>
        </Container>
    )
}

export default Desenvolvimento;