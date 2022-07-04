const mongoose = require('mongoose');

// Student Schema Model
const studentSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true, "Name is Required"],
        trim : true
    },
    email : {
        type : String,
        required : [true, "Email is Required"],
        trim : true,
        unique : true
    },
    photo : {
        type : String,
        default : 'avatar.png'
    }
},{
    timestamps : true
});



// Export Our Model
module.exports = mongoose.model('Student', studentSchema);