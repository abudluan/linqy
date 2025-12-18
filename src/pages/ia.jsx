import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../styles/selectedLinks.scss";
import { FaRobot } from "react-icons/fa";

const IA = () => {
    const filtros = [
        { id: "todos", label: "Todos" },
        { id: "design", label: "Ferramentas de IA para Design" },
        { id: "prompts", label: "Prompts & Coleções" },
    ];

    const [filtroAtivo, setFiltroAtivo] = useState("todos");

    const links = [
        {
            titulo: "Framer IA",
            url: "https://www.framer.com/ai/",
            img: "/ia/framerIA.png",
            descricao:
                "Framer é a ferramenta de design para sites. Crie designs livremente, publique rapidamente e expanda com CMS, SEO, análises e muito mais. Comece gratuitamente.",
            categoria: "design",
        },
        {
            titulo: "pixie.haus",
            url: "https://pixie.haus/",
            img: "/ia/pixieHaus.png",
            descricao:
                "Gerador de pixel art de IA para criação precisa de sprite. Experimente saídas rápidas, remoção automática de fundo e manuseio de pixels sem costura.",
            categoria: "design",
        },
        {
            titulo: "Stich",
            url: "https://stitch.withgoogle.com/",
            img: "/ia/stichIA.png",
            descricao:
                "O Stitch gera interfaces de usuário para aplicativos móveis e web, tornando a ideação de design rápida e fácil.",
            categoria: "design",
        },
        {
            titulo: "Banana Prompts",
            url: "https://www.bananaprompts.xyz/",
            img: "/ia/bananaPrompts.png",
            descricao:
                "Navegue por vídeos cinematográficos, explore imagens impressionantes, copie os prompts exatos e acompanhe as tendências que moldam a arte gerativa.",
            categoria: "prompts",
        },
    ];

    const linksFiltrados =
        filtroAtivo === "todos"
            ? links
            : links.filter((item) => item.categoria === filtroAtivo);

    return (
        <Container className="page-container">

            <div className="d-flex gap-1 mb-3">
                <FaRobot size={30} className="iconTitle" />
                <h3 className="titlePage">Inteligência Artificial</h3>
            </div>

            <div className="btnfiltro mb-4">
                {filtros.map((f) => (
                    <Button
                        key={f.id}
                        className={filtroAtivo === f.id ? "activeFiltro" : ""}
                        onClick={() => setFiltroAtivo(f.id)}
                    >
                        {f.label}
                    </Button>
                ))}
            </div>

            <Row className="g-2">
                {linksFiltrados.map((link, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={3}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                            <Card className="cardSelectedLink">
                                <h5 className="titleLink d-flex align-items-center gap-2">
                                    <img src={link.img} className="linkIcon" alt={link.titulo} />
                                    {link.titulo}
                                </h5>

                                <p className="linkDescript">{link.descricao}</p>
                            </Card>
                        </a>
                    </Col>
                ))}
            </Row>

        </Container>
    );
};

export default IA;
