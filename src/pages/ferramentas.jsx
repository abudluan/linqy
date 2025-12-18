import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../styles/selectedLinks.scss";
import { FaTools } from "react-icons/fa";

const Ferramentas = () => {

    const filtros = [
        { id: "todos", label: "Todos" },
        { id: "compartilhamento", label: "Compartilhamento" },
        { id: "arquivos", label: "Utilidades de Arquivos" },
        { id: "comparacao", label: "Comparação" },
    ];

    const [filtroAtivo, setFiltroAtivo] = useState("todos");

    const links = [
        {
            titulo: "File Pizza",
            url: "https://file.pizza/",
            img: "/ferramentas/filePizza.png",
            descricao:
                "FilePizza é um serviço que permite enviar arquivos diretamente entre navegadores, sem armazenamento em servidores, usando conexão P2P via WebRTC.",
            categoria: "compartilhamento",
        },
        {
            titulo: "PDF Candy",
            url: "https://pdfcandy.com/pt/",
            img: "/ferramentas/candyPDF.png",
            descricao:
                "Todas as ferramentas de que você precisa para processar arquivos PDF: editar, converter, mesclar, compactar, assinar e muito mais.",
            categoria: "arquivos",
        },
        {
            titulo: "PDF24 Tools",
            url: "https://tools.pdf24.org/pt/",
            img: "/ferramentas/pdf24.png",
            descricao:
                "Ferramentas online de PDF gratuitas e fáceis de usar que aumentam sua produtividade.",
            categoria: "arquivos",
        },
        {
            titulo: "Versus",
            url: "https://versus.com/br",
            img: "/ferramentas/versus.png",
            descricao:
                "Versus é uma plataforma global de comparação com base em dados, abrangendo mais de 90 categorias. Compare smartphones, câmeras, fones de ouvido, e muito mais.",
            categoria: "comparacao",
        },
    ];

    const linksFiltrados =
        filtroAtivo === "todos"
            ? links
            : links.filter((item) => item.categoria === filtroAtivo);

    return (
        <Container className="page-container">

            <div className="d-flex gap-1 mb-3">
                <FaTools size={30} className="iconTitle" />
                <h3 className="titlePage">Ferramentas & Utilidades Online</h3>
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

export default Ferramentas;
