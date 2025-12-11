import { useState } from "react";
import "../styles/selectedLinks.scss";
import { MdWork } from "react-icons/md";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Trabalho = () => {

    const filtros = [
        { id: "todos", label: "Todos" },
        { id: "curriculos", label: "Currículos & Portfólios" },
    ];

    const [filtroAtivo, setFiltroAtivo] = useState("todos");

    const links = [
        {
            titulo: "Resume Genius",
            url: "https://resumegenius.com/",
            img: "/trabalho/resumeGenius.png",
            descricao:
                "Faça um currículo pronto para o trabalho rapidamente. Escolha entre mais de 150 modelos, gere conteúdo otimizado para ATS e baixe em Word ou PDF.",
            categoria: "curriculos",
        },
    ];

    const linksFiltrados =
        filtroAtivo === "todos"
            ? links
            : links.filter((item) => item.categoria === filtroAtivo);

    return (
        <Container className="page-container">
            <div className="d-flex gap-1 mb-3">
                <MdWork size={30} className="iconTitle" />
                <h3 className="titlePage">Produtividade & Trabalho</h3>
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

export default Trabalho;
