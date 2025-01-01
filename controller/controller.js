import contactModel from "../models/contacts.js";
import groupModel from "../models/group.js";
import libraryModel from "../models/library.js";
import messageModel from "../models/message.js";
import nodemailer from 'nodemailer';

export async function creategroup(req,res){
    console.log(req.body);
    
    const data = {...req.body}

    try {
        const group = new groupModel(data);
        await group.save();
  
          res.status(201).json({
            message: 'group created successfully',
            success: true,
          });
       
  
      } catch (error) {
  
      res.status(500).json({
        message: 'Internal server error',
        success: false,
        error: error,
      })

    }

    
}

export async function createlibrary(req,res){
    console.log(req.body);
    
    const data = {...req.body}

    try {
        const library = new libraryModel(data);
        await library.save();
  
          res.status(201).json({
            message: 'library created successfully',
            success: true,
          });
       
  
      } catch (error) {
  
      res.status(500).json({
        message: 'Internal server error',
        success: false,
        error: error,
      })

    }

    
}

export async function createmessage(req,res){
    console.log(req.body);
    
    const data = {...req.body}

    try {
        const message = new messageModel(data);
        await message.save();
  
          res.status(201).json({
            message: 'message created successfully',
            success: true,
          });
       
  
      } catch (error) {
  
      res.status(500).json({
        message: 'Internal server error',
        success: false,
        error: error,
      })

    }

    
}

export async function createcontact(req,res){
    console.log(req.body);
    
    const data = {...req.body}

    try {
        const contact = new contactModel(data);
        await contact.save();
  
          res.status(201).json({
            message: 'contact created successfully',
            success: true,
          });
       
  
      } catch (error) {
  
      res.status(500).json({
        message: 'Internal server error',
        success: false,
        error: error,
      })

    }

    
}




//fetch functions

export async function fetchgroup(req,res){
   

    try {
        const group = await groupModel.find();
  
          res.status(200).json({
            message: 'group fetch successfully',
            success: true,
            group: group
          });
       
  
      } catch (error) {
  
      res.status(500).json({
        message: 'Internal server error',
        success: false,
        error: error,
      })

    }

    
}


export async function fetchlibrary(req,res){
   

    try {
        const library = await libraryModel.find();
  
          res.status(200).json({
            message: 'library fetch successfully',
            success: true,
            library: library
          });
       
  
      } catch (error) {
  
      res.status(500).json({
        message: 'Internal server error',
        success: false,
        error: error,
      })

    }

    
}

export async function fetchmessage(req,res){
   

    try {
        const msg = await messageModel.find();
  
          res.status(200).json({
            message: 'message fetch successfully',
            success: true,
            msg: msg
          });
       
  
      } catch (error) {
  
      res.status(500).json({
        message: 'Internal server error',
        success: false,
        error: error,
      })

    }

    
}


export async function fetchcontact(req,res){
   

    try {
        const contact = await contactModel.find();
  
          res.status(200).json({
            message: 'contact fetch successfully',
            success: true,
            contact: contact
          });
       
  
      } catch (error) {
  
      res.status(500).json({
        message: 'Internal server error',
        success: false,
        error: error,
      })

    }

    
}





//delete by id

