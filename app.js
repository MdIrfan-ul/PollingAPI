import "./env.js"
import express from "express";
import questionRoutes from "./src/features/questions/question.routes.js";
import optionRoutes from "./src/features/options/options.routes.js";
const app = express();

app.use(express.json());
app.get("/",(req,res)=>{
    res.json({msg:"polling api server is running"});
});
app.use("/questions",questionRoutes);
app.use("/options",optionRoutes);

app.use((req,res)=>{
    res.status(404).json("API not found.Please verify the documentation of postman")
});
app.use((err, req, res, next) => {
    console.log(err);
    if (err instanceof ApplicationError) {
      res.status(err.code).send(err.message);
    }
    // Server Error
    res.status(500).send("Something Went Wrong Please Try Again Later");
  });

export {app};