import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../styles/selectedLinks.scss";
import { IoHardwareChip } from "react-icons/io5";

const Tecnologia = () => {
    const filtros = [
        { id: "todos", label: "Todos" },
        { id: "montagem", label: "Montagem & Consumo" },
    ];

    const [filtroAtivo, setFiltroAtivo] = useState("todos");

    const links = [
        {
            titulo: "PC Builds",
            url: "https://pc-builds.com/pt/",
            img: "/tecnologia/pcBuilds.png",
            descricao:
                "Descubra calculadoras de gargalos, FPS, RAM e PSU, requisitos de sistema de jogos, benchmarks de componentes e muito mais!",
            categoria: "montagem",
        },
        {
            titulo: "Technical City",
            url: "https://technical.city/pt",
            img: "/tecnologia/tecnicalCity.png",
            descricao:
                "Comparações, especificações e classificações de placas de vídeo e processadores.",
            categoria: "montagem",
        },
        {
            titulo: "MEUPC.NET",
            url: "https://meupc.net/",
            img: "/tecnologia/meuPC.png",
            descricao:
                "Monte seu computador Gamer escolhendo cada componente entre milhares de peças disponíveis.",
            categoria: "montagem",
        },
    ];

    const linksFiltrados =
        filtroAtivo === "todos"
            ? links
            : links.filter((item) => item.categoria === filtroAtivo);

    return (
        <Container className="page-container">

            <div className="d-flex gap-1 mb-3">
                <IoHardwareChip size={30} className="iconTitle" />
                <h3 className="titlePage">Hardware & Tecnologia</h3>
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
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Card className="cardSelectedLink">
                                <h5 className="titleLink d-flex align-items-center gap-2">
                                    <img
                                        src={link.img}
                                        className="linkIcon"
                                        alt={link.titulo}
                                    />
                                    {link.titulo}
                                </h5>

                                <p className="linkDescript">
                                    {link.descricao}
                                </p>
                            </Card>
                        </a>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Tecnologia;
