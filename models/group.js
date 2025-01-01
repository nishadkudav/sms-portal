import mongoose from "mongoose";

const Schema = mongoose.Schema;

const groupSchema = new Schema({
    group: {
        type: String,
        required: [true , "Please enter name"],
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    },
  });

const groupModel = mongoose.model('groups', groupSchema);

export default groupModel;