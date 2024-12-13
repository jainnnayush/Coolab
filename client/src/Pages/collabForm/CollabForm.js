import React, {useState} from 'react';
import './CollabForm.css';
import {useLocation, useNavigate} from 'react-router-dom';

function CollabForm({project}) {
    const location = useLocation();
    const navigate = useNavigate();
    project = location.state.project;
    console.log(project);
    const user_id = localStorage.getItem("user_id");

    // const [phone_no, setPhone_no] = useState('');
    // const [branch, setBranch] = useState('');
    // const [course, setCourse] = useState('');
    // const [yearofGrad, setYearofGrad] = useState('');
    // const [github, setGithub] = useState('');
    // const [linkedIn, setLinkedIn] = useState('');
    // const [instagram, setInstagram] = useState('');
    const [about, setAbout] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        var response = await fetch("https://coolab-server.onrender.com/api/collab-req", {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({sender_id: user_id, project_id: project.id, receiver_id: project.userId, info: about})
        });
        response = await response.json();
        navigate('/home');
    }
  return (
    <div className='collabForm-update'>
      <h2 className="collabForm-h2">Collab Form</h2>
            <form>
                {/* <label className="collabForm-lable">Phone Number</label>
                <input className="collabForm-input"
                type="text" 
                value={phone_no}
                onChange={(e) => setPhone_no(e.target.value)}
                />
                <label className="collabForm-lable">Branch</label>
                <select className="collabForm-select"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                >
                <option value="Biosciences and Bioengineering">Biosciences and Bioengineering</option>
                <option value="Chemical Engineering">Chemical Engineering</option>
                <option value="Chemical Science and Technology">Chemical Science and Technology</option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                <option value="Data Science and Artificial Intelligence">Data Science and Artificial Intelligence</option>
                <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                <option value="Electronics and Electrical Engineering">Electronics and Electrical Engineering</option>
                <option value="ngineering Physics">Engineering Physics</option>
                <option value="Humanities and Social Sciences">Humanities and Social Sciences</option>
                <option value="Mathematics and Computing">Mathematics and Computing</option>
                <option value="Mechanical Engineering">Mechanical Engineering</option>
                <option value="Mathematics">Mathematics</option>


                </select>
                <label className="collabForm-lable">Courses</label>
                <select className="collabForm-select"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                >
                <option value="B.Tech">B.Tech</option>
                <option value="M.Tech">M.Tech</option>

                </select>
                <label className="collabForm-lable">Year of Graduation</label>
                <input className="collabForm-input"
                type="text" 
                value={yearofGrad}
                onChange={(e) => setYearofGrad(e.target.value)}
                />
                <label className="collabForm-lable">GitHub Profile</label>
                <input className="collabForm-input"
                type="text" 
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                />
                <label className="collabForm-lable">LinkedIn Profile</label>
                <input className="collabForm-input"
                type="text" 
                value={linkedIn}
                onChange={(e) => setLinkedIn(e.target.value)}
                />
                <label className="collabForm-lable">Instagram Profile</label>
                <input className="collabForm-input"
                type="text" 
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                /> */}
                <label className="collabForm-lable">Why do you want to collaborate ?</label>
                <textarea className="collabForm-textarea"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                ></textarea>
                <button className="collabForm-submit" onClick={handleSubmit}>Submit</button>
            </form>
    </div>
  );
}

export default CollabForm;
