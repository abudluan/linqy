import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../styles/selectedLinks.scss";
import { FaBookOpen } from "react-icons/fa";

const Estudo = () => {

    const filtros = [
        { id: "todos", label: "Todos" },
        { id: "calculadoras", label: "Calculadoras" },
        { id: "cursos", label: "Cursos & Aprendizado" },
        { id: "idiomas", label: "Idiomas" },
        { id: "programação", label: "Programação" },
    ];

    const [filtroAtivo, setFiltroAtivo] = useState("todos");

    const links = [
        {
            titulo: "Cymath",
            url: "https://www.cymath.com/",
            img: "src/assets/estudo/cyMath.png",
            descricao:
                "Insira seu problema de matemática e receba a resolução passo a passo automaticamente.",
            categoria: "calculadoras",
        },
        {
            titulo: "OmniCalculator",
            url: "https://www.omnicalculator.com/",
            img: "src/assets/estudo/omniCalculator.png",
            descricao:
                "Centenas de calculadoras inteligentes para física, matemática, finanças, saúde, conversões e mais.",
            categoria: "calculadoras",
        },

        {
            titulo: "Khan Academy",
            url: "https://www.khanacademy.org/",
            img: "src/assets/estudo/khanAcademy.png",
            descricao:
                "Aulas e exercícios gratuitos em matemática, ciências, computação e diversos outros temas.",
            categoria: "cursos",
        },

        {
            titulo: "LingoHut",
            url: "https://www.lingohut.com/pt",
            img: "src/assets/estudo/lingoHunt.png",
            descricao:
                "Aprenda mais de 45 idiomas através de frases úteis e lições simples para o dia a dia.",
            categoria: "idiomas",
        },

        {
            titulo: "Coddy",
            url: "https://coddy.tech/",
            img: "src/assets/estudo/coddyTech.png",
            descricao:
                "Aprenda código de uma maneira divertida e eficaz com o Coddy.Tech – aproveite o domínio de diversas linguagens de programação diariamente e crie habilidades com facilidade, tudo online!",
            categoria: "programação",
        },
        {
            titulo: "Front-End Mentor",
            url: "https://www.frontendmentor.io/",
            img: "src/assets/estudo/frontEndMentor.png",
            descricao:
                "Crie projetos front-end e full-stack com projetos profissionais da Figma. Pratique HTML, CSS, JavaScript, React, Node e muito mais gratuitamente.",
            categoria: "programação",
        },
    ];

    const linksFiltrados = links.filter(
        (item) => filtroAtivo === "todos" || item.categoria === filtroAtivo
    );

    return (
        <Container className="page-container">

            <div className="d-flex gap-1 mb-3">
                <FaBookOpen size={30} className="iconTitle" />
                <h3 className="titlePage">Educação & Estudo</h3>
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

export default Estudo;
