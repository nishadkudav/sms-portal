import mongoose from "mongoose";

const Schema = mongoose.Schema;

const librarySchema = new Schema({
    library: {
        type: String,
        required: [true , "Please enter libraryname"],
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

const libraryModel = mongoose.model('libraries', librarySchema);

export default libraryModel;