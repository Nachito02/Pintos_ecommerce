import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },

    last_name: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required:true,
        trim:true
        
    },

    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    profile_img: {
        type:String,
    }
})

// Exporta el modelo "User"
export default mongoose.models.User || mongoose.model("User", userSchema);
