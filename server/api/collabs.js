const express = require('express');
const router = express.Router();
const {db} = require('../firebase/fireConfig')
const { collection, doc, getDoc, addDoc, arrayUnion, getDocs, updateDoc, serverTimestamp, deleteDoc } = require('firebase/firestore');

const collabsCollection = collection(db, 'collabs');

router.post('/collab-req', async(req, res) => {
    const data = req.body;
    // console.log(data);
    var response = await addDoc(collabsCollection, data);
    const docRef = doc(db, 'collabs', response.id);

    await updateDoc(docRef, {
        collab_id: response.id,
        timestamp: serverTimestamp()
    });
    res.json({});
})

router.post('/get-collabs', async(req, res) => {
    const id = req.body.user_id;
    const dataArray = [];
    const alldocs = await getDocs(collabsCollection);
    alldocs.forEach((doc) => {
        if(doc.data().receiver_id === id){
            dataArray.push(doc.data());
        }
    });
    // console.log(dataArray);
    console.log(dataArray);
    res.send(dataArray);
    // console.log(data);
})

router.post('/collab-accept', async(req, res) => {
    const user_id = req.body.user_id;
    const collab_id = req.body.collab_id;

    const docRef2 = doc(db, 'users', user_id);
    const docSnap2 = await getDoc(docRef2);

    var contri = docSnap2.data().contributions;
    await updateDoc(docRef2, {
        contributions: contri+5
    })

    const docRef = doc(db, 'collabs', response.id);
    const docSnap = await getDoc(docRef);

    const project_id = docSnap.data().project_id;
    const docRef3 = doc(db, 'users', project_id);

    await updateDoc(docRef3, {
        contributors: arrayUnion(docSnap.data().sender_id)
    });

    await deleteDoc(doc(db, "collabs", collab_id));
    res.json({success: "success"});
})

router.post('/collab-reject', async(req, res) => { 
    const collab_id = req.body.collab_id;
    await deleteDoc(doc(db, "collabs", collab_id));
    res.json({success: "success"});
})


module.exports = router;