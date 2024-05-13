import Carousel from 'react-bootstrap/Carousel';
import smokeyMountains from '../../../../assets/images/SmokeyMountains.jpg';
import grandCanyon from '../../../../assets/images/grand_canyon.jpg';
import tetons from '../../../../assets/images/tetons.jpg';

function ImageCarousel() {
  return (
    <Carousel className="carousel-container">
      <Carousel.Item>
        <img src={smokeyMountains} alt="Smokey Mountains" className="carousel-image" />
        <Carousel.Caption>
          <h3>Visit the Great Smokey Mountains</h3>
          <p>Click <a href="https://www.nps.gov/grsm/index.htm">here</a> to learn more and plan your stay!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={grandCanyon} alt="Grand Canyon" className="carousel-image" />
        <Carousel.Caption>
          <h3>Explore the Grand Canyon</h3>
          <p>"Where Time Carves Magnificence"</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={tetons} alt="Tetons" className="carousel-image" />
        <Carousel.Caption>
          <h3 style={{ color: '#222222'}}>Travel the Tetons!</h3>
          <p style={{ color: '#222222', fontWeight: "bold"}}>Where Peaks Pierce the Sky, click <a style={{ color: "yellow"}} href='#'>here</a> to learn more!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;
