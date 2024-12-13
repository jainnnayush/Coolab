import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import './courses.css'
import Card from '../../Components/AskHelper/components/DoubtCard'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function CourseCard({course}){
    let navigate = useNavigate();
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getData = async() => {
            var response = await fetch("https://coolab-server.onrender.com/api/fullinfo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ user_id: course.user_id }),
            });
            response = await response.json();
            setUser(response);
            setLoading(false);
        }
        getData();
    }, []);
    if(loading){
        return(
            <div>
                loading...
            </div>
        )
    }
    function handleClick() {
      console.log("clicked " + user.id);
      navigate("/profile", { state: { user: user } });
    }
    return(
        <div class="doubtCardMainCourse " style={{borderRadius:"10px",marginBottom:"19px"}}>
      {console.log(course)}
      <div class="doubtCardUserCourse ">
        <img
          class="doubtCardUserPhotoCourse"
          src="https://images.unsplash.com/photo-1706887577952-2c3237ba079e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"
        />
        <div class="doubtCardUserInfoCourse">
          <div class="doubtCardUserNameCourse" style={{fontSize:"1.2rem",display:"flex",justifyContent:"space-between"}}>
            {user.name}
            {/* Prakhar */}
            </div>
          {/* <div style={{textAlign:"end",width:"70vh",fontSize:"20px"}}>By Udemy</div> */}
          <div style={{marginTop:"0px"}}>
           {course.instructor}</div>
            
        </div>
      </div>
      <div style={{marginLeft:"80%",marginTop:"-20px"}}>By Udemy</div>
      <hr></hr>
      <div style={{marginBottom:"20px"}}>
        <div style={{fontSize:"1.2rem"}}>{course.courseName}</div>
        <div>{course.review}</div>
      </div>
   

      
    </div>

    )
}




