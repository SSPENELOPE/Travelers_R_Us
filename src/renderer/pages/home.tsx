import React from "react";
import Navbar from "../components/Navbar";
import ImageCaroursel from "../components/home/ImageCarousel";

interface HomeProps {
  isLoggedIn: boolean;
}

const Home: React.FC<HomeProps> = ({ isLoggedIn }) => {

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className="carousel-div">
        <ImageCaroursel />
      </div>
    </div>
  );
};

export default Home;
