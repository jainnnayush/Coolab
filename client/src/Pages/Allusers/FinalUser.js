import React, { useState, useEffect } from 'react';
import AllUsers from './AllUsers';

function FinalUser() {
  
    
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const allusers = async () => {
          var response = await fetch("https://coolab-server.onrender.com/api/allusers", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
          });
          response = await response.json();
          setUsers(response);
          setLoading(false);
        };
        allusers();
      }, []);

    if(loading){
        return (
            <div>
                loading...
            </div>
        )
    }
  return (
    <div >
      
      <AllUsers  users={users}/>
    </div>
  );
}

export default FinalUser;
