import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './AddProjectForm.css';
import axios from 'axios';
// import MainNavbar from "../../Assets/MainNavbar";



const AddProjectForm = () => {  
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [completed, setCompleted] = useState(false);
  const [projecttype, setProjecttype] = useState('');
  const [techstacks, setTechstacks] = useState('');
  const [github_link, setGithub_link] = useState('');
  const [description, setDescription] = useState('');
  const [projectImage, setProjectImage] = useState();
  const user_id = localStorage.getItem("user_id");

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      let bodyContent ={
        user_id: user_id,
        description: description,
        github_link: github_link,
        completed: completed,
        techstacks: techstacks,
        name: name,
        projecttype: projecttype,
        image: projectImage
    }
    //  var temp= await fetch("https://coolab-server.onrender.com/api/addproject", {
    //       method: 'POST', 
    //       headers: {
    //           'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({userId: user_id, description: description, github_link: github_link, completed: completed, techstacks: techstacks, name: name, projecttype: projecttype})
    //   });
    //   console.log("hello");
    //   navigate('/myprofile');
    //   console.log("hi");
    axios.post("https://coolab-server.onrender.com/api/addproject", bodyContent,{
          headers:{
            "Content-type": "multipart/form-data" 
          }
        }
      ).then((res)=>{
        console.log(res);
        navigate("/myprofile");
      }).catch((e)=>{
        console.log(e);
      })
    }catch(error){
      console.log(error);
    }
  };

  return (
    <>
      {/* <MainNavbar /> */}
      <div className="AddProjectForm-update">
        <h2 className="AddProjectForm-h2">Add Project</h2>
        <form>
          <label className="AddProjectForm-lable">Project Name</label>
          <input
            className="AddProjectForm-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label className="AddProjectForm-lable">Status</label>
          <select
            className="AddProjectForm-select"
            value={completed}
            style={{cursor:"pointer"}}
            onChange={(e) => setCompleted(e.target.value)}
            required
          >
            <option value={false}>Onging</option>
            <option value={true}>Completed</option>
          </select>
          <label className="AddProjectForm-lable">ProjectType</label>
          <input
            className="AddProjectForm-input"
            placeholder="eg: Web Development"
            type="text"
            value={projecttype}
            onChange={(e) => setProjecttype(e.target.value)}
            required
          />
          <label className="AddProjectForm-lable">TechStacks</label>
          <input
            className="AddProjectForm-input"
            placeholder="eg: html,css,javascript"
            type="text"
            value={techstacks}
            onChange={(e) => setTechstacks(e.target.value)}
            required
          />
          <label className="AddProjectForm-lable">Project Description</label>
          <textarea
            className="AddProjectForm-textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <label className="AddProjectForm-lable">Github Link</label>
          <input
            className="AddProjectForm-input"
            type="text"
            value={github_link}
            onChange={(e) => setGithub_link(e.target.value)}
            required
          />
          <label className="ProfileForm-lable">Project Image</label>
          <input
            type="file"
            name="projectImage"
            id="projectImage"
            onChange={(e)=> {
              console.log(e.target.files)
              setProjectImage(e.target.files[0])}
              }
          />
          <button className="AddProjectForm-submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProjectForm;
