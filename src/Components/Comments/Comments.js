import "./Comments.css";

function Comments() {
  return (
    <>
      <div
        id="carousel-demo"
        className="carousel vertical slide"
        data-ride="carousel"
        data-interval="5000"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carousel-demo"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carousel-demo" data-slide-to="1"></li>
          <li data-target="#carousel-demo" data-slide-to="2"></li>
          <li data-target="#carousel-demo" data-slide-to="3"></li>
        </ol>

        <div className="carousel-inner">
          <div className="item active">
            <img src="./Img/2.jpg" alt="banana" />
          </div>
          <div className="item">
            <img src="./Img/3.jpg" alt="currant" />
          </div>
          <div className="item">
            <img src="./Img/1.jpg" alt="mango" />
          </div>
          <div className="item">
            <img src="./Img/2.jpg" alt="strawberries" />
          </div>
        </div>

        <a
          className="left carousel-control"
          href="#carousel-demo"
          data-slide="prev"
        >
          <span className="glyphicon glyphicon-chevron-up"></span>
        </a>
        <a
          className="right carousel-control"
          href="#carousel-demo"
          data-slide="next"
        >
          <span className="glyphicon glyphicon-chevron-down"></span>
        </a>

        <div></div>
      </div>
      {/* <h3>Comments are shown here</h3>
    <div>
    <div className="comments"><p>
        <h5>Daniele Andreinhfhi</h5>
    The best experience in my life! Wonderful, friendly and confortable trip!
    </p>
    </div>
    <div className="comments"><p>
        <h5>Federica Marchetti </h5>
    I traveled around Sri Lanka with My boy-friend and Shaluka has been so available for every our requests. 
    Professional and carefull. A good way to visit a fantastic country. I suggest you to call him if you need
    to move yourself fast and don’t loose time with public trasports. He can help you with accomodation too 
    if you like avventure and don’t want to book hotels. Enjoy
    </p>
    </div>
    <div className="comments"><p>
        <h5>Philip Meecham</h5>
        From airport pick up to final drop off, I have been looked after really well.  
        Thanks to the kindness and professionalism of my driver Shaluka, my first big solo 
        holiday was a great success. He looked after me and was able to show me all the 'must see' 
        sights as well as  some places not normally on the itinerary. I will look forward to a return trip.
        Great times, great memories.
    </p>
    </div>
    </div> */}
    </>
  );
}
export default Comments;
