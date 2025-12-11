import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../styles/selectedLinks.scss";
import { LuWallpaper } from "react-icons/lu";

const Wallpaper = () => {

    const filtros = [
        { id: "todos", label: "Todos" },
        { id: "animados", label: "Wallpapers Animados" },
        { id: "estaticos", label: "Wallpapers Estáticos" },
    ];

    const [filtroAtivo, setFiltroAtivo] = useState("todos");

    const links = [
        {
            titulo: "8 Bit Dashboard",
            url: "https://8bitdashboard.com/",
            img: "/wallpaper/8bitDash.png",
            descricao:
                "Painel animado em estilo 8 bits com relógio, atalhos e saudação. Perfeito como página inicial.",
            categoria: "animados",
        },
        {
            titulo: "DesktopHut",
            url: "https://www.desktophut.com/",
            img: "/wallpaper/desktopHut.png",
            descricao:
                "Use wallpapers animados (2D e 3D) como fundo da sua área de trabalho ou celular.",
            categoria: "animados",
        },
        {
            titulo: "Wallhaven.cc",
            url: "https://wallhaven.cc/",
            img: "/wallpaper/wallhaven.png",
            descricao:
                "Repositório gigante com mais de 1 milhão de wallpapers estáticos em alta qualidade.",
            categoria: "estaticos",
        },
    ];

    const linksFiltrados =
        filtroAtivo === "todos"
            ? links
            : links.filter((item) => item.categoria === filtroAtivo);

    return (
        <Container className="page-container">
            <div className="d-flex gap-1 mb-3">
                <LuWallpaper size={30} className="iconTitle" />
                <h3 className="titlePage">Wallpapers & Estilização</h3>
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
                                    <img
                                        src={link.img}
                                        className="linkIcon"
                                        alt={link.titulo}
                                    />
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

export default Wallpaper;
