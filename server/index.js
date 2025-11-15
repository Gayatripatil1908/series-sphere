
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
dotenv.config();

import { getSeries,postSeries,getSeriesById,getSeriesSearch,putSeriesById,putTitleById,deleteSeriesById } from "./controllers/series.js";


const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async () => {
    try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);

    if(conn) {
        console.log("Mongodb connected");
    }
} catch(e) {
    console.error(`\n❌ mongodb connection error:${e.message}`);
}
};


  

app.get("/",(req,res)=> {
    res.json({status:"OK",message:"server is healthy"});
});



app.post("/series",postSeries);

 app.get("/series",getSeries);
 app.get("/series/search",getSeriesSearch);
 app.get("/series/:id",getSeriesById);
 app.put("/series/:id",putSeriesById);
 app.patch("/series/:id/title",putTitleById);
 app.delete("/series/:id",deleteSeriesById);






const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=> {
    console.log(`server is running on port ${PORT}`);
    connectDB();

});
