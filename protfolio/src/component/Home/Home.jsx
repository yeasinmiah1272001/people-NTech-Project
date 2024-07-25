import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Experieance from "../Experieance/Experieance";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import OthersProjectCard from "../OthersProjectCard/OthersProjectCard";
import Project from "../Project/Project";
import ScrollBar from "../ScrollBar/ScrollBar";
import Skills from "../Skills/Skills";
import WhatNext from "../WhatNext/WhatNext";
import SkillsCard from "./../SkillsCard/SkillsCard";

const Home = () => {
  return (
    <div className="min-h-screen bg-primaryColor font-bodyFont text-lightColor">
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <SkillsCard></SkillsCard>
      <Experieance></Experieance>
      <Project></Project>
      <OthersProjectCard></OthersProjectCard>
      <WhatNext></WhatNext>
      <Contact></Contact>
      <Footer></Footer>
      <ScrollBar></ScrollBar>
    </div>
  );
};

export default Home;
