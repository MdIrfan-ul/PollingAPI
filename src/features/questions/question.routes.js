import express from "express";
import QuestionController from "./question.controller.js";

const questionRoutes = express.Router();
const questionController = new QuestionController();


// Question Routes
questionRoutes.post("/create", (req, res) => {
  questionController.createQuestion(req, res);
});
questionRoutes.post("/:id/options/create",(req,res)=>{
    questionController.addOption(req,res);
});
questionRoutes.get("/:id",(req,res)=>{
  questionController.getQuestion(req,res);
});
questionRoutes.delete("/:id/delete",(req,res)=>{
  questionController.deleteQuestion(req,res);
})

export default questionRoutes;