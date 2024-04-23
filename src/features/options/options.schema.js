import mongoose from "mongoose";
const OptionSchema = new mongoose.Schema({
  options: {
    type: [String],
    required: [true, "Options are required for a question to vote"],
  },
  question: { type: mongoose.Schema.Types.ObjectId, required: true ,ref:'Question'},
  vote: { type: Number, default: 0 },
  add_vote:{type:String},
});


  
export const OptionsModel = mongoose.model("Option",OptionSchema);

