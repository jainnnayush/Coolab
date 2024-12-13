import "./MainProfileCourse.css";

const MainProfileCourse = ({ props }) => {
  console.log(props);
  return (
    <div className="ProfileCourseOverlay">
      <div className="courseHeading">
        <div className="courseName">{props.courseName}</div>
        <div className="courseOrigin">{props.from}</div>
      </div>
      <div className="courseInfo">{props.instructor}</div>
      <div className="courseInfo">{props.online}</div>
      <div className="courseInfo">{props.review}</div>
      <div className="courseInfo">{props.link}</div>
    </div>
  );
};

export default MainProfileCourse;
