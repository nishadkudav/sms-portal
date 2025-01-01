import express from "express";
import { updatecontact, updategroup, updatelibrary, updatemessage } from "../controller/controller.js";


const updategrouproute = express.Router();
const updatelibraryroute = express.Router();
const updatemessageroute = express.Router();
const updatecontactroute = express.Router();


updategrouproute
.put('/:id' , updategroup)

updatelibraryroute
.put('/:id' , updatelibrary)

updatemessageroute
.put('/:id' , updatemessage)


updatecontactroute
.put('/:id' , updatecontact)


export{
    updategrouproute,
    updatelibraryroute,
    updatemessageroute,
    updatecontactroute
}