import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../styles/selectedLinks.scss";
import { RiGameFill } from "react-icons/ri";

const Games = () => {

    const filtros = [
        { id: "todos", label: "Todos" },
        { id: "cloud", label: "Jogos Online & Cloud Gaming" },
        { id: "assets", label: "Imagens & Assets" },
    ];

    const [filtroAtivo, setFiltroAtivo] = useState("todos");

    const links = [
        {
            titulo: "Spawnd Alpha",
            url: "https://www.spawnd.gg/pt",
            img: "public/games/spawnd.png",
            descricao:
                "Jogos de alta qualidade no seu navegador, sem instalações necessárias, tela cheia e livre de distrações. Jogue agora de graça.",
            categoria: "cloud",
        },
        {
            titulo: "AirConsole",
            url: "https://www.airconsole.com/",
            img: "public/games/airConsole.png",
            descricao:
                "Você vai encontrar mais de 140 jogos em nossa biblioteca - de corridas, esportes, co-op, quebra-cabeça, jogos de quiz e muitos mais! Use seu celular como controle.",
            categoria: "cloud",
        },
        {
            titulo: "SteamGridDB",
            url: "https://www.steamgriddb.com/",
            img: "public/games/steamGriddb.png",
            descricao:
                "Baixe e compartilhe recursos personalizados de jogos e personalize sua biblioteca de jogos.",
            categoria: "assets",
        },
    ];

    const linksFiltrados =
        filtroAtivo === "todos"
            ? links
            : links.filter((item) => item.categoria === filtroAtivo);

    return (
        <Container className="page-container">

            <div className="d-flex gap-1 mb-3">
                <RiGameFill size={30} className="iconTitle" />
                <h3 className="titlePage">Games</h3>
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

export default Games;
