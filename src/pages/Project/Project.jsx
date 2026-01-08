import projectBg from "../../assets/projectBg.jpg";
import ProjectShowcase from "./ProjectShowCase/ProjectShowCase";
const Project = () => {
  return (
    <div className="bg-base-100">
      {/* project banner  */}
      <div className="w-full h-screen overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={projectBg}
          alt="Project Banner"
        />
      </div>
      <ProjectShowcase />
    </div>
  );
};

export default Project;
