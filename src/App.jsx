import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Img from "./Img";
import CardSection from "./CardSection";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Summary from "./Summary";
import PeopleSay from "./PeopleSay";
import Footer from "./Footer";
import Blog from "./Blog";
import AboutUs from "./AboutUs";
import CreateUseCase from "./CreateUseCase";

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <CardSection />
      <Summary />
      <Img />
      <PeopleSay />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/blog"
            element={
              <>
                <Header />
                <Blog />
                <Footer />
              </>
            }
          />
          <Route
            path="/about-us"
            element={
              <>
                <Header />
                <AboutUs />
                <Footer />
              </>
            }
          />
          <Route
            path="/create-use-case"
            element={
              <>
                <Header />
                <CreateUseCase />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;