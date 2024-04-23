import QuestionModel from "./question.schema.js";
import ApplicationError from "../../errorHandlers/application.error.js";
import { OptionsModel } from "../options/options.schema.js";

export default class QuestionRepository{
    async addQuestion(title){
        try {
            const newQn = new QuestionModel({title:title});
            console.log('saving the title to db:',title);
            return await newQn.save();
        } catch (error) {
                console.error(error);
                throw new ApplicationError("Unable to create Qn", 500);
        }
    }
    async getOne(id){
        try {
            const question = await QuestionModel.findById(id).populate('options');
            // console.log('Populated Question:', question);  // Debugging log
        return question;
        } catch (error) {
            console.log(error);
            throw new ApplicationError(`failed to find question: ${error.message}`, error.code || 404);
        }
    }
    
    async deleteQuestion(id){
        try {
            const hasVotes = await OptionsModel.exists({ question: id, vote: { $gt: 0 } });

            if (hasVotes) {
                throw new ApplicationError("Cannot delete question as it has options with votes", 400);
            }
            const question = await QuestionModel.findByIdAndDelete(id);
            if(!question){
                throw new ApplicationError('no question given for the passed id',404)
            }
              // Delete associated options
        await OptionsModel.deleteMany({ question: id });
            return question;
        } catch (error) {
            console.log(error);
            throw new ApplicationError(`failed to delete the question:${error.message}`,error.code||400)
        }
    }
    


}