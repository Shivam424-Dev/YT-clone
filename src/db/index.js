import mongoose from "mongoose";
import { DB_NAME} from "../constants";

const DB_connect = async () => {
        try {
        const connectionInstance=await mongoose.connect(`process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected!! ${connectionInstance.connection.host} `);
        
        }
        catch(error){
            console.error("Error:", error);
            process.exit(1)
        }
}

export default DB_connect;