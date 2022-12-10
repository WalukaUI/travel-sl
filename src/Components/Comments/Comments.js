import { func } from "prop-types";
import "./Comments.css";

function Comments() {
 function populateImages() {
    for(let i=0;i<18;i++){
        let imgNum=`./Images/Comments/${i}.jpg`
        return <div className="item">
        <img src={imgNum} alt="banana" />
      </div>
    }
 }
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
            {populateImages()}
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
