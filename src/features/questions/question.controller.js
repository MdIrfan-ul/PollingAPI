import QuestionRepository from "./question.repository.js";
import { createOption } from "../options/options.repository.js";

export default class QuestionController{
    constructor(){
        this.questionRepository = new QuestionRepository();
    }
    async createQuestion(req,res){
        try {
            const title= req.body.title;
            console.log('title:',title);
            const newQn = await this.questionRepository.addQuestion(title);
            res.status(201).send(newQn);
        } catch (error) {
            console.log(error);
            res.status(error.code).send(error.message);
        }
    }
    async addOption(req, res){
        try {
            const id = req.params.id;
            const { options } = req.body;

            const newOption = await createOption(options,id);
            console.log('Created option:', newOption); // Debugging log
    
            res.status(201).send(newOption);
        } catch (error) {
            console.log(error);
            res.status(error.code || 500).send(error.message);
        }
    }
    

    async getQuestion(req,res){
        try {
            const id = req.params.id;
            const question  = await this.questionRepository.getOne(id);
            const transformedQuestion = transformQuestion(question);
            res.status(200).send(transformedQuestion);
        } catch (error) {
            console.log(error);
            res.status(error.code).send(error.message);
        }
    }
    async deleteQuestion(req,res){
        try {
            const id = req.params.id;
            await this.questionRepository.deleteQuestion(id);
            res.status(200).json({success:true,msg:"successfully deleted the question"})
        } catch (error) {
            console.log(error);
            res.status(error.code).send(error.message);
        }
    }
}

function transformQuestion(question) {
    return {
        id: question._id,
        text: question.title,
        options: question.options.map(option => ({
            id: option._id,
            text: option.options[0], // Assuming the option contains an array of strings
            votes: option.vote,
            link_to_vote: `http://localhost:${process.env.PORT}/options/${option._id}/add_vote`,
        })),
    };
}