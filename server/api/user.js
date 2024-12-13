const app = require('express');
const router = app.Router();
const { jwtDecode } = require("jwt-decode");
const {db, storage} = require('../firebase/fireConfig');
const { collection, doc, getDoc, addDoc, getDocs, updateDoc } = require('firebase/firestore');
const jwt = require('jsonwebtoken');
const {
    ref,
    getDownloadURL,
    uploadBytesResumable,
  } = require("firebase/storage");
const uploadImage = require('../middleware/image_upload');
const jwtSecret = "thisisajwtsecretforkritisoftwareps";

router.get('/user-info', async(req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwtDecode(token);
    // console.log(decoded.user.id);  
    
    if(!token){
        return res.status(403).json({message: 'No token provided'});
    }
    const docRef = doc(db, 'users', decoded.user.id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        return res.status(404).json({message: 'user not found'});
    } 
    else{
        // console.log(docSnap.data());
        res.json({id: docSnap.id});
    }

    // console.log(token);
})

router.post('/fullinfo', async(req, res) => {
    // console.log(req.body.user_id);
    const docRef = doc(db, 'users', req.body.user_id);
    const docSnap = await getDoc(docRef);
    // console.log(docSnap.data());
    res.json({name: docSnap.data().name, branch: docSnap.data().branch, course: docSnap.data().courses, yearofgrad: docSnap.data().yearofgrad, phone_no: docSnap.data().phone_no, aboutme: docSnap.data().aboutme, id: docSnap.data().user_id, contributions: docSnap.data().contributions, githubprofile: docSnap.data().githubprofile, instagramprofile: docSnap.data().instagramprofile, linkedInprofile: docSnap.data().linkedInprofile, profileImage: docSnap.data().profileImage});
})

router.post('/update_user_info', uploadImage, async(req, res) => {
    // console.log(req.body);
    const timestamp = Date.now();
    let fileURL="https://static-00.iconduck.com/assets.00/avatar-default-icon-2048x2048-h6w375ur.png";
    if (req.file) {
        console.log(req.file);
        const fileName = `${req.file.originalname.split(".")[0]}_${timestamp}.${req.file.originalname.split(".")[1]
        }`;
        const fileRef = ref(storage, fileName);

        try {
        const fileSnapshot = await uploadBytesResumable(
            fileRef,
            req.file.buffer,
            {
            contentType: req.file.mimetype, 
            }
        );
        fileURL = await getDownloadURL(fileSnapshot.ref);
        }
        catch(err){
            res.status(500).json({message: "Error uploading file"});
        }
    }
    console.log(fileURL);
    const docRef = doc(db, 'users', req.body.user_id);
    await updateDoc(docRef, {...req.body, profileImage: fileURL});
    res.json({});
})


module.exports = router;