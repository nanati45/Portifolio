import ContactMe from "./[pages]/contact/page";
import HomePage from "./[pages]/home/page";
import MyWorks from "./[pages]/works/page";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Description from "./components/Description";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SideBar from "./components/SideBar";
import Skills from "./components/Skills";
import TopNavBar from "./components/TopNavBar";
import Works from "./components/Works";

export default function Page() {
  return (
    <div className="bg-bg w-full">
      <HomePage />
      <AboutMe />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}
