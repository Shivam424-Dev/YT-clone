import mongoose from "mongoose"
import dotenv from "dotenv"
import DB_connect from "./db/index.js"
import app from "./app.js"

dotenv.config({path:".env"})

DB_connect()

.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at ${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log("Mongodb connection failed!!",err)
})

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