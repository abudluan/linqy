import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaCode } from "react-icons/fa6";
import "../styles/selectedLinks.scss";

const Desenvolvimento = () => {
  const filtros = [
    { id: "todos", label: "Todos" },
    { id: "bibliotecas", label: "Bibliotecas" },
    { id: "documentação", label: "Documentação" },
    { id: "api", label: "API's" },
  ];

  const [filtroAtivo, setFiltroAtivo] = useState("todos");

  const links = [
    {
      titulo: "Public APIs",
      url: "https://github.com/public-apis/public-apis",
      img: "public/desenvolvimento/publicAPIS.png",
      descricao:
        "O repositório de APIs públicas é mantido manualmente por membros da comunidade e pela equipe do APILayer. Ele reúne uma ampla lista de APIs de diversos domínios que você pode usar em seus próprios produtos.",
      categoria: "api",
    },

    {
      titulo: "NASA API",
      url: "https://api.nasa.gov/",
      img: "public/desenvolvimento/nasaAPI.png",
      descricao:
        "API com dados da NASA, incluindo imagens, eminentemente acessíveis aos desenvolvedores.",
      categoria: "api",
    },
    {
      titulo: "React Bits",
      url: "https://reactbits.dev/",
      img: "public/desenvolvimento/reactBits.png",
      descricao:
        "Coleção de componentes React de alta qualidade, animados e customizáveis.",
      categoria: "bibliotecas",
    },
    {
      titulo: "QuickRef.ME",
      url: "https://quickref.me/",
      img: "public/desenvolvimento/quickRefMe.png",
      descricao:
        "Busque cheatsheets e referências rápidas de várias linguagens.",
      categoria: "documentação",
    },
  ];

  const linksFiltrados = links.filter(
    (item) => filtroAtivo === "todos" || item.categoria === filtroAtivo
  );

  return (
    <Container className="page-container">

      <div className="d-flex gap-1 mb-3">
        <FaCode size={30} className="iconTitle" />
        <h3 className="titlePage">Programação & Desenvolvimento</h3>
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

export default Desenvolvimento;
