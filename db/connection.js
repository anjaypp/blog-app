const mongoose = require("mongoose");

//Write missing code here for database connection
mongoose.connect("mongodb+srv://anjaypp20:anjaymongo24@cluster0.zcri6.mongodb.net/blogbase?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log("Connection Successful");
}).catch((err) =>{
    console.log("Connection Failed");
    console.log(err);
})