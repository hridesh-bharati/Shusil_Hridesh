const router= require('express').Router();
const {studentRegistration,sendQuery,loginController}= require('../Controller/studentController');
router.post('/studentRegistration',studentRegistration);
router.post('/queryNow',sendQuery);
router.post('/login',loginController);
module.exports= router;