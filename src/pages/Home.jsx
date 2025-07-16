import Carousel from 'react-bootstrap/Carousel';
import '../App.css'; // 🔺 Import custom CSS

function UncontrolledExample() {
  return (
    <div className="carousel-wrapper">
      <Carousel className="custom-carousel">
        <Carousel.Item>
          <img
            className="carousel-img"
            src="https://www.nameerabyfarooq.com/cdn/shop/articles/Pakistani_Bridal_Dresses_by_Region__A_Cultural_Showcase_1920x.jpg?v=1698702347"
            alt="Slide 1"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carousel-img"
            src="https://www.nameerabyfarooq.com/cdn/shop/articles/Pakistani_Bridal_Dresses_by_Region__A_Cultural_Showcase_1920x.jpg?v=1698702347"
            alt="Slide 2"
          />
          
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carousel-img"
            src="https://www.nameerabyfarooq.com/cdn/shop/articles/Pakistani_Bridal_Dresses_by_Region__A_Cultural_Showcase_1920x.jpg?v=1698702347"
            alt="Slide 3"
          />
          
        </Carousel.Item>
      </Carousel>


      
    </div>
  );
}

export default UncontrolledExample;
