import React from "react";
import './alluser.css';

function Searchbox({searchChange}){
    return(
        <div className="searchBoxAllusers">
            <input 
            type='search' placeholder='Search Your Friend Here'
            onChange = {searchChange}></input>
        </div>
    );
}

export default Searchbox