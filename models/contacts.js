import mongoose from "mongoose";

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    group: {
        type: String,
        required: [true , "Please enter group"],
    },
    name: {
        type: String,
        required: [true , "Please enter name"],
    },
    mobile: {
        type: String,
        required: [true , "Please enter mobile"],
    },
    email: {
        type: String,
        required: [true , "Please enter email"],
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

const contactModel = mongoose.model('contacts', contactSchema);

export default contactModel;