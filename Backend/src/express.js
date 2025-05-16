import dotenv from "dotenv"
import connectDB from "./db/db.js";
import { app } from './app.js'

dotenv.config({
    path: './.env'
})

connectDB()

.then( () => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`0  server is running at port :  ${process.env.PORT}`);
        
    })
    app.on("error", (error)=>{
        console.log("error:", error);
        throw error
        
    })
})
.catch((err) => {
    console.log("mongo db connection failed");
    
})