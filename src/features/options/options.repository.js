import ApplicationError from "../../errorHandlers/application.error.js";
import QuestionModel from "../questions/question.schema.js";
import { OptionsModel } from "./options.schema.js";


export const createOption = async (options,question)=>{
    try {
        console.log('Creating option with questionId:', question); 
        const newOption = new OptionsModel({ options: options, question: question });
        const savedOption = await newOption.save();
        
        // Link the option to the question
        const questionDoc = await QuestionModel.findById(question);
        if (questionDoc) {
            questionDoc.options.push(savedOption._id);
            await questionDoc.save();
        }
        
        return savedOption;
    } catch (error) {
        console.error(error);
        throw new ApplicationError(`${error.message}`, 400);

    }
}

export const deleteOption = async (id)=>{
    try {
        
        const option = await OptionsModel.findByIdAndDelete(id);
        if (option.vote > 0) {
            throw new ApplicationError("Cannot delete option as it has votes", 400);
        }
        if (!option) {
            throw new ApplicationError("option not found", 404);
        }
    } catch (error) {
        console.log(error);
        throw new ApplicationError(`failed to delete option:${error.message}`,error.code||400)
    }
}

export const addVote = async (id)=>{
    try {
      // Find the option by id and increment the vote field by 1
      const updatedOption = await OptionsModel.findByIdAndUpdate(
        id,
        { $inc: { vote: 1 } },  // Increment vote by 1
        { new: true }  // Return the updated document
    );

    if (!updatedOption) {
        throw new ApplicationError("Option not found", 404);
    }

    return updatedOption;
    } catch (error) {
        console.log(error);
        throw new ApplicationError("failed to add vote",400);
    }
}