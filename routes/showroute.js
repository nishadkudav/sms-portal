import express from "express";
import { getcontactbygroupname, getlibrarybyname } from "../controller/controller.js";


const libroute = express.Router();
const grpcontactroute = express.Router();


libroute
.get('/:library' , getlibrarybyname)

grpcontactroute
.get('/:group' , getcontactbygroupname)

export{
    libroute,
    grpcontactroute
}