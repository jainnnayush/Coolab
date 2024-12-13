import "./ProfileProject.css";
import { useNavigate } from "react-router-dom";

const ProfileProject = (project) => {
  let navigate = useNavigate();
  function handleClick(project) {
    console.log("clicked " + project.id);
    navigate("/ProjectDisplay", { state: { project: project } });
  }

  console.log("in comp");
  console.log({ project });
  return (
    <div className="ProfileProjectOverlay">
      <img className="profileProjectImage" src={project.project.projectImage} />
      <div className="profileProjectName">{project.project.name}</div>
      <button
        className="profileProjectDisplay"
        onClick={() => handleClick(project.project)}
      >
        View More
      </button>
    </div>
  );
};

export default ProfileProject;
