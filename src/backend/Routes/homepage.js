const express=require("express");
const homeRouter=express.Router();

//Using the middleware to access the html,css files
homeRouter.use(express.static())
homeRouter.get('/',(req,res)=>
{
  res.send("Hii welcome to the home page");
}
)