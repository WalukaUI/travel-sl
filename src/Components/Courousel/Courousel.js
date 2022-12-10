import './Courousel.css'
import Carousel from 'react-bootstrap/Carousel';

function TravelCourousel() {
  return <>
  <Carousel variant="dark">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={process.env.PUBLIC_URL + '/Img/3.jpg'}
        alt="First slide"
      />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={process.env.PUBLIC_URL + '/Img/1.jpg'}
        alt="Second slide"
      />
      <Carousel.Caption>
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={process.env.PUBLIC_URL + '/Img/2.jpg'}
        alt="Third slide"
      />
      <Carousel.Caption>
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </>
}

export default TravelCourousel;

{/* <div className="container">
  <div id="myCarousel" className="carousel slide" data-ride="carousel">

    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
      <li data-target="#myCarousel" data-slide-to="3"></li>
    </ol>


    <div className="carousel-inner" role="listbox">

      <div className="item active">
        <img src="./Img/2.jpg" alt="Chania"/>
      </div>

      <div className="item">
        <img src="./Img/3.jpg" alt="Chania"/>
        <div className="carousel-caption">
          <h3>Chania</h3>
          <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
        </div>
      </div>
    
      <div className="item">
        <img src="./Img/2.jpg" alt="Flower"/>
      </div>

      <div className="item">
        <img src="./Img/1.jpg" alt="Flower"/>
      </div>
  
    </div>


    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div> */}