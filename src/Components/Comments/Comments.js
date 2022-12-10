import { func } from "prop-types";
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
            <img src="./Images/Comments/1.jpg" alt="banana" />
          </div>
          <div className="item">
            <img src="./Images/Comments/2.jpg" alt="banana" />
          </div>
          <div className="item">
            <img src="./Images/Comments/3.jpg" alt="banana" />
          </div>
          <div className="item">
            <img src="./Images/Comments/4.jpg" alt="banana" />
          </div>
          <div className="item">
            <img src="./Images/Comments/5.jpg" alt="banana" />
          </div>
          <div className="item">
            <img src="./Images/Comments/6.jpg" alt="banana" />
          </div>
          <div className="item">
            <img src="./Images/Comments/7.jpg" alt="banana" />
          </div>
          <div className="item">
            <img src="./Images/Comments/8.jpg" alt="banana" />
          </div>
          <div className="item">
            <img src="./Images/Comments/9.jpg" alt="banana" />
          </div>
          <div className="item">
            <img src="./Images/Comments/10.jpg" alt="banana" />
          </div>
          <div className="item">
            <img src="./Images/Comments/11.jpg" alt="banana" />
          </div>
          <div className="item">
            <img src="./Images/Comments/12.jpg" alt="banana" />
          </div>
          <div className="item">
            <img src="./Images/Comments/13.jpg" alt="banana" />
          </div>
          <div className="item">
            <img src="./Images/Comments/14.jpg" alt="banana" />
          </div>
          <div className="item">
            <img src="./Images/Comments/15.jpg" alt="banana" />
          </div>
          <div className="item">
            <img src="./Images/Comments/16.jpg" alt="banana" />
          </div>
          <div className="item">
            <img src="./Images/Comments/17.jpg" alt="banana" />
          </div>
          <div className="item">
            <img src="./Images/Comments/18.jpg" alt="banana" />
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
    </>
  );
}
export default Comments;
