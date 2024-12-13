import React, { useEffect } from "react";
import { useMsal } from "@azure/msal-react";
import { useNavigate } from "react-router-dom";

function Callback() {
    const navigate = useNavigate();
    const { instance } = useMsal();  
    const obj = instance.getActiveAccount();  
    useEffect(() => {
        const sendData = async() => {
            var response = await fetch("https://coolab-server.onrender.com/api/storeuser", {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: obj.name, email: obj.username})
            });
            response = await response.json();
            console.log(response.token);
            localStorage.setItem('token', response.token);
            navigate('/home');
        }
        sendData();
    }, []);
    // console.log(instance.getActiveAccount());
    return (
        <div>
            {/* {localStorage.getItem("token")} */}
        </div>
    );
    }

export default Callback;