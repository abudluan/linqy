import { useState } from "react";
import { Container, Row, Col, Card, ButtonGroup, Button } from "react-bootstrap";
import { MdEmojiEmotions } from "react-icons/md";
import '../styles/selectedLinks.scss';

const Curiosidades = () => {

    const filtros = [
        { id: "todos", label: "Todos" },
        { id: "testes", label: "Testes & Simuladores" },
        { id: "cultura-pop", label: "Cultura Pop & Memes" },
        { id: "interativos", label: "Experiências Interativas" },
    ];

    const [filtroAtivo, setFiltroAtivo] = useState("todos");

    const links = [
        {
            titulo: "The Death Clock",
            url: "https://www.death-clock.org/",
            img: "public/curiosidades/deathClock.png",
            descricao: "Nossa calculadora avançada de expectativa de vida irá prever sua data de morte com base em estilo de vida e localização.",
            tags: ["testes"]
        },
        {
            titulo: "Floor796",
            url: "https://floor796.com/",
            img: "public/curiosidades/floor796.png",
            descricao: "Uma enorme cena animada cheia de referências a memes, jogos, filmes e cultura pop.",
            tags: ["cultura-pop"]
        },
        {
            titulo: "Neal.fun",
            url: "https://neal.fun/",
            img: "public/curiosidades/nealFun.png",
            descricao: "Jogos, visualizações e experiências estranhas criadas por Neal Agarwal.",
            tags: ["interativos"]
        },
        {
            titulo: "The Useless Web",
            url: "https://theuselessweb.com/",
            img: "public/curiosidades/uselessWeb.png",
            descricao: "Um botão que te leva a sites aleatórios, estranhos e inúteis da internet.",
            tags: ["interativos"]
        },
        {
            titulo: "PointerPointer",
            url: "https://pointerpointer.com/",
            img: "public/curiosidades/pointerPointer.jpg",
            descricao: "Sempre mostra alguém apontando exatamente para onde está o seu mouse.",
            tags: ["interativos"]
        },
        {
            titulo: "Radio Garden",
            url: "https://radio.garden",
            img: "public/curiosidades/radioGarden.png",
            descricao: "Explore rádios do mundo todo girando o planeta em um globo 3D.",
            tags: ["interativos"]
        },
    ];


    const linksFiltrados = links.filter(link =>
        filtroAtivo === "todos" || link.tags.includes(filtroAtivo)
    );

    return (
        <Container className="page-container">

            <div className="d-flex gap-1 mb-3">
                <MdEmojiEmotions size={30} className='iconTitle' />
                <h3 className='titlePage'>Entretenimento & Curiosidades</h3>
            </div>

            <div className="btnfiltro mb-4">
                {filtros.map(f => (
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
                {linksFiltrados.map((link, i) => (
                    <Col key={i} xs={12} sm={6} md={4} lg={3}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                            <Card className="cardSelectedLink">
                                <h5 className="titleLink d-flex align-items-center gap-2">
                                    <img src={link.img} className="linkIcon" />
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

export default Curiosidades;
