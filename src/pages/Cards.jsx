import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../App.css";
// import { transformWithEsbuild } from 'vite';

function Cards() {
  const cardData = [
    {
      id: 1,
      title: "Card One",
      text: "This is the first card.",
      image: "https://www.azureofficial.pk/cdn/shop/files/Nayaab-Front-AzureWeddingEdit2023-FestiveCollection-BridalDressesinPakistan_1200x1200.jpg?v=1734681561",
    },
    {
      id: 2,
      title: "Card Two",
      text: "This is the second card.",
      image: "https://www.azureofficial.pk/cdn/shop/files/Nayaab-Front-AzureWeddingEdit2023-FestiveCollection-BridalDressesinPakistan_1200x1200.jpg?v=1734681561",
    },
    {
      id: 3,
      title: "Card Three",
      text: "This is the third card.",
      image: "https://www.azureofficial.pk/cdn/shop/files/Nayaab-Front-AzureWeddingEdit2023-FestiveCollection-BridalDressesinPakistan_1200x1200.jpg?v=1734681561",
    },
    {
      id: 3,
      title: "Card Three",
      text: "This is the third card.",
      image: "https://www.azureofficial.pk/cdn/shop/files/Nayaab-Front-AzureWeddingEdit2023-FestiveCollection-BridalDressesinPakistan_1200x1200.jpg?v=1734681561",
    },
    {
      id: 3,
      title: "Card Three",
      text: "This is the third card.",
      image: "https://www.azureofficial.pk/cdn/shop/files/Nayaab-Front-AzureWeddingEdit2023-FestiveCollection-BridalDressesinPakistan_1200x1200.jpg?v=1734681561",
    },
    {
      id: 3,
      title: "Card Three",
      text: "This is the third card.",
      image: "https://www.azureofficial.pk/cdn/shop/files/Nayaab-Front-AzureWeddingEdit2023-FestiveCollection-BridalDressesinPakistan_1200x1200.jpg?v=1734681561",
    },
    {
      id: 3,
      title: "Card Three",
      text: "This is the third card.",
      image: "https://www.azureofficial.pk/cdn/shop/files/Nayaab-Front-AzureWeddingEdit2023-FestiveCollection-BridalDressesinPakistan_1200x1200.jpg?v=1734681561",
    },
  ];

  return (
    <div className="cards-wrapper">
      {cardData.map((card) => (
        <div key={card.id} className="card-box">
          <Card className="h-100 shadow-lg">
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
              <Button
                style={{
                  color: 'white',
                  backgroundColor: '#d63384',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Cards;
