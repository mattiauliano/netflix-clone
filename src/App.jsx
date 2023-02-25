import { useState, useEffect } from "react";
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

function App() {
  return (
    <div className="app">
      <Navbar />
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
