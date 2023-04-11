import mongoose from "mongoose";
import  bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email :{
        type: String, 
        require: true,
        unique: true,
    },
    password :{
        type: String, 
        require: true,
    },
    isAdmin :{
        type: Boolean, 
        require: true,
        default: false,
    },
}, 
{
    timestamps: true
}
)

// login 
userSchema.methods.matchPassword = function(enterPassword) {
    return bcrypt.compare(enterPassword,this.password)
}; 

// matchPassword()
//     .then(function(password){
//         console.log(123);
//     }
//     .then(function(password){
//         console.log(password)
//     }
// 
// ;

const User = mongoose.model("User", userSchema)

export default User