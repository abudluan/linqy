import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../styles/selectedLinks.scss";
import { FaPalette } from "react-icons/fa6";

const Design = () => {

    const filtros = [
        { id: "todos", label: "Todos" },
        { id: "ferramentas", label: "Ferramentas & Geradores" },
        { id: "cores", label: "Cores & Paletas" },
    ];

    const [filtroAtivo, setFiltroAtivo] = useState("todos");

    const links = [
        {
            titulo: "QuickFavs",
            url: "https://quickfavs.com/",
            img: "public/design/quickFavs.png",
            descricao:
                "Crie favicons de alta qualidade para seu site enviando uma imagem e gerando tudo automaticamente.",
            categoria: "ferramentas",
        },
        {
            titulo: "Baixar Favicon",
            url: "https://baixarfavicon.com.br/",
            img: "public/design/baixarFavIcon.png",
            descricao:
                "Insira a URL de um site e baixe automaticamente seu favicon em alta qualidade.",
            categoria: "ferramentas",
        },
        {
            titulo: "Haikei",
            url: "https://haikei.app/",
            img: "public/design/hankei.png",
            descricao:
                "Gere formas, blobs, ondas e fundos em SVG para usar em sites, apps e artes.",
            categoria: "ferramentas",
        },
        {
            titulo: "Shape Divider App",
            url: "https://www.shapedivider.app/",
            img: "public/design/shapeDivider.png",
            descricao:
                "Crie divisores de seção em SVG e exporte diretamente para seu site ou estrutura.",
            categoria: "ferramentas",
        },

        {
            titulo: "Happy Hues",
            url: "https://www.happyhues.co/",
            img: "public/design/happyHues.png",
            descricao:
                "Inspiração de paletas de cores com exemplos reais aplicados em telas completas.",
            categoria: "cores",
        },
    ];

    const linksFiltrados = links.filter(
        (item) => filtroAtivo === "todos" || item.categoria === filtroAtivo
    );

    return (
        <Container className="page-container">

            <div className="d-flex gap-1 mb-3">
                <FaPalette size={28} className="iconTitle" />
                <h3 className="titlePage">Design & Imagens</h3>
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

export default Design;
