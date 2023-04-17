import mongoose from "mongoose";
import  bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email :{
        type: String, 
        required: true,
        unique: true,
    },
    password :{
        type: String, 
        required: true,
    },
    isAdmin :{
        type: Boolean, 
        required: true,
        default: false,
    },
}, 
{
    timestamps: true
}
)

// login 
userSchema.methods.matchPassword = async function(enterPassword) {
    return await bcrypt.compare(enterPassword,this.password)
}; 

//register
userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

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