import mongoose from "mongoose";


const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        
    },
    lastName: {
        type: String,
        required: true,
        
    },
    age: {
        type: Number,
        required: true,
        min: 0
    },
    email: {
        type: String,
        required: true,
        unique: true,
        
    },
    
});


const Student = mongoose.model('Student', studentSchema);

export {Student};
