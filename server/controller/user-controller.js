

import User from '../schema/user-schema.js';     
//User is a schema object where we have done the validation


export const addUser = async (request,response) =>{
   const user = request.body;
   // console.log(user)
   const newUser = new User(user);   //for validation of user object which is coming from userform input

   try{
        await newUser.save();       //this is a save funcion of mongodb
        response.status(201).json(newUser);
   } catch(error){
    response.status(409).json({message:error.message});

   }
}

export const getUsers =async (request,response) =>{
   try{
       const users = await User.find({});
       response.status(200).json(users);
   } catch(error){
      response.status(409).json({message:error.message});
   }
}


export const getUser =async (request,response) =>{
 
  // console.log(request.params.id)
   try{
       const user = await User.find({_id: request.params.id});
       //console.log(user)
  response.status(200).json(user);
   } catch(error){
      response.status(409).json({message:error.message});
   }
}

export const editUser =async (request,response) =>{
  let user = request.body;
   const editUser = new User(user); 
   try{
       await User.updateOne({_id: request.params.id},editUser);  //User is old details od user and edituser is a new details of user it means User will get replced by edituser
       response.status(201).json(editUser);
   } catch(error){
      response.status(409).json({message:error.message});
   }
}

export const deleteUser = async(request,response) =>{
try{
   await User.deleteOne({_id: request.params.id});
   response.status(200).json({message:'User deleted Successfully'});
} catch(error){
   response.status(409).json({message:error.message});
}
}