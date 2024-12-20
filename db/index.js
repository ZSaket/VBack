import mongoose from 'mongoose';
import {DB_NAME} from '../constants.js'

const conntectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected DB HOST: ${connectionInstance.connection.host}`)
    }catch(error){
        console.error("Error:",error);
        process.exit(1);
    }
}

export default conntectDB;