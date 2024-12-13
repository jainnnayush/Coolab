import { useState } from "react";
import Navbar from "./Navbar";
import "./ProfileForm.css";
import axios from 'axios';

import { useNavigate } from "react-router-dom";
// import MainNavbar from "../../Assets/MainNavbar";

const ProfileForm = () => {
  const navigate = useNavigate();
  const [phone_no, setPhone_no] = useState("");
  const [branch, setBranch] = useState("");
  const [course, setCourse] = useState("");
  const [yearofGrad, setYearofGrad] = useState("");
  const [github, setGithub] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [instagram, setInstagram] = useState("");
  const [about, setAbout] = useState("");
  const [profileImage, setProfileImage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let bodyContent ={
          user_id: localStorage.getItem("user_id"),
          phone_no: phone_no,
          branch: branch,
          course: course,
          yearofgrad: yearofGrad,
          githubprofile: github,
          linkedInprofile: linkedIn,
          instagramprofile: instagram,
          aboutme: about,
          image: profileImage
      }
      axios.post("https://coolab-server.onrender.com/api/update_user_info", bodyContent,{
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
      // var response = await fetch("https://coolab-server.onrender.com/api/update_user_info", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      //   body: bodyContent,
      // });
      // response = await response.json();
      // console.log(response);
      // navigate("/myprofile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* <MainNavbar /> */}
      <div className="ProfileForm-update">
        <h2 className="ProfileForm-h2">Edit Your Profile</h2>
        <form>
          <label className="ProfileForm-lable">Phone Number</label>
          <input
            className="ProfileForm-input"
            type="text"
            value={phone_no}
            onChange={(e) => setPhone_no(e.target.value)}
          />
          <label className="ProfileForm-lable">Branch</label>
          <select
          style={{cursor:"pointer"}}
            className="ProfileForm-select"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          >
            <option value="Biosciences and Bioengineering">
              Biosciences and Bioengineering
            </option>
            <option value="Chemical Engineering">Chemical Engineering</option>
            <option value="Chemical Science and Technology">
              Chemical Science and Technology
            </option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Computer Science & Engineering">
              Computer Science & Engineering
            </option>
            <option value="Data Science and Artificial Intelligence">
              Data Science and Artificial Intelligence
            </option>
            <option value="Electronics and Communication Engineering">
              Electronics and Communication Engineering
            </option>
            <option value="Electronics and Electrical Engineering">
              Electronics and Electrical Engineering
            </option>
            <option value="ngineering Physics">Engineering Physics</option>
            <option value="Humanities and Social Sciences">
              Humanities and Social Sciences
            </option>
            <option value="Mathematics and Computing">
              Mathematics and Computing
            </option>
            <option value="Mechanical Engineering">
              Mechanical Engineering
            </option>
            <option value="Mathematics">Mathematics</option>
          </select>
          <label className="ProfileForm-lable">Courses</label>
          <select
            style={{cursor:"pointer"}}
            className="ProfileForm-select"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="B.Tech">B.Tech</option>
            <option value="M.Tech">M.Tech</option>
          </select>
          <label className="ProfileForm-lable">Year of Graduation</label>
          <input
            className="ProfileForm-input"
            type="text"
            value={yearofGrad}
            onChange={(e) => setYearofGrad(e.target.value)}
          />
          <label className="ProfileForm-lable">GitHub Profile</label>
          <input
            className="ProfileForm-input"
            type="text"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          />
          <label className="ProfileForm-lable">LinkedIn Profile</label>
          <input
            className="ProfileForm-input"
            type="text"
            value={linkedIn}
            onChange={(e) => setLinkedIn(e.target.value)}
          />
          <label className="ProfileForm-lable">Instagram Profile</label>
          <input
            className="ProfileForm-input"
            type="text"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
          <label className="ProfileForm-lable">About Yourself</label>
          <textarea
            className="ProfileForm-textarea"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
          <label className="ProfileForm-lable">Profile Image</label>
          <input
            type="file"
            name="profileImage"
            id="profileImage"
            onChange={(e)=> {
              console.log(e.target.files)
              setProfileImage(e.target.files[0])}
              }
          />
          <button className="ProfileForm-submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ProfileForm;