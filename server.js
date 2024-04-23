import { app } from "./app.js";
import dbConnection from "./src/config/mongoose.db.js";

app.listen(process.env.PORT,()=>{
    console.log(`server is listening at http:localhost:${process.env.PORT}`);
    dbConnection();
})
