const studentMdl = require('../models/studentModel');


/**
 * @desc Get All Student data
 * @name Get /student/
 * @access Public
 * @param {*} req 
 * @param {*} res 
 */
const getAllStudents = async (req, res) => {

    let all_student = await studentMdl.find();
    res.render('index', { all_student });
};


/**
 * @desc Add Student data
 * @name Get /add-student/
 * @access Public
 * @param {*} req 
 * @param {*} res 
 */
 const addStudent = (req, res) => {
    res.render('create');
};

/**
 * @desc Get Single Student data
 * @name Get /show/
 * @access Public
 * @param {*} req 
 * @param {*} res 
 */
 const getSingleStudent = async (req, res) => {
    
    let id = req.params.id;
    let single_data = await studentMdl.findById(id);
    res.render('show', {single_data});
};

/**
 * @desc Create Student
 * @name Post /add-student/
 * @access Public
 * @param {*} req 
 * @param {*} res 
 */
 const createStudent = (req, res) => {
    // Store Data to MongoDB
    studentMdl.create({
        ...req.body,
        photo : req.file.filename
    });

    // Redirect to Home page
    res.redirect('/student');
};

/**
 * @desc Delete Student Data
 * @name Get /delete/id
 * @access Public
 * @param {*} req 
 * @param {*} res 
 */
 const deleteStudentData = async (req, res) => {
    let id = req.params.id;
    await studentMdl.findByIdAndDelete(id)

    // Redirect to Home page
    res.redirect('/student');
};

/**
 * @desc Show Studnet Form
 * @name Get /edit/id
 * @access Public
 * @param {*} req 
 * @param {*} res 
 */
const showStudentForm = async (req, res) => {
    let id = req.params.id;

    let single_student = await studentMdl.findById(id);
    res.render('edit', {single_student});
};


/**
 * @desc Update Studnet Form
 * @name post /edit/id
 * @access Public
 * @param {*} req 
 * @param {*} res 
 */
 const updateStudentForm = async (req, res) => {
    let id = req.params.id;

    await studentMdl.findByIdAndUpdate(id, {
        ...req.body,
        photo : req.file.filename,
        new : true

    });

    // Redirect to Home Page
    res.redirect('/student');
};


// Export controllers
module.exports = {
    getAllStudents,
    addStudent,
    getSingleStudent,
    createStudent,
    deleteStudentData,
    showStudentForm,
    updateStudentForm
}
