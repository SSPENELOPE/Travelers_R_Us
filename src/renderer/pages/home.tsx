import React from "react";
import Navbar from "../components/Navbar";

interface HomeProps {
  isLoggedIn: boolean;
}

const Home: React.FC<HomeProps> = ({ isLoggedIn }) => {

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <h1>HELLO ELECTRON</h1>
    </div>
  );
};

export default Home;
