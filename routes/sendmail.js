import express from "express";
import { sendmail } from "../controller/controller.js";

const emailroute = express.Router();


emailroute
.post('/', sendmail)


export{
    emailroute
}