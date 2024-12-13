import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
// import io from 'socket.io-client';

// const socket = io('https://coolab-server.onrender.com');

function OneComment({comment}) {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    // const [courses, setCourses] = useState([]);
    useEffect(() => {
        const getUserinfo = async () => {
            try {
                var response = await fetch("https://coolab-server.onrender.com/api/fullinfo", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ user_id:  comment.ans_user})
                });
                response = await response.json();
                setUser(response);

                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        getUserinfo();
    }, []);
    function handleClick(e) {
        e.preventDefault();
        console.log("clicked " + user.id);
        navigate("/profile", { state: { user: user } });
        // console.log(user);
      }
    if (loading) {
        return (
            <div>
                loading...
            </div>
        )
    }
  return (
    <div className="askHelperCommentanscontainer">
        <div onClick={handleClick} style={{cursor:"pointer"}}>
            <img
                className="doubtCardUserPhoto"
                src="https://images.unsplash.com/photo-1706887577952-2c3237ba079e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"
            />
        </div>
        <div className="askHelperCommentContentcont">
            <div className="askHelperCommentuser">{user.name}</div>
            <div className="askHelperCommentCont">{comment.ans_info}</div>
        </div>
    </div>
  );
}

export default OneComment;