export async function deletegroupbyid(req, res){
    try {
      const { id } = req.params;
  
      const group = await groupModel.findByIdAndDelete({ _id: id });
  
      if (!group) {
        return res.status(404).json({
          message: 'group not found',
          success: false,
        });
      }
  
      res.status(200).json({
        message: 'group deleted successfully',
        success: true,
      });

    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Internal server error',
        success: false,
        error: error.message,
      });
    }
  }

  export async function deletelibrarybyid(req, res){
    try {
      const { id } = req.params;
  
      const library = await libraryModel.findByIdAndDelete({ _id: id });
  
      if (!library) {
        return res.status(404).json({
          message: 'library not found',
          success: false,
        });
      }
  
      res.status(200).json({
        message: 'library deleted successfully',
        success: true,
      });

    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Internal server error',
        success: false,
        error: error.message,
      });
    }
  }

  export async function deletemessagebyid(req, res){
    try {
      const { id } = req.params;
  
      const message = await messageModel.findByIdAndDelete({ _id: id });
  
      if (!message) {
        return res.status(404).json({
          message: 'group not found',
          success: false,
        });
      }
  
      res.status(200).json({
        message: 'group deleted successfully',
        success: true,
      });

    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Internal server error',
        success: false,
        error: error.message,
      });
    }
  }


  export async function deletecontactbyid(req, res){
    try {
      const { id } = req.params;
  
      const contact = await contactModel.findByIdAndDelete({ _id: id });
  
      if (!contact) {
        return res.status(404).json({
          message: 'contact not found',
          success: false,
        });
      }
  
      res.status(200).json({
        message: 'contact deleted successfully',
        success: true,
      });

    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Internal server error',
        success: false,
        error: error.message,
      });
    }
  }

  //fetchdataby name

  export async function getlibrarybyname(req, res) {
    try {

      const { library } = req.params;

      console.log(library);
      
  
      // Search for the library in the database
      const lib = await messageModel.find({library : library});
  
      console.log(lib);
      
      // Check if no library is found (empty array)
      if (lib.length === 0) {
        return res.status(404).json({
          message: 'Library not found',
          success: false,
        });
      }
  
      // Return the library if found
      res.status(200).json({
        message: 'Library fetched successfully',
        success: true,
        lib: lib,
      });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Internal server error',
        success: false,
        error: error.message,
      });
    }
  }
  
  export async function getcontactbygroupname(req, res) {
    try {

      const { group } = req.params;

      console.log(group);
      
  
      // Search for the library in the database
      const grpc = await contactModel.find({group : group});
  
      console.log(grpc);
      
      // Check if no library is found (empty array)
      if (grpc.length === 0) {
        return res.status(404).json({
          message: 'Library not found',
          success: false,
        });
      }
  
      // Return the library if found
      res.status(200).json({
        message: 'Library fetched successfully',
        success: true,
        grpc: grpc,
      });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Internal server error',
        success: false,
        error: error.message,
      });
    }
  }


  //send mail

  export async function sendmail(req, res) {
    try {

     console.log(req.body);

     var{name,mobile,email,message} = req.body;
     
     var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'nishadkudav@gmail.com',
          pass: 'pssedfsysijvpesy'
      }
    });
    
    var mailOptions = {
      from: 'nishadkudav@gmail.com',
      to: email,
      subject: 'Sending Email using Node.js',
      text: message
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  
      // Return the library if found
      res.status(200).json({
        message: 'email send successfully',
        success: true,
      });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Internal server error',
        success: false,
        error: error.message,
      });
    }
  }


  //update model

 export async function updategroup(req, res) {
  const { id } = req.params;
  const { group } = req.body;

  console.log(group);

  console.log(id);
  

  try {
    // Create an object to hold the updated data
    let updateData = {
      group,
      updateAt: new Date()
    };

    // Find the group by ID and update it
    const updatedGroup = await groupModel.findByIdAndUpdate(
      id,
      updateData,
      { new: true } // This ensures the updated document is returned
    );

    console.log(updatedGroup);
    

    // If the group is not found, return a 404 response
    if (!updatedGroup) {
      return res.status(404).json({ message: 'Group not found' });
    }

    // Send the success response with the updated group data
    res.status(200).json({
      message: 'Group updated',
      success: true,
      data: updatedGroup
    });

  } catch (error) {
    // Handle any server errors
    res.status(500).json({
      message: 'Internal server error',
      success: false,
      error: error.message
    });
  }
}

export async function updatelibrary(req, res) {
  const { id } = req.params;
  const { library } = req.body;

  console.log(library);

  console.log(id);
  

  try {
    // Create an object to hold the updated data
    let updateData = {
      library,
      updateAt: new Date()
    };

    // Find the group by ID and update it
    const updatedlibrary = await libraryModel.findByIdAndUpdate(
      id,
      updateData,
      { new: true } // This ensures the updated document is returned
    );

    console.log(updatedlibrary);
    

    // If the group is not found, return a 404 response
    if (!updatedlibrary) {
      return res.status(404).json({ message: 'library not found' });
    }

    // Send the success response with the updated group data
    res.status(200).json({
      message: 'library updated',
      success: true,
      data: updatedlibrary
    });

  } catch (error) {
    // Handle any server errors
    res.status(500).json({
      message: 'Internal server error',
      success: false,
      error: error.message
    });
  }
}

export async function updatemessage(req, res) {
  const { id } = req.params;
  const { library , message } = req.body;

  console.log(library);

  console.log(id);
  

  try {
    // Create an object to hold the updated data
    let updateData = {
      library,
      message,
      updateAt: new Date()
    };

    // Find the group by ID and update it
    const updatedmessage = await messageModel.findByIdAndUpdate(
      id,
      updateData,
      { new: true } // This ensures the updated document is returned
    );

    console.log(updatedmessage);
    

    // If the group is not found, return a 404 response
    if (!updatedmessage) {
      return res.status(404).json({ message: 'message not found' });
    }

    // Send the success response with the updated group data
    res.status(200).json({
      message: 'message updated',
      success: true,
      data: updatedmessage
    });

  } catch (error) {
    // Handle any server errors
    res.status(500).json({
      message: 'Internal server error',
      success: false,
      error: error.message
    });
  }
}


export async function updatecontact(req, res) {
  const { id } = req.params;
  const { group , name , mobile , email  } = req.body;

  console.log(name);

  console.log(id);
  

  try {
    // Create an object to hold the updated data
    let updateData = {
      group,
      name,
      mobile,
      email,
      updateAt: new Date()
    };

    // Find the group by ID and update it
    const updatedcontact = await contactModel.findByIdAndUpdate(
      id,
      updateData,
      { new: true } // This ensures the updated document is returned
    );

    console.log(updatedcontact);
    

    // If the group is not found, return a 404 response
    if (!updatedcontact) {
      return res.status(404).json({ message: 'contact not found' });
    }

    // Send the success response with the updated group data
    res.status(200).json({
      message: 'contact updated',
      success: true,
      data: updatedcontact
    });

  } catch (error) {
    // Handle any server errors
    res.status(500).json({
      message: 'Internal server error',
      success: false,
      error: error.message
    });
  }
}