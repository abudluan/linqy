import '../styles/home.scss';
import { Container, Row, Col, Card } from 'react-bootstrap';
import SpotlightCard from '../anims/SpotlightCard';
import { FaPalette, FaCode, FaGamepad } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { RiGameFill } from "react-icons/ri";
import { IoHardwareChip } from "react-icons/io5";

const Home = () => {
    return (
        <>
            <Container className="home-container">
                <Row className='g-2'>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <SpotlightCard className="custom-spotlight-card" spotlightColor="#7f5af0a0">
                            <h5 className='titleLink'>Design & UI/UX</h5>
                            <FaPalette size={25} className='iconLink' />
                        </SpotlightCard>
                    </Col>

                    <Col xs={12} sm={6} md={4} lg={3}>
                        <SpotlightCard className="custom-spotlight-card" spotlightColor="#7f5af0a0">
                            <h5 className='titleLink'>Ferramentas</h5>
                            <FaTools size={25} className='iconLink' />
                        </SpotlightCard>
                    </Col>

                    <Col xs={12} sm={6} md={4} lg={3}>
                        <SpotlightCard className="custom-spotlight-card" spotlightColor="#7f5af0a0">
                            <h5 className='titleLink'>Programação & Desenvolvimento</h5>
                            <FaCode size={25} className='iconLink' />
                        </SpotlightCard>
                    </Col>

                    <Col xs={12} sm={6} md={4} lg={3}>
                        <SpotlightCard className="custom-spotlight-card" spotlightColor="#7f5af0a0">
                            <h5 className='titleLink'>Games</h5>
                            <RiGameFill size={25} className='iconLink' />
                        </SpotlightCard>
                    </Col>

                    <Col xs={12} sm={6} md={4} lg={3}>
                        <SpotlightCard className="custom-spotlight-card" spotlightColor="#7f5af0a0">
                            <h5 className='titleLink'>Hardware & Tecnologia</h5>
                            <IoHardwareChip size={25} className='iconLink' />
                        </SpotlightCard>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Home;