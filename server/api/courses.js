const express = require('express');
const router = express.Router();
const {db} = require('../firebase/fireConfig')
const { collection, doc, getDoc, addDoc, getDocs, updateDoc, serverTimestamp } = require('firebase/firestore');

const usersCollection = collection(db, 'courses');

router.post('/addcourse', async(req, res) => {
    const data = req.body;
    const response = await addDoc(usersCollection, data);
    const docRef = doc(db, 'courses', response.id);
    
    await updateDoc(docRef, {
        id: response.id,
        timestamp: serverTimestamp()
    });
    // console.log(data);
    res.send("success");
})
router.get('/courses', async(req, res) => {
    const dataArray = [];
    const alldocs = await getDocs(usersCollection);
    alldocs.forEach((doc) => {

        dataArray.push(doc.data());
    });
    // console.log(dataArray);
    res.send(dataArray);
})

router.post('/mycourses', async(req, res) => {
    const user_id = req.body.user_id;
    const dataArray = [];
    const alldocs = await getDocs(usersCollection);
    alldocs.forEach((doc) => {
        if(user_id === doc.data().user_id){
            dataArray.push(doc.data());
        }
    });
    // console.log(dataArray);
    res.send(dataArray);
})
module.exports = router;