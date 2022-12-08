import React from "react";
import NavBar from "./NavBar/NavBar.js";
import "./Home.css";
import Comments from "./Comments/Comments.js";
import ImageGallery from "./ImageGallery/ImageGallery.js";
import Footer from "./Footer/Footer.js";
import TopBar from "./TopBar/TopBar.js";

function Home() {
  return (
    <>
      <TopBar />
      <NavBar />
      <main>
        <section className="mainSection">
          <ImageGallery />
        </section>
        <section className="commentSection">
          <Comments />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
