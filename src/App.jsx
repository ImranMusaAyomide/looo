import Img from "./Img";
import CardSection from "./CardSection";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Summary from "./Summary";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <CardSection />
      <Summary />
      <Img />
    </div>
  )
}

export default App;