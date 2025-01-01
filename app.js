import express from "express";
import 'dotenv/config'
import bodyParser from "body-parser";
import cors from "cors";
import { DBConnect } from "./db.js";
import { contactroute, grouproute, libraryroute, messageroute } from "./routes/addroutes.js";
import { grpcontactroute, libroute } from "./routes/showroute.js";
import { emailroute } from "./routes/sendmail.js";
import { updatecontactroute, updategrouproute, updatelibraryroute, updatemessageroute } from "./routes/updateroute.js";
import { updatecontact } from "./controller/controller.js";


const app = express()


//database

DBConnect().then(() => console.log('Connected!'));

//cors
const corsOptions = {
  origin: 'http://localhost:3000', 
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", 
  credentials: true, 
};
app.use(cors(corsOptions))


// Middleware to parse JSON data
app.use(express.json());

// Middleware to parse URL-encoded data (form submissions)
app.use(express.urlencoded({ extended: true }));


app.get('/', function (req, res) {
  res.send('Hello World')
})



app.use('/group', grouproute);
app.use('/library', libraryroute);
app.use('/message', messageroute);
app.use('/contact', contactroute);
app.use('/lib', libroute);
app.use('/grp', grpcontactroute);
app.use('/email', emailroute);
app.use('/updategrp', updategrouproute);
app.use('/updatelib', updatelibraryroute);
app.use('/updatemsg', updatemessageroute);
app.use('/updatecont', updatecontactroute);




const PORT = process.env.PORT || 3000

app.listen(PORT , ()=>{
    console.log(`server start on port ${PORT}`);
    
})