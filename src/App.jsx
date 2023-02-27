// Styles
import "./App.css";
import "./components/Navbar/Navbar.css";
import "./components/Banner/Banner.css";
import "./components/Row/ApiRow.css";
import "./components/Footer/Footer.css";
// Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import ApiRow from "./components/Row/ApiRow";
// API
import requests from "./api/requests";
// React
import { useState, useEffect } from "react";

function App() {
  // Window width state
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    function handleWindowWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleWindowWidth);
    return () => {
      window.removeEventListener("resize", handleWindowWidth);
    };
  });

  return (
    <div className="app">
      <Navbar windowWidth={windowWidth} />
      <Banner />
      <main>
        <ApiRow category="Trending Now" fetchUrl={requests.fetchTrending} />
        <ApiRow
          category="Netflix Originals"
          fetchUrl={requests.fetchNetflixOriginals}
        />
        <ApiRow
          category="Top 10 Series"
          fetchUrl={requests.fetchTopRatedTv}
          areVerticalImages={true}
        />
        <ApiRow category="Horror" fetchUrl={requests.fetchHorror} />
        <ApiRow category="Action" fetchUrl={requests.fetchAction} />
        <ApiRow category="Comedy" fetchUrl={requests.fetchComedy} />
        <ApiRow category="Romance" fetchUrl={requests.fetchRomance} />
        <ApiRow
          category="Top 10 Movies"
          fetchUrl={requests.fetchTopRatedMovies}
          areVerticalImages={true}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
