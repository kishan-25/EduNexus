import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    gender: {
        type:String,
    },
    dateOfBirth: {
        type: Date,
    },    
    about: {
        type:String,
        trim: true,
    },
    contactNumber:{
        type: String,
        trim: true,
    }
})

export default mongoose.model('Profile', profileSchema);