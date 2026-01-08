import RoadmapSection from "../RoadmapSection/RoadmapSection";
import TeamSlider from "../TeamSlider/TeamSlider";
import AboutAndFeatured from "./AboutAndFeatured/AboutAndFeatured";
import CreatorsGallery from "./AboutAndFeatured/CreatorsGallery/CreatorsGallery";
import StatsSection from "./StatsSection/StatsSection";

const About = () => {
  return (
    <div className="bg-base-100">
      <StatsSection />
      <AboutAndFeatured />
      <RoadmapSection />
      <TeamSlider />
      <div className="w-full h-full">
        <img className="w-full h-full" src="./robot.gif" alt="" />
      </div>
      <CreatorsGallery />
    </div>
  );
};

export default About;
