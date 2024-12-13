import "./Projecthead.css";

let statusMessage = "Completed";

const Projecthead = (project) => {
  if (project.Status === 1) {
    statusMessage = "Ongoing";
  }

  return (
    <div class="projectHead">
      <div class="projectAuthor">
        <span class="projectName"> {project.name}</span>
        <span class="projectType"> {"- " + project.projecttype}</span>
      </div>
      <div class="projectStatus">
        
        {project.completed ? "Completed": "Ongoing"}
        
      </div>
    </div>
  );
};

export default Projecthead;
