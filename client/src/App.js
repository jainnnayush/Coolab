import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MsalProvider } from "@azure/msal-react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import Home from "./Home";
import ProfilePage from "./Components/ProfilePage/Profilepage";
import Login from "./Pages/landing/Login";
// import Login from "./Login";
import Callback from "./Callback";
import FinalProject from "./Pages/Projects/FinalProject";
import CoursePage from "./Pages/courses/CoursesPage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import FinalAskHelperMain from "./Components/AskHelper/FinalAskHelper";
import ProjectDisplay from "./Components/ProjectDisplay/ProjectDisplay";
import ProfileForm from "./Components/ProfilePage/ProfileForm";
import AddProjectForm from "./Components/AddProjectForm/AddProjectForm";
import CollabForm from "./Pages/collabForm/CollabForm";
import OthersProfile from "./Pages/othersprofile/OthersProfile";
import MainNavbar from "./Assets/MainNavbar";
import FinalCourses from "./Pages/courses/FinalCourses";
import AddCourseForm from "./Components/AddCourseForm/AddCourseForm";
import FinalUser from "./Pages/Allusers/FinalUser";

import LoadingAnimation from "./Assets/LoaderAnimation/LoaderAnimation";

//Comment
function App() {
  return (
    <React.Fragment>
      <AuthenticatedTemplate>
        <Router>
          <MainNavbar />
          <Routes>
            {/* <Route index element={<Home />} /> */}
            <Route path="/" element={<Callback />} />
            <Route exact path="/myprofile" element={<ProfilePage />}></Route>
            <Route path="/home" element={<Home />} />
            <Route exact path="/projects" element={<FinalProject />}></Route>
            <Route exact path="/profile" element={<OthersProfile />}></Route>
            {/* <Route exact path="/courses" element={<CoursePage />}></Route> */}
            <Route exact path="/courses" element={<FinalCourses />}></Route>
            <Route exact path="/Allusers" element={<FinalUser />}></Route>

            <Route
              exact
              path="/ProjectDisplay"
              element={<ProjectDisplay />}
            ></Route>
            <Route exact path="/ProfileForm" element={<ProfileForm />}></Route>
            <Route
              exact
              path="/AddProjectForm"
              element={<AddProjectForm />}
            ></Route>
            <Route
              exact
              path="/AddCourseForm"
              element={<AddCourseForm />}
            ></Route>

            <Route path="/AskHelper" element={<FinalAskHelperMain />} />
            <Route path="/collabForm" element={<CollabForm />} />

            {/* <Route path="about" element={<About />} /> */}
          </Routes>
        </Router>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Login />
      </UnauthenticatedTemplate>
    </React.Fragment>
  );
}

export default App;
