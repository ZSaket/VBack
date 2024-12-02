// require('dotnev').config({path: './env'})
import dotenv from "dotenv";
import conntectDB from "./db/index.js";
import {app} from "./app.js"

dotenv.config({
    path: './env'
})

conntectDB()
.then(()=>{
    app.on("error", (error) =>{
        console.log("Error", error)
    })

    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed, err");
})