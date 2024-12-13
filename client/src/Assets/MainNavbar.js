import "./Navbar.css";
import { Link } from "react-router-dom";
const MainNavbar = () => {
  return (
    <div class="NavBarOverlay">
      <div class="navbarRoutes">
        <img src="https://i.ibb.co/kX4wfCn/Coolab.png" class="navbarLogo" />

        <Link to="/home" class="navBarIcons">
          <span class="material-symbols-outlined">home</span>
        </Link>
        <Link to="/Allusers" class="navBarIcons">
          <span class="material-symbols-outlined">code_blocks</span>
        </Link>
        <Link to="/courses" class="navBarIcons">
          <span class="material-symbols-outlined">school</span>
        </Link>
        <Link to="/AskHelper" class="navBarIcons">
          <span class="material-symbols-outlined">live_help</span>
        </Link>
      </div>
      <Link to="/myprofile" class="navBarIcons">
        <span class="material-symbols-outlined">account_circle</span>
      </Link>
    </div>
  );
};

export default MainNavbar;
