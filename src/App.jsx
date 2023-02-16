import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Row from "./components/Row";

import requests from "./api/requests";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <main>
        <Row category="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row
          category="Netflix Originals"
          fetchUrl={requests.fetchNetflixOriginals}
        />
        <Row
          category="Top 20 Movies"
          fetchUrl={requests.fetchTopRated}
          areVerticalImages={true}
        />
        <Row category="Horror" fetchUrl={requests.fetchHorrorMovies} />
        <Row category="Action" fetchUrl={requests.fetchActionMovies} />
        <Row category="Comedy" fetchUrl={requests.fetchComedyMovies} />
        <Row category="Romance" fetchUrl={requests.fetchRomanceMovies} />
        <Row
          category="Top 20 Movies"
          fetchUrl={requests.fetchTopRated}
          areVerticalImages={true}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
