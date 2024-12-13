import React, { useState, useEffect } from "react";
import "./DropDownComment.css";
import OneComment from "./OneComment";


function CommentDropdown(props) {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div id="comments-dropdown">
      {/* {console.log(props)} */}
      <button onClick={toggleComments} style={{cursor:"pointer"}}class="askHelperDropDown">
        {showComments ? "Less" : "More"}
      </button>
      <div className="commentdisplay">
        {showComments && (
          <div class="askHelperAnswers">
            {props.comments.map((comment) => (
              <OneComment comment = {comment}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CommentDropdown;
