import mongoose from "mongoose"
import dotenv from "dotenv"
import DB_connect from "./db/index.js"

dotenv.config({path:".env"})

DB_connect()

// import mongoose from "mongoose";
// import { DB_NAME} from "./constants";


// (async ()=>{

//     try {
//         await mongoose.connect(`process.env.MONGODB_URI}/${DB_NAME}`
//         )

        
//     } catch (error) {
//         console.error("Error:", error);
//         throw(error)
        
//     }

// })()