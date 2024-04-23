import mongoose from "mongoose";


const dbConnection = async ()=>{
    try {
        console.log("connecting to db-->");
    const resp =await mongoose.connect(process.env.MONGODB_URI);
    console.log(`connected to: ${resp.connection.host}`);
    } catch (error) {
        console.log("Something went wrong while connecting to DataBase:",error);
    console.log(error);
    }
    
}

export default dbConnection;