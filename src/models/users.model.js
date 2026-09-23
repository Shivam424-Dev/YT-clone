import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwetoken"

const userSchema= new Schema(
    {
        username:{
            type: String,
            required: true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true
        },
        email:{
            type: String,
            required: true,
            unique:true,
            lowercase:true,
            trim:true
        },
        fullName:{
            type: String,
            required: true,
            index:true
        },
        Avatar:{
            type: String,//cloudnary service
            required: true, 
        },
        coverImage:{
            type: String,//cloudnary service
        },
        watchHistory:[
            {
                type:Schema.Types.ObjectId,
                ref:"video"
            }
        ],
        Password:{
            type:String, //to be handle
            required:true
        },
        refreshToken:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    }
)

userSchema.pre("save", async function(){

    if(!this.isModified("password"))return next();

    this.Password = bcrypt.hash(this.Password,10)
})

userSchema.methods.generateAccessToken= function (){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            fullName: this.fullName

        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : process.env.ACCESS_TOKEN_EXPIERY
        }
    )
}

userSchema.methods.generaterefreshtoken= function(){
     return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn : process.env.REFRESH_TOKEN_EXPIERY
        }
    )
}

export const User = mongoose.model("User",userSchema)