import express from "express";
import OptionController from "./options.controller.js";

const optionRoutes = express.Router();
const optionController = new OptionController();


// Option Routes
optionRoutes.delete("/:id/delete",(req,res)=>{
    optionController.deleteOptions(req,res);
});

optionRoutes.get("/:id/add_vote",(req,res)=>{
    optionController.addVotes(req,res)
})
export default optionRoutes;