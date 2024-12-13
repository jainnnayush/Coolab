import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import "./profilepage.css";
import github_logo from "./github_logo.png";
import insta_logo from "./insta_logo.png";
import linkedIn_logo from "./linkedIn_logo.png";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useState } from "react";
import CollabCard from "./CollabCard";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import ProfileProject from "./ProfileProject";
import MainProfileCourse from "./MainProfileCourse";

const Maincontent = ({ userinfo, courses, projects, collabs }) => {
  let navigate = useNavigate();
  function handleClick(project) {
    console.log("clicked " + project.id);
    navigate("/ProjectDisplay", { state: { project: project } });
  }
  function handleEdit() {
    navigate("/ProfileForm");
  }
  function handleAddProject() {
    navigate("/AddProjectForm");
  }
  function handleAddCourse() {
    navigate("/AddCourseForm");
  }
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };
  const getWindowWidth = () => {
    return (
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    );
  };

  const [windowWidth, setWindowWidth] = useState(getWindowWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(getWindowWidth());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(courses);
  return (
    <>
      <div className="Mainprofile-container">
        <div className="profile-left">
          <div className="profile-info">
            <div className="profileImageInfo">
              <img
                src={userinfo.profileImage}
                alt="Profile Picture"
                className="profile-picture-MainProfile"
              />
            </div>
            <div className="text-info">
              <div className="userIdentitiy">
                <div className="userName">{userinfo.name}</div>
                <div className="userBranch">{userinfo.branch}</div>
                <div className="userGrad">{userinfo.yearofgrad}</div>
                <div className="userGrad">{userinfo.phone_no}</div>
              </div>
              <div className="userContact">
                <a href={userinfo.githubprofile}>
                  <img
                    className="userContactButtons"
                    src={github_logo}
                    alt=""
                  />
                </a>
                <a href={userinfo.linkedInprofile}>
                  <img
                    className="userContactButtons"
                    src={linkedIn_logo}
                    alt=""
                  />
                </a>
                <a href={userinfo.instagramprofile}>
                  <img className="userContactButtons" src={insta_logo} alt="" />
                </a>
              </div>
            </div>
            <div className="editProfileContainer">
              <button className="edit-profile" onClick={handleEdit}>
                Edit Profile
              </button>
            </div>
          </div>

          <div className="profile-about">
            <div className="about-heading">About</div>
            <div className="about-content">{userinfo.aboutme}</div>
          </div>

          <div className="profile-project">
            <div className="addProjectContainer">
              <div className="about-heading">Projects</div>
              <button className="edit-profile" onClick={handleAddProject}>
                Add Project
              </button>
            </div>

            <div className="slide-container">
              <MdChevronLeft className="left" onClick={slideLeft} size={40} />
              <div className="slider-container" style={{ maxWidth: "900px" }}>
                <div className="slider" id="slider">
                  {projects.map((project, index) => (
                    <ProfileProject project={project} />
                  ))}
                </div>
              </div>
              <MdChevronRight
                className="right"
                onClick={slideRight}
                size={40}
              />
            </div>
          </div>
          <div className="profile-project">
            <div className="addProjectContainer">
              <div className="about-heading">Courses</div>
              <button className="edit-profile" onClick={handleAddCourse}>
                Add Course
              </button>
            </div>
            <div className="mainProfileCourseList">
              {courses.map((course) => (
                <MainProfileCourse props={course} />
              ))}
            </div>
          </div>
        </div>

        <div className="profile-right-collab">
          <div className="collab-heading">Collaboration Requests</div>

          <div className="collaboration-req">
            {collabs.map((collab, index) => (
              <CollabCard collab={collab} />
            ))}
          </div>
        </div>
      </div>
      <button className="Maincontent-button-toggle" onClick={handleToggle}>
        {isToggled ? <FaToggleOn /> : <FaToggleOff />}
      </button>
    </>
  );
};

export default Maincontent;
