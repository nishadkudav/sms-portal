import express from "express";
import { createcontact, creategroup, createlibrary, createmessage, deletecontactbyid, deletegroupbyid, deletelibrarybyid, deletemessagebyid, fetchcontact, fetchgroup, fetchlibrary, fetchmessage } from "../controller/controller.js";

const grouproute = express.Router();
const libraryroute = express.Router();
const messageroute = express.Router();
const contactroute = express.Router();




grouproute
.post('/', creategroup)
.get('/',fetchgroup)
.delete('/:id', deletegroupbyid)

libraryroute
.post('/', createlibrary)
.get('/', fetchlibrary)
.delete('/:id', deletelibrarybyid)


messageroute
.post('/', createmessage)
.get('/', fetchmessage)
.delete('/:id', deletemessagebyid)


contactroute
.post('/', createcontact)
.get('/', fetchcontact)
.delete('/:id', deletecontactbyid)


export{
    grouproute,
    libraryroute,
    messageroute,
    contactroute

}