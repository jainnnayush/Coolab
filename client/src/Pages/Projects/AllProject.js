import { useEffect, useState } from "react"
import ProjectCard from "./ProjectCard"
export default function AllProjects({projects}){

      const ProjectList=projects.map((project)=>
        <ProjectCard key={project.id} project={project}/>
    )
    return(
        
        <div style={{display:"flex",flexDirection:"column",marginLeft:"15%"}}>
            {ProjectList}
        </div>
    )
}