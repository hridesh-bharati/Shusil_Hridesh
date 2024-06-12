const mongoose = require('mongoose');
const noticeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    nMessage: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});
const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: function (value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value);
            },
            message: 'Invalid email format',
        },
        unique: true
    },
    profilePic: {
        type: String,
        required: true,
        default: 'Not Available'
    },
    dob: {
        type: Date,
        required: true
    },
    mobileNumber: {
        type: Number,
        required: true,
        trim: true,
        // Validate Indian mobile number format using a regular expression
        validate: {
            validator: function (value) {
                const mobileNumberRegex = /^[6-9]\d{9}$/;
                return mobileNumberRegex.test(value);
            },
            message: 'Invalid Indian mobile number format',
        },
    },
    address:{
        type:String,
        required:true
    },
    profession:{
        type:String, 
        required:true
    },
    about:{
        type:String,
        required:true
    },
    aadhaarNumber:{
        type:Number,
        unique:true,
        required:true
    },
    password: {
        type: String,
        required: true
    },
    root: {
        type: Boolean,
        default: false,
        required: true
    }
},
    { timestamps: true });
const computerCourseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    subjects: [{
        name:{type: String,
            required: true}
    }],
    prerequisites: {
        type: String,
        required: false,
        default:'no'
    },
}, { timestamps: true });
const examFormSchema = new  mongoose.Schema({
    courseName:{
        type:String,
        required:true,
    },
    examDate:{
        type:Date,
        required:true,
    }
},{timestamps:true});
const gallerySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true,
        unique:true
    }
})
const notice = mongoose.model('notice', noticeSchema);
const admin = mongoose.model('admin', adminSchema);
const course = mongoose.model('course',computerCourseSchema);
const examForm = mongoose.model('examForm',examFormSchema);
const gallery= mongoose.model('gallery',gallerySchema);
module.exports = {
    notice,
    admin,
    course,
    examForm,
    gallery
}