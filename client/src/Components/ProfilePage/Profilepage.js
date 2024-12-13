import { useEffect, useState } from 'react'
import Maincontent from './Maincontent'
// import MainNavbar from '../../Assets/MainNavbar'
// import './profilepage.css'
// import Footer from '../Footer/Footer'

const Profilepage = ({}) => { 
  const [user, setUser] = useState();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [collabs, setCollabs] = useState([]);
  useEffect(() => {
      const getUserinfo = async() => {
          try{
              var response = await fetch("https://coolab-server.onrender.com/api/fullinfo", {
                  method: 'POST', 
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({user_id: localStorage.getItem("user_id")})
              });
              response = await response.json();
              setUser(response);

              var response2 = await fetch("https://coolab-server.onrender.com/api/my-projects", {
                  method: 'POST', 
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({user_id: localStorage.getItem("user_id")})
              });
              response2 = await response2.json();
              setProjects(response2);

              var response3 = await fetch("https://coolab-server.onrender.com/api/mycourses", {
                  method: "POST",
                  headers: {
                  "Content-Type": "application/json",
                  },
                  body: JSON.stringify({user_id: localStorage.getItem("user_id")})
              });
              response3 = await response3.json();
              setCourses(response3);

              var response4 = await fetch("https://coolab-server.onrender.com/api/get-collabs", {
                  method: 'POST', 
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({user_id: localStorage.getItem("user_id")})
              });
              response4 = await response4.json();
              setCollabs(response4);
            //   setProjects(response2);
              
              setLoading(false);
          } catch(error){
              console.log(error);
          }
      }
      getUserinfo();
  }, []);
  if(loading){
    return(
      <div>
        loading...
      </div>
    )
  }
    return (
        <>
            {/* {console.log(collabs)} */}
            {/* <MainNavbar/> */}
            <Maincontent userinfo={user} courses={courses} projects={projects} collabs={collabs}/>
            {/* <Footer /> */}

        </>
    );
}

export default Profilepage;