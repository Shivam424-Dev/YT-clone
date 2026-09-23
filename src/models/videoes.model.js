import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema= new Schema(
    {
        videoFile:{
            type:String, //taken from source
            require:true,

        },
        Thumbnail:{
            type:String, //taken from source
            require:true,
        },
        Owner:{
            type:Schema.Types.ObjectId, //taken from cloudinary
            ref:"User",
            require:true,

        },
        Title:{
            type:String,
            require:true,
        },
        Description:{
            type:String,
            require:true,
        },
        Duration:{
            type:Number, //clodinary
            require:true,
        },
        Views:{
            type:Number,
            default:0
        },
        isPublished:{
            type:boolean,
            default:true
        }
    },
    {
        timestamps:true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)

export  const Video = mongoose.model("Video", videoSchema)