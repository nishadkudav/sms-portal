import mongoose from "mongoose";

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    library: {
        type: String,
        required: [true , "Please enter libraryname"],
    },
    message: {
        type: String,
        required: [true , "Please enter message"],
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

const messageModel = mongoose.model('messages', messageSchema);

export default messageModel;