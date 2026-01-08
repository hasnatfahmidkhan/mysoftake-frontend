import HeroSlider from "../../component/HeroBanner";
import CompanyValuesSection from "./shared/CompanyValuesSection/CompanyValuesSectioin";
import ServicesSlider from "./shared/ServiceSlider/ServiceSlider";
import AreaWeServe from "./AreaWeServe/AreaWeServe";
import HappyClientsSlider from "./HappyClientSlider/HappyClientSlider";
import ProjectSlider from "./ProjectSlider/ProjectSlider";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <CompanyValuesSection />
      <div className="overflow-hidden">
        <ServicesSlider />
      </div>
      <ProjectSlider />
      <HappyClientsSlider />
      <AreaWeServe />
    </div>
  );
};

export default Home;
