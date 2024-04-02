import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Workouts from "./components/Workouts";
import Faq from "./components/Faq";
import Pricing from "./components/Pricing";
import Aos from "aos";
import "aos/dist/aos.css";
import Community from "./components/Community";
import Join from "./components/Join";
import Footer from "./components/Footer";

function App() {
  // Aos initializtion
  Aos.init({
    duration: 2500,
    delay: 400,
  });
  return (
    <div className=" mx-auto bg-page overflow-hidden relative max-w-[1440px]">
      <Header />
      <Banner />
      <About />
      <Workouts />
      <Pricing />
      <Community />
      <Faq />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
