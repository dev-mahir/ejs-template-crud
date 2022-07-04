const express = require('express');
const { getAllStudents, addStudent, getSingleStudent, createStudent, showStudentForm, deleteStudentData, updateStudentForm } = require('../controllers/studentController');
const router = express.Router();
const multer = require('multer');
const path = require('path');


// Multer Config
const storage = multer.diskStorage({
    destination : (req, file, cb) =>{
        cb(null, path.join(__dirname, '../assets/upload/'));
    },
    filename : (req, file, cb) =>{
        cb(null, Date.now()+'_'+ file.originalname );
    }
});

// Load Multer
const student_Multer = multer({
    storage : storage
}).single('photo');



// Student Route
router.get('/add-student', addStudent);
router.get('/', getAllStudents);
router.post('/', student_Multer, createStudent);
router.get('/:id', getSingleStudent);
router.get('/delete/:id', deleteStudentData);
router.get('/edit/:id', showStudentForm);
router.post('/edit/:id', student_Multer, updateStudentForm);




// Export Router
module.exports = router;