import React, { useEffect, useState } from 'react';
import './profilepage.css';

function CollabCard({ collab }) {
    const [sender, setSender] = useState('');
    const [proj, setProj] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getcollabs = async () => {
            var response = await fetch("https://coolab-server.onrender.com/api/fullinfo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({user_id: collab.sender_id}),
            });
            response = await response.json();
            setSender(response.name);

            var response2 = await fetch("https://coolab-server.onrender.com/api/showproject", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({id: collab.project_id}),
            });
            response2 = await response2.json();
            setProj(response2.name);
            setLoading(false);
        }

        getcollabs();
    }, []);
    const handleAccept = async() => {
        var response = await fetch("https://coolab-server.onrender.com/api/collab-accept", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({user_id: collab.sender_id, collab_id: collab.collab_id}),
        });
        response = await response.json();
        window.location.reload();
        // if(response.success === "success"){
        //     alert('collab accepted');
        // }
    }

    const handleReject = async() => {
        var response = await fetch("https://coolab-server.onrender.com/api/collab-reject", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({collab_id: collab.collab_id}),
        });
        response = await response.json();

        window.location.reload();
    }
    if(loading){
        return(
            <div>
                loading...
            </div>
        )
    }
    return (
        <div className='collab-card'>
            {/* {console.log(collab)} */}
            <div className='collab-user'>{sender} | {proj}</div>
            <div classname='collab-desc'>{collab.info}</div>
            <div className='buttons'>
                <button class="collab-accept-button" onClick={handleAccept}>Accept</button>
                <button class="collab-decline-button" onClick={handleReject}>Decline</button>
            </div>
            <hr></hr>
        </div>
    );
}

export default CollabCard;
