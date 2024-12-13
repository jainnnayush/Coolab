import React, { useEffect, useState } from "react";
import "./ProjectAccordian.css";
import OneReview from "./OneReview";
import LoadingAnimation from "../../../Assets/LoaderAnimation/LoaderAnimation";

const ProjectAccordian = (myproject) => {
  console.log(myproject);
  const [reviews, setReviews] = useState([]);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const [ReviewText, setReviewText] = useState({
    review: "",
  });
  const [rev, setRev] = useState("");
  useEffect(() => {
    const getUserinfo = async (req, res) => {
      var response = await fetch("https://coolab-server.onrender.com/api/fullinfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: localStorage.getItem("user_id") }),
      });
      response = await response.json();
      setUser(response);
      setLoading(false);
    };

    getUserinfo();
  }, []);
  if (loading) {
    return <LoadingAnimation />;
  }
  let project = JSON.parse(JSON.stringify(myproject));
  if (!project.techstacks) project.techstacks = [""];
  if (!project.SkillsReq) project.SkillsReq = [""];
  console.log(project.reviews);

  function handleChange(event) {
    const { name, value } = event.target;
    setRev(event.target.value);

    setReviewText((prevReviewText) => {
      return {
        ...prevReviewText,
        [name]: value,
      };
    });
  }

  const handleReviewSubmit = async () => {
    setReviews((prevReviews) => [...prevReviews, ReviewText.review]);

    var response = await fetch("https://coolab-server.onrender.com/api/add-review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ans_user: localStorage.getItem("user_id"),
        proj_id: project.id,
        ans_info: rev,
      }),
    });
    response = await response.json();
    setReviewText({ review: "" });
  };

  return (
    <ul class="accordian">
      <li class="accordianHeading">
        <input type="checkbox" name="accordian" id="first" />

        <label for="first" className="contentHead">
          {" "}
          <p className='accordian_heading_text'> Description</p>
         
        </label>
        <div class="content">
          <p>{project.description}</p>
        </div>
      </li>
      <li class="accordianHeading">
        <input type="checkbox" name="accordian" id="second" />
        <label for="second" class="contentHead">
          {" "}
          <p className='accordian_heading_text'> Tech Stack</p>
          
        </label>
        <ul className="content">
          {project.techstacks.map((tech) => (
            <li>{tech}</li>
          ))}
        </ul>
      </li>
      <li className="accordianHeading">
        <input
          type="checkbox"
          name="accordian"
          id="third"
          checked={isReviewsOpen}
          onChange={() => setIsReviewsOpen(!isReviewsOpen)}
        />
        <label htmlFor="third" className="contentHead">
          <p className='accordian_heading_text'> Reviews</p>
          
        </label>
        <div className="content">
          {isReviewsOpen && (
            <>
              <div className="review_open">
                <form className="reviewAccordian">
                  <input
                    className="ProjectDisplay_Review"
                    name="review"
                    value={ReviewText.review}
                    onChange={handleChange}
                    placeholder="Enter your review here"
                  />
                  <button
                    className="ProjectDisplay_Review_Button"
                    onClick={handleReviewSubmit}
                  >
                    Submit
                  </button>
                </form>

                <div>
                  {reviews.map((review, index) => (
                    <div className="reviewDisplay" key={index}>
                      <div>
                        <img
                          className="review_image"
                          src="https://images.unsplash.com/photo-1706887577952-2c3237ba079e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"
                        />
                      </div>

                 <div className="reviewAuthor">
                        <div className="review_name">{user.name}</div>
                        <div className="review_review">{review}</div>
                      </div>
                    </div>
                  ))}
                  {project.reviews.map((revieww) => (
                    <OneReview revieww={revieww} />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </li>

      <li class="accordianHeading" projectStatus>
        <input type="checkbox" name="accordian" id="fourth" />
        <label for="fourth">
          <p className='accordian_heading_text'> Skills Required</p>
           
           </label>
        <div class="content">
          <ul>
            {project.SkillsReq.map((skills) => (
              <li>{skills}</li>
            ))}
          </ul>
        </div>
      </li>
      {myproject.completed && (
        <li class="accordianHeading" projectStatus>
          <input type="checkbox" name="accordian" id="fifth" />
          <label for="fifth"> Contributors</label>
          <div class="content">
            <ul>
              {project.SkillsReq.map((skills) => (
                <li>{skills}</li>
              ))}
            </ul>
          </div>
        </li>
      )}
    </ul>
  );
};

export default ProjectAccordian;
