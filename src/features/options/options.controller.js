import { addVote, deleteOption } from "./options.repository.js";

export default class OptionController{
    async deleteOptions(req,res){
        try {
            const id = req.params.id;
            await deleteOption(id);
            res.status(200).json({success:true,msg:"option deleted successfully"});
        } catch (error) {
            console.log(error);
            res.status(error.code).send(error.message);
        }
    }
    async addVotes(req,res){
        try {
            const id = req.params.id;
           const voted_to= await addVote(id);
           return res.status(201).json({sucess:true,msg:'vote added successfully',voted_to});

        } catch (error) {
            console.log(error);
            res.status(error.code).send(error.message);
        }
    }
    
}