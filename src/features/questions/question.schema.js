import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title is required to upload a question"],
  },
  options: [{ type: mongoose.Schema.Types.ObjectId, ref: "Option" }],
});

const QuestionModel = mongoose.model("Question", QuestionSchema);

export default QuestionModel;
