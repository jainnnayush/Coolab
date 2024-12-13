import React from "react";
import Card from './Card'

function Cardslist({robots}){
    return(
        <div style={{display:"flex",flexWrap:"wrap",alignItems:"space-around",justifyContent:"center",margin:"0 auto"}}>
        {
            robots.map((user, i) => {
            return <Card key={robots[i].user_id} id={robots[i].user_id} name={robots[i].name} branch={robots[i].branch} profileImage={robots[i].profileImage}/>})
        }
        </div>
    );
}

export default Cardslist