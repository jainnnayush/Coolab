import React, {useEffect, useState} from 'react';
import ProjectPage from './ProjectPage';

function FinalProject() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const allprojects = async () => {
          var response = await fetch("https://coolab-server.onrender.com/api/projects", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
          });
          response = await response.json();
          setProjects(response);
          setLoading(false);
        };
        allprojects();
      }, []);

    if(loading) {
        return (
            <div>
                loading...
            </div>
        )
    }
  return (
    <div>
        <ProjectPage projects={projects}/>
    </div>
  );
}

export default FinalProject;
