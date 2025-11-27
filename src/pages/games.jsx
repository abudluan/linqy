import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/selectedLinks.scss';

const Games = () => {
    return (
        <Container className="design-container">
            <Row className='g-2'>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <a href='https://reactbits.dev/' target='_blank' rel='noopener noreferrer'>
                        <Card className='cardSelectedLink'>
                            <Row>
                                <h5 className="titleLink "> <img src="src/assets/games/steamGriddb.png" alt="Framer Logo" className="linkIcon" /> SteamGridDB</h5>
                            </Row>

                            <p className='linkDescript'>
                                Baixe e compartilhe recursos personalizados de jogos e personalize sua biblioteca de jogos.
                            </p>
                        </Card>
                    </a>
                </Col>


            </Row>
        </Container>
    )
}

export default Games;