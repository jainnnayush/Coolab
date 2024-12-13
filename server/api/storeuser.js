const express = require('express');
const router = express.Router();
const {db} = require('../firebase/fireConfig')
const { collection, doc, getDoc, addDoc, getDocs, updateDoc } = require('firebase/firestore');
const jwt = require('jsonwebtoken');

const jwtSecret = "thisisajwtsecretforkritisoftwareps";

// Assuming you have a 'users' collection
const usersCollection = collection(db, 'users');

router.post('/storeuser', async (req, res) => {
    const dataFromFrontend = req.body;
    const snapshot = await getDocs(usersCollection);

    var found = false;
    var doc_id;

    snapshot.forEach((doc) => {
        const email_found = doc.data().email;
        if(dataFromFrontend.email === email_found){
            // email = email_found;
            doc_id = doc.id;
            found = true;
        }
      });
    if(!found){
        const response = await addDoc(usersCollection, dataFromFrontend);
        const docRef = doc(db, 'users', response.id);
        await updateDoc(docRef, {
            user_id: response.id, 
            contributions: 0,
            branch: "",
            course: "",
            yearofgrad: "",
            phone_no: "", 
            aboutme: "", 
            linkedInprofile: "", 
            instaprofile: "", 
            githubprofile: "", 
            profileImage: "https://static-00.iconduck.com/assets.00/avatar-default-icon-2048x2048-h6w375ur.png"
        });
        doc_id = docRef.id;
        console.log(doc_id);
    }
    // console.log(doc_id);
    const data = {
        user:{
            id: doc_id
        }
      }
    // console.log(data);
    const token = jwt.sign(data, jwtSecret, { expiresIn: '1h' });
    // console.log('Data received:', dataFromFrontend);
    // console.log(token);
    res.json({token});
})

router.get('/allusers', async(req, res) => {
    const dataArray = [];
    const alldocs = await getDocs(usersCollection);
    alldocs.forEach((doc) => {
        dataArray.push(doc.data());
    });
    // console.log(dataArray);
    res.send(dataArray);
})


router.get('/top-contributors', async(req, res) => {
    const snapshot = await getDocs(usersCollection);
    const contri_array = [];

    snapshot.forEach((doc) => {
        contri_array.push(doc.data());
    })
    contri_array.sort((a, b) => b.contributions - a.contributions);
    
    const final_array = [];
    
    // contri_array.forEach((user) => {
    //     final_array.push({
    //         name: user.name,
    //         contributions: user.contributions
    //     })
    //     if(final_array.length === 5){
    //         return ;
    //     }
    // })

    for(let ind in contri_array){
        final_array.push({
            name: contri_array[ind].name,
            contributions: contri_array[ind].contributions
        })

        if(final_array.length === 5){
            break;
        }
        // console.log(contri_array[user]);
    }
    // console.log(final_array);
    // console.log(contri_array);
    
    res.send(final_array);
})

module.exports = router;