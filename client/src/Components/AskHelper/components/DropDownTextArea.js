import React, { useState, useEffect } from "react";
import "./DropDownComment.css";
// import io from 'socket.io-client';

// const socket = io("https://coolab-server.onrender.com", {
//   reconnection: false
// });

// localStorage.debug = '*';

function CommentForm({prop, data, setData}) {
  const [commentText, setCommentText] = useState(""); // State to store comment text
  const [comments, setComments] = useState([]); // State to store added comments
  
  // const [isCooldown, setIsCooldown] = useState(false);
  // const [isSpamDetected, setIsSpamDetected] = useState(false);
  
  // useEffect(() => {
  //   socket.io.on("reconnect_error", (error) => {
  //     socket.disconnect()
  //   })
  //   socket.on('chat message', (msg) => {
  //     setComments((prevMessages) => [...prevMessages, msg]);
  //   });

  //   socket.on('spam detected', () => {
  //     setIsSpamDetected(true);
  //     startCooldown();
  //   });
  //   socket.on("connect_error", () => {
  //     // revert to classic upgrade
  //     socket.io.opts.transports = ["polling", "websocket"];
  //   });
  //   return () => {
  //     socket.off('chat message');
  //     socket.off('spam detected');
  //   };
  // }, []);

  // const startCooldown = () => {
  //   setIsCooldown(true);
  //   setTimeout(() => {
  //     setIsCooldown(false);
  //     setIsSpamDetected(false);
  //   }, 10000); // 5 second cooldown
  // };
   
  const handleCommentChange = (event) => {
    // event.preventDefault();
    setCommentText(event.target.value);
  };

  const handleAddComment = async(e) => {
    // e.preventDefault();
    // if (!commentText.trim() || isCooldown || isSpamDetected) return;

    // socket.emit('chat message', commentText);
    // startCooldown();
    console.log("spam check");
    if (commentText) {
      setComments([...comments, commentText]);

      var response = await fetch('https://coolab-server.onrender.com/api/add-ans', {
        method: 'POST', 
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ans_user:localStorage.getItem("user_id"), ques_id: prop.ques_id, comment: commentText})
      });
      response = await response.json();
      var data2= [...data];
      data2.forEach((ele)=>{
        const found = 0;
        if(ele.ques_id===prop.ques_id){
          ele.answers.forEach((ans) => {
            if(ans === response.data){
              found = 1;
            }
          })

          if(!found){
            ele.answers = ele.answers.concat(response.data);
          }
        }
      });
      
      setData(data2);
      setCommentText("");
      // console.log({ques_id: prop.ques_id, comment: commentText});
    }
  }

  return (
    <div className="dropDownSubmit">
      <input
        type="text"
        style={{border:"1px solid rgba(0,0,0,0.1)",outline:"none"}}
        value={commentText}
        onChange={handleCommentChange}
        /*disabled={isCooldown || isSpamDetected}*/
        placeholder="Enter your comment..."
        class="dropDownTextArea"
      />
      <button style={{cursor:"pointer",marginLeft:"3px"}} class="dropDownTextAreaButton" /*disabled={isCooldown || isSpamDetected}*/ onClick={handleAddComment} >
        Submit
      </button>
    </div>
  );
}

export default CommentForm;
