import "./AskHelperMain.css";
import AskHelp from "./components/AskHelp";
import DoubtCard from "./components/DoubtCard";
import MainProfile from "../../Assets/MainProfile";
import MainNavbar from "../../Assets/MainNavbar";

const AskHelperMain = (props) => {
  return (
    <div class="askHelperLayout" >
      <div class="overlayHelper">
        <div class="askHelpMain">
          <AskHelp data={props.data} setData={props.setData} />
          <div class="doubtMain">
            {props.data.map((res) => (
              <DoubtCard prop={res} data={props.data} setData={props.setData} />
            ))}
          </div>
        </div>
        <div className="askHelperMainProfile">
          <MainProfile />
        </div>
      </div>
    </div>
  );
};

export default AskHelperMain;
