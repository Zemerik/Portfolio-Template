import "./Home.scss";
import Navbar from "../../Components/Navbar/Navbar";
import IntroText from "../../Components/IntroText/IntroText";
import VerticalList from "../../Components/VerticalList/VerticalList";
import SkillsSection from "../../Components/SkillsSection/SkillsSection";
import Projects from "../../Components/Projects/Projects";
import FrontImage from "../../Components/FrontImage/FrontImage";
import ScrollNav from "../../Components/ScrollNav/ScrollNav";
import About from "../../Components/About/About";
import ContactForm from "../../Components/ContactForm/ContactForm";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <ScrollNav />
      <div className="flex-container">
        <IntroText />
        <VerticalList />
        <FrontImage />
      </div>
      <SkillsSection />
      <Projects />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;
