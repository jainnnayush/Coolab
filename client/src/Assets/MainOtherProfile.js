import React from 'react';
import { useEffect, useState } from "react";
import "./MainProfile.css";
import { useNavigate } from 'react-router-dom';

function MainOtherProfile({user_id}) {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    let navigate = useNavigate();
    useEffect(() => {
        const getData = async() => {
            var response2 = await fetch("https://coolab-server.onrender.com/api/fullinfo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ user_id: user_id }),
            });
            response2 = await response2.json();
            setUser(response2);
            setLoading(false);
        }
        getData();
    }, []);
    if(loading){
        return(
            <div>
                loading...
            </div>
        )
    }
    function handleClick() {
        console.log("clicked " + user.id);
        navigate("/profile", { state: { user: user } });
    }
  return (
    <div class="MainProfileOverlay" onClick={handleClick}>
      <img
        class="MainProfileImage"
        src={user.profileImage}
      />
      <div class="ProfileDetails">
        <div class="ProfileName">{user.name}</div>
        <div class="ProfileName">Contributions: {user.contributions}</div>
      </div>
    </div>
  );
}

export default MainOtherProfile;
