import Img from "./Img";
import CardSection from "./CardSection";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Summary from "./Summary";
import PeopleSay from "./PeopleSay";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <CardSection />
      <Summary />
      <Img />
      <PeopleSay />
      <Footer />
    </div>
  )
}

export default App;