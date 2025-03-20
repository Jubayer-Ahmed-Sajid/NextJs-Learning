'use server'
import dbConnect from "@/lib/dbConnect";
import React from "react";
const RegisterUser = async (payload) => {
  //    check if the user exists
 
    // create a new user
    const newUser = {
      name: payload.name,
      email: payload.email,
      password: payload.password,
    };
    // add the new user to the users array
    const result = await dbConnect("user_data").insertOne(newUser);
  return result
  
};

export default RegisterUser;
